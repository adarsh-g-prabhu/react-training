import React, { useState } from 'react';

const Sample = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hello World!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <h3>{message}</h3>
    </div>
  );
};

export default Sample;
