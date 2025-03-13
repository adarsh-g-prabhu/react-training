import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const BlogFeed = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data); 
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    fetchPosts();
  }, []);


  const totalPages = Math.ceil(posts.length / postsPerPage);

  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="post-feed">
      <h2>Latest Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        currentPosts.map((post) => (
          <div className="postContainer" key={post._id}>
            <img
              src={`http://localhost:3000/${post.imageUrl}`}
              alt={`image about ${post.title}`}
            />
            <div className="postCard">
              <h3>{post.title}</h3>
              <p>
                By {post.authorDetails.name} |{" "}
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p>{post.content.substring(0, 150)}...</p>
              <Link to={`/posts/${post._id}`}>Read More</Link>
            </div>
          </div>
        ))
      )}
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogFeed;
