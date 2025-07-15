import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { FaBed } from 'react-icons/fa';
import Collapse from 'bootstrap/js/dist/collapse'; // ✅ Import directly

const Header = () => {
  const closeNavbar = () => {
    const navbar = document.getElementById('mainNavbar');
    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse = new Collapse(navbar, {
        toggle: false, // don't auto toggle
      });
      bsCollapse.hide(); // manually close
    }
  };

  return (
    <header className="container-fluid px-4 shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container">
          <NavLink className="navbar-brand d-flex flex-column" to="/" onClick={closeNavbar}>
            <h4><span className="text-danger">SAI PRIYA</span> INN</h4>
            <small className="text-muted">Your comfort, our commitment.</small>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={closeNavbar}>HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={closeNavbar}>ABOUT US</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services" onClick={closeNavbar}>SERVICES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus" onClick={closeNavbar}>CONTACT US</NavLink>
              </li>
            </ul>

            <div className="d-flex flex-wrap gap-2 mt-3 mt-lg-0">
              <NavLink to="/ourhotels" onClick={closeNavbar}>
                <button className="btn btn-danger">GET A ROOM</button>
              </NavLink>
              <NavLink to="/NoPage" onClick={closeNavbar}>
                <button className="btn btn-outline-success"><FaBed /></button>
              </NavLink>
              <NavLink to="/login" onClick={closeNavbar}>
                <button className="btn btn-outline-primary"><FiLogIn /> Login</button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;