// formik, yup
import { useState} from 'react'
import './App.css'

export default function Registration() {
 

    const initial = {email:'',password:'',phone:'',address:''};
    const [data,setData]=useState(initial);
    const [empty,setEmpty]=useState({email:false,password:false,phone:false,address:false})

    function handleForm(e,type){
        // console.log('out')
        if(type==='email'){
            // console.log(e.target.value)
            setData((data)=>({...data,email:e.target.value}))
            // console.log(data.email)

        }
        else if(type==='password')
        {
            setData(data=>({...data,password:e.target.value}))
        }
        else if(type==='phone')
        {
            setData(data=>({...data,phone:e.target.value}))
        }
        else{
            setData(data=>({...data,address:e.target.value}))
        }
        
    }
   
    const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isEmail=patternEmail.test(data.email)
    
        const phonePattern=/^\d{10}$/
        const isPhone=phonePattern.test(data.phone)

        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d$!@%&]{8,}$/;
        const isPass=passPattern.test(data.password)

    function handleSubmit(e)
    {
        e.preventDefault();
        const err = [{
            email: true,
        }]
        // console.log('email', data.email)
        // data.email===''? setEmpty({...empty,email:true}):setEmpty({...empty,email:false});
        // data.password===''? setEmpty({...empty,password:true}):setEmpty({...empty,password:false});
        // data.phone===''? setEmpty({...empty,phone:true}):setEmpty({...empty,phone:false});
        data.address===''? setEmpty({...empty,address:true}):setEmpty({...empty,address:false});

        
    }

    
   
  return (
    <div className='main-div'>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit} noValidate>
            <div className='form-div'>
        <div >
            <label htmlFor='email'>Email </label>
            <input type='email' name='email' value={data.email} onChange={(e)=>handleForm(e,'email')}/>
            <span>{isEmail || data.email===''?'':'email is not valid'}</span>
            <span>{empty.email && 'Email should not be blank'}</span>
                {console.log(empty.email, empty.address, empty.password, empty.phone)}
        </div>
        {/* {console.log(isEmail ,',', email )} */}

        <div>
            <label htmlFor='phone'>Phone Number </label>
            <input type='tel' name='phone' maxLength={10} value={data.phone} onChange={(e)=>handleForm(e,'phone')}/>
            {/* {console.log(data.phone,isPhone)} */}
            <span>{isPhone || data.phone===''?'':'phone  number is not valid'}</span>
            <span>{empty.phone && 'phone should not be blank'}</span>
        </div>
        <div>
            <label htmlFor='password'>password </label>
            <input type='password' name='password' value={data.password} onChange={(e)=>handleForm(e,'password')}/>
            <span>{isPass || data.password===''?'':'password is not valid.)'}</span>
            <span>{empty.password && 'password should not be blank'}</span>
        </div>
        <div>
            <label htmlFor='address'>address </label>
            <textarea name='address'></textarea>
            <span>{!empty.address && 'Address should not be blank'}</span>
        </div>
        <input type='submit' /></div>
    </form>

    </div>
  )
    }

