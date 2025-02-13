import React from "react";
function NewComponent({ message }) {
    return <h2>{message}</h2>;
  }
  

  function HigherComponent(NewComponent) {
    const message = 'hello world';
    return function() {
      return <NewComponent message={message} />;
    };
  }
  
  
  const BrandNewComponent = HigherComponent(NewComponent);
  
  export default BrandNewComponent;