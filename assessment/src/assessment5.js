// 5. Create a button that changes the background color of the page each time it is clicked, 
// cycling through a few colors.

import { useEffect, useState } from "react";

export default function Color()
{
    const [color,setColor]=useState('white');
    const [count,setCount]=useState(0);
    const colorArray=['blue','red','yellow','orange','green','pink'];
    // let count=0;
    function changeColor()
    {
        
       
        const count1=count<=colorArray.length-1 ? count+1:0;
        
        setColor(colorArray[count1]);
        setCount(count1);
        console.log("count",count1);
        console.log('array:'+colorArray[count1]);
        console.log(color);
        document.body.style.backgroundColor=color;
 
        
    }
       
    

    return(

        <button onClick={changeColor}>Change background</button>
    )
}