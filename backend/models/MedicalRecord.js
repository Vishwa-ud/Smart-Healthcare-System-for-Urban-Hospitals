const mongoose = require('mongoose');

const MedicalRecordSchema = new mongoose.Schema({
  recordID: { type: String, required: true, unique: true },
  patientID: { type: String, required: true },
  doctorID: { type: String, required: true },
  diagnosis: { type: String, required: true },
  treatment: { type: String },
  dateRecorded: { type: Date, default: Date.now }
});

MedicalRecordSchema.methods.addRecord = function() {
  // logic for adding a new record
};

MedicalRecordSchema.methods.updateRecord = function() {
  // logic for updating record
};

MedicalRecordSchema.methods.viewRecord = function() {
  // logic to view the record
};

module.exports = mongoose.model('MedicalRecord', MedicalRecordSchema);
