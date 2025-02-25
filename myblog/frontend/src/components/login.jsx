import { useState } from "react";
import api from "../api"; 
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
const Navigate=useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    api.post("/login", formData)
      .then((response) => {
        localStorage.setItem('token',response.data.token)
        alert("Login Successful!");
        if(formData.email==='admin@gmail.com')
            Navigate('/admin')
        else
            Navigate('/')

        console.log(response.data);
      })
      .catch((error) => {
        alert("Login Failed!");
        Navigate('/login')
        console.error(error.response?.data || error.message);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"  required 
        value={formData.email}  onChange={handleChange}/>

        <label htmlFor="password">Password:</label>
        <input type="password"  id="password"  name="password"  required
          value={formData.password} onChange={handleChange}/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
