const express = require ('express');
const dotenv = require("dotenv");
dotenv.config({path: "./.env" });
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB

const DB_URL = process.env.DB_URL.replace(
    "<password>",
    process.env.DB_PASSWORD
);

const DB = mongoose.connect(DB_URL).then (() => {
    console.log("Connected to Database ❤")
});

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Models
const User = require('./models/user');
const Hotel = require('./models/hotel');
const Booking = require('./models/Booking');

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/hotels', require('./routes/hotels'));
app.use('/api/bookings', require('./routes/bookings'));

const Server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
