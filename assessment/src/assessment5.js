// 5. Create a button that changes the background color of the page each time it is clicked, 
// cycling through a few colors.

import { useState } from "react";

export default function Color()
{
    const [color,setColor]=useState();
    const colorArray=['blue','red','yellow','orange','green','white'];
    let count=0;
    function changeColor()
    {
        count<colorArray.length ? count+=1:count=0;
        setColor(colorArray[count]);
        console.log('array:'+colorArray[count]);
        console.log(color);
        document.body.style.backgroundColor=color;
    }

    return(
        <button onClick={changeColor}>Change background</button>
    )
}