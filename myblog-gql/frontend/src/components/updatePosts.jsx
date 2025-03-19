import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePosts = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: [],     
    image: null,
    imageUrl: "",
    author: "",
  });

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        const { title, content, tags, imageUrl, author } = response.data[0];
        console.log("fetched", response.data[0]);
       
       
      
        setFormData({
          title: title || "",
          content: content || "",
          tags: tags, 
          image: null,
          imageUrl: imageUrl || "",
          author: author || "",
        });

        setLoading(false);
      } catch (err) {
        console.error("Error fetching post:", err);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleTagsChange = (e) => {
    const tagsArray = e.target.value 
      ? e.target.value.split(",").map(tag => tag.trim())
      : [];
    setFormData(prevData => ({
      ...prevData,
      tags: tagsArray,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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

      console.log("Updated formData:", formData);
      const response = await api.put(`/posts/${id}`, postData);
      if (response.status === 200) {
        console.log("Post updated successfully");
        navigate("/myposts");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Update Post</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        
        <form onSubmit={handleSubmit}>
          <div className="form-items">
          <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
          <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required />
          <input type="text" name="tags" placeholder="Tags (comma-separated)" value={formData.tags.join(", ")} onChange={handleTagsChange} />
          <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          {/* <input type="text" name="imageUrl" placeholder="Or enter image URL" value={formData.imageUrl} onChange={handleChange} /> */}
          <button type="submit">Update Post</button>
          </div>
        </form>
      )}
    
    </div>
  );
};

export default UpdatePosts;
