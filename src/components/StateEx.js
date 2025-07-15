import React, { useEffect, useState } from 'react'

const StateEx = () => {
    const[count , setcount] = useState(0);
    useEffect(()=>{
        document.title = `you clicked- ${count} times`
    })
  return (
    <div className='container p-5'>
        <h1>counter : {count}</h1>
        <button className='btn btn-primary me-2' onClick={()=>setcount(count + 1)}> INCREAS </button>
        <button className='btn btn-danger' onClick={()=>setcount(count - 1)}> DECRAEES </button>

    </div>
  )
}

export default StateEx