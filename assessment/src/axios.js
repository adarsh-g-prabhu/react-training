import axios from 'axios';

export default function Axios() {

    axios.get('https://mocki.io/v1/65b1133e-5704-4053-874b-f9e2bca8e607')
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.error(error); 
  });
  return (
    
    <div><h1>axios</h1></div>
  )
}

