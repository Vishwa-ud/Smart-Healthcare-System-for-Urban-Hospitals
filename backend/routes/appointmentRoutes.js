
// appointmentRoutes.js
const express = require('express');
const router = express.Router();

// Dummy appointment data for illustration
let appointments = [];

router.get('/', (req, res) => {
    res.json(appointments);
});

router.post('/', (req, res) => {
    const appointment = req.body;
    appointments.push(appointment);
    res.status(201).json(appointment);
});

module.exports = router;
