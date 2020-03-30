const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const authHeader = req.headers["x-auth-acc"];

  if (!authHeader) return next();

  const parts = authHeader.split(" ");

  if (!parts.lenght === 2) return next();

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) return next();

  jwt.verify(token, "process.env.SECRET", (err, decoded) => {
    req.user = decoded;
    return next();
  });
};
