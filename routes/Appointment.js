const express = require("express");
const Appointmnt = require("../models/Appointment");

const router = express("Router");

router.route("/").get();

module.exports = router;
