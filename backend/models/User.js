const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: String,
    default: "user" // "admin" or "user"
  }
});

module.exports = mongoose.model("User", userSchema);