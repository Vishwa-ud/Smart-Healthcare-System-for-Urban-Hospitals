const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  doctorID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  contactInformation: { type: String, required: true }
});

DoctorSchema.methods.viewPatientRecords = function(patientID) {
  // logic to view patient records
};

DoctorSchema.methods.addDiagnosis = function(patientID, diagnosis) {
  // logic to add diagnosis
};

DoctorSchema.methods.updateSchedule = function(appointment) {
  // logic to update doctor's appointment schedule
};

module.exports = mongoose.model('Doctor', DoctorSchema);
