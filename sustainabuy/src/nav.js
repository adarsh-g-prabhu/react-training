import {NavLink } from 'react-router';
import { BrowserRouter as Router,Route, Routes}  from 'react-router';
import Registration from './registration';
import Login from './login';

export default function Nav() {
  return (
    <div>
        <Router>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles/styles.css" />
    <link rel="icon" href="images/icon.png" type="image/png" />
    <title>Sustainabuy</title>
    <nav>
      <div className="logo">
        <img src="images/logo.png" alt="Sustainabuy" />
      </div>
      <div className="navbar">
        <div className="navitems">
          <a href="index.html">HOME</a>
        </div>
        <div className="navitems">
          <a href="shop.html">SHOP</a>
        </div>
        <div className="navitems">
          <a href="about-us.html">ABOUT US</a>
        </div>
        <div className="navitems">
          {/* <a href="registration.html">REGISTRATION</a> */}
          <NavLink to="/registration" end>Registration</NavLink>
        </div>
        <div className="navitems">
          {/* <a href="login.html">LOGIN</a> */}
          <NavLink to="/login" end>Login</NavLink>
        </div>
        <div className="navitems">
          <a href="contact-us.html">CONTACT US</a>
        </div>
        <div className="navitems">
          <button>SHOP NOW!</button>
        </div>
      </div>
    </nav>

    <Routes>
        
        <Route path="login" element={<Login/>} />
        <Route path="registration" element={< Registration/>}/>
      </Routes>
      </Router>
    </div>
  )
}
