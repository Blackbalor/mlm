const jwt = require("jsonwebtoken");

exports.requireSignin = (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
    req.superadmin = decoded.superadmin;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};
