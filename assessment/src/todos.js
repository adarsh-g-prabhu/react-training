import React, { useState } from 'react'

export default function Todos() {
    const [task,setTask]=useState('')
    const [todos,setTodos]=useState([])

    function handleSubmit(e)
    {
        e.preventDefault();
        setTodos((curValue)=>{return[...curValue,{taskName:task}]})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}/>
            <input type='submit' value='+'/>
        </form>
      
       {todos.map((todo,i)=>
     <li key={i}>
     <input type='checkbox' checked={todo.progress} onchange/>
     {todo.taskName}
     </li>)}

    </div>
  )
}
