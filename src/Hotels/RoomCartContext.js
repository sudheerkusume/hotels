import React, { createContext, useContext, useState } from 'react';

const RoomCartContext = createContext();

// Provider component
export const RoomCartProvider = ({ children }) => {
  const [roomCartItems, setRoomCartItems] = useState([]);

  const addRoomToCart = async (roomData) => {
    const {
      _id,
      room, // this is the room title
      price_per_day,
      image,
      checkIn,
      checkOut,
      guestName,
      guestEmail,
      guestPhone
    } = roomData;

    // ✅ Clean price: remove currency symbols and commas
    const cleanPrice = Number(price_per_day.toString().replace(/[^\d]/g, ""));
    if (isNaN(cleanPrice)) {
      alert("Invalid price format.");
      return;
    }

    const totalNights = Math.ceil(
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
    );
    const totalPrice = totalNights * cleanPrice;

    const bookingPayload = {
      roomId: _id,
      roomTitle: room,
      roomPrice: cleanPrice,
      image,
      checkIn,
      checkOut,
      totalNights,
      totalPrice,
      guestName,
      guestEmail,
      guestPhone
    };

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first!");
      return;
    }

    try {
      console.log("📦 Sending to backend:", bookingPayload);

      const res = await fetch("http://localhost:5000/addtocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(bookingPayload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data = await res.json();
      console.log("✅ Room added to cart:", data);
      alert("Room added to cart!");

      setRoomCartItems((prevItems) => [...prevItems, data]); // Optional: update local state
    } catch (err) {
      console.error("❌ Failed to add room:", err.message);
      alert("❌ Failed to add room: " + err.message);
    }
  };

  return (
    <RoomCartContext.Provider value={{ roomCartItems, addRoomToCart }}>
      {children}
    </RoomCartContext.Provider>
  );
};

// Hook to access the context
export const useRoomCart = () => useContext(RoomCartContext);

