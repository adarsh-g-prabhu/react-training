
import { Link, useNavigate } from 'react-router-dom'
import '../assets/stylesheets/styles.css'

function Navbar() {

  const token=localStorage.getItem('token');
  const Navigate= useNavigate()
  const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('email')
    Navigate('/')
  }


  return (
    <div> 
        <nav className='nav-bar'>
    <Link to="/">HOME</Link>
    {!token?
    <>
    <Link to="/login">LOGIN</Link>
    <Link to="/register">REGISTER</Link>
    </>:
    <button onClick={logout}>logout</button>
    }
  </nav>
  </div>
  )
}

export default Navbar