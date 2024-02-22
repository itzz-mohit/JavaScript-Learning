const searchCity = document.getElementById("city");
const weatherSearchBtn = document.getElementById("search-btn");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const details = document.querySelector(".details");
const errorMessage = document.getElementById("error-message");

const fetchWeather = async () => {
  const city = searchCity.value;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bbe75f23e36009ec707e53ae5f51a69b`
    );
    const data = await response.json();
    console.log(data);
    updateWeather(data);
  } catch (error) {
    console.log("Not found");
    showError();
  }
};

const updateWeather = (data) => {
  temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°c`;
  cityName.textContent = data.name;
  humidity.textContent = `${data.main.humidity}%`;
  windSpeed.textContent = `${data.wind.speed * 100}kmph`;
  const weatherMood = data.weather[0].description;

  console.log(`Weather Mood is : ${weatherMood}`);

  displayPicture(weatherMood);
};

const displayPicture = (weatherMood) => {
  if (weatherMood.includes("cloud") === true) {
    weatherIcon.src = "images/clouds.png";
  } else if (weatherMood.includes("clear") === true) {
    weatherIcon.src = "images/clear.png";
  } else if (weatherMood.includes("drizzle") === true) {
    weatherIcon.src = "images/drizzle.png";
  } else if (weatherMood.includes("humidity") === true) {
    weatherIcon.src = "images/humidity.png";
  } else if (weatherMood.includes("mist") === true) {
    weatherIcon.src = "images/mist.png";
  } else if (weatherMood.includes("rain") === true) {
    weatherIcon.src = "images/rain.png";
  } else if (weatherMood.includes("snow") === true) {
    weatherIcon.src = "images/snow.png";
  }
};

const showError = () => {
  weatherIcon.src = "images/error.png";
  temperature.style.display = "none";
  cityName.style.display = "none";
  details.style.display = "none";
  errorMessage.textContent = "City Not Found!!";
};
