import axios from 'axios'
import { useEffect, useState } from 'react';
import React from 'react';

export default function BooksCrud() {
    const [datas,setDatas]=useState([])
    const [togglePost,setTogglePost]=useState(false);
    const [data,setData]=useState({title:'',author:'',publishedYear:null})
   
    useEffect(
   ()=>{ axios.get('http://localhost:3000/books/')
    .then((response)=>{
        console.log('hello');
        console.log(response.data)
        const resData=response.data;
        setDatas(resData);
        
        // const sortedData=resData.sort()
        // setDatas(sortedData)
        
    })
    .catch(error=>console.log(error))

    
    },[])


    function handleData(e,type)
    {
          switch(type)
          {
            case 'title':
              setData((data)=>({...data, title: e.target.value}));
              break;
            case 'author':
              setData((data)=>({...data, author: e.target.value}));
              break;  
            case 'year':
              setData((data)=>({...data, publishedYear: e.target.value}));
              break;
            default:
                break;
    }
}

const handleSubmit=()=>{
    
}
    
    

  return (
    <div>
        
        <button type='button' onClick={()=>setTogglePost(data=>!data)}>post</button>
        {togglePost&& <form onSubmit={handleSubmit}> 
            <input type='text' name='title' onChange={(e)=>handleData(e,'title')}/>
            <input type='text' name='author' onChange={(e)=>handleData(e,'author')}/>
            <input type='text' name='year' onChange={(e)=>handleData(e,'year')}/>
            <submit type='submit' value='submit' />
        </form>}
        <h1>Data</h1>
    <ul>
        {/* {datas[0]} */}
        {datas.map((item,i) => (
          <li key={i}>
            {JSON.stringify(item)}
          </li>
        ))}
    </ul>
    {/* <p>{datas}</p> */}

    </div>
  )
}