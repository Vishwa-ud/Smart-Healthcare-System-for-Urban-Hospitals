//necessary imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/conn");
const path = require("path");

//file path imports
const patientRoutes = require('./routes/patientRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const paymentRoutes = require('./routes/paymentRoutes');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/payments', paymentRoutes);


app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {});
