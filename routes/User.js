const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/register", (req, res, next) => {
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
          User.create(
            { Username, Password: hashed },
            Firstname,
            Lastname,
            Role,
            Gender,
            DateofBirth,
            Email,
            Mobile,
            Address,
            Professional
          )
            .then((user) => {
              res.json(user);
            })
            .catch(next);
        })
        .catch(next);
    })
    .catch(next);
});

// router.route("/login", (req, res, next) => {
//   let { Username, Password } = req.body;
//   User.findOne({ Username })
//     .then((user) => {
//       if (!user) {
//         let err = new Error("User Not Found");
//         err.status = 401;
//         return next(err);
//       }
//       bcrypt
//         .compare(Password, user.Password)
//         .then((isMatched) => {
//           if (!isMatched) {
//             let err = new Error("Password does not Match");
//             err.status = 401;
//             return next(err);
//           }
//           let payload = {
//             id: user.id,
//             Username: user.Username,
//             Firstname: user.Firstname,
//             Lastname: user.Lastname,
//             Role: user.Role,
//             Gender: user.Gender,
//             DateofBirth: user.DateofBirth,
//             Email: user.Email,
//             Mobile: user.Mobile,
//             Address: user.Address,
//             Professional: user.Professional,
//           };
//           jwt.sign(payload, "THisIsMySecretKey", (err, token) => {
//             if (err) {
//               return next(err);
//             }
//             res.json({
//               status: "Login Successful",
//               token,
//             });
//           });
//         })
//         .catch(next);
//     })
//     .catch(next);
// });

module.exports = router;
