const mongoose = require('mongoose');

const HospitalStaffSchema = new mongoose.Schema({
  staffID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  department: { type: String, required: true },
  contactInformation: { type: String, required: true }
});

HospitalStaffSchema.methods.accessPatientRecords = function(patientID) {
  // logic to access patient records
};

HospitalStaffSchema.methods.updatePatientInfo = function(patientID) {
  // logic to update patient info
};

HospitalStaffSchema.methods.manageAppointments = function(appointment) {
  // logic to manage appointments
};

module.exports = mongoose.model('HospitalStaff', HospitalStaffSchema);
