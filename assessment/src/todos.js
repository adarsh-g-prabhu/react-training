import React, { useState } from 'react';

export default function Todos() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  let todoid = todos.length;

  function handleSubmit(e) {
    e.preventDefault();
    
    if (task.trim() !== '') 
    {
    
    setTodos((curValue) => [
      ...curValue,
      { id: todoid++, taskName: task, progress: false },
    ]);
    
    setTask('');
  }
  }

  function deletetodo(id) {
    setTodos((curValue) => curValue.filter((todo) => todo.id !== id));
  }

  function todoProgress(id) {
    setTodos((curValue) =>
      curValue.map((todo) =>
        todo.id === id ? { ...todo, progress: !todo.progress } : todo
      )
    );
  }

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo task."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" value="+" />
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.progress}
              onChange={() => todoProgress(todo.id)}
            />
            {todo.taskName} 
            <button onClick={() => deletetodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
