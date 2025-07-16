import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HotelCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to view your cart.");
      return;
    }

    axios.get("https://hotel-server-m85l.onrender.com/mycart", {
      headers: {
        "x-token": token,
      }
    })
    .then((res) => {
      setCartItems(res.data);
    })
    .catch((err) => {
      console.error("Failed to fetch cart", err);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Your Selected Rooms</h3>
      {cartItems.length === 0 ? (
        <p>No rooms in cart.</p>
      ) : (
        cartItems.map((room, index) => (
          <div key={index} className="card mb-3 p-3">
            <div className="row">
              <div className="col-md-4">
                <img src={room.image} alt="Room" className="img-fluid rounded" />
              </div>
              <div className="col-md-8">
                <h5>{room.roomTitle}</h5>
                <p><strong>Check-in:</strong> {new Date(room.checkIn).toLocaleDateString()}</p>
                <p><strong>Check-out:</strong> {new Date(room.checkOut).toLocaleDateString()}</p>
                <p><strong>Total Nights:</strong> {room.totalNights}</p>
                <p><strong>Total Price:</strong> ₹{room.totalPrice}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HotelCart;