const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
title:{type:String, required:true},
  startCity: { type: String, required: true },
  endCity: { type: String, required: true },
  mapLink: { type: String, trim: true },
  totalTime: { type: Number },
  additionalStops: { type: Array },
  date: { type: Date, default: Date.now },
});

const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
