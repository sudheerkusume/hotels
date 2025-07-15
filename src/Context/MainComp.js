import React, { createContext,  useState } from 'react'
import Comp1 from './Comp1'
 export const userData = createContext()
const MainComp = () => {
  const [count,setcount]= useState(2)
  return (
    <div>
      <userData.Provider value={[count,setcount]}>
      <h4>MainComp</h4>
      <h5>count:{count}</h5>
      <button onClick={()=>setcount(count + 1)}>Get Room</button>
      <button onClick={()=>setcount(count - 1)}>Remove Room</button>

        <Comp1/>
      </userData.Provider>
    </div>
  )
}

export default MainComp