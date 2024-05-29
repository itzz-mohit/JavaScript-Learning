import React, { useState } from "react";

const Weather = () => {
  const [searchData, setSearchData] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleSubmit = () => {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
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
                  <li className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                    hello mohit
                  </li>
                  <li className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                    hello mohit
                  </li>
                  <li className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                    hello mohit
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="font-bold text-2xl text-center">Sydney</div>
          <div className="text-sm text-gray-500 text-center">
            Thursday 10 May 2020
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
            <div className="font-medium text-6xl">24°</div>
            <div className="ml-6 text-center">
              <div>Cloudy</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up"></i>
                </span>
                <span className="text-sm font-light text-gray-500">28°C</span>
              </div>
              <div>
                <span className="text-sm">
                  <i className="far fa-long-arrow-down"></i>
                </span>
                <span className="text-sm font-light text-gray-500">20°C</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <div className="text-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500">9k/h</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">68%</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500">10km</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
