import { useEffect, useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState(null);
  const [username,setUsername]=useState(localStorage.getItem('username'))
  const navigate=useNavigate();
  useEffect(() => {
   
    const storedAuthor = localStorage.getItem("id");
    setAuthor(storedAuthor);
    setUsername(localStorage.getItem('username'))
    
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!author) return; 

      console.log("Fetching posts for author:", author);
      try {
        const response = await api.get(`/myposts/${author}`);
        console.log("Fetched posts:", response.data);
        setPosts(response.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, [author]);

  const deletePost = async (postId) => {
    try {
      await api.delete(`/posts/${postId}`);
      console.log("Post deleted");
      navigate('/myposts/')
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  return (
    <div>
      <h2>My Posts - {username}</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>
              By {post.author} | {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <p>{post.content.substring(0, 150)}...</p>
            <Link to={`/posts/${post._id}`}>Read More</Link>
            <button onClick={() => deletePost(post._id)}>Delete</button>
            <Link to={`/updatePost/${post._id}`}>Update</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default MyPosts;
