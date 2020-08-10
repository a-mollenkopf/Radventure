const express = require("express");
const router = express.Router();
const tripsController = require("../../controllers/tripsController");
// goes with "/api/trips"
router.route("/").get(tripsController.findAll).post(tripsController.create);

// goes with "/api/trips/:id"
router
  .route("/:id")
  .get(tripsController.findById)
  .put(tripsController.update)
  .delete(tripsController.remove);

module.exports = router;
