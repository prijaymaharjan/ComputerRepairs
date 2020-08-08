const mongoose = require("mongoose");

const Customerschema = new mongoose.Schema(
  {
    Firstname: {
      type: String,
      required: true,
    },
    Lastname: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    Mobile: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Customer", Customerschema);
