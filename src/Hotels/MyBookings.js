import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { loginStatus } from "../App";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [token] = useContext(loginStatus);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/mybookings", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(res.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    if (token) fetchBookings();
  }, [token]);

  return (
    <div className="container my-5">
      <h2 className="mb-4">📜 Your Confirmed Bookings</h2>

      {bookings.length === 0 ? (
        <div className="alert alert-info">You have no confirmed bookings yet.</div>
      ) : (
        bookings.map((order) => (
          <div key={order._id} className="card mb-4 shadow-sm">
            <div className="card-header">
              Booking Date: {new Date(order.bookingDate).toLocaleDateString()}
            </div>
            <div className="card-body">
              {order.rooms.map((room, i) => (
                <div key={i} className="border-bottom pb-2 mb-2">
                  <h5>{room.roomTitle}</h5>
                  <p>Check-In: {new Date(room.checkIn).toLocaleDateString()}</p>
                  <p>Check-Out: {new Date(room.checkOut).toLocaleDateString()}</p>
                  <p>Guest: {room.guestName} ({room.guestPhone})</p>
                  <p>Total Nights: {room.totalNights}</p>
                  <p>₹ {room.totalPrice}</p>
                </div>
              ))}
              <h5>Total Paid: ₹{order.totalAmount}</h5>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBookings;