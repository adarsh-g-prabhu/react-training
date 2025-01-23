// 2. Create a functional component that uses the useState hook to manage a counter.
//  The component should display the counter value and have two buttons to increment and decrement the counter by 1.


import { useState } from "react";


export default function Counter()
{
    const [count,setCount]=useState(0);
    let prev=1;
    function CounterIncrease()
    {
        
        setCount(count=>count+prev);
        prev=count;
        console.log(count + prev)
    }
    function CounterDecrease()
    {   
        count==0?setCount(0):setCount(count-1)
    }
    return(
        <div>
        <p>Count: {count} </p>
        <button onClick={CounterIncrease}>Increase ( + ) </button>
        <button onClick={CounterDecrease}>Decrease ( - ) </button>
        </div>
    );
}