import { useState , useEffect } from "react";
import api from "../api";
export default function CommentBox(postId) {
const [comment,setComment]=useState('');
const [comments,setComments]=useState([])

useEffect(() => {
  const fetchComments = async () => {
    try {
      const response = await api.get(`/comment/${postId}`);
      setComments(response.data);
      console.log(comments);
    } catch (error) {
      console.error("Error fetching comments", error);
    }
  };
  fetchComments();
}, [postId]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username= localStorage.getItem('id')
    const commenting=api.post(`/comment/${postId}`,{comment:comment,userId:username})
    if(commenting)
    {
      console.log('commented');
    }
    else
      console.log('error')
}

  return (
    <><div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name="comment" placeholder="Comment on the post" value={comment} onChange={(e) => setComment(e.target.value)} required />
          <input type="submit" value='comment'/>
      </form>
    </div>
    <div>
      {comments.length===0?(<p>No comments yet.</p>):comments.map((c) => (
          <p key={c._id}>
            {c.text}</p>
        ))}
        
      
      </div></>
  );
}
