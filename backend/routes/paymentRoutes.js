
// paymentRoutes.js
const express = require('express');
const router = express.Router();

// Dummy payment data for illustration
let payments = [];

router.get('/', (req, res) => {
    res.json(payments);
});

router.post('/', (req, res) => {
    const payment = req.body;
    payments.push(payment);
    res.status(201).json(payment);
});

module.exports = router;
