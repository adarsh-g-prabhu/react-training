import { useState } from "react";

export default function MyApp() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
    function MyButton()
    {
        return(
            <button onClick={handleClick}>
                clicked {count} times
            </button>
        )
    }
  
    return (
      <div>
        <h1>Counters that update separately</h1>
        <MyButton />
        <MyButton />
      </div>
    );
  }

  