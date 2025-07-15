import React, { useContext } from 'react'
import { userData } from './MainComp'

const Comp3 = (props) => {
  const[count,setcount]=useContext(userData)
  return (
    <div className='p-3'>
      <h4>Counter :{count}</h4>
      <button onClick={()=>setcount(count+1)}>getroom</button>
      <button onClick={()=>setcount(count-1)}>remove</button>
    </div>
  )
}

export default Comp3