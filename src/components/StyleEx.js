import React from 'react'
import "./style.css"
const StyleEx = () => {
  const sudheer = {
    color:"blue",
    backgroundColor: "red"
  }
  return (
    <div >
      <h1 style={sudheer}>sudheer</h1>
      <p style={{color:"red", backgroundColor: "black"}}>im good boy and also i have only twoo memners</p>
      <h1 className='danger'>revanth</h1>
    </div>

  )
}

export default StyleEx