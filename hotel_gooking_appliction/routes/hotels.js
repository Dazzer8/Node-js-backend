const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotel');

// Get all hotels
router.get('/', async (req, res) => {
    const hotels = await Hotel.find();
    res.json(hotels);
});

// Add a new hotel
router.post('/', async (req, res) => {
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.status(201).send(hotel);
});

module.exports = router;
