const express = require('express');
const router = express.Router();
const Booking = require('../booking_models/Booking');
const jwt = require('jsonwebtoken');

// Create a new booking
router.post('/', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secretkey');
    const booking = new Booking({ ...req.body, user: decoded.userId });
    await booking.save();
    res.status(201).send(booking);
});

module.exports = router;
