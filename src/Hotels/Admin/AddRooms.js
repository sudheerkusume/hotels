import axios from 'axios'
import React, { useState } from 'react'

const AddRooms= () => {
    const [type, settype] = useState("")
    const [room, setroom] =useState("")
    const [occupancy, setoccupancy] = useState("")
    const [price_per_day,setprice_per_day]=useState("")
    const [image, setimage]=useState("")
    const submitHandler = (e) =>{
      e.preventDefault();
      axios.post(`http://localhost:5000/Viewroom`,{type,room,occupancy,price_per_day,image})
      .then((res) =>alert("updated Ourhotel @saipriyainn"))
      .catch((err) =>console.log(err) )
      console.log(type,room,occupancy,price_per_day,image);
    }

  
  return (
    <div>
        <h3 className='mb-4 text-center p-2'>Add <span className='text-light'></span><span className='text-success'>Room</span> </h3>
        <form onSubmit={submitHandler}>
          <h6>Room Type : <span className='text-danger'>MainTitle</span> </h6>
            <input name='type' placeholder='Your Guide Service Name' className='form-control mb-3' onChange={(e)=>settype(e.target.value)}/>
          <h6>Cancelation Process : <span className='text-danger'>Discount/Refund`</span></h6>
            <input name='room' placeholder=' explore Description for attractions.' className='form-control mb-3' onChange={(e)=>setroom(e.target.value)}/>
          <h6>Occupancy : <span className='text-danger'>AddGuest</span></h6>
            <input name='occupancy' placeholder='Wedding halls, banquet rooms' className='form-control mb-3' onChange={(e)=>setoccupancy(e.target.value)}/>
          <h6>Room Tariff : <span className='text-danger'>Payment</span></h6>
            <input name='price_per_day' placeholder='Price Per Day' className='form-control mb-3' onChange={(e)=>setprice_per_day(e.target.value)}/>
          <h6>Gallery : <span className='text-danger'>Room images</span></h6>
            <input name='image' placeholder='Image address' className='form-control mb-3' onChange={(e)=>setimage(e.target.value)}/>

            <input type='submit' placeholder='Enter Name' className='form-control mb-3 '/>
        </form>
    </div>
  )
}

export default AddRooms