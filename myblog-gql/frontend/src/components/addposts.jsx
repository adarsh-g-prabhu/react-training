import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { CREATE_POST } from "../graphql/mutations";
import { FETCH_POSTS_QUERY } from "../graphql/queries";
import { useAuth } from "../context/authContext";

const AddPosts = () => {
  const { user } = useAuth(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
    image: null,
    author: "",
  });

  // Only render the form when the user is available
  useEffect(() => {
    if (user && user._id) {
      setFormData((prev) => ({ ...prev, author: user._id }));
    }
  }, [user]);

  // If user is not loaded yet, show a loading message
  if (!user) {
    return <div>Loading user info...</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleTagsChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      tags: e.target.value,
    }));
  };

  const [createPost, { loading, error }] = useMutation(CREATE_POST);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert comma-separated tags to an array
    const tagsArray = formData.tags
      ? formData.tags.split(",").map((tag) => tag.trim()).filter((tag) => tag)
      : [];

    // Build the input object matching your backend's PostInput type
    const input = {
      title: formData.title,
      content: formData.content,
      author: formData.author, // must be a valid ID
      image: formData.image,   // file object; ensure Apollo Client uses createUploadLink
      tags: tagsArray,
    };

    console.log("Mutation input:", input);

    try {
      const result = await createPost({
        variables: { input },
        refetchQueries: [{ query: FETCH_POSTS_QUERY }],
        awaitRefetchQueries: true,
      });
      console.log("Post created successfully:", result.data);
      navigate("/myposts");
    } catch (err) {
      console.error("Error creating post:", err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Create a Post</h2>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-items">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma-separated)"
            value={formData.tags}
            onChange={handleTagsChange}
          />
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPosts;
