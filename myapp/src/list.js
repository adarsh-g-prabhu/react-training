const products = [
    { title: 'Cabbage', isFruit: false},
    { title: 'Garlic', isFruit: false},
    { title: 'Apple', isFruit: true},
    {title: 'orange', isFruit: true},
  ];
  
  export default function ShoppingList() {
    const listItems = products.map(product =>
      <li
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
  