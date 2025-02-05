import './App.css';
import Nav from './nav';
import Main from './main';
import Login from './login';
import Registration from './registration';
import Logout from './logout';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Nav/>
    <Routes>
        <Route path='/' element={<Main/>}/>     
        <Route path="login" element={<Login/>} />
        <Route path="registration" element={< Registration/>}/>
        {/* <Route path='logout' element={<Logout/>}/> */}
      </Routes>
    <footer>
      <div>
        <img
          src="images/logo.png"
          alt="footerlogo"
          width="180px"
          height="100px"
        />
        <h6>Our Office</h6>
        <address>
          1234 Business Ave,
          <br />
          Suite 567 TechCity,
          <br /> InnovateState 98765,
          <br />
          USA
        </address>
      </div>
      <div className="mid-section-footer">
        <div className="policies">
          {/* <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Help Centre</a>
          <a href="">About us</a> */}
        </div>
        <div className="footer-social-links">
          <h4>Connect with us.</h4>
          <a href="facebook.com" target="_blank">
            {" "}
            <img src="images/facebook.png" alt="facebook" />
          </a>
          <a href="instagram.com" target="_blank">
            <img src="images/instagram.png" alt="instagram" />
          </a>
          <a href="x.com" target="_blank">
            <img src="images/twitter.png" alt="X" />
          </a>
        </div>
      </div>
      <div className="newsletter">
        <h4>Sign to our Newsletter :</h4>
        <form action="">
          <input
            type="text"
            name="newsletter"
            id="newsletter"
            placeholder="Your Email"
          />
          <input type="submit" name="subcribe" id="subcribe" defaultValue=">" />
        </form>
      </div>
    </footer>
    </Router>
    
    
  </>
  
  );
}

export default App;
