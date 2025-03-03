
import { Link, useNavigate } from 'react-router-dom'
import '../assets/stylesheets/styles.css'

function Navbar() {

  const token=localStorage.getItem('token');
  const navigate= useNavigate()
  const logout=()=>{
    try{
    localStorage.removeItem('token');
    localStorage.removeItem('id');
   
    alert(`${localStorage.getItem('username')} has logged out`);
    localStorage.removeItem('username');
    
    localStorage.removeItem('userRole');
   
    navigate('/')
    window.location.reload(); 
    }
    catch(err)
    {
      console.log('error',err)
    }
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