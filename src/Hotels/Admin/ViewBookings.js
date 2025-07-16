import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewBooking = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://hotel-server-m85l.onrender.com/Order")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Room Bookings</h1>

      {orders.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border">Guest Name</th>
                <th className="py-2 px-4 border">Room Title</th>
                <th className="py-2 px-4 border">Check-In</th>
                <th className="py-2 px-4 border">Check-Out</th>
                <th className="py-2 px-4 border">Nights</th>
                <th className="py-2 px-4 border">Total Price</th>
                <th className="py-2 px-4 border">Booking Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) =>
                order.rooms.map((room, idx) => (
                  <tr key={`${index}-${idx}`} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border">{room.guestName}</td>
                    <td className="py-2 px-4 border">{room.roomTitle}</td>
                    <td className="py-2 px-4 border">
                      {new Date(room.checkIn).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border">
                      {new Date(room.checkOut).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border">{room.totalNights}</td>
                    <td className="py-2 px-4 border">₹{room.totalPrice}</td>
                    <td className="py-2 px-4 border">
                      {new Date(order.bookingDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewBooking;
