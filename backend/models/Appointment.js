
// appointment.js
class Appointment {
    constructor(appointmentID, appointmentDate, patientID, doctorID, service, status) {
        this.appointmentID = appointmentID;
        this.appointmentDate = appointmentDate;
        this.patientID = patientID;
        this.doctorID = doctorID;
        this.service = service;
        this.status = status;
    }

    scheduleAppointment(date, time) {
        // Logic to schedule an appointment
    }

    rescheduleAppointment(newDate, newTime) {
        // Logic to reschedule an appointment
    }

    cancelAppointment() {
        // Logic to cancel an appointment
    }
}

module.exports = Appointment;
