
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import api from "../api";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", formData);
      const { token, user } = response.data;
      login(user, token);
      alert("Login Successful!");
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("Login Failed!");
      console.error(error.response?.data || error.message);
      navigate("/login");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required value={formData.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
