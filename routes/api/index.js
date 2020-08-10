const express = require("express");
const router = express.Router();
const tripsRoutes = require("./trips");
// this route is for trips
router.use("/trips", tripsRoutes);

module.exports=router;