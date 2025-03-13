"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

interface Todo {
  _id: string;
  task: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get("/api/todos").then((res) => setTodos(res.data));
  }, []);


  const addTodo = async (task: string) => {
    const { data } = await axios.post("/api/todos", { task });
    setTodos([...todos, data]); 
  };

  const removeTodo = async (id: string) => {
    await axios.delete("/api/todos", { data: { id } });
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
}
