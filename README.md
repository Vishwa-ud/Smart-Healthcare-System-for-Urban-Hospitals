# Smart-Healthcare-System-for-Urban-Hospitals

## Structure

```none
project-directory/
│
├── app.js                     # Main application
├── models/                    # Contains all models
│   ├── globalModel.js          # Singleton Global Model
│   ├── person.js               # Base class for Person
│   ├── patient.js              # Patient class inherits from Person
│   ├── doctor.js               # Doctor class inherits from Person
│   ├── hospitalStaff.js        # HospitalStaff class inherits from Person
│   ├── healthcareManager.js    # HealthcareManager inherits from Person
│   ├── appointment.js          # Appointment model
│   ├── hospitalFactory.js      # Factory for hospital types
│   └── paymentStrategy.js      # Strategy for payment methods
│
├── routes/                    # API endpoints
│   ├── patientRoutes.js        # Patient-related API routes
│   ├── doctorRoutes.js         # Doctor-related API routes
│   ├── hospitalStaffRoutes.js  # HospitalStaff-related API routes
│   ├── healthcareManagerRoutes.js # HealthcareManager-related routes
│   ├── appointmentRoutes.js    # Appointment-related API routes
│   └── paymentRoutes.js        # Payment-related API routes
│
└── services/                  # Business logic and services
    ├── appointmentService.js   # Service handling appointments
    ├── reportService.js        # Service handling reports
    └── hospitalService.js      # Service handling hospital services

```

[x] people
    -doctor
    -staffmember
    -patient
    
[x] appointments
