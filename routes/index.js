const path = require("path");
const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);


module.exports = router;