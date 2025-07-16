import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import { loginStatus } from '../App';

const FLogin = () => {
  const [details, setDetails] = useState({});
  const [token, setToken] = useContext(loginStatus)
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://hotel-server-m85l.onrender.com/Ulogin', details);
      const token = res.data.token;

      localStorage.setItem('token', token);
      setToken(token);
      console.log("Token saved to localStorage:", token);

      alert(res.data.message);
      navigate('/NoPage');
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      setError(msg);

      // Auto-hide after 3 seconds
      setTimeout(() => setError(""), 3000);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/NoPage");
    }
  }, [token, navigate]);

  return (
    <div className="container p-5">
      <div className="col-lg-6 shadow p-5 mx-auto">
        <h3 className="mb-4">User Login</h3>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
            className="form-control mb-3"
            required
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="form-control mb-3"
            required
          />
          <input
            type="submit"
            className="form-control btn btn-primary mb-3"
            value="Login"
          />
          <p>
            Don't have an account?{" "}
            <NavLink to="/Signup">Register here</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FLogin;