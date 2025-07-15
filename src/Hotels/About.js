import React from 'react'
import chief from './accets/boss3.JPG'

const About = () => {
  return (
    <div className='beera container p-5'>
      <div className='row'>
        <div className='col-lg-6 col-md-4 col-sm-4 p-3'>
             <h1>ABOUT SAIPRIYA HOTEL</h1>
        </div>
      </div>
      <div className='row'>
      <div className='col-lg-8 col-md-6 col-sm-4'>
      <p>A Legacy of Hospitality, Built for Your Comfort
         Welcome to Saipriya Hotel, where sophistication meets heartfelt hospitality. Situated in the vibrant town of Ravulapalem, our hotel stands as a beacon for travelers seeking comfort, style, and convenience.
         Established with a vision to provide top-notch accommodation and services,
         Saipriya Hotel is more than just a place to rest—its a space designed to make
         every guest feel valued. Whether you're here for business or leisure, we promise 
         an experience that blends modern luxury with a homely charm.</p>
        
      <h2>Our Vision</h2>
        <p className='btn btn-primary'>To provide exceptional service that exceeds expectations,
           fostering trust and loyalty among our guests..</p>
      <h2>Why Choose Us?</h2>
        <ul>
          <li><span className='text-danger'>Prime Location</span>: Centrally located near the city’s key attractions, beaches, and business hubs.</li>
          <li><span className='text-danger'>Luxurious Rooms</span>: Thoughtfully designed to offer comfort, style, and state-of-the-art amenities.</li>
          <li><span className='text-danger'>Culinary Delights</span>: Savor authentic Andhra dishes and international cuisines at our renowned restaurant.</li>
          <li><span className='text-danger'>Modern Facilities</span>: From conference halls to recreational spaces, we cater to every need.</li>
          <li><span className='text-danger'>Unmatched Hospitality</span>: Our dedicated team ensures your stay is nothing short of exceptional.</li>
        </ul>
      <h2>Experience Kakinada with Us</h2>
      <p>Known for its picturesque beaches, rich heritage, and delicious cuisine,
         *Kakinada offers a unique charm that captivates every traveler. At Saipriya Hotel, 
         we provide the perfect base to explore this coastal gem while enjoying the finest in hospitality.</p>
         </div>
         <div className='manager col-lg-4 col-md-2 ps-5'>
          <img src={chief} alt='error'/>
        </div>
        </div>
    </div>
  )
}

export default About