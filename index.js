const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/Customer");
const Appointment = require("./routes/Appointment");
const Technican = require("./routes/Technican");

require("dotenv/config");
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/customer", router);
app.use("/appointment", Appointment);
app.use("/technican", Technican);

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
