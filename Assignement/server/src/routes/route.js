const express = require("express");
const router = express.Router();
const { getWeatherDetails } = require("../controllers/weather");

// Define routes
router.get("/weather", getWeatherDetails);

module.exports = router;
