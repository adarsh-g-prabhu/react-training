// import React from 'react'

// export default function Sample() {
//     const value = 5;
//   return (
//     <div>
//         <p>Hello World</p>
//         {value}
//     </div>
//   )
  
// }
// const sum=(a,b)=>{
//  return a+b;
// }

// export {sum} ;

// Button.js
import React, { useState } from 'react';

const Button = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <>
    <h1>Test Button</h1><button onClick={handleClick}>
      {clicked ? 'Clicked!' : 'Click Me'}
    </button>
    </>
  );
};

export default Button;
