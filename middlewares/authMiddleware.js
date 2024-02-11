const JWT = require("jsonwebtoken");

//Only executes when next is called
module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1]; //bearer token[1]
    JWT.verify(token, process.env.JWT_SECRET, (error, decode) => {
      if (error) {
        return res.status(401).send({
          success: false,
          message: "Authentication failed",
        });
      } else {
        req.body.userId = decode.userId; //created in authController
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Authentication failed",
    });
  }
};
