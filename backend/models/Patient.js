
// patient.js
class Patient {
    constructor(patientID, name, dob, contactInfo, email, address, medicalHistory, accountStatus) {
        this.patientID = patientID;
        this.name = name;
        this.dob = dob;
        this.contactInfo = contactInfo;
        this.email = email;
        this.address = address;
        this.medicalHistory = medicalHistory;
        this.accountStatus = accountStatus;
        this.appointments = [];
    }

    createAccount() {
        // Logic for creating account
    }

    updateAccount() {
        // Logic for updating account
    }

    viewMedicalRecords() {
        // Logic for viewing medical records
    }

    managePayment(paymentStrategy) {
        paymentStrategy.processPayment();
    }
}

module.exports = Patient;
