const mongoose = require("mongoose");

const Itemschema = new mongoose.Schema(
  {
    Repairs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Repair",
      },
    ],
    Detail: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Item", Itemschema);
