 import React from "react";
const products = [
    { title: 'Cabbage', isFruit: false},
    { title: 'Garlic', isFruit: false},
    { title: 'Apple', isFruit: true},
    {title: 'orange', isFruit: true},
  ];
  
  export default function ShoppingList() {
    const listItems = products.map((product,i) =>
      <li key={i}
        style={{
          color: product.isFruit ? 'yellow' : 'green'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }
  