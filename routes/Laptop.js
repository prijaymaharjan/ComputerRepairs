const express = require("express");
const Laptop = require("../models/Laptop");
const Customer = require("../models/Customer");
const router = express.Router();

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

//Customer
router
  .route("/:laptop_id/customers")
  .get((req, res, next) => {
    Laptop.findById(req.params.laptop_id)
      .then((laptop) => {
        res.json(laptop.Customers);
      })
      .catch(next);
  })
  .post((req, res, next) => {
    Laptop.findById(req.params.laptop_id)
      .then((laptop) => {
        Customer.create(req.body)
          .then((customer) => {
            laptop.Customers.push(customer.id);
            laptop
              .save()
              .then((laptopupdate) => {
                res.status(201).json(laptopupdate.Customers);
              })
              .catch(next);
          })
          .catch(next);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Laptop.findById(req.params.laptop_id)
      .then((laptop) => {
        Customer.deleteMany({ _id: { $in: laptop.Customers } })
          .then((reply) => {
            laptop.Customers = [];
            laptop
              .save()
              .then((laptopupdate) => {
                res.json({ reply, laptopupdate });
              })
              .catch(next);
          })
          .catch(next);
      })
      .catch(next);
  });

router
  .route("/:laptop_id/customers/:customer_id")

  .get((req, res, next) => {
    Laptop.findById(req.params.laptop_id)
      .then((laptop) => {
        if (laptop.Customers.includes(req.params.customer_id)) {
          Customer.findById(req.params.customer_id)
            .then((customer) => {
              res.json(customer);
            })
            .catch(next);
        } else {
          let err = new Error("Customer not Found");
          err.status(404);
          next(err);
        }
      })
      .catch(next);
  })
  .put((req, res, next) => {
    Laptop.findById(req.params.laptop_id)
      .then((laptop) => {
        if (laptop.Customers.includes(req.params.customer_id)) {
          Customer.findByIdAndUpdate(
            req.params.customer_id,
            { $set: req.body },
            { new: true }
          )
            .then((customer) => {
              res.json(customer);
            })
            .catch(next);
        } else {
          throw new Error("Not Found");
        }
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Laptop.findById(req.params.laptop_id)
      .then((laptop) => {
        if (laptop.Customers.includes(req.params.customer_id)) {
          Customer.deleteOne({ _id: req.params.customer_id })
            .then((reply) => {
              laptop.Customers = laptop.Customers.filter((value) => {
                return value != req.params.customer_id;
              });
              laptop
                .save()
                .then((laptopupdate) => {
                  res.json({ reply, laptopupdate });
                })
                .catch(next);
            })
            .catch(next);
        } else {
          throw new Error("Not Found");
        }
      })
      .catch(next);
  });

module.exports = router;
