const express = require("express");
const Repair = require("../models/Repair");

const router = express.router();

router
  .route("/")
  .get((req, res, next) => {
    Repair.find()
      .then((repair) => {
        res.json(repair);
      })
      .catch(next);
  })
  .post((req, res, next) => {
    Repair.create(req.body)
      .then((repair) => {
        res.status(201).json(repair);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Repair.deleteMany()
      .then((reply) => {
        res.json(reply);
      })
      .catch(next);
  });

router
  .route("/:repair_id")
  .get((req, res, next) => {
    Repair.findById(req.params.repair_id)
      .then((repair) => {
        res.json(repair);
      })
      .catch(next);
  })

  .put((req, res, next) => {
    Repair.findByIdAndUpdate(
      req.params.repair_id,
      { $set: req.body },
      { new: true }
    )
      .then((repair) => {
        res.json(repair);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Repair.findByIdAndDelete(req.params.repair_id)
      .then((reply) => {
        res.json(reply);
      })
      .catch(next);
  });

module.exports = router;
