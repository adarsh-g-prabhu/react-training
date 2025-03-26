import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MY_POSTS } from "../graphql/queries";
import { DELETE_POST } from "../graphql/mutations";

const MyPosts = () => {
  const [author, setAuthor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAuthor = localStorage.getItem("user");
    if (storedAuthor) {
      setAuthor(JSON.parse(storedAuthor));

    }
  }, []);

  console.log("auth", author);
  const { loading, error, data, refetch } = useQuery(GET_MY_POSTS, {
    variables: { author: author ? author._id : "" },
    skip: !author, // Skip query until author exists
  });

  const [deletePostMutation] = useMutation(DELETE_POST);

  const handleDelete = async (postId) => {
    try {
      await deletePostMutation({ variables: { postId } });
      refetch();
      navigate("/myposts");
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  const posts = data?.myPosts || [];

  return (
    <div className="post-feed">
      <h2>My Posts - {author?.name}</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div className="postContainer" key={post._id}>
            <img 
              src={`http://localhost:3001/${post.imageUrl}`} 
              alt={`Image about ${post.title}`} 
            />
            <div className="postCard">
              <h3>{post.title}</h3>
              <p>
                By {post.author.username} |{" "}
                {new Date(post.createdAt).toLocaleDateString()}
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
