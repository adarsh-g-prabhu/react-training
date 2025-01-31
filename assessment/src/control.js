import React from 'react'
import {useState} from 'react'

export default function Control() {

    const [states,setStates]=useState('select');
    const [name,setName]=useState('');
    const [check,setCheck]=useState(false)
    const [gender,setGender]=useState('M')
    const [formData,setFormData]=useState({state:'',name:'',check:'',gender:''})
    function handleSubmit(e)
    {
            e.preventDefault();
            setFormData({...formData,state:states,name:name,check:check,gender:gender})
            console.log(formData)

    }


    function handleSelect(e)
    {
        setStates(e.target.value);
    }


  return (
  <div>
        <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={(e)=>(setName(e.target.value))} />
        <select value={states} onChange={handleSelect} defaultValue='kerala' >
            <option value='select'disabled>Select States</option>
            <option value='kerala' >Kerala</option>
            <option value='tamilnadu'>Tamil Nadu</option>
            <option value='karnataka'>Karnataka</option>
            <option value='others'>Others</option>
        </select>
        <input type='checkbox' checked={check} onChange={(e)=>{setCheck(!check)
        }}/>check

        <input type='radio' name='gender' value={gender} onClick={()=>setGender('m')}/>Male 
        {console.log(gender)}
        <input type='radio' name='gender' value={gender} onClick={()=>setGender('f')}/>Female
        <button >Submit</button>
        </form>


    </div>
  )
}
