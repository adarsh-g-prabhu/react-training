// formik, yup
import { useState,useReducer} from 'react'
import './App.css'

export default function Registration() {
    
    // const [isEmail,setIsEmail]=useState(false)
    // const [password,setPassword]=useState('');
    // const [isPass,setIsPass]=useState(false);


    
    const initial = {email:'',password:'',phone:''};
   

    const [state, dispatch] = useReducer(reducer, initial);
    function reducer(state, action) {
        switch (action.type) {
            case 'email':
               
                return {...state,email:action.data};
            case 'phone':

                return {...state,phone:action.data};
            case 'pass':
           
                return {...state,password:action.data};
            default:
                return state;
        }
    }


    
    // const handlEmail=(e)=>{
    //     setEmail(e.target.value);
    //     // console.log(email);
    //     const patternEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //     patternEmail.test(email)?setIsEmail(true):setIsEmail(false);
        
    // }



    // const phonePattern=/^\d{10}$/;
    // const handlePass=(e)=>{
    //     setPassword(e.target.value);
    //     const passPattern=/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d$!@%&]{8,}$/;
    //     passPattern.test(password)?setIsPass(true):setIsEmail(false)
    // }
    const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmail=patternEmail.test(state.email)

    const phonePattern=/^\d{10}$/
    const isPhone=phonePattern.test(state.phone)
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d$!@%&]{8,}$/;
    const isPass=passPattern.test(state.password)
  return (
    <div className='main-div'>
        <h1>Registration</h1>
        <div >
            <label htmlFor='email'>Email </label>
            <input type='email' name='email' value={state.email} onChange={(e)=>dispatch({type:'email',data:e.target.value})

            }/>
            <span>{isEmail || state.email===''?'':'email is not valid'}</span>
            {/* {console.log(isEmail, state.email)} */}
        </div>
        {/* {console.log(isEmail ,',', email )} */}

        <div>
            <label htmlFor='phone'>Phone Number </label>
            <input type='tel' name='phone' maxLength={10} value={state.phone} onChange={(e)=>dispatch({type:'phone',data:e.target.value})}/>
            {console.log(state.phone,isPhone)}
            <span>{isPhone || state.phone===''?'':'phone  number is not valid'}</span>
        </div>
        <div>
            <label htmlFor='password'>password </label>
            <input type='password' name='password' value={state.password} onChange={(e)=>dispatch({type:'pass',data:e.target.value})}/>
            <span>{isPass || state.password===''?'':'password is not valid.)'}</span>
        </div>
        <div>
            <label htmlFor='address'>address </label>
            <textarea name='address'></textarea>
        </div>
        <input type='submit' />


    </div>
  )
}

