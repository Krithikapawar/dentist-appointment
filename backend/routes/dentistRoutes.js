const express = require("express");
const router = express.Router();
const Dentist = require("../models/Dentist");
const multer = require("multer");

// storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// POST dentist with image
router.post("/", upload.single("photo"), async (req, res) => {
  const dentist = new Dentist({
    ...req.body,
    photo: req.file ? `/uploads/${req.file.filename}` : ""
  });

  await dentist.save();
  res.json(dentist);
});

// GET all dentists
router.get("/", async (req, res) => {
  const dentists = await Dentist.find();
  res.json(dentists);
});


module.exports = router;