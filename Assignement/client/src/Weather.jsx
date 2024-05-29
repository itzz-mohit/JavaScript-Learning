import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [searchData, setSearchData] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [initialCity, setInitialCity] = useState("Amritsar");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const cityname = ["Delhi", "Mumbai", "Kolkata", "London"];

  const getWeather = async (city) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/weather?city=${city}`
      );
      setError(false);
      console.log(response.data);
      setWeatherData(response.data);
    } catch (error) {
      setError(true);
      setErrorMessage(error.response.data.error);
      console.log("Error while calling weather API");
    }
  };

  const handleSubmit = () => {
    getWeather(searchData);
    setSearchData("");
  };

  const handleClick = (city) => {
    getWeather(city);
    setShowSuggestions(false);
  };

  useEffect(() => {
    getWeather(initialCity);
  }, [initialCity]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-semibold mb-10 text-rose-500">
        My Weather App
      </h1>
      <div className="w-full max-w-md mx-auto p-4 relative">
        <div id="search" className="mb-8">
          <div className="flex items-center bg-white rounded-full shadow-md relative">
            <input
              className="flex-grow px-5 py-2 rounded-l-full focus:outline-none"
              type="text"
              placeholder="Search"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-r-full bg-indigo-500 text-white px-5 py-2"
            >
              Search
            </button>
            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white py-2 px-2 shadow-lg rounded-lg border border-gray-100 z-10">
                <ul>
                  {cityname.map((city, index) => (
                    <li
                      key={index}
                      className="py-2 px-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
                      onMouseDown={() => handleClick(city)}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {!error ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="font-bold text-2xl text-center">
              {weatherData.name}
            </div>
            <div className="text-sm text-gray-500 text-center">
              {new Date().toLocaleDateString()}
            </div>
            <div className="mt-6 text-6xl text-indigo-400 flex justify-center items-center">
              <svg
                className="w-32 h-32"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                ></path>
              </svg>
            </div>
            <div className="flex justify-center items-center mt-6">
              <div className="font-medium text-6xl">
                {Math.round(weatherData.temp - 273.15)}°C
              </div>
              <div className="ml-6 text-center">
                <div>{weatherData.description}</div>
                <div className="mt-1">
                  <span className="text-sm">
                    <i className="far fa-long-arrow-up"></i>
                  </span>
                  <span className="text-sm font-light text-gray-500">
                    {Math.round(weatherData.temp_max - 273.15)}°C
                  </span>
                </div>
                <div>
                  <span className="text-sm">
                    <i className="far fa-long-arrow-down"></i>
                  </span>
                  <span className="text-sm font-light text-gray-500">
                    {Math.round(weatherData.temp_min - 273.15)}°C
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <div className="text-center">
                <div className="font-medium text-sm">Wind</div>
                <div className="text-sm text-gray-500">{weatherData.wind}</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-sm">Humidity</div>
                <div className="text-sm text-gray-500">
                  {weatherData.humidity}
                </div>
              </div>
              <div className="text-center">
                <div className="font-medium text-sm">Visibility</div>
                <div className="text-sm text-gray-500">
                  {weatherData.visibility}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-red-100 text-red-600 text-center py-2 mt-4">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
