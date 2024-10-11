const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  paymentID: { type: String, required: true, unique: true },
  patientID: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  paymentMethod: { type: String, required: true },
  status: { type: String, default: 'completed' }
});

PaymentSchema.methods.processPayment = function() {
  // logic to process payment
};

PaymentSchema.methods.viewPaymentHistory = function(patientID) {
  // logic to view payment history
};

module.exports = mongoose.model('Payment', PaymentSchema);
