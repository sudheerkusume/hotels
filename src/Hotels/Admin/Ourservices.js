// 

import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Ourservices = () => {
    const [enquiries, SetEnq]= useState([])
    const [services, Setservices]= useState("")
    const [description, Setdescription]= useState("")
    const [text, Settext] = useState("")
    const [_id, SetId] = useState("")

    useEffect(()=>{
        axios.get(`https://hotel-server-m85l.onrender.com/roomservices`)
        .then((res)=>SetEnq(res.data))
        .catch((err) => console.log(err))
    })
    const deleteEnq= (enqid)=>{
        axios.delete(`https://hotel-server-m85l.onrender.com/${enqid}`)
        .then((res)=>alert(`movie to bin..`))
        .catch((err) =>console.log(err))
    }
    const getonerecord=(enqid)=>{
        axios.get(`https://hotel-server-m85l.onrender.com/${enqid}`)
        .then((res)=>{
            Setservices(res.data.name)
            Setdescription(res.data.description)
            Settext(res.data.text)
            SetId(res.data._id)
        })
        .catch((err)=>console.log(err))
    }
    const UpdateEnq =(e)=>{
        e.preventDefault();
        axios.put(`https://hotel-server-m85l.onrender.com/${_id}`,{_id,services,description,text})
        .then((res)=>alert(`Posting`))
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container p-2'>
        <h2 className='container p-3 mt-4'>Ourservices</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>services</th>
                    <th>description</th>
                    <th>ChangeOver</th>
                </tr>
            </thead>
            <tbody>
                {
                    enquiries.map((Enq,index)=>{
                        return(
                            <tr key={index}>
                                <td className='text-danger h6'>{Enq.name}</td>
                                <td>{Enq.description}</td>
                                <td>{Enq.text}</td>
                                <td>
                                    <button onClick={()=>getonerecord(Enq._id)} data-bs-target="#Update" data-bs-toggle="modal" className='btn btn-dark text-pink me-3'>Edit</button>
                                    <button onClick={()=>deleteEnq(Enq._id)} data-bs-target="#Update" data-bs-toggle="modal" className='btn btn-info'>clear</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    <div className='modal fade' id='Update'>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h3>thanks for contactus</h3>
                </div>
                <div className='modal-body'>
                    <form onSubmit={UpdateEnq}>
                        <input name='name' placeholder='Add your Services' value={services} className='form-control mb-3' onChange={(e)=>Setservices(e.target.value)}></input>
                        <input name='Description' placeholder='Add your Description' value={description} className='form-control mb-3' onChange={(e)=>Setdescription(e.target.value)}></input>
                        <input name ='text' placeholder='Add your text' value={text} className='from-control mb-3' onChange={(e) =>Settext(e.target.value)}></input>
                        <input type='submit'  className='form-control mb-3'></input>

                    </form>
                </div>
            </div>
        </div>
     
    </div>
    </div>
  )
}

export default Ourservices