const db = require("../models");
module.exports = {
  findAll: (req, res) => {
    db.Trip.find(req.query)
      .then((dbTrip) => res.json(dbTrip))
      .catch((err) => console.log(err));
  },
  findById: (req, res) => {
    db.Trip.findById(req.params.id)
      .then((dbTrip) => res.json(dbTrip))
      .catch((err) => console.log(err));
  },
  create: (req, res) => {
    db.Trip.create(req.body)
      .then((dbTrip) => res.json(dbTrip))
      .catch((err) => console.log(err));
  },
  update: (req, res) => {
    db.Trip.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbTrip) => res.json(dbTrip))
      .catch((err) => console.log(err));
  },
  remove: (req, res) => {
    db.Trip.findById({ _id: req.params.id })
      .then((dbTrip) => dbTrip.remove())
      .then((dbTrip) => res.json(dbTrip))
      .catch((err) => console.log(err));
  },
};
