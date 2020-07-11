const express = require("express");
const Appointment = require("../models/Appointment");
const Customer = require("../models/Customer");
const Technican = require("../models/Technican");
const router = express("Router");

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

//Customer

router
  .route("/:appointment_id/customers")
  .get((req, res, next) => {
    Appointment.findById(req.params.appointment_id)
      .then((appointment) => {
        res.json(appointment.Customers);
      })
      .catch(next);
  })
  .post((req, res, next) => {
    Appointment.findById(req.params.appointment_id)
      .then((appointment) => {
        Customer.create(req.body)
          .then((customer) => {
            appointment.Customers.push(customer.id);
            appointment
              .save()
              .then((appointmentupdate) => {
                res.status(201).json(appointmentupdate.Customers);
              })
              .catch(next);
          })
          .catch(next);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Appointment.findById(req.params.appointment_id)
      .then((appointment) => {
        Customer.deleteMany({ _id: { $in: appointment.Customers } })
          .then((reply) => {
            appointment.Customers = [];
            appointment
              .save()
              .then((appointmentupdate) => {
                res.json({ reply, appointmentupdate });
              })
              .catch(next);
          })
          .catch(next);
      })
      .catch(next);
  });

router
  .route("/:appointment_id/customers/:customer_id")
  .get((req, res, next) => {
    Appointment.findById(req.params.appointment_id)
      .then((appointment) => {
        if (appointment.Customers.includes(req.params.customer_id)) {
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
    Appointment.findById(req.params.appointment_id)
      .then((appointment) => {
        if (appointment.customers.includes(req.params.customer_id)) {
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
    Appointment.findByI(req.params.appointment_id)
      .then((appointment) => {
        if (appointment.Customers.includes(req.params.customer_id)) {
          Customer.deleteOne({ _id: req.params.customer_id })
            .then((reply) => {
              appointment.Customers = appointment.Customers.filter((value) => {
                return value != req.params.customer_id;
              });
              appointment
                .save()
                .then((appointmentupdate) => {
                  res.json({ reply, appointmentupdate });
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

//Technican

router
  .route("/:appointment_id/technicans")
  .get((req, res, next) => {
    Appointment.findById(req.params.appointment_id)
      .then((appointment) => {
        res.json(appointment.Technicans);
      })
      .catch(next);
  })
  .post((req, res, next) => {
    Appointment.findById(req.params.appointment_id)
      .then((appointment) => {
        Technican.create(req.body)
          .then((technican) => {
            appointment.Technicans.push(technican.id);
            appointment
              .save()
              .then((appointmentupdate) => {
                res.status(201).json(appointmentupdate.Technicans);
              })
              .catch(next);
          })
          .catch(next);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Appointment.findById(req.params.appointment_id)
      .then((appointment) => {
        Technican.deleteMany({ _id: { $in: appointment.Technicans } })
          .then((reply) => {
            appointment.Technicans = [];
            appointment
              .save()
              .then((appointmentupdate) => {
                res.json({ reply, appointmentupdate });
              })
              .catch(next);
          })
          .catch(next);
      })
      .catch(next);
  });

router
  .route("/:appointment_id/technicans/:technican_id")

  .get((req, res, next) => {
    Appointment.findById(req.params.appointment_id)
      .then((appointment) => {
        if (appointment.Technicans.includes(req.params.technican_id)) {
          Technican.findById(req.params.technican_id)
            .then((technican) => {
              res.json(technican);
            })
            .catch(next);
        } else {
          let err = new Error("Technican not Found");
          err.status(404);
          next(err);
        }
      })
      .catch(next);
  })
  .put((req, res, next) => {
    Appointment.findById(req.params.appointment_id)
      .then((appointment) => {
        if (appointment.Technicans.includes(req.params.technican_id)) {
          Technican.findByIdAndUpdate(
            req.params.technican_id,
            { $set: req.body },
            { new: true }
          )
            .then((technican) => {
              res.json(technican);
            })
            .catch(next);
        } else {
          throw new Error("Not Found");
        }
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    Appointment.findById(req.params.appointment_id)
      .then((appointment) => {
        if (appointment.Technicans.includes(req.params.technican_id)) {
          Technican.deleteOne({ _id: req.params.technican_id })
            .then((reply) => {
              appointment.Technicans = appointment.Technicans.filter(
                (value) => {
                  return value != req.params.technican_id;
                }
              );
              appointment
                .save()
                .then((appointmentupdate) => {
                  res.json({ reply, appointmentupdate });
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
