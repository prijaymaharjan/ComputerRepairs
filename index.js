const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");

require("dotenv/config");
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", router);

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
app.listen(port);
