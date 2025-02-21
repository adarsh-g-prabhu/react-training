
import { Link } from 'react-router-dom'
import '../assets/stylesheets/styles.css'
function Navbar() {
  return (
    <div> 
        <nav className='nav-bar'>
    <Link to="/">HOME</Link>
    <Link to="/login">LOGIN</Link>
    <Link to="/register">REGISTER</Link>
  </nav>
  </div>
  )
}

export default Navbar