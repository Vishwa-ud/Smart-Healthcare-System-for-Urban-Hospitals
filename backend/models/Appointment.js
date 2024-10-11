const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  appointmentID: { type: String, required: true, unique: true },
  patientID: { type: String, required: true },
  doctorID: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true },
  appointmentStatus: { type: String, default: 'scheduled' }
});

AppointmentSchema.methods.scheduleAppointment = function(patientID, doctorID, date, time) {
  // logic to schedule appointment
};

AppointmentSchema.methods.rescheduleAppointment = function(appointmentID, newDate, newTime) {
  // logic to reschedule appointment
};

AppointmentSchema.methods.cancelAppointment = function(appointmentID) {
  // logic to cancel appointment
};

AppointmentSchema.methods.viewAppointment = function() {
  // logic to view appointment
};

module.exports = mongoose.model('Appointment', AppointmentSchema);
