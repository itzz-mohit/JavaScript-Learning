const axios = require("axios");

exports.getWeatherDetails = async (req, res) => {
  const { city } = req.query || "Amritsar";

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bbe75f23e36009ec707e53ae5f51a69b`
    );
    
    const data = response.data;

    const weatherDetails = {
      wind: data.wind.speed,
      visibility: data.visibility,
      humidity: data.main.humidity,
      name: data.name,
      description: data.weather[0].description,
      temp: data.main.temp,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
    };

    console.log(weatherDetails);
    res.json(weatherDetails);
  } catch (error) {
    console.log("Issue in calling weather API");
    res.status(500).json({ error: "Invalid City Name" });
    console.error(error);
  }
};
