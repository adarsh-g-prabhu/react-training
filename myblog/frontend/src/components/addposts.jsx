import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: [],
    image: null,
    imageUrl: "",
    author: ''
  });

  const navigate = useNavigate();

  useEffect(()=>{

    const author = localStorage.getItem("username");
    console.log(author);
    setFormData((prevData) => ({
      ...prevData,
      author: author,
    }));
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file selection
  // const handleFileChange = (e) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     image: e.target.files[0],
  //   }));
  // };


  const handleTagsChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: e.target.value.split(",").map((tag) => tag.trim()),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const postData = new FormData();
    postData.append("author", formData.author);
    postData.append("title", formData.title);
    postData.append("content", formData.content);
    postData.append("tags", JSON.stringify(formData.tags));

    if (formData.image) {
      postData.append("image", formData.image);
    } else if (formData.imageUrl) {
      postData.append("imageUrl", formData.imageUrl);
    }

    try {
      console.log('poost',postData)
      await api.post("/createPost", postData);
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
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
          value={formData.tags.join(", ")}
          onChange={handleTagsChange}
        />
        {/* <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div> */}
        <input
          type="text"
          name="imageUrl"
          placeholder="Or enter image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
