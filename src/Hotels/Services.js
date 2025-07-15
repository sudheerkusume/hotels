import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Services = () => {
  const[products,setproducts]= useState([])
  useEffect(() =>{
    axios.get("http://localhost:5000/roomservices")
    .then((res)=>setproducts(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div className='container p-5 '>
        <h1 className='p-2'>Services</h1>
        <div className='priya row'>
            {
                products.map((product,index) => {
                    return(
                        <div key={index} className='col-md-4 mb-3'>
                            <div className='card p-3 h-100'>
                              <div className=' card-body btn btn-info'>
                               <h5 className='card-title p-2'>{product.name}</h5>
                               <p className='card-text'>{product.description}</p>
                               <p className='card-text'>{product.text}</p>
                              </div>
                            </div>
                        </div>
                            
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services