const mongoose = require('mongoose');

const HospitalServiceSchema = new mongoose.Schema({
  serviceID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  cost: { type: Number, required: true }
});

HospitalServiceSchema.methods.processPayment = function() {
  // logic to process payment
};

HospitalServiceSchema.methods.viewServiceDetails = function() {
  // logic to view service details
};

module.exports = mongoose.model('HospitalService', HospitalServiceSchema);
