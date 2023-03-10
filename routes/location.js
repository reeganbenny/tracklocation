const express = require("express");
const router = express.Router();
const locationSchema = require("../models/location");

const date = new Date();

router.get("/", (req, res) => {
  res.send("Hi");
});
router.post("/add-location", (req, res) => {
  console.log(req.body.watchId);
  console.log(req.body.longitude);
  console.log(req.body.latitude);
  console.log(req.body.timestamp);
  console.log(date);
  const location = new locationSchema({
    watchId: req.body.watchId,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
  });
  location.save();
});

module.exports = router;
