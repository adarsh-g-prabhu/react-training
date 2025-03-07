'use client'

import Image from "next/image"
// import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react"
export default function Pages() {
  const [user,setUser]=useState('');
  const router=useRouter();
  return (
    <div className="flex justify-center items-center bg-gray-500 flex-col">


        <Image src='/european-shorthair-8601492_640.jpg'
        alt="cat pic" width={400} height={300} priority/>
        <h1>hai there</h1>
          
        <div><input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/></div>
        <button onClick={()=>router.push(`/user/${user}`)}>go to {user}</button>
        {/* <Link href={`/user/${user}`}>go to {user}</Link> */}
    </div>
  )
}
