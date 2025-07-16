import axios from 'axios'
import React, { useState } from 'react'

const SendEnquiry = () => {
    const [name, setname] = useState("")
    const [description, setdescription] =useState("")
    const [text, settext] = useState("")

    const submitHandler = (e) =>{
      e.preventDefault();
      axios.post(`https://hotel-server-m85l.onrender.com/roomservices`,{name,description,text})
      .then((res) =>alert("updated Ourhotel @saipriyainn"))
      .catch((err) =>console.log(err) )

      console.log(name,description,text);
    }

  
  return (
    <div>
        <h4 className='mb-4'>Add New Services</h4>
        <form onSubmit={submitHandler}>
          <h6>Accommodation Type : <span className='text-danger'>Service</span> </h6>
            <input name='name' placeholder='Your Guide Service Name' className='form-control mb-3' onChange={(e)=>setname(e.target.value)}/>
          <h6>Display options : <span className='text-danger'>Tagline/Title`</span></h6>
            <input name='description' placeholder=' explore Description for attractions.' className='form-control mb-3' onChange={(e)=>setdescription(e.target.value)}/>
          <h6>Business Text Maker : <span className='text-danger'>Inline Text</span></h6>
            <input name='text' placeholder='Wedding halls, banquet rooms' className='form-control mb-3' onChange={(e)=>settext(e.target.value)}/>
            <input type='submit' placeholder='Enter Name' className='form-control mb-3 '/>
        </form>
    </div>
  )
}

export default SendEnquiry