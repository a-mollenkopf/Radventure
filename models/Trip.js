const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  // title:{type:String, required:true},
  startStreet: { type: String },
  startCity: { type: String },
  startState: { type: String },
  startPostalCode: { type: String },
  destinationStreet: { type: String },
  destinationCity: { type: String },
  destinationState: { type: String },
  destinationPostalCode: { type: String },
  time: { type: String },
  distance: { type: String },
  mapLink: { type: String },
  totalTime: { type: Number },
  additionalStops: { type: Array },
  date: { type: Date, default: Date.now },
});

const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
