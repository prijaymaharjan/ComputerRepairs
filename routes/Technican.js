const express = require("express");
const Technican = require("../models/Technican");

const router = express("Router");

router
  .route("/")
  .get((req, res, next) => {
    Technican.find()
      .then((technican) => {
        res.json(technican);
      })
      .catch(next);
  })

  .post((req, res, next) => {
    Technican.create(req.body)
      .then((technican) => {
        res.status(201).json(technican);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Technican.deleteMany()
      .then((reply) => {
        res.json(reply);
      })
      .catch(next);
  });

router
  .route("/:technican_id")
  .get((req, res, next) => {
    Technican.findById(req.params.technican_id)
      .then((technican) => {
        res.json(technican);
      })
      .catch(next);
  })

  .put((req, res, next) => {
    Technican.findByIdAndUpdate(
      req.params.technican_id,
      { $set: req.body },
      { new: true }
    )
      .then((technican) => {
        res.json(technican);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Technican.findByIdAndDelete(req.params.technican_id)
      .then((reply) => {
        res.json(reply);
      })
      .catch(next);
  });

module.exports = router;
