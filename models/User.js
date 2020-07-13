const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    Username: {
      type: String,
      required: true,
      unique: true,
      minlength: 6,
    },
    Password: {
      type: String,
      required: true,
    },
    Firstname: {
      type: String,
      required: true,
    },
    Lastname: {
      type: String,
      required: true,
    },
    Role: {
      type: String,
      default: "basic",
    },
    Gender: {
      type: String,
      required: true,
    },
    DateofBirth: {
      type: Date,
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
    Address: {
      type: String,
      required: true,
    },
    Professional: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
