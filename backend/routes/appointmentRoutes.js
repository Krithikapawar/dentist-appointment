const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// CREATE appointment
router.post("/", async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.json({ message: "Appointment booked" });
});

// GET all appointments
router.get("/", async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});
// UPDATE STATUS
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;