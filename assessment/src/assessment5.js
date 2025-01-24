// 5. Create a button that changes the background color of the page each time it is clicked, 
// cycling through a few colors.

import { useState } from "react";

export default function Color()
{
    const [color,setColor]=useState('white');
    const [count,setCount]=useState(0);
    const colorArray=['blue','red','yellow','orange','green','pink'];
    // let count=0;
    function changeColor()
    {
        
        count<=colorArray.length-1 ? setCount(count+1):setCount(0);
        
        setColor(colorArray[count]);
        document.body.style.backgroundColor=color;
        console.log("count",count);
        console.log('array:'+colorArray[count]);
        console.log(color);
       
    }
    

    return(

        <button onClick={changeColor}>Change background</button>
    )
}