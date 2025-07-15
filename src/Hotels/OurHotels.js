import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRoomCart } from './RoomCartContext';
import RoomBookingModal from './RoomBookingModal'; // import modal

const OurHotels = () => {
  const [Hotel, setHotels] = useState([]);
  const { addRoomToCart } = useRoomCart();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/Viewroom")
      .then((res) => setHotels(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleBookClick = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleBookingSubmit = (roomWithGuestDetails) => {
    addRoomToCart(roomWithGuestDetails);
  };

  return (
    <div className='container pb-5'>
      <h5 className='dom text-start p-3'>{Hotel.length} + Rooms</h5>
      <div className='row'>
        {Hotel.map((room, index) => (
          <div key={index} className='col-lg-12'>
            <div className='card'>
              <div className='row'>
                <div className='col-lg-4 p-3'>
                  <img className='aboy card-img-top h-75' src={room.image} alt='error' />
                  <h6 className='card-title h5 text-bg-danger p-1'>{room.type}</h6>
                </div>
                <div className='col-lg-4 card-body'>
                  <h5 className='theboy text-start pb-3'>{room.room}</h5>
                  <p className='card-text text-start'>
                    <strong className='text-success'>{room.refund}</strong><br />
                    <strong>Maximum Occupancy : {room.occupancy}</strong>
                  </p>
                  <p className='sudheer card-text text-start'>
                    <strong>Tax included in room price</strong><br />
                    <strong className='text-success'>{room.food}</strong>
                  </p>
                  <p className='text-danger text-start'>
                    Room Info • <span>Enquire</span>
                    <button className='girl ms-5'>PROMO OFFER</button>
                  </p>
                </div>
                <div className='col-lg-3 col-sm-12 pt-5'>
                  <h4 className='display-7'>
                    {room.price_per_day}
                    <span>
                      <p className='text-end pe-5'>
                        Price for 2 Nights<br />
                        1 Adult , 0 Child, 1 Room
                      </p>
                    </span>
                  </h4>
                  <button
                    className='btn btn-warning'
                    onClick={() => handleBookClick(room)}
                  >
                    Book This Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <RoomBookingModal
          show={showModal}
          onHide={() => setShowModal(false)}
          onSubmit={handleBookingSubmit}
          room={selectedRoom}
        />
      )}
    </div>
  );
};

export default OurHotels;