const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  patientID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  contactInformation: { type: String, required: true },
  address: { type: String, required: true },
  medicalHistory: { type: String },
  accountStatus: { type: String, default: 'active' }
});

PatientSchema.methods.createAccount = function() {
  // logic for creating account
};

PatientSchema.methods.updateAccount = function() {
  // logic for updating account
};

PatientSchema.methods.viewMedicalRecords = function() {
  // logic to fetch and return medical records
};

PatientSchema.methods.makePayment = function(amount) {
  // logic for making payment
};

module.exports = mongoose.model('Patient', PatientSchema);
