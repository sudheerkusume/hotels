import React from 'react'
import SendEnquiry from './SendEnquiry'

const Contactus = () => {
  return (
   <section>
    <div className='container pb-5'>
      <div className='row'>
        <div className='blufter col-lg-12 text-center container-fluid'>
          <h1>CONTACT <span className='text-primary'>US</span></h1>
          <p>Our team of customer care Prasad is ready to here from you.</p>
        </div>
          <div className='col-lg-6 pt-5'>
             <SendEnquiry />
          </div>
          <div className='combo col-lg-6 text-center pt-5'>
          <h3 className=' p-3'>Reach out to us</h3>
          <p>Got a queastion about Saipriya? Are you interested in partnering with us?
             Have some suggestions or just want to say hi? Contact us</p>
        <div>


             </div>
        </div>
      </div>
      </div>
   </section>  
  )
}

export default Contactus