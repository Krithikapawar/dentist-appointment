const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  age: Number,
  gender: String,
  appointmentDate: Date,
  dentistName: String,
  clinicName: String,
  status: {
  type: String,
  default: "Booked"
}
});
module.exports = mongoose.model("Appointment", appointmentSchema);