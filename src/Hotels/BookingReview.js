import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BookingReview = () => {
  const { id } = useParams(); // room ID from URL
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guestName: "",
    guestEmail: "",
    guestPhone: ""
  });

  // Fetch room details by ID
  useEffect(() => {
    axios
      .get(`https://hotel-server-m85l.onrender.com/Viewroom/${id}`)
      .then((res) => setRoom(res.data))
      .catch((err) => console.error("Error loading room", err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    const { checkIn, checkOut, guestName, guestEmail, guestPhone } = form;

    // Validate date input
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const totalNights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (totalNights <= 0) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    const totalPrice = totalNights * room.price_per_day;

    const payload = {
      roomId: room._id,
      roomTitle: room.room,
      roomPrice: room.price_per_day,
      image: room.image,
      checkIn,
      checkOut,
      totalNights,
      totalPrice,
      guestName,
      guestEmail,
      guestPhone
    };

    try {
      await axios.post("https://hotel-server-m85l.onrender.com/addtocart", payload, {
        headers: {
          "x-token": token
        }
      });
      alert("Room added to cart successfully!");
      navigate("/hotelcart");
    } catch (err) {
      console.error("Failed to add to cart", err.response?.data || err.message);
      alert("Failed to add room to cart.");
    }
  };

  if (!room) return <div className="container mt-5">Loading room details...</div>;

  return (
    <div className="container mt-5">
      <h3>Review Your Booking</h3>
      <div className="card p-4 mt-4">
        <h5>{room.room}</h5>
        <img src={room.image} alt="Room" className="img-fluid mb-3" style={{ maxWidth: "300px" }} />
        <p><strong>Price per night:</strong> ₹{room.price_per_day}</p>

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Check-in Date</label>
              <input type="date" name="checkIn" className="form-control" value={form.checkIn} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label>Check-out Date</label>
              <input type="date" name="checkOut" className="form-control" value={form.checkOut} onChange={handleChange} required />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label>Guest Name</label>
              <input type="text" name="guestName" className="form-control" value={form.guestName} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <label>Email</label>
              <input type="email" name="guestEmail" className="form-control" value={form.guestEmail} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <label>Phone</label>
              <input type="tel" name="guestPhone" className="form-control" value={form.guestPhone} onChange={handleChange} required />
            </div>
          </div>

          <button type="submit" className="btn btn-success">
            Confirm and Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingReview;