import { useEffect, useState } from "react"
import {jwtDecode} from "jwt-decode";
import { Link } from "react-router-dom";
import PostFeed from './postsFeed'
import SearchPosts from "./searchPosts";
export default function Homepage() {
  const [currentUser,setCurrentUser]= useState({});

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
  console.log('curruser',currentUser)
  localStorage.setItem('id',currentUser.userId);
  localStorage.setItem('username',currentUser.username);
  localStorage.setItem('userRole',currentUser.userRole);
  console.log('author id', currentUser.userId);
  return (

        <>
        {currentUser.userRole=='user'
        ?
        <><div>
          <Link to='/add-posts'>Add Posts</Link>
          <Link to='/myposts/'>My Posts</Link>
        </div><h1>welcome {currentUser.username} </h1>
        <SearchPosts/>
        <PostFeed/></>
        
        :
        <h1>welcome Guest </h1>
        

}
  
</>

  )
}
