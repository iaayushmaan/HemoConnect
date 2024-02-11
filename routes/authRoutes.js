const express = require("express");
const { registerController } = require("../controllers/authController");
const { loginController } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const { currentUserController } = require("../controllers/authController");

const router = express.Router();

//routes
//For Registering || Method = POST
router.post("/register", registerController);

//For LOGIN || Method = POST
router.post("/login", loginController);

//Current User || Method = GET
router.get("/current-user", authMiddleware, currentUserController);

module.exports = router;
