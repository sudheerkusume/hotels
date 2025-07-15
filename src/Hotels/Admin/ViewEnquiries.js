import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiries = () => {
    const [enquiries, setEnq] = useState([])
    const [name, setName] = useState("")
    const [mobile, setmobile] =useState("")
    const [email, setemail] = useState("")
    const [_id,setId] = useState("")

    
    
    useEffect(() => {
        axios.get(`http://localhost:5000/enquiries`)
        .then((res) =>setEnq(res.data))
        .catch((err) => console.log(err));
    })

    const deleteEnq = (enqId) =>{
        axios.delete(`http://localhost:5000/enquiries/${enqId}`)
        .then(() =>alert(`Move to Bin`))
        .catch((err) => console.log(err))
    }
   const getonerecord =(enqId)=>{
        axios.get(`http://localhost:5000/enquiries/${enqId}`)
        .then((res)=>{
            setName(res.data.name)
            setmobile(res.data.mobile)
            setemail(res.data.email)
            setId(res.data._id)
        })
        .catch((err)=>console.log(err))
   }
   const updateEnq =(e) =>{
     e.preventDefault();
     axios.put(`http://localhost:5000/enquiries/${_id}`,{_id,name,mobile,email})
     .then((res)=>alert("you made it"))
     .catch((err)=>console.log(err))
   }
  return (
    <div className='container p-2'>
        <h2 className='pb-3'>ViewEnquiries<span className='text-success'> . . .</span></h2>
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Questions</th>
            </tr>
        </thead>
        <tbody>
        {
            enquiries.map((Enq, index)=>{
                return(
                <tr key={index}>
                    <td>{Enq.name}</td>
                    <td>{Enq.mobile}</td>
                    <td>{Enq.email}</td>
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
                        <input name='user' placeholder='Enter Name'value={name} className='form-control mb-3' onChange={(e)=>setName(e.target.value)}/>
                        <input name='mobile' placeholder='Mobile Number'value={mobile} className='form-control mb-3' onChange={(e)=>setmobile(e.target.value)}/>
                        <input name='email' placeholder='Email Address'value={email} className='form-control mb-3' onChange={(e)=>setemail(e.target.value)}/>
                        <input type='submit' className='form-control mb-3 '/>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ViewEnquiries