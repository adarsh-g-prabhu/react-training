'use client';

import { useState } from "react";

interface Task {
    id: number;
    name: string;
    status: "todo" | "doing" | "done";
}

export default function Kanban() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState("");

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!taskName.trim()) return;

        const newTask: Task = {
            id: Date.now(),
            name: taskName,
            status: "todo",
        };

        setTasks([...tasks, newTask]);
        setTaskName("");
    };

    const moveTask = (taskId: number, newStatus: "todo" | "doing" | "done") => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, status: newStatus } : task
        ));
    };

    return (
        <div className="p-4 min-h-screen bg-blue-100">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Kanban Board</h1>

            <form onSubmit={addTask} className="flex justify-center mb-4">
                <input 
                    type="text" 
                    value={taskName} 
                    onChange={(e) => setTaskName(e.target.value)} 
                    placeholder="Enter task" 
                    className="border p-2 mr-2 w-1/3"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Add Task</button>
            </form>

           
            <div className="flex gap-4 justify-center">
               
                <div className="w-1/3 bg-red-200 p-4 shadow-lg rounded-lg">
                    <h2 className="font-bold text-lg text-center mb-4 text-red-900">To-Do</h2>
                    {tasks.filter(task => task.status === "todo").map(task => (
                        <div key={task.id} className="bg-white p-2 mb-2 flex justify-between shadow-md rounded-md">
                            {task.name}
                            <button 
                                onClick={() => moveTask(task.id, "doing")} 
                                className="bg-yellow-500 text-white px-2 py-1 text-xs rounded"
                            >
                                Move ➡
                            </button>
                        </div>
                    ))}
                </div>

                
                <div className="w-1/3 bg-yellow-200 p-4 shadow-lg rounded-lg">
                    <h2 className="font-bold text-lg text-center mb-4 text-yellow-900">Doing</h2>
                    {tasks.filter(task => task.status === "doing").map(task => (
                        <div key={task.id} className="bg-white p-2 mb-2 flex justify-between shadow-md rounded-md">
                            {task.name}
                            <button 
                                onClick={() => moveTask(task.id, "done")} 
                                className="bg-green-500 text-white px-2 py-1 text-xs rounded"
                            >
                                ✅ Done
                            </button>
                        </div>
                    ))}
                </div>

                {/* Done Column */}
                <div className="w-1/3 bg-green-200 p-4 shadow-lg rounded-lg">
                    <h2 className="font-bold text-lg text-center mb-4 text-green-900">Done</h2>
                    {tasks.filter(task => task.status === "done").map(task => (
                        <div key={task.id} className="bg-white p-2 mb-2 shadow-md rounded-md">
                            {task.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
