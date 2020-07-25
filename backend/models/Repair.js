const mongoose = require("mongoose");

const Repairschema = new mongoose.Schema({
  Laptops: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Laptop",
    },
  ],

  Detail: {
    type: String,
    required: true,
  },
  Paymentmethod: {
    type: String,
    required: true,
  },
  Totalamount: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("Repair", Repairschema);
