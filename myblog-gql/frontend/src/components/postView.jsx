import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../graphql/queries';
import '../assets/stylesheets/styles.css';
import CommentBox from './commentbox';

export default function PostView() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id },
  });

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error fetching post: {error.message}</p>;

  const post = data.post;

  return (
    <>
      <div className="blogpost">
        {console.log('cuur post',post)}
        <h3>{post.title}</h3>
        <p>
          By {post.author} | {new Date(post.createdAt).toLocaleDateString()}
        </p>
        {post.tags && post.tags.length > 0 && (
          <p>
            Tags:{" "}
            {post.tags.map((tag, index) => (
              <span key={index}>
                {tag}{index < post.tags.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        )}
        <img
          className="post-view"
          src={`http://localhost:3001/${post.imageUrl}`}
          alt={`Image about ${post.title}`}
        />
        <p style={{ whiteSpace: "pre-line", textAlign: "justify" }}>
          {post.content}
        </p>
      </div>
      <div>
        <CommentBox postId={id} />
      </div>
    </>
  );
}
