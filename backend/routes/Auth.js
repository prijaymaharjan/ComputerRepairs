const jwt = require("jsonwebtoken");

function verifyUser(req, res, next) {
  let authHeader = req.headers.authorization;
  if (!authHeader) {
    let err = new Error("No authentication information");
    err.status = 401;
    return next(err);
  }
  let token = authHeader.split(" ")[1];
  let data;
  try {
    data = jwt.verify(token, process.env.SECRET);
    req.user = data;
  } catch (err) {
    return next(err);
  }
  next();
}
const verifyAdmin = (req, res, next) => {
  if (!req.user) {
    let err = new Error("Unauthorized!");
    err.status = 401;
    return next(err);
  } else if (req.user.Role !== "Admin") {
    let err = new Error("Forbidden!");
    err.status = 403;
    return next(err);
  }
  next();
};

function verifyTechnican(req, res, next) {
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

module.exports = {
  verifyUser,
  verifyTechnican,
  verifyAdmin,
};
