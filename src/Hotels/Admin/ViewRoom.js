import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewRoom = () => {
    const [enquiries, setEnq] = useState([])
    const [type, settype] = useState("")
    const [room, setroom] =useState("")
    const [occupancy, setoccupancy] = useState("")
    const[price_per_day,setprice_per_day]=useState("")
    const [_id,setId] = useState("")


     
    useEffect(() => {
        axios.get(`http://localhost:5000/Viewroom`)
        .then((res) =>setEnq(res.data))
        .catch((err) => console.log(err))
    })

    const deleteEnq = (enqId) =>{
        axios.delete(`http://localhost:5000/Viewroom/${enqId}`)
        .then(() =>alert(`Move to Bin`))
        .catch((err) => console.log(err))
    }
   const getonerecord =(enqId)=>{
        axios.get(`http://localhost:5000/Viewroom/${enqId}`)
        .then((res)=>{
            settype(res.data.type)
            setroom(res.data.room)
            setoccupancy(res.data.occupancy)
            setprice_per_day(res.data.price_per_day)
            setId(res.data._id)
        })
        .catch((err)=>console.log(err))
   }
   const updateEnq =(e) =>{
     e.preventDefault();
     axios.put(`https://hotel-server-m85l.onrender.com/Viewroom/${_id}`,{_id,type,room,occupancy,price_per_day})
     .then((res)=>alert("you made it"))
     .catch((err)=>console.log(err))
   }
  return (
    <div className='container p-2'>
        <h5 className='krish text-center p-4'>AVALIABLE<span className='text-danger'>      ROOMS</span></h5>
    <table className='table table-bordered'>
        <thead>
            <tr className='text-center'>
                <th>ROOM TYPE</th>
                <th>OFFERS & DISCOUNTS</th>
                <th>OCCUPANCY</th>
                <th>TARIFF</th>
                <th>CHANGER</th>
            </tr>
        </thead>
        <tbody>
        {
            enquiries.map((Enq, index)=>{
                return(
                <tr key={index}>
                    <td>{Enq.type}</td>
                    <td>{Enq.room}</td>
                    <td>{Enq.occupancy}</td>
                    <td>{Enq.price_per_day}</td>

                    <td>
                        <button onClick={() =>getonerecord(Enq._id)} data-bs-target="#update" data-bs-toggle="modal" className='btn btn-primary me-2 '>Edit</button>
                        <button onClick={() => deleteEnq(Enq._id)} className='btn btn-danger'>Delete</button>
                    </td>

                </tr>
                )
            })
        }
        </tbody>
    </table>
    <div className='modal fade' id='update'>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h3>Thanks for contact us..</h3>
                </div>
                <div className='modal-body'>
                    <form onSubmit={updateEnq}>
                        <input name='type' placeholder='Room Name'value={type} className='form-control mb-3' onChange={(e)=>settype(e.target.value)}/>
                        <input name='room' placeholder=' Number'value={room} className='form-control mb-3' onChange={(e)=>setroom(e.target.value)}/>
                        <input name='occupancy' placeholder='Email Address'value={occupancy} className='form-control mb-3' onChange={(e)=>setoccupancy(e.target.value)}/>
                        <input type='submit' className='form-control mb-3 '/>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ViewRoom