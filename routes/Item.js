const express = require("express");
const Item = require("../models/Item");
const Repair = require("../models/Repair");

const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    Item.find()
      .then((item) => {
        res.json(item);
      })
      .catch(next);
  })

  .post((req, res, next) => {
    Item.create(req.body)
      .then((item) => {
        res.status(201).json(item);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Item.deleteMany()
      .then((reply) => {
        res.json(reply);
      })
      .catch(next);
  });

router
  .route("/:item_id")
  .get((req, res, next) => {
    Item.findById(req.params.item_id)
      .then((item) => {
        res.json(item);
      })
      .catch(next);
  })

  .put((req, res, next) => {
    Item.findByIdAndUpdate(
      req.params.item_id,
      { $set: req.body },
      { new: true }
    )
      .then((item) => {
        res.json(item);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Item.findByIdAndDelete(req.params.item_id)
      .then((reply) => {
        res.json(reply);
      })
      .catch(next);
  });

//Repair
router
  .route("/:item_id/repairs")
  .get((req, res, next) => {
    Item.findById(req.params.Item_id)
      .then((item) => {
        res.json(item.Repairs);
      })
      .catch(next);
  })
  .post((req, res, next) => {
    Item.findById(req.params.item_id)
      .then((item) => {
        Repair.create(req.body)
          .then((repair) => {
            item.Repairs.push(repair.id);
            item
              .save()
              .then((itemupdate) => {
                res.status(201).json(itemupdate.Items);
              })
              .catch(next);
          })
          .catch(next);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Item.findById(req.params.item_id)
      .then((item) => {
        Repair.deleteMany({ _id: { $in: item.Repairs } })
          .then((reply) => {
            item.Repairs = [];
            item
              .save()
              .then((itemupdate) => {
                res.json({ reply, itemupdate });
              })
              .catch(next);
          })
          .catch(next);
      })
      .catch(next);
  });

router
  .route("/:item_id/repairs/:repair_id")

  .get((req, res, next) => {
    Item.findById(req.params.item_id)
      .then((item) => {
        if (item.Repairs.includes(req.params.repair_id)) {
          Repair.findById(req.params.repair_id)
            .then((repair) => {
              res.json(repair);
            })
            .catch(next);
        } else {
          let err = new Error("Item not Found");
          err.status(404);
          next(err);
        }
      })
      .catch(next);
  })
  .put((req, res, next) => {
    Item.findById(req.params.item_id)
      .then((item) => {
        if (item.Repairs.includes(req.params.repair_id)) {
          Repair.findByIdAndUpdate(
            req.params.repair_id,
            { $set: req.body },
            { new: true }
          )
            .then((repair) => {
              res.json(repair);
            })
            .catch(next);
        } else {
          throw new Error("Not Found");
        }
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Item.findById(req.params.item_id)
      .then((item) => {
        if (item.Repairs.includes(req.params.repair_id)) {
          Repair.deleteOne({ _id: req.params.repair_id })
            .then((reply) => {
              item.Repairs = item.Repairs.filter((value) => {
                return value != req.params.repair_id;
              });
              item
                .save()
                .then((itemupdate) => {
                  res.json({ reply, itemupdate });
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
