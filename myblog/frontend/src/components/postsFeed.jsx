import  { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const BlogFeed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts"); 
        setPosts(response.data);
       
      } catch (err) {
       console.log('error',err);
      }
    };
    fetchPosts();
  }, []);


  return (
    <div>
      <h2 >Latest Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          
            <><h3>{post.title}</h3>
                <p>By {post.author} | {new Date(post.createdAt).toLocaleDateString()}</p>
                <p>{post.content.substring(0, 150)}...</p>
                <Link to={`/posts/${post._id}`}>
                    Read More
                </Link>
</>
                ))
                )}
            </div>
  );
};

export default BlogFeed;
