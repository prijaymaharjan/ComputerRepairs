const express = require("express");
const Technican = require("../models/Technican");

const router = express("Router");

router.route("/").get();

module.exports = router;
