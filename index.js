const express = require("express");
const mongoose = require("mongoose");
const customer = require("./routes/Customer");
const Appointment = require("./routes/Appointment");
const Technican = require("./routes/Technican");
const Laptop = require("./routes/Laptop");
const Repair = require("./routes/Repair");
const Item = require("./routes/Item");
const bodyParser = require("body-parser");

require("dotenv/config");

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/customer", customer);
app.use("/appointment", Appointment);
app.use("/technican", Technican);
app.use("/laptop", Laptop);
app.use("/repair", Repair);
app.use("/item", Item);

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
