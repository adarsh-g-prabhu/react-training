import React from 'react'
import { useSelector } from 'react-redux'
import { increment,decrement } from './redux2'
import { useDispatch } from 'react-redux'
export default function Reduxdispatch() {
    const count= useSelector(state=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
        <button type='button' onClick={()=>dispatch(increment())}>+</ button>
        <button type='button' onClick={()=>dispatch(decrement())}>-</button>
        {count}
    </div>
  )
}
