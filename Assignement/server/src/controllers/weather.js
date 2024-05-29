const axios = require("axios");

exports.getWeatherDetails = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=amritsar&appid=bbe75f23e36009ec707e53ae5f51a69b"
    );
    res.json(response.data);
  } catch (error) {
    console.log("Issue in calling weather API");
    res.status(500).json({ error: "An error occurred while fetching weather data" });
    console.error(error);
  }
};
