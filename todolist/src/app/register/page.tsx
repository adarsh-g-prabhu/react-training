'use client'

import { useState } from "react";
import axios from 'axios';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/register', { name, email, password });

            if (res.status === 201) {
                alert('User registered successfully');
            }
        } catch (err) {
            console.error('Error in registration:', err);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input className="p-2 border" type="text" name="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="p-2 border" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="p-2 border" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className="bg-blue-500 text-white p-2 cursor-pointer" type="submit" value="Register" />
            </form>
        </div>
    );
}
