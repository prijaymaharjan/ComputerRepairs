const mongoose = require("mongoose");

const Technincanschema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Mobile: {
      type: Number,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Technican", Technincanschema);
