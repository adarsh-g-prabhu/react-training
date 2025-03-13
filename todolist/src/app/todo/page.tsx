"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Todo {
  _id: string;
  task: string;
  completed: boolean;
}

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        console.log("Fetching todos...");
        const response = await axios.get("/api/todos", { withCredentials: true });

        if (response.data.success) {
          setTodos(response.data.todos);
        }
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!newTask.trim()) return alert("Task cannot be empty");

    try {
      const response = await axios.post("/api/todos", { task: newTask }, { withCredentials: true });

      if (response.data.success) {
        setTodos([...todos, response.data.todo]);
        setNewTask("");
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleCompleted = async (id: string, completed: boolean) => {
    try {
      const response = await axios.put("/api/todos", { todoId: id, completed: !completed }, { withCredentials: true });

      if (response.data.success) {
        setTodos(todos.map((todo) => (todo._id === id ? { ...todo, completed: !completed } : todo)));
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const response = await axios.delete("/api/todos", {
        data: { todoId: id },
        withCredentials: true,
      });

      if (response.data.success) {
        setTodos(todos.filter((todo) => todo._id !== id));
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout", {}, { withCredentials: true });
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      
      <div className="flex justify-between mb-4">
        <Link href="/kanban">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Kanban</button>
        </Link>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-4">My Todos</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="p-2 border rounded flex-1"
        />
        <button onClick={addTodo} className="bg-green-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      <ul className="text-left">
        {todos.map((todo) => (
          <li key={todo._id} className="flex justify-between p-2 border-b">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo._id, todo.completed)}
              />
              <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.task}</span>
            </label>
            <button onClick={() => deleteTodo(todo._id)} className="text-red-500">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
