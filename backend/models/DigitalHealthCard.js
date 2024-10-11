const mongoose = require('mongoose');

const DigitalHealthCardSchema = new mongoose.Schema({
  cardID: { type: Number, required: true, unique: true },
  linkedPatient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  issueDate: { type: Date, default: Date.now },
  barCode: { type: String, required: true },
  qrCode: { type: String, required: true }
});

DigitalHealthCardSchema.methods.scanCard = function() {
  // logic to scan card and fetch patient
};

DigitalHealthCardSchema.methods.generateCard = function(patient) {
  // logic to generate a new card for patient
};

module.exports = mongoose.model('DigitalHealthCard', DigitalHealthCardSchema);
