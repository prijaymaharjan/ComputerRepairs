const mongoose = require("mongoose");

const Appointmentschema = new mongoose.Schema(
  {
    Firstname: {
      type: String,
      required: true,
    },
    Lastname: {
      type: String,
      required: true,
    },

    Email: {
      type: String,
      required: true,
    },

    Mobile: {
      type: String,
      required: true,
    },
    Subject: {
      type: String,
      required: true,
    },
    Message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Appointment", Appointmentschema);
