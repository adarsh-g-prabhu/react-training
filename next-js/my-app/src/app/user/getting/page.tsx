"use client";
import axios from "axios";
import { useState, useEffect } from "react";


interface User {
  _id: string;
  name: string;
  age: number;
  place: string;
}

export default function Page() {
  const [data, setData] = useState<User[]>([]);
  const [formData, setFormData] = useState({ name: "", age: "", place: "" });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>(
          "http://localhost:3000/api/users"
        );
        setData(response.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        formData
      );
      setData([...data, response.data.user]);
      setFormData({ name: "", age: "", place: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const userDelete=async(id:any)=>{
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/users/${id}`
      );
      if(response)
      {
        setData(data.filter((user) => user._id !== id));
      console.log('user deleted',id);
      }
    } catch (err) {
      console.error("Error", err);
    }
  };
  

  return (
    <div>
      <h2>User List</h2>
      {data.map((item) => (
        <div key={item._id}>
          {item.name} - {item.age} years old, from {item.place}
          <button type="button" onClick={()=>userDelete(item._id)}> -- delete --  </button>
        </div>
      ))}

      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" required
        />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter Age" required />
        <input type="text" name="place" value={formData.place} onChange={handleChange} placeholder="Enter Place" required />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
