import axios from 'axios'
import React, { useState } from 'react'

const SendEnquiry = () => {
  const [name, setName] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:5000/enquiries`, { name, mobile, email })
      .then((res) => {
        alert("Your Enquiry Sent ✅");
        setName("");
        setmobile("");
        setemail("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h4 className='combo1'>Make a Request <span className='text-success'>...</span></h4>
      <form onSubmit={submitHandler}>
        <input
          name='name'
          value={name}
          placeholder='Full Name'
          className='form-control mb-3'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name='mobile'
          value={mobile}
          placeholder='Mobile Number'
          className='form-control mb-3'
          onChange={(e) => setmobile(e.target.value)}
        />
        <input
          name='email'
          value={email}
          placeholder='Email Address'
          className='form-control mb-3'
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type='submit'
          value='Send Enquiry'
          className='form-control mb-3 btn btn-success'
        />
      </form>
    </div>
  )
}

export default SendEnquiry
