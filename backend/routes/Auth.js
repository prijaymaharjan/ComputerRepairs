const jwt = require("jsonwebtoken");

function verifyUser(req, res, next) {
  let authHeader = req.headers.authorization;
  if (!authHeader) {
    let err = new Error("No authorization infomation");
    err.status = 401;
    return next(err);
  }

  let token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.SECRET, (err, payload) => {
    if (err) {
      let error = new Error("Token could not be Verified");
      return next(error);
    }
    req.user = payload;
    next();
  });
}

function verifyManager(req, res, next) {
  if (!req.user) {
    let err = new Error("No Authentication information");
    err.status = 401;
    return next(err);
  } else if (req.user.Role == "Basic") {
    let err = new Error("Forbidden!");
    err.status = 403;
    return next(err);
  }
  next();
}

function verifyAdmin(req, res, next) {
  if (!req.user) {
    let err = new Error("No Authentication information");
    err.status = 401;
    return next(err);
  } else if (req.user.Role != "Admin") {
    let err = new Error("Forbidden!");
    err.status = 403;
    return next(err);
  }
  next();
}

module.exports = {
  verifyUser,
  verifyManager,
  verifyAdmin,
};
