import { useState } from 'react';

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');
  if (isSent) {
    return <h1>Your message is on its way!</h1>
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}





// import { useId } from "react";
//   function ProductDisplay({products})
//   {
//    return(
//     <div>
//     <h5>Product List</h5>
//     <ol>
//       {products.map((product) => (
//         <li>
//           {product.name} - {product.price}
//         </li>
//       ))}
//     </ol>
//   </div>
//    );
//   }

  // export default function Main()
  // {
  //   const PRODUCTS = [
  //       {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  //       {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  //       {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  //       {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  //       {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  //       {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  //     ];
    
  //     const sampleId = useId();
  //   return (<>
  //   <ProductDisplay products={PRODUCTS} />
  //   <p>{sampleId}</p>
  //   </>
  //   );
  // }

