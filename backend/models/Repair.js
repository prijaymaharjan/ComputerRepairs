const mongoose = require("mongoose");
const Repairschema = new mongoose.Schema({
  Laptops: [{ type: mongoose.Schema.Types.ObjectId, ref: "Laptop" }],
  Email: {
    type: String,
    required: true,
  },
  Detail: {
    type: String,
    required: true,
  },
  Paymentmethod: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Totalamount: {
    type: Number,
    required: true,
  },
  Dates: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("Repair", Repairschema);
