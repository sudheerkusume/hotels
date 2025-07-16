import React, { useContext, useEffect, useMemo, useState } from 'react'
import Welcomes from './Welcomes'
import  ViewEnquiries from './ViewEnquiries'
import AddServices from './AddServices'
import Ourservices from './Ourservices'
import AddRooms from './AddRooms'
import ViewRoom from './ViewRoom'
import { loginStatus } from '../../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ViewBookings from './ViewBookings'

const DashBoard = () => {
  const [view, setview] = useState("")
  const [token, setToken]= useContext(loginStatus)
   const [user, setUser] = useState({})
  const  navigate = useNavigate();
  useEffect(() => {
  axios.get("https://hotel-server-m85l.onrender.com/dashboard", {
    headers: {
      "x-token": token
    }
  })
  .then((res) => {
    setUser(res.data);
  })
  .catch((err) => {
    console.log(err);
    setToken(""); // If invalid token, log out
    localStorage.removeItem("token")
    navigate("/admin");
  });
}, [token]);

  const dashboardview = useMemo(
    ()=>{
      if(view === ""){
        return <Welcomes/>
      }
      else if(view==="addHotel"){
          return<AddRooms/>
      }
      else if(view==="viewRoom"){
        return<ViewRoom/>
      }
      else if(view==="viewServices"){
        return<Ourservices/>
      }
      else if(view==="viewEnquiry"){
        return<ViewEnquiries/>
      }
      else if(view==="addServices"){
        return<AddServices/>
      }
      else if (view === "viewBookings") {
  return <ViewBookings />;
}
      else{
        return<h1>invalid view</h1>
      }
      
    },[view]
  )
  if(token === ""){
    navigate("/admin")
  }
  else{
    return (
      <div className='container-fluid'>
        <div className='row'>
          <aside className='col-lg-3'>
            <h4 onClick={()=>setview("")}>Welcome {user.name}</h4>
            <button onClick={() =>  setview("addHotel")}>Add Room</button>
            <button onClick={() =>  setview("viewRoom")}>View Room</button>
            <button onClick={() =>  setview("addServices")}>Add Services</button>
            <button onClick={() =>  setview("viewServices")}>View Services</button>
            <button onClick={() =>  setview("viewEnquiry")}>View Enquiries</button>
            <button className='btn btn-secondary'  onClick={() =>  setToken("")}>Log out</button>
            <button onClick={() => setview("viewBookings")}>Bookings</button>
          </aside>
          <div className='col-lg-9'>
            {dashboardview}
          </div>
        </div>
      </div>
    )
  
  }
}
export default DashBoard