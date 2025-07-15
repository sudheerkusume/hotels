import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const BasicRead = () => {

  const [products , setproducts] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((res) => setproducts(res.data))
    .catch((err) => console.log(err))
  })
  return (
    <div className='container-fluid'>
            <h1 className=' pb-5 text-danger text-center'>PRODUCTS</h1>
    <div className='row  p-5 '>
       {
        products.map((product,index) =>{
          return (
            <div key={index} className='col-md-3 mb-4 '>
              <div className='card h-100'>
                <img 
                className='card-img-top p-5'
                src={product.image}
                alt={product.title}
                />
                <div className='card-body'>
                  <h6 className='card-title'>{product.title}</h6>
                  <p className='card-text text-success'>
                    <strong>Price : </strong>{product.price}
                  </p>
                  <details>
                  <summary className='text-danger'>See more product details</summary>
                  <p className='text-dark'>{product.description}</p>
                  </details>
                 <p className='card-text'>RATING  : {product.rating.rate}</p>
                  <button className='btn btn-primary me-2'>BUY NOW</button>
                  <button className='btn btn-warning'>Add to cart</button>
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

export default BasicRead