import { useNavigate } from 'react-router-dom';
import './forms.css'
import { useState } from 'react';
export default function Login() {
const [formData,setFormData]=useState({email:'',password:''})
  
const navigate=useNavigate();
    const invalidForm = { email: false, password: false };

    const [invalidFormData,setInvalidFormData]=useState({ email: false,password: false})


    function handleForm(e,type)
  {
    switch(type)
    {
      case 'email':
        // console.log('hi')
        setFormData((formData)=>({...formData, email: e.target.value}));
        break;

      case 'password':
        setFormData((formData)=>({...formData, password: e.target.value}));
        break;
      
      default:
         break;
    }
  }

  function handleSubmit(e)
  {
    e.preventDefault();
    const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    invalidForm.email= (!(patternEmail.test(formData.email)))

    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d$!@%&]{8,}$/;
    invalidForm.password=(!(passPattern.test(formData.password)))
    

    console.log(invalidForm)
    console.log(formData.password)

    const invalid=Object.values(invalidForm)
    console.log('invalid arr:',invalid);
    
    setInvalidFormData(invalidForm);
    console.log('invalid form data:',invalidFormData)
    if(invalid.includes(true))
      {
        console.log('form invalid');
      }
      else
      {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        console.log(userDetails);
        if (userDetails) {
          if (formData.email === userDetails.email && formData.password == userDetails.password) 
          {
              sessionStorage.setItem('username', formData.email);
              navigate('/')
          } 
          else
          {
              alert("Username or Password is incorrect.");
          }
      } 
      }
    }


  
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles/style2.css" />
  <title>Login Page</title>
  <h1>Login </h1>
  <form action="" name="Login" onSubmit={handleSubmit} noValidate>
    <div className="form">
          <label htmlFor="username">Username</label>
    <input type="email" name="username" id="username" placeholder="Username / Email"
    value={formData.email} onChange={(e)=>handleForm(e,'email')}/>
    {/* {console.log('email',formData.email)} */}
    {invalidFormData.email&&<span className='valid-error'>Invalid Email Format</span>}

      <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Password" onChange={(e)=>handleForm(e,'password')}/>
    {invalidFormData.password&&<span className='valid-error'>Invalid password</span>}
      <div id="passDiv" />
      <input type="submit" name="submit" defaultValue="Login" />
    </div>
  </form>
  <hr />
  <div className="loginfooter">
    Not Signed Up,<a href="registration.html">Sign Up</a>
  </div>
</>

  )
}
