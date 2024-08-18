const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
    checkin: Date,
    checkout: Date,
    rooms: Number
});

module.exports = mongoose.model('Booking', bookingSchema);
