import { useEffect, useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/blogSlice';

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState({});
  // const [username, setUsername] = useState(localStorage.getItem("username"));
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    const storedAuthor = localStorage.getItem("user");
    setAuthor(JSON.parse(storedAuthor));
    // setUsername(localStorage.getItem("username"));
  }, []);


  useEffect(() => {
    const fetchMyPosts = async () => {
      if (!author) return;
      try {
        console.log("Fetching posts for author:", author);
        const response = await api.get(`/myposts/${author._id}`);
        console.log("Fetched posts:", response.data);
        setPosts(response.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchMyPosts();
  }, [author]);

  const handleDelete = async (postId) => {
    try {
      await dispatch(deletePost(postId)).unwrap();
      console.log('Post deleted');
      setPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
      navigate("/myposts/");
    } catch (err) {
      console.error('Error deleting post:', err);
    }
  };

  return (
    <div className="post-feed">
      <h2>My Posts - {author.name}</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div className="postContainer" key={post._id}>
            <img 
              src={`http://localhost:3001/${post.imageUrl}`} 
              alt={`image about ${post.title}`} 
            />
            <div className="postCard">
              <h3>{post.title}</h3>
              <p>
                By {post.author} | {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p>{post.content.substring(0, 150)}...</p>
              <div className="post-actions">
                <Link to={`/posts/${post._id}`} className="read-more">
                  Read More
                </Link>
                <button onClick={() => handleDelete(post._id)} className="delete-btn">
                  Delete
                </button>
                <Link to={`/updatePost/${post._id}`} className="update-btn">
                  Update
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyPosts;
