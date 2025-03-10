import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const logout = () => {
    try {
      alert(`${localStorage.getItem('username')} has logged out`);
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('username');
      localStorage.removeItem('userRole');
      navigate('/');
      window.location.reload();
    } catch (err) {
      console.log('Error:', err);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      {!token ? (
        <>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </>
      ) : (
        <button className="nav-link logout-btn" onClick={logout}>Logout</button>
      )}
    </nav>
  );
}

export default Navbar;
