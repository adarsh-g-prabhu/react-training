import { useEffect, useState } from "react"
import {jwtDecode} from "jwt-decode";
import { Link } from "react-router-dom";
import PostFeed from './postsFeed'
export default function Homepage() {
  const [currentUser,setCurrentUser]= useState([]);

  useEffect(()=>{
    const token=localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        setCurrentUser(decodedToken);
       
      } catch (error) {
        console.error("Invalid Token", error);
      }
  }},[]);
  localStorage.setItem('email',currentUser.id);
  localStorage.setItem('username',currentUser.username);
  console.log('author', currentUser.username);
  return (

        <>
       
<Link to='/add-posts'>Add Posts</Link>
  <h1>welcome {currentUser.username} </h1>

  <PostFeed/>
</>

  )
}
