import React, { useEffect, useState } from 'react'

export default function Hooks() {

    const[count,setCount]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            console.log('component did mount');
        },5000);
        return(clearTimeout())
    },[count])
  return (
    <div>
        
    </div>
  )
}
