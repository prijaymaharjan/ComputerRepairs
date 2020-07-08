const express = require("express");
const Customer = require("../models/Customer");

const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    Customer.find()
      .then((customer) => {
        res.json(customer);
      })
      .catch(next);
  })
  .post((req, res, next) => {
    Customer.create(req.body)
      .then((customer) => {
        res.status(201).json(customer);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Customer.deleteMany()
      .then((reply) => {
        res.json(reply);
      })
      .catch(next);
  });

router
  .route("/:customer_id")
  .get((req, res, next) => {
    Customer.findById(req.params.customer_id)
      .then((customer) => {
        res.json(customer);
      })
      .catch(next);
  })

  .put((req, res, next) => {
    Customer.findByIdAndUpdate(
      req.params.customer_id,
      { $set: req.body },
      { new: true }
    )
      .then((customer) => {
        res.json(customer);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Customer.findByIdAndDelete(req.params.customer_id)
      .then((reply) => {
        res.json(reply);
      })
      .catch(next);
  });

module.exports = router;
