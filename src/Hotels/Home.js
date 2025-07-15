import React from 'react'
import mainBanner from './accets/hotel1.webp'
import mainBanner1 from './accets/bell.jpg'
import mainbanner2 from './accets/acblock.jpg'
import mainbanner3 from './accets/monitor.jpg'
import cardimage from './accets/card1.jpeg'
import cardimage1 from './accets/card2.jpeg'

const Home = () => {
  return (
    <section>
    <div className=' bg container-fluid p-5'>
        <div className='row p-5'>
            <div className='col-lg-12 col-md-4 col-sm-4 p-5'style={{textAlign:'center'}}>
              <h1 className='bang display-3' >Most Relaxing Place </h1>
              <p>ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE</p>
            </div>
        </div>
    </div>
    <div className='Section-Content p-5'>
      <div className='row'>
        <div className='col-12 p-5'>
          <h1> <u>STAR HOTEL KAKINADA </u></h1>
        </div>
        <div className='col-md-6 col-sm-12 '>
          <div className='section-head text-left p-2'>
            <h2 className='m-b5'data-title="About">HOTEL SAIPRIYA</h2>
         
             <p>"Experience the perfect blend of comfort and elegance at Saipriya Hotel.
             Nestled in the heart of the city, Saipriya offers luxurious accommodations
             , world-class amenities, and impeccable service that caters to both leisure
              and business travelers. Indulge in our gourmet dining options, relax in 
              serene surroundings, and create lasting memories with our personalized
               hospitality. At Saipriya, every moment is crafted to bring you peace and joy, ensuring a stay that feels like home."
             </p>
             <p>Sai Priya Inn in Kakinada, Andhra Pradesh, is a budget-friendly hotel
               located in the G.O. Colony area, about 1.6 km from the city center. 
               It is well-connected to popular commercial and business hubs, making 
               it a convenient choice for both leisure and business travelers.</p>
          </div>
          
          <div className='row equal-wraper '>
            <div className='iron col-3'>
            <figure className="figure">
              <img src={mainBanner1} className="figure-img img-fluid rounded w-75" alt="" />
              <figcaption
                className="figure-caption text-start"
              >
                <h6 className='method'>24 HOUR CHECK OUT</h6>
              </figcaption>
            </figure>
            </div> 

            <div className='spider col-3 '>
            <figure className="figure">
              <img src={mainbanner2} className="figure-img img-fluid rounded w-75" alt="" />
              <figcaption
                className="figure-caption text-start"
              >
                <h6 className='method'>CENTRAL AC</h6>
              </figcaption>
            </figure>
            </div> 

            <div className='captian col-3'>
            <figure className="figure">
              <img src={mainbanner3} className="figure-img img-fluid rounded w-75" alt="" />
              <figcaption
                className="figure-caption text-start"
              >
                <h6 className='method'>TRAVEL DESK</h6>
              </figcaption>
            </figure>
            </div> 
          </div>
        </div>
        <div className='bgi text-center col-12 col-sm-12 col-md-6'>
            <img src={mainBanner} alt='error' className='img-fluid rounded' />
        </div>
        <div className='bullet'>
        <button className='btn btn-danger'>MORE ABOUT - </button>
        </div>
      </div>
    </div>
    <div className='section-head text-center pt-5'>
      <h2 className='m-b5 'data-title="suites">ROOMS AND SUITES</h2>
    </div>
    <section className='container p-5'>
      <div className='row'>
        <div className='col-md-6 col-lg-6 col-xl-6'>
          <div className='card'>
            <img src={cardimage} className="figure-img img-fluid rounded  p-1" alt="" />
            <div className='card-body'>
              <h4 className='card-title'>
                SAIPRIYA SUITES
                <p>ON REQUEST</p>
              </h4>
            </div>
            <div className='card-footer'>
                  <button className='btn btn-dark'>BOOK NOW</button>
              </div>
          </div>
       </div>
       <div className='col-md-6 col-lg-6 col-xl-6'>
          <div className='card'>
            <img src={cardimage1} className="figure-img img-fluid rounded p-2 w-27" alt="" />
            <div className='card-body'>
              <h4 className='card-title'>
                PRESIDENTAL SUITE
                <p>ON REQUEST</p>
              </h4>
              <div className='card-footer'>
                  <button className='btn btn-dark'>BOOK NOW</button>
              </div>
            </div>
          </div>
       </div>
      </div>
    </section>

    <section className='sector1 container-fluid p-5'>
      <div className='row p-1'>
        <div className='col-6 '>
          <h2 className='display-4'>OUR SPECIALIZATION</h2>
        </div>
        <div className='  col-sm-12 col-md-6 col-lg-6 '>
          <button className='btn btn-warning'><h4>ROOMS</h4></button>
          <button className='btn btn-warning'><h4>RESTAURANT</h4></button>
          <button className='btn btn-warning'><h4>MEETING HALL</h4></button>
          <button className='btn btn-warning'><h5>AFFORDABLE LUXURY </h5></button>
        </div>
        <div className=' col-sm-12 col-md-6 '>
          <h3>Discover a hotel that defines a new dimension of luxury.</h3>
        </div>
      </div>
      <div className='row'> 
        <div className='col-lg-4 col-md-6 col-sm-6'>
          <p>Your experience with Hotel Saipriya will be all about personalization,
             every step of the way. We inspire unforgettable experiences with every stay.
              Step into stylish spaces designed for business and leisure at your favorite 
              destination. Our culinary experts strive to deliver cutting edge, stylish 
              to every guests dining experience.</p>
        </div>
      </div>
    </section>
    <section className='container '>
      <div className='footer-section '>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6 p-5'>
            <div className='line-link '>
              <h5 className='title'>QUICK LINKS</h5>
              <ul className="no-dots ">
                <li>ABOUT SAIPRIYA</li>
                <li>SERVICES</li>
                <li>SPECIAL EVENTS</li>
                <li>PRIVACY POLICY</li>
                <li>TERMS FO USE</li>
                <li>CANCELLATION POLICY</li>
              </ul>
            </div>
          </div>
            <div className='dotl  col-lg-5 col-md-6 col-sm-6 p-5 pt-5'>
              <h3 className='card-title'> OUR CLIENT SAYS</h3>
              <br></br>
              <div className='card-text'>
                <h5>VIRAT</h5>
                  <p>Saipriya Hotel was amazing The staff were friendly,
                  the rooms were clean and comfortable, and the food was delicious.
                  It was a relaxing and forever enjoyable stay.  I would definitely recommend
                  it to anyone!"</p>
              </div>
            </div>
          <div className='made col-lg-4 col-md-6 col-sm-6 p-5'>
            <h5>CONTACT US</h5>
            <ul>
              <li>Hotel Saipriya Kakinada, APSRTC Complex Road, kakinada</li>
              <li>info@saipriyagroup.in</li>
              <li>Tel: 0883 2499999</li>
              <li>Mob: +919100561688</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
    </section>
    
    
  )
}

export default Home


