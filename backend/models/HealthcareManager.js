const mongoose = require('mongoose');

const HealthcareManagerSchema = new mongoose.Schema({
  managerID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  department: { type: String, required: true },
  contactInformation: { type: String, required: true }
});

HealthcareManagerSchema.methods.viewReports = function(reportType) {
  // logic to view reports
};

HealthcareManagerSchema.methods.scheduleReports = function(reportType, interval) {
  // logic to schedule reports generation
};

module.exports = mongoose.model('HealthcareManager', HealthcareManagerSchema);
