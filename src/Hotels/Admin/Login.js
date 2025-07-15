import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { loginStatus } from '../../App';
import axios from 'axios';

const Login = () => {
    const [details,setdetails] = useState({});
    const [token, setToken]=useContext(loginStatus);
    const navigate = useNavigate();

     
    const changedata =(e)=>{
        setdetails({...details,[e.target.name]:e.target.value})
    }

    const submithandler=(e)=>{
        e.preventDefault();
        console.log(details);
axios.post(`http://localhost:5000/adminlogin`, details)
  .then((res) => {
    setToken(res.data.token);
    localStorage.setItem("token", res.data.token);
  })
  .catch((err) => console.log(err.response?.data || err.message));
    }

    useEffect(() => {
  if (token) {
    navigate("/dashboard");
  }
}, [token]);

  return (
    <div className='container p-5'>
        <div className='col-lg-6 shadow p-4 mx-auto'>
            <h4 className='text-center pb-3'>Admin Dashboard</h4>
            <form onSubmit={submithandler}  className='radio'>
                <input type='text' name='email'onChange={changedata} placeholder='Emailaddress' className='form-control mb-3'></input>
                <input type='password' name='password'onChange={changedata} placeholder='Password' className='form-control mb-3'></input>

                <input type='submit' className='form-control mb-3 btn btn-info'/>
            </form>
        </div>
    </div>
  )
}

export default Login