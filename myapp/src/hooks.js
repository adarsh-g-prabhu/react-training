// import { useMemo, useState } from "react";
// import useFetch from "./custom";

// export default function Hooks()
// {
// const {data,loading,error} = useFetch("https://jsonplaceholder.typicode.com/users");

// if (error) return <h1>Fetch Errror </h1>
// if(loading) return <h1>Loading</h1>
// if (!data || !Array.isArray(data)) return <div>No data available</div>;
//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {data.map(user => (
//           <li key={user.id}>
//             {console.log(user.name)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// export default function Memo() {

//   const [val,setVal]=useState(0)
 
//   const memo = useMemo(()=>{
//     for(let i=0;i<10000;i++);
//     return val;
//   },[val]);

//   function handleClick(e)
//   {
//     e.preventDefault();
//     setVal(val+1)
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>click</button>
//       {console.log(val,memo)}
//       {memo}
//     </div>
//   )
// }

// import React from 'react'
// import { memo, useState } from 'react';

// export default function Memo() {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   return (
//     <>
//       <label>
//         Name{': '}
//         <input value={name} onChange={e => setName(e.target.value)} />
//       </label>
//       <label>
//         Address{': '}
//         <input value={address} onChange={e => setAddress(e.target.value)} />
//       </label>
//       <Greeting name={name} />
//     </>
//   );
// }

// const Greeting = memo(function Greeting({name}) {
//   console.log("Greeting was rendered ");
//   return <h3>Hello{name}</h3>;
// });


import React from 'react'
import { createPortal } from 'react-dom'

function Portal()
{
    return(
        createPortal(<p>Hello world</p>,document.querySelector('#root'))
    )
}
function Portals()
{
    return(
        <p>Hello world but not portal</p>
    )
}
export default function Hooks() {
    const styles={display: 'none'}
  return (
    <div style={styles}>
        <div> hello world again</div>
        <Portals/>
        <Portal/>
    </div>
  )
}



