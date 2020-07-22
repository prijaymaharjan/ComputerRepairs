const express = require("express");
const mongoose = require("mongoose");
const customer = require("./routes/Customer");
const Appointment = require("./routes/Appointment");
const Technican = require("./routes/Technican");
const Laptop = require("./routes/Laptop");
const Repair = require("./routes/Repair");
const Item = require("./routes/Item");
const User = require("./routes/User");
const bodyParser = require("body-parser");
const auth = require("./routes/Auth");
const uploadRouter = require("./routes/upload");
const path = require("path");

require("dotenv/config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/user", User);
app.use("/customer", auth.verifyUser, customer);
app.use("/appointment", Appointment);
app.use("/technican", auth.verifyUser, Technican);
app.use("/laptop", auth.verifyUser, Laptop);
app.use("/repair", /* auth.verifyUser,*/ Repair);
app.use("/item", auth.verifyUser, Item);
app.use("/upload", uploadRouter);
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500);
  res.json({
    status: "error",
    message: err.message,
  });
});

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Connected to Database");
  }
);
app.listen(process.env.Port, () =>
  console.log(`Example app listening at http://localhost:${process.env.Port}`)
);
