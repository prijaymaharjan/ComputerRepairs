const express = require("express");
const Appointment = require("../models/Appointment");
const router = express("Router");
const validation = require("../validation");
const auth = require("../routes/Auth");
router
  .route("/")
  .get((req, res, next) => {
    Appointment.find()
      .then((appointment) => {
        res.json(appointment);
      })
      .catch(next);
  })
  .post((req, res, next) => {
    Appointment.create(req.body)
      .then((appointment) => {
        res.status(201).json(appointment);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Appointment.deleteMany()
      .then((reply) => {
        res.json(reply);
      })
      .catch(next);
  });

router
  .route("/:appointment_id")
  .get((req, res, next) => {
    Appointment.findById(req.params.appointment_id)
      .then((appointment) => {
        res.json(appointment);
      })
      .catch(next);
  })

  .put((req, res, next) => {
    Appointment.findByIdAndUpdate(
      req.params.appointment_id,
      { $set: req.body },
      { new: true }
    )
      .then((appointment) => {
        res.json(appointment);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Appointment.findByIdAndDelete(req.params.appointment_id)
      .then((reply) => {
        res.json(reply);
      })
      .catch(next);
  });

module.exports = router;
