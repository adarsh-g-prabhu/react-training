import { useState } from "react";

import api from '../api'

export default function Register() {
const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
});


const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handleSubmit = (e) => {
    e.preventDefault(); 

    api.post("/register", formData)
      .then((response) => {
        alert("Registration Successful!");
        console.log(response.data);
      })
      .catch((error) => {
        alert("Registration Failed!");
        console.error(error.response?.data || error.message);
      });
  };
  return (
    <div className="login-container">
    <title>Register</title>
    <h2>Register</h2>
    <form  onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Full Name" value={formData.name} required="" onChange={handleChange}
      />
      <br />
      <input type="email" name="email" placeholder="Email"  value={formData.email} required="" onChange={handleChange}/>
      <br />
      <input type="password" name="password" value={formData.password} placeholder="Password" required="" onChange={handleChange} />
      <br />
      <button type="submit">Register</button>
    </form>
  </div>
  )
}
