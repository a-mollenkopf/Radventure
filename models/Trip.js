const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  startStreet: { type: String, trim: true },
  startCity: { type: String, trim: true },
  startState: { type: String, trim: true },
  startPostalCode: { type: String, trim: true },
  destinationStreet: { type: String, trim: true },
  destinationCity: { type: String, trim: true },
  destinationState: { type: String, trim: true },
  destinationPostalCode: { type: String, trim: true },
  time: { type: String, trim: true },
  tripDate: { type: String, trim: true },
  distance: { type: String, trim: true },
  totalTime: { type: Number },
  additionalStops: { type: Array },
  date: { type: Date, default: Date.now },
});

const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
