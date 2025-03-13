import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

function Navbar() {
  const { token, user, logout } = useAuth(); 

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      {!token ? (
        <>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </>
      ) : (
        <>
          <button className="nav-link logout-btn" onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
