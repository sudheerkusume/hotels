import React, { useContext, useEffect, useState } from 'react'; 
import axios from 'axios';
import { loginStatus } from '../App';
import { useNavigate } from 'react-router-dom';

const HotelCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useContext(loginStatus);
  const [fuser, setFuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  useEffect(() => {
    const fetchUserAndCart = async () => {
      try {
        const resUser = await axios.get("http://localhost:5000/fuser", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFuser(resUser.data);

        const resCart = await axios.get("http://localhost:5000/mycart", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCartItems(Array.isArray(resCart.data) ? resCart.data : []);
      } catch (err) {
        console.error("Booking fetch error:", err);
        if (err.response?.status === 401 || err.response?.status === 400) {
          setToken("");
        }
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchUserAndCart();
  }, [token, setToken]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/deletecart/${itemId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(cartItems.filter((item) => item._id !== itemId));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const confirmBooking = async () => {
    try {
      const res = await axios.post("http://localhost:5000/confirmbooking", {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(res.data.message || "Booking Confirmed!");
      navigate("/mybookings");
    } catch (err) {
      console.error("Confirm Booking Error:", err);
      alert("Booking failed. Please try again.");
    }
  };

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">🛏️ Your Booking Slots</h2>
        {fuser && (
          <button className="btn btn-outline-danger" onClick={() => setToken("")}>
            Logout
          </button>
        )}
      </div>

      {fuser && (
        <div className="card mb-4 shadow-sm">
          <div className="card-body d-flex align-items-center">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(fuser.name || "User")}&background=0D8ABC&color=fff`}
              alt="User Avatar"
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px" }}
            />
            <div>
              <h5 className="card-title mb-0">
                {showWelcome ? `Hello, ${fuser.name || "Guest"} 👋` : `Welcome back, ${fuser.name || "Guest"}`}
              </h5>
              <p className="card-text text-muted small">Your reserved room details are below</p>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="alert alert-info text-center">No booking slots found.</div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} className="card mb-3 shadow-sm">
              <div className="row g-0">
                <div className="col-md-3 d-flex align-items-center justify-content-center p-3">
                  <img
                    src={item.image}
                    alt={item.roomTitle}
                    className="img-fluid rounded"
                    style={{ maxHeight: "120px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{item.roomTitle}</h5>
                    <p className="card-text mb-1"><strong>Check-In:</strong> {new Date(item.checkIn).toLocaleDateString()}</p>
                    <p className="card-text mb-1"><strong>Check-Out:</strong> {new Date(item.checkOut).toLocaleDateString()}</p>
                    <p className="card-text mb-1"><strong>Guest Name:</strong> {item.guestName}</p>
                    <p className="card-text mb-1"><strong>Guest Email:</strong> {item.guestEmail}</p>
                    <p className="card-text mb-1"><strong>Guest Phone:</strong> {item.guestPhone}</p>
                    <p className="card-text text-success"><strong>Total Nights:</strong> {item.totalNights} night(s)</p>
                  </div>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-center align-items-end p-3">
                  <h5 className="text-dark mb-3">₹{item.totalPrice}</h5>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteItem(item._id)}
                  >
                    Cancel Slot
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="card p-4 mt-4 shadow-sm">
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-semibold">Total Rooms Reserved:</span>
              <span>{totalItems}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-bold">Estimated Total Price:</span>
              <span>₹{totalPrice}</span>
            </div>
            <button className="btn btn-primary mt-4 w-100" onClick={confirmBooking}>
              Confirm Booking
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HotelCart;