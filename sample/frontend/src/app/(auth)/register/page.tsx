'use client'
import { useState } from 'react';
import { registerUser } from '../../actions/registerUser'; 

export default function Register() {
    const [userData, setUserData] = useState({
        email: '',
        name:'',
        password: ''
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (formData: FormData) => {
        const result = await registerUser(formData);
        
        if (result.success) {
          const id=result.data._id;
           sessionStorage.setItem('id',id)
            window.location.href = '/userhome';
        } else {

            console.error(result.errors);
        }
    }

    return (
        <div>
            <h1 className='flex justify-center font-stretch-150% text-4xl'>Register</h1>
            
            <form action={handleSubmit}>
                <div className='flex flex-col flex-wrap content-center justify-center'>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder='email' 
                        onChange={handleInput}
                        value={userData.email}
                        required
                    />
                       <input 
                        type="text" 
                        name="name" 
                        placeholder='name' 
                        onChange={handleInput}
                        value={userData.name}
                        required
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='password'
                        onChange={handleInput}
                        value={userData.password}
                        required
                    />
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

