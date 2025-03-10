import { useState , useEffect } from "react";
import api from "../api";
export default function CommentBox({ postId }) {
const [comment,setComment]=useState('');
const [comments,setComments]=useState([])

useEffect(() => {
  const fetchComments = async () => {
    try {
      console.log('commentid',postId)
      const response = await api.get(`/comment/${postId}`);
      setComments(response.data);
      console.log('the comments',response.data);
    } catch (error) {
      console.error("Error fetching comments", error);
    }
  };
  fetchComments();
}, [postId]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username= localStorage.getItem('id')
    const commenting=api.post(`/comment/${postId}`,{comment:comment,userId:username});
    
    if(commenting)
    {

      console.log('commented');
      window.location.reload(); 
    }
    else
      console.log('error')
}

  return (
    <div className="comment"><div className="comment-box">
      <form onSubmit={handleSubmit}>
        <input type="text"
          name="comment" placeholder="Comment on the post" value={comment} onChange={(e) => setComment(e.target.value)} required />
          <input type="submit" value='comment'/>
      </form>
    </div>
    <div className="comment-section">
      {comments.length===0?
      (<p>No comments yet.</p>):
      comments.map((comment) => (
        <div key={comment._id}>
          <h6>{comment.userId}|| {comment.createdAt}</h6>
          <p >
            {comment.comment}</p>
            </div>
        ))}
        
      
      </div></div>
  );
}
