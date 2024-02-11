const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
} = require("../controllers/inventoryController");
const router = express.Router();

//Routes
//ADD Inventory
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET All Blood Records
router.get("/get-inventory", authMiddleware, getInventoryController);

module.exports = router;
