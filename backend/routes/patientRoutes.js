// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// Dummy in-memory storage for patients
let patients = [];

// Get all patients
router.get('/', (req, res) => {
    res.json(patients);
});

// Get a patient by ID
router.get('/:patientID', (req, res) => {
    const patient = patients.find(p => p.patientID === req.params.patientID);
    if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
});

// Create a new patient
router.post('/', (req, res) => {
    const { patientID, name, dob, contactInfo, email, address, medicalHistory } = req.body;

    // Check for existing patient
    if (patients.some(p => p.patientID === patientID)) {
        return res.status(400).json({ message: 'Patient with this ID already exists' });
    }

    const newPatient = new Patient(patientID, name, dob, contactInfo, email, address, medicalHistory);
    patients.push(newPatient.createAccount());
    res.status(201).json(newPatient);
});

// Update a patient
router.put('/:patientID', (req, res) => {
    const patientIndex = patients.findIndex(p => p.patientID === req.params.patientID);
    if (patientIndex === -1) {
        return res.status(404).json({ message: 'Patient not found' });
    }

    // Re-create the patient instance
    const existingPatientData = patients[patientIndex];
    const patient = new Patient(
        existingPatientData.patientID,
        existingPatientData.name,
        existingPatientData.dob,
        existingPatientData.contactInfo,
        existingPatientData.email,
        existingPatientData.address,
        existingPatientData.medicalHistory,
        existingPatientData.accountStatus
    );

    // Update patient details using the instance method
    patient.updateAccount(req.body);

    // Update the in-memory storage
    patients[patientIndex] = patient;
    res.json(patient);
});

// Delete a patient
router.delete('/:patientID', (req, res) => {
    const index = patients.findIndex(p => p.patientID === req.params.patientID);
    if (index === -1) {
        return res.status(404).json({ message: 'Patient not found' });
    }

    patients.splice(index, 1);
    res.json({ message: 'Patient deleted successfully' });
});

module.exports = router;
