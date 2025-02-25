import { useState, useEffect } from "react";
import api from "../api"; 
import '../assets/stylesheets/styles.css'

export default function ViewUsers() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    api.get("/viewUsers")
      .then((response) => {
        setUsers(response.data);

      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h3>View Users</h3>
      <table className="table-view">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Joining Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
