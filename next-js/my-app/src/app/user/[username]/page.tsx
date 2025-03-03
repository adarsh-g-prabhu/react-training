'use client'

import Image from "next/image"
import { useParams } from "next/navigation"

export default function Pages({params}: {params: {username: String}}) {
    const user=useParams();
    // const {username}=  params;
  return (
    <div>
        <Image src='/european-shorthair-8601492_640.jpg'
        alt="cat pic" width={400} height={300}/>
        <h1>hai there,{user.username} </h1>
    </div>
  )
}
