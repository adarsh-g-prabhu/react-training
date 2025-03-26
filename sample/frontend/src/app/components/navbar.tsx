'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [isLogged,setIsLogged]=useState(false)
    
    useEffect(()=>{
        const user= sessionStorage.getItem('id');
        if(user)
        {
        setIsLogged(true);
        }
    },[])
const logout=()=>{
    console.log('logout');
    sessionStorage.removeItem('id');
    setIsLogged(false);
}
  return (
    <div className='bg-amber-50 text-blue-500 flex gap-10.5 justify-center'>
       {isLogged?
       <button type='button' onClick={logout}>Logout</button>
        :
        (
            <><Link href='/login'>Login</Link>
             <Link href='/register'>Register</Link></>)
        
        }
        
   
    </div>
  )
}
