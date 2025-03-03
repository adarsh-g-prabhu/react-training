
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/homepage';
import Login from './components/login';
import Register from './components/register';
import Admindashboard from './components/admindashboard';
import ViewUsers from './components/viewUsers';
import CreatePost from './components/addposts';
import PostView from './components/postView'
import MyPosts from './components/myPosts';
import UpdatePosts from './components/updatePosts';
import SearchResult from './components/searchresults';

function App() {


  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/admin' element={<Admindashboard/>}/>
        <Route path='admin/viewUsers' element={<ViewUsers/>}/>
        <Route path='/add-posts' element={<CreatePost/>}/>
        <Route path='/posts/:id' element={<PostView/>}/>
        <Route path='/myposts/' element={<MyPosts/>}/>
        <Route path='/updatePost/:id' element={<UpdatePosts/>}/>
        <Route path='/search/' element={<SearchResult/>}/>
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>

    </>
  )
}

export default App
