const mongoose = require("mongoose");

const Appointmentschema = new mongoose.Schema(
  {
    Customers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
      },
    ],
    Technicans: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Technican",
      },
    ],
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
