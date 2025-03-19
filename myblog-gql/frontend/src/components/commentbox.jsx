import { useState, useEffect } from "react";
import api from "../api";
// eslint-disable-next-line react/prop-types
export default function CommentBox({ postId }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        console.log('commentid', postId);
        const response = await api.get(`/comment/${postId}`);
        console.log('Fetched comments:', response.data);
        
        // Adjust based on response structure:
        const fetchedData = response.data;
        if (Array.isArray(fetchedData)) {
          setComments(fetchedData);
        } else if (fetchedData && Array.isArray(fetchedData.comments)) {
          setComments(fetchedData.comments);
        } else if (fetchedData) {
          setComments([fetchedData]);
        } else {
          setComments([]);
        }
      } catch (error) {
        console.error("Error fetching comments", error);
      }
    };
    fetchComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = localStorage.getItem('id');
    try {
      const commenting = await api.post(`/comment/${postId}`, {
        comment: comment,
        userId: username
      });
      if (commenting) {
        console.log('commented');
        window.location.reload();
      } else {
        console.log('error');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
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
          <input type="submit" value='comment' />
        </form>
      </div>
      <div className="comment-section">
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment._id}>
              <h5 className="comment-header">
                <span>{comment.userDetails?.name}</span>
                <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
              </h5>
              <p>{comment.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
