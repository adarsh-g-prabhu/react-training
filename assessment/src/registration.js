import { useState } from 'react'
import './App.css'

export default function Registration() {
    const [email,setEmail]=useState('');
    const [isEmail,setIsEmail]=useState(false)
    const [password,setPassword]=useState('');
    const [isPass,setIsPass]=useState(false);
    
    const handlEmail=(e)=>{
        setEmail(e.target.value);
        // console.log(email);
        const patternEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        patternEmail.test(email)?setIsEmail(true):setIsEmail(false);
    }

    const handlePass=(e)=>{
        setPassword(e.target.value);
        const passPattern=/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d$!@%&]{8,}$/;
        passPattern.test(password)?setIsPass(true):setIsEmail(false)
    }

  return (
    <div className='main-div'>
        <h1>Registration</h1>
        <div >
            <label htmlFor='email'>Email </label>
            <input type='email' name='email' value={email} onChange={handlEmail}/>
            <span>{isEmail || email===''?'':'email is not valid'}</span>
        </div>
        {/* {console.log(isEmail ,',', email )} */}

        <div>
            <label htmlFor='phone'>Phone Number </label>
            <input type='tel' name='phone' maxLength={10}/>
        </div>
        <div>
            <label htmlFor='password'>password </label>
            <input type='password' name='password' value={password} onChange={handlePass}/>
            <span>{isPass || password===''?'':'password is not valid'}</span>
        </div>
        <div>
            <label htmlFor='address'>address </label>
            <textarea name='address'></textarea>
        </div>
        <input type='submit' />


    </div>
  )
}
