const mongoose = require("mongoose");

const Appointmentschema = new mongoose.Schema(
  {
    Customers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    }],
    Technicans: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Technican",
    }],
    Date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },

    City: {
      type: String,
      required: true,
    },

    Time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Appointment", Appointmentschema);
