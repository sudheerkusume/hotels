import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import OurHotels from './OurHotels'; // Capitalized component
import Contactus from './Contactus';
import NoPage from './NoPage';
import Login from './Admin/Login';
import DashBoard from './Admin/DashBoard';
import FLogin from './FLogin';
import BookingReview from './BookingReview';
import Signup from './Signup';
import HotelCart from './NoPage';
import MyBookings from './MyBookings';
import AdminProtectedRoute from './AdminProtectedRoute';

const Routing = () => {
  return (
    <Routes>
      <Route path="/cart" element={<HotelCart />} />
      <Route path="/book/:id" element={<BookingReview />} />
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/ourhotels' element={<OurHotels />} />
      <Route path='/Contactus' element={<Contactus />} />
      <Route path='/admin' element={<Login />} />
      <Route path='/dashboard' element={
        <AdminProtectedRoute>
          <DashBoard />
        </AdminProtectedRoute>
      } />
      <Route path='/login' element={<FLogin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/NoPage' element={<NoPage />} />
      <Route path='/mybookings' element={<MyBookings/>}/>
    </Routes>
  );
};

export default Routing;