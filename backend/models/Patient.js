// models/patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    patientID: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    contactInfo: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    medicalHistory: { type: [String], default: [] },
    accountStatus: { type: String, default: 'Active' }
});

patientSchema.methods.createAccount = async function () {
    try {
        return await this.save();
    } catch (err) {
        throw new Error('Error creating account: ' + err.message);
    }
};

patientSchema.methods.updateAccount = async function (updateData) {
    try {
        Object.assign(this, updateData);
        return await this.save();
    } catch (err) {
        throw new Error('Error updating account: ' + err.message);
    }
};

patientSchema.methods.viewMedicalRecords = function () {
    return this.medicalHistory;
};

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
