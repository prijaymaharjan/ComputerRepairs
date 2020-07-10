const mongoose = require("mongoose");

const Repairschema = new mongoose.Schema({
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
});
module.exports = mongoose.model("Repair", Repairschema);
