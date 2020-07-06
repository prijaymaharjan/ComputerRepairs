const mongoose = require("mongoose");

const Appointmentschema = new mongoose.Schema(
  {
    Customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    Technican: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Technican",
    },
    Date: {
      type: Date,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },

    Time: {
      type: Number,
      default: new Date().getTime(),
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Appointment", Appointmentschema);
