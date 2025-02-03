import { NavLink } from 'react-router-dom'
import './forms.css'
import { useState } from 'react';

export default function Registration() {

  const [formData,setFormData]=useState({email:'', fname:'',lname:'',gender:'',dob:'',address:''
    ,phone:'',password:'',cpassword:''})
  
    const invalidForm = { email: false, fname: false, lname: false, gender: false, dob: false, address: false, password: false, cpassword: false };

    const [invalidFormData,setInvalidFormData]=useState({ email: false, fname: false, lname: false, gender: false, dob: false, address: false, password: false, cpassword: false })
  // const [isFormValid,SetIsFormValid]=useState(true)

  function handleForm(e,type)
  {
    switch(type)
    {
      case 'email':
        // console.log('hi')
        setFormData((formData)=>({...formData, email: e.target.value}));
        break;
      case 'dob':
        setFormData((formData)=>({...formData, dob: e.target.value}));
        break;  
      case 'fname':
        setFormData((formData)=>({...formData, fname: e.target.value}));
        break;
      case 'lname':
        setFormData((formData)=>({...formData, lname: e.target.value}));
        break;
      case 'gender':
        setFormData((formData)=>({...formData, gender: e.target.value}));
        break;
      case 'address':
        setFormData((formData)=>({...formData, address: e.target.value}));
        break;
      case 'phone':
        setFormData((formData)=>({...formData, phone: e.target.value}));
        break;
      case 'password':
        setFormData((formData)=>({...formData, password: e.target.value}));
        break;
      case 'cpassword':
        setFormData((formData)=>({...formData, cpassword: e.target.value}));
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

    const phonePattern=/^\d{10}$/
    invalidForm.phone=(!(phonePattern.test(formData.phone)))

    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d$!@%&]{8,}$/;
    invalidForm.password=(!(passPattern.test(formData.password)))
    
   
    invalidForm.cpassword= (!(formData.password===formData.cpassword));


    invalidForm.address=(formData.address==='')

    invalidForm.gender=(formData.gender==='')

    invalidForm.dob=(formData.dob==='')

    invalidForm.fname=(formData.fname==='')

    invalidForm.lname=(formData.lname==='')

    console.log(invalidForm)

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
       alert('registration success'); 
      // const jsonData=JSON.stringify(formData)
      //  localStorage.setItem('userDetails', jsonData);
       
      //  sessionStorage.setItem('username',formData.email);
      }
 
  }
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles/style2.css" />
  <title>Registration</title>
  <h1>Registration </h1>
  <form action="" name="registration" onSubmit={handleSubmit} noValidate>
    <div className="form">
    <label htmlFor="username">Username</label>
    <input type="email" name="username" id="username" placeholder="Username / Email"
    value={formData.email} onChange={(e)=>handleForm(e,'email')}/>
    {/* {console.log('email',formData.email)} */}
    {invalidFormData.email&&<span className='valid-error'>Invalid Email Format</span>}

    <label htmlFor="first_name">First Name</label>
    <input type="text" name="first_name" id="first_name" placeholder="First Name" onChange={(e)=>handleForm(e,'fname')}/>
    {invalidFormData.fname&&<span className='valid-error'>First Name should not be empty</span>}

    <label htmlFor="last_name">Last Name</label>
    <input type="text" name="last_name" id="last_name" placeholder="Last Name" onChange={(e)=>handleForm(e,'lname')}/>
    {invalidFormData.lname&&<span className='valid-error'>Last name should not be empty. </span>}

    <div className="gender">
    <label htmlFor="gender">Gender </label>
    <input type="radio"name="gender" value='Male' onChange={(e)=>handleForm(e,'gender')}/> Male
    <input type="radio" name="gender" value='Female' onChange={(e)=>handleForm(e,'gender')} /> Female
   
    </div>
    {invalidFormData.gender&&<span className='valid-error-gender'>please choose gender</span>}

    <label htmlFor="dob">Date of Birth</label>
    <input type="date" name="dob" id="dob" value={formData.dob} onChange={(e)=>{handleForm(e,'dob')}} />
    {invalidFormData.dob&&<span className='valid-error'>Please select your date of birth</span>}

    <label htmlFor="phone">Phone</label>
    <input type="text" maxLength={10} placeholder="Phone / Mobile Number" name="phone" id="phone" onChange={(e)=>handleForm(e,'phone')}/>
    {invalidFormData.phone&&<span className='valid-error'>invalid phone number format</span>}


    <label htmlFor="address">Address</label>
    <textarea name="address" id="address" placeholder="Enter Full Address" value={formData.address} onChange={(e)=>handleForm(e,'address')}/>
    {invalidFormData.address&&<span className='valid-error'>First Name should not be empty</span>}


    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Password" onChange={(e)=>handleForm(e,'password')}/>
    {invalidFormData.password&&<span className='valid-error'>Invalid password</span>}

    <label htmlFor="confirm_password">Confirm Password</label>
    <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password"  onChange={(e)=>handleForm(e,'cpassword')}/>
    {invalidFormData.cpassword&&<span className='valid-error'>Password doesnt match</span>}

{/* {console.log(formData)} */}
      <input type="submit" name="submit" defaultValue="Register" id="submit" />
    </div>
  </form>
  <hr />
  <div className="loginfooter">
    <NavLink to='/login' end>Login Now</NavLink>
    {/* <a href="">Login now</a> */}
  </div>
</>

  )
}
