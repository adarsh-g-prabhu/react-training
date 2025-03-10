"use client";
import { useState } from "react";
import axios from 'axios'
interface TodoFormProps {
  onAddTodo: (todo: string) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [task, setTask] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;
    const data  = await axios.post("/api/todos", { task });
    if(data)
    {
    onAddTodo(task);
    setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-2">
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} 
      placeholder="Enter task" className="border p-2 rounded" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add
      </button>
    </form>
  );
}
