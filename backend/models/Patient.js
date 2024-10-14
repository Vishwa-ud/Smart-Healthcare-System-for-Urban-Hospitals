// models/patient.js
class Patient {
    constructor(patientID, name, dob, contactInfo, email, address, medicalHistory, accountStatus = 'Active') {
        this.patientID = patientID;
        this.name = name;
        this.dob = dob;
        this.contactInfo = contactInfo;
        this.email = email;
        this.address = address;
        this.medicalHistory = medicalHistory || [];
        this.accountStatus = accountStatus;
        this.appointments = [];
    }

    createAccount() {
        // Logic for creating a new account could be handled by pushing the instance to a database
        return {
            patientID: this.patientID,
            name: this.name,
            dob: this.dob,
            contactInfo: this.contactInfo,
            email: this.email,
            address: this.address,
            medicalHistory: this.medicalHistory,
            accountStatus: this.accountStatus,
            appointments: this.appointments,
        };
    }

    updateAccount(updatedData) {
        // Update the patient data
        this.name = updatedData.name || this.name;
        this.dob = updatedData.dob || this.dob;
        this.contactInfo = updatedData.contactInfo || this.contactInfo;
        this.email = updatedData.email || this.email;
        this.address = updatedData.address || this.address;
        this.medicalHistory = updatedData.medicalHistory || this.medicalHistory;
        this.accountStatus = updatedData.accountStatus || this.accountStatus;
    }

    viewMedicalRecords() {
        // Logic for viewing medical records
        return this.medicalHistory;
    }

    managePayment(paymentStrategy) {
        // Delegate the payment processing to the provided strategy
        return paymentStrategy.processPayment();
    }
}

module.exports = Patient;
