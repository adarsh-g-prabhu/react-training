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
        <div className="landing-container">
     
      <header className="hero">
        <h1>Welcome to My Blog</h1>
        <p>Explore amazing stories, insights, and ideas from various authors.</p>
        <div className="hero-buttons">
          <Link to="/register" className="btn">Register Now</Link>
  
        </div>
      </header>
      <img src="/Blogging-1024x600.png"/>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>

}
  
</>

  )
}
