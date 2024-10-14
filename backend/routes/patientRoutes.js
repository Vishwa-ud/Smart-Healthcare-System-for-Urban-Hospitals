
// patientRoutes.js
const express = require('express');
const router = express.Router();

// Dummy patient data for illustration
let patients = [];

router.get('/', (req, res) => {
    res.json(patients);
});

router.post('/', (req, res) => {
    const patient = req.body;
    patients.push(patient);
    res.status(201).json(patient);
});

module.exports = router;
