'use client'
// import { useRouter } from 'next/router';
import React, {useState } from 'react';
export default function Login() {
    
  
    const [userData,setUserData]=useState({email:'',password:''});
    const handleInput=(e)=>{
        setUserData((prev)=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('userdata',userData)
        fetch('http://localhost:3002/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({email:userData.email,password: userData.password}),
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((data) => {
                    throw new Error(data.message || "Login failed");
                });
            }
            return response.json().then((data) => ({ status: response.status, data }));
        })
        .then(({status,data})=>{
            console.log('data',data)
            if(status==200)
            {
            console.log('data',data)
            sessionStorage.setItem('id',data.data._id)
            window.location.href='/userhome'
        }
       {
        
       }
        })
        .catch(error=>console.log('error happened',error))
    }

  return (
    <div>
        <h1 className='flex justify-center font-stretch-150% text-4xl'>Login</h1>
        
            <form onSubmit={handleSubmit} method='POST'>
            <div className='flex flex-col flex-wrap content-center justify-center'>
                <input type="text" name="email" value={userData.email} placeholder='email' 
                onChange={handleInput} />
                <input type="password" name="password" value={userData.password} placeholder='password'
                onChange={handleInput}/>
                <input type="submit" value="login" name='submit'/>
                </div>
            </form>
        
    </div>
  )
}
