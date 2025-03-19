
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
import ProtectedRoute from './components/protectedroute';
import PublicRoute from './components/publicroute';
import { AuthProvider } from './context/authContext';
import NotFound from './components/NotFound';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {


  return (
    <>
    <Router>
     <AuthProvider>
      
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={
            <PublicRoute>
              <Login />
              </PublicRoute>
            } />
          <Route path="/register" element={
            <PublicRoute>
              <Register />
              </PublicRoute>
            } />
          <Route path="/posts/:id" element={
            <ProtectedRoute>
              <PostView />
              </ProtectedRoute>} />
          <Route path="/search" element={
            <ProtectedRoute>
              <SearchResult />
              </ProtectedRoute>} />

      
          <Route path="/myposts" element={
            <ProtectedRoute>
              <MyPosts />
            </ProtectedRoute>
          } />
          <Route path="/add-posts" element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          } />
          <Route path="/updatePost/:id" element={
            <ProtectedRoute>
              <UpdatePosts />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admindashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/viewUsers" element={
            <ProtectedRoute>
              <ViewUsers />
            </ProtectedRoute>
          } />

<Route path="*" element={<NotFound />} />
        </Routes>
     
    </AuthProvider>
    </Router>
    </>
  )
}

export default App
