const mongoose = require("mongoose");

const Laptopschema = new mongoose.Schema(
  {
    Customers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
      },
    ],
    Model: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Laptop", Laptopschema);
