const mongoose = require("mongoose");

const Technincanschema = new mongoose.Schema(
  {
    Email: {
      type: String,
      require: true,
    },
    Mobile: {
      type: Number,
      require: true,
    },
    Address: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Technican", Technincanschema);
