import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { FETCH_POSTS_QUERY } from '../graphql/queries';


const BlogFeed = () => {
  const postsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, data } = useQuery(FETCH_POSTS_QUERY, {
    variables: { offset: (currentPage - 1) * postsPerPage, limit: postsPerPage },
  });

  const totalPages = data ? Math.ceil(data.posts.length / postsPerPage) : 1;

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

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="post-feed">
      <h2>Latest Blog Posts</h2>
      {data.posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        data.posts.map((post) => (
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
