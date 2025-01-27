import { useState } from 'react'
import './calc.css'

const Calculator = () => {
    const [value,setValue]=useState('');

const handleCalc= (clickVal) => {
    console.log(clickVal);
    setValue((prvalue)=>(prvalue+clickVal));
}
function calculate()
{

    let result=eval(value);
    setValue(result.toString());
}

const clear = ()=>{
    setValue('');
}

  return (
    <div>
        <h1>calculator</h1>
        <form >
            <div className='main-calculator-container'>
                <input type="text" value={value} readOnly/>
                <div>
                    <button type='button' onClick={()=>handleCalc('1')}>1</button>
                    <button type='button' onClick={()=>handleCalc('2')}>2</button>
                    <button type='button' onClick={()=>handleCalc('3')}>3</button>
                    <button type='button' onClick={()=>handleCalc('+')}>+</button>
                </div>
                <div>
                    <button type='button' onClick={()=>handleCalc('4')}>4</button>
                    <button type='button' onClick={()=>handleCalc('5')}>5</button>
                    <button type='button' onClick={()=>handleCalc('6')}>6</button>
                    <button type='button' onClick={()=>handleCalc('-')}>-</button>
                </div>
                
                <div>
                    <button type='button' onClick={()=>handleCalc('7')}>7</button>
                    <button type='button' onClick={()=>handleCalc('8')}>8</button>
                    <button type='button' onClick={()=>handleCalc('9')}>9</button>
                    <button type='button' onClick={()=>handleCalc('*')}>x</button>
                </div>
                <div>
                    <button type='button' onClick={()=>calculate()}>=</button>
                    <button type='button' onClick={()=>handleCalc('0')}>0</button>
                    <button type='button' onClick={()=>handleCalc('/')}>/</button>
                    <button type='button' onClick={clear}>C</button>
                </div>
            </div>
            
        </form>
        </div>
  )
}

export default Calculator