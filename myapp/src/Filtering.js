import { useState } from "react";
import React from "react";
export default function Filtering()
{
const [input,setInput]=useState('');
const fruits=['banana','apple','orange','watermelon'];

return(

    <><input type='text' value={input} onChange={(e) => setInput(e.target.value)} /><ul>
        {fruits.filter(fruit=> fruit.includes(input)).map((fruit,i) =>  <li key={i}>{fruit}</li> )}
    </ul></>
)
}