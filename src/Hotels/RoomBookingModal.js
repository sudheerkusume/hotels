import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RoomBookingModal = ({ show, onHide, onSubmit, room }) => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guestName: '',
    guestEmail: '',
    guestPhone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const {
      checkIn,
      checkOut,
      guestName,
      guestEmail,
      guestPhone,
    } = formData;

    // Validate dates
    if (!checkIn || !checkOut || new Date(checkOut) <= new Date(checkIn)) {
      alert("Please provide valid Check-In and Check-Out dates.");
      return;
    }

    const totalNights = Math.ceil(
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
    );

    const totalPrice = totalNights * room.price_per_day;

    const bookingData = {
      ...room,
      checkIn,
      checkOut,
      guestName,
      guestEmail,
      guestPhone,
      totalNights,
      totalPrice,
    };

    onSubmit(bookingData); // send to addRoomToCart
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enter Booking Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="checkIn">
            <Form.Label>Check-In Date</Form.Label>
            <Form.Control
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="checkOut" className="mt-3">
            <Form.Label>Check-Out Date</Form.Label>
            <Form.Control
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="guestName" className="mt-3">
            <Form.Label>Guest Name</Form.Label>
            <Form.Control
              type="text"
              name="guestName"
              value={formData.guestName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="guestEmail" className="mt-3">
            <Form.Label>Guest Email</Form.Label>
            <Form.Control
              type="email"
              name="guestEmail"
              value={formData.guestEmail}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="guestPhone" className="mt-3">
            <Form.Label>Guest Phone</Form.Label>
            <Form.Control
              type="tel"
              name="guestPhone"
              value={formData.guestPhone}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Book Room
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RoomBookingModal;