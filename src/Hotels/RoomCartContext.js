import React, { createContext, useContext, useState } from 'react';

const RoomCartContext = createContext();

// Provider component
export const RoomCartProvider = ({ children }) => {
  const [roomCartItems, setRoomCartItems] = useState([]);

  const addRoomToCart = async (roomData) => {
    console.log("roomData passed to addRoomToCart:", roomData);

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

    // ✅ Validate price
    if (price_per_day === undefined || price_per_day === null) {
      alert("Room price is missing!");
      return;
    }

    // ✅ Clean price: remove currency symbols and commas
    const cleanPrice = Number(price_per_day.toString().replace(/[^\d]/g, ""));
    if (isNaN(cleanPrice)) {
      alert("Invalid price format.");
      return;
    }

    // ✅ Calculate total nights and price
    const totalNights = Math.ceil(
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
    );

    const totalPrice = totalNights * cleanPrice;

    // ✅ Construct payload
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

    // ✅ Auth check
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first!");
      return;
    }

    try {
      console.log("📦 Sending to backend:", bookingPayload);

      const res = await fetch("https://hotel-server-m85l.onrender.com/addtocart", {
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

      // Optionally update local state
      setRoomCartItems((prevItems) => [...prevItems, data]);
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