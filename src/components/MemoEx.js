import React, { useMemo, useState } from 'react'
import { useCallback } from 'react'

const MemoEx = () => {
    const [data,setData]=useState(0)
    const [number,setNumber]=useState(5)
    const result = useMemo(()=>{
        return Mul(number)
    },[number])
  return (
    <div className='container p-5'>
        <h2>Counter : {data}</h2>
        <button className='btn btn-danger' onClick={()=>setData(data+2)}>onme</button>
        <h2>Result : {result}</h2>
        <button className='btn btn-primary' onClick={()=>setNumber(number +1)}>add</button>
    </div>
  )
}
const Mul =(number)=>{
    console.log('Mul function was called')
    return number*number
}

export default MemoEx