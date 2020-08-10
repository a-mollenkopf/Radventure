const express = require("express");
const router = express.Router();
const tripsRoutes = require("./trips");
// this route is for books
router.use("/trips", tripsRoutes);

module.exports=router;