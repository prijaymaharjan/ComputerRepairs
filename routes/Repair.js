const express = require("express");
const Repair = require("../models/Repair");
const Laptop = require("../models/Laptop");

const router = express.Router();

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

//Laptop
router
  .route("/:repair_id/laptops")
  .get((req, res, next) => {
    Repair.findById(req.params.repair_id)
      .then((repair) => {
        res.json(repair.Laptops);
      })
      .catch(next);
  })
  .post((req, res, next) => {
    Repair.findById(req.params.repair_id)
      .then((repair) => {
        Laptop.create(req.body)
          .then((laptop) => {
            repair.Laptops.push(laptop.id);
            repair
              .save()
              .then((repairupdate) => {
                res.status(201).json(repairupdate.Laptops);
              })
              .catch(next);
          })
          .catch(next);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Repair.findById(req.params.repair_id)
      .then((repair) => {
        Laptop.deleteMany({ _id: { $in: repair.Laptops } })
          .then((reply) => {
            repair.Laptops = [];
            repair
              .save()
              .then((repairupdate) => {
                res.json({ reply, repairupdate });
              })
              .catch(next);
          })
          .catch(next);
      })
      .catch(next);
  });

router
  .route("/:repair_id/laptops/:laptop_id")

  .get((req, res, next) => {
    Repair.findById(req.params.repair_id)
      .then((repair) => {
        if (repair.Laptops.includes(req.params.laptop_id)) {
          Laptop.findById(req.params.laptop_id)
            .then((laptop) => {
              res.json(repair);
            })
            .catch(next);
        } else {
          let err = new Error("Laptop not Found");
          err.status(404);
          next(err);
        }
      })
      .catch(next);
  })
  .put((req, res, next) => {
    Repair.findById(req.params.repair_id)
      .then((repair) => {
        if (repair.Laptops.includes(req.params.laptop_id)) {
          Laptop.findByIdAndUpdate(
            req.params.laptop_id,
            { $set: req.body },
            { new: true }
          )
            .then((laptop) => {
              res.json(laptop);
            })
            .catch(next);
        } else {
          throw new Error("Laptop Not Found");
        }
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Repair.findById(req.params.repair_id)
      .then((repair) => {
        if (repair.Laptops.includes(req.params.laptop_id)) {
          Laptop.deleteOne({ _id: req.params.laptop_id })
            .then((reply) => {
              repair.Laptops = repair.Laptops.filter((value) => {
                return value != req.params.laptop_id;
              });
              laptop
                .save()
                .then((repairupdate) => {
                  res.json({ reply, repairupdate });
                })
                .catch(next);
            })
            .catch(next);
        } else {
          throw new Error("Laptop Not Found");
        }
      })
      .catch(next);
  });

module.exports = router;
