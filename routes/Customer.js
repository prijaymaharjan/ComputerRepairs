const express = require("express");
const Customer = require("../models/Customer");
const auth = require("../routes/Auth");

const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    Customer.find({ Owner: req.user.id })
      .then((customer) => {
        res.json(customer);
      })
      .catch(next);
  })
  .post((req, res, next) => {
    let { Name, Address, Gender, Mobile, Email } = req.body;

    Customer.create({
      Name,
      Address,
      Gender,
      Mobile,
      Email,
      Owner: req.user.id,
    })
      .then((customer) => {
        res.status(201).json(customer);
      })
      .catch(next);
  })
  .delete(auth.verifyAdmin, (req, res, next) => {
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
