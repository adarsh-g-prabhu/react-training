// function Greetings(value) {
//     return (<p>Hello {value.name}</p>);
//   }
  
//   export default function MyApp() {
//     return (
//       <div>
//         <Greetings name="Hari"/>
//       </div>
//     );
//   }

  // function Square({ value }) {
  //   return <button className="square">{value}</button>;
  // }
  
  // export default function Board() {
  //   return (
  //     <>
  //       <div className="board-row">
  //         <Square value="1" />
  //         <Square value="2" />
  //         <Square value="3" />
  //       </div>
  //       <div className="board-row">
  //         <Square value="4" />
  //         <Square value="5" />
  //         <Square value="6" />
  //       </div>
  //       <div className="board-row">
  //         <Square value="7" />
  //         <Square value="8" />
  //         <Square value="9" />
  //       </div>
  //     </>
  //   );
  // }

import { useState } from "react";
import { useEffect } from "react";

  function Events({isImg})
  {
    if (isImg)
    {
    return(<img height={300} width={300} src="https://static.scientificamerican.com/dam/m/4beab95014486f06/original/Tree-Swallow2.JPG" alt="bird pic"/>);
    }
    else
    {
      return(<img height={300} width={300} src="https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg" alt="cat pic"/>)
    }
    
  }

  export default function TogglePic()
  {
    const [isimg,setImg]=useState(true);

    useEffect(() => {
      alert(`Image has changed! `);
    }, [isimg]);
    function ImageChange()
    {
      setImg(isimg?false:true);
    }
    
    return(
      <>
      <button onClick={ImageChange}>Change Image</button>
      <Events isImg={isimg} /></>
      
    );
  }

  
  
  
 
  