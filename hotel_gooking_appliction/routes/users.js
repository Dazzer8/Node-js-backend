const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// User registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send(user);
});

// User login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        const token = jwt.sign({ userId: user._id }, 'secretkey');
        res.json({ token });
    } else {
        res.status(400).send('Invalid credentials');
    }
});

module.exports = router;
