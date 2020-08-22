const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const cors = require("cors");
router.use(cors("*"));
const auth = require("./Auth");

const validation = require("../validation");
router.post("/register", (req, res, next) => {
  const { error, isValid } = validation.registerInput(req.body);
  if (!isValid) {
    return res.status(400).json({
      status: "error",
      message: error,
    });
  }
  let {
    Username,
    Password,
    Firstname,
    Lastname,
    Role,
    Gender,
    DateofBirth,
    Email,
    Mobile,
    Address,
    Professional,
  } = req.body;
  User.findOne({ Username })
    .then((user) => {
      if (user) {
        let err = new Error("Register Already");
        err.status = 401;
        return next(err);
      }
      bcrypt
        .hash(Password, 8)
        .then((hashed) => {
          User.create({
            Username,
            Password: hashed,
            Firstname,
            Lastname,
            Role,
            Gender,
            DateofBirth,
            Email,
            Mobile,
            Address,
            Professional,
          })
            .then((users) => {
              res.json({ status: "Registration Successfully!" });
            })
            .catch(next);
        })
        .catch(next);
    })
    .catch(next);
});

router.post("/login", (req, res, next) => {
  let { Username, Password } = req.body;
  User.findOne({ Username })
    .then((user) => {
      if (!user) {
        let err = new Error("User Not Found");
        err.status = 401;
        return next(err);
      }
      bcrypt
        .compare(Password, user.Password)
        .then((isMatched) => {
          if (!isMatched) {
            let err = new Error("Password does not Match");
            err.status = 401;
            return next(err);
          }
          let payload = {
            id: user.id,
            Username: user.Username,
            Firstname: user.Firstname,
            Lastname: user.Lastname,
            Role: user.Role,
            Gender: user.Gender,
            DateofBirth: user.DateofBirth,
            Email: user.Email,
            Mobile: user.Mobile,
            Address: user.Address,
            Professional: user.Professional,
          };

          jwt.sign(payload, process.env.SECRET, (err, token) => {
            if (err) {
              return next(err);
            }
            res.json({
              status: "Login Successfully",
              token: `Bearer ${token}`,
            });
          });
        })
        .catch(next);
    })
    .catch(next);
});

router.get("/technicanprofile", (req, res) => {
  const decoded = jwt.verify(req.headers["authorization"], process.env.SECRET);
  User.findOne({
    _id: decoded._id,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send("User does not Exist");
      }
    })
    .catch((err) => {
      res.send("error:" + err);
    });
});
router.get("/admin", (req, res) => {
  const decoded = jwt.verify(req.headers["authorization"], process.env.SECRET);
  User.findOne({
    _id: decoded._id,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send("User does not Exist");
      }
    })
    .catch((err) => {
      res.send("error:" + err);
    });
});

router.get("/customerprofile", (req, res) => {
  const decoded = jwt.verify(req.headers.authorization, process.env.SECRET);
  User.findOne({
    _id: decoded._id,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send("User does not Exist");
      }
    })
    .catch((err) => {
      res.send("error:" + err);
    });
});

router.get("/all", auth.verifyUser, auth.verifyAdmin, (req, res) => {
  User.find().then((users) => {
    res.json(users);
  });
});

module.exports = router;
