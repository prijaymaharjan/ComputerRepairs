const express = require("express");
const Laptop = require("../models/Laptop");
const router = express.Router();
const validation = require("../validation");

//Laptop
router
  .route("/")
  .get((req, res, next) => {
    Laptop.find()
      .then((laptop) => {
        res.json(laptop);
      })
      .catch(next);
  })

  .post((req, res, next) => {
    const { errors, isValid } = validation.laptopInput(req.body);
    if (!isValid) {
      return res.status(400).json({
        status: "error",
        message: errors,
      });
    }
    Laptop.create(req.body)
      .then((laptop) => {
        res.status(201).json(laptop);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Laptop.deleteMany()
      .then((reply) => {
        res.json(reply);
      })
      .catch(next);
  });

router
  .route("/:laptop_id")
  .get((req, res, next) => {
    Laptop.findById(req.params.laptop_id)
      .then((laptop) => {
        res.json(laptop);
      })
      .catch(next);
  })

  .put((req, res, next) => {
    Laptop.findByIdAndUpdate(
      req.params.laptop_id,
      { $set: req.body },
      { new: true }
    )
      .then((laptop) => {
        res.json(laptop);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Laptop.findByIdAndDelete(req.params.laptop_id)
      .then((reply) => {
        res.json(reply);
      })
      .catch(next);
  });

module.exports = router;
