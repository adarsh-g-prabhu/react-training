import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_COMMENTS, ADD_COMMENT } from "../graphql/queries"; 
import { useAuth } from "../context/authContext";

// eslint-disable-next-line react/prop-types
export default function CommentBox({ postId }) {
  const [comment, setComment] = useState("");
 const { user } = useAuth();
//  console.log('user',user)
  const { loading, error, data, refetch } = useQuery(GET_COMMENTS, {
    variables: { postId },
  });
  console.log('post id', postId)
  console.log('comments',data);
  console.log()

  const [addComment] = useMutation(ADD_COMMENT, {
    onCompleted: () => {
      refetch();
      setComment("");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (!comment.trim()) return;
    try {
      // console.log('user data',postId, "u",user._id,comment);
      await addComment({ 
        variables: { 
          input: { 
            postId, 
            userId: user._id, 
            comment 
          } 
        } 
      });
      
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="comment">
      <div className="comment-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="comment"
            placeholder="Comment on the post"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <input type="submit" value="comment" />
        </form>
      </div>
      <div className="comment-section">
        {loading ? (
          <p>Loading comments...</p>
        ) : error ? (
          <p>Error fetching comments</p>
        ) : data.comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          data.comments.map((comment) => (
            <div key={comment._id}>
              <h5 className="comment-header">
                <span>{comment.userId?.name}</span>
                <span>{new Date(comment.createdAt).toLocaleString()}</span>
              </h5>
              <p>{comment.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
