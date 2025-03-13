import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import PostFeed from "./postsFeed";
import SearchPosts from "./searchPosts";

export default function Homepage() {
  const { user } = useAuth();

  return (
    <>
      {user && user.userRole === "user" ? (
        <>
          <div>
            <Link to="/add-posts">Add Posts</Link>
            <Link to="/myposts/">My Posts</Link>
          </div>
          <h1>Welcome {user.username}</h1>
          <SearchPosts />
          <PostFeed />
        </>
      ) : (
        <div className="landing-container">
          <header className="hero">
            <h1>Welcome to My Blog</h1>
            <p>
              Explore amazing stories, insights, and ideas from various authors.
            </p>
            <div className="hero-buttons">
              <Link to="/register" className="btn">
                Register Now
              </Link>
            </div>
          </header>
          <img src="/Blogging-1024x600.png" alt="Blogging" />
          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
          </footer>
        </div>
      )}
    </>
  );
}
