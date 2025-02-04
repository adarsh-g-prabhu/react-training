import axios from 'axios'
import { useEffect, useState } from 'react';
import React from 'react';

export default function Axios() {
    const [datas,setDatas]=useState([])
   
    useEffect(
   ()=>{ axios.get('https://mocki.io/v1/65b1133e-5704-4053-874b-f9e2bca8e607')
    .then((response)=>{
        console.log(response)
        const resData=response.data.map(res=>res.title)
        // setDatas(resData);
        const sortedData=resData.sort()
        setDatas(sortedData)
        
    })
    .catch(error=>console.log(error))

    
    },[])
// const newInstance= axios.create({
//   url:'https://mocki.io/v1/65b1133e-5704-4053-874b-f9e2bca8e607',
//   timeout:3000
   
//     newInstance.interceptors.response.use((response)=> {console.log(response)
//   return response.data})


   useEffect(() => {
            axios.post('https://reqres.in/api/users', {
                "name": "Tony Stark",
                "job": "Engineer"
            })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    
        }, [])
  return (
    <div>
        <h1>Axios</h1>
    <ul>
        {datas.map((title,i) => (
          <li key={i}>
            {title}
          </li>
        ))}
    </ul>

    </div>
  )
}
