const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();
const path = require("path");

// serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cors());
app.use(express.json());

// Routes
const dentistRoutes = require("./routes/dentistRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const authRoutes = require("./routes/authRoutes");
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
app.use("/api/auth", authRoutes);

app.use("/api/dentists", dentistRoutes);
app.use("/api/appointments", appointmentRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));