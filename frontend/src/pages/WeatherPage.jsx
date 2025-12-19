// import React, { useEffect, useState } from "react";
// import { getWeather } from "../services/weather";

// function WeatherPage() {
//   const [weather, setWeather] = useState(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       const res = await getWeather("New York"); // example city
//       setWeather(res.data);
//     };
//     fetchWeather();
//   }, []);

//   return (
//     <div className="p-3">
//       <h2>Weather</h2>
//       {weather ? <pre>{JSON.stringify(weather, null, 2)}</pre> : <p>Loading...</p>}
//     </div>
//   );
// }

// export default WeatherPage;
import React, { useState } from "react";
import { getWeather } from "../services/weather";

function WeatherPage() {
  const [city, setCity] = useState("New York"); // default city
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await getWeather(city); // POST request with { city }
      setWeather(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data || "Failed to fetch weather");
      setWeather(null);
    }
  };

  return (
    <div className="p-3">
      <h2>Weather</h2>

      <div className="mb-3">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="form-control"
        />
        <button onClick={fetchWeather} className="btn btn-primary mt-2">
          Get Weather
        </button>
      </div>

      {error && <p className="text-danger">{JSON.stringify(error)}</p>}

      {weather ? (
        <div>
          <p><strong>City:</strong> {weather.city}</p>
          <p><strong>Temperature:</strong> {weather.temperature}°C</p>
          <p><strong>Condition:</strong> {weather.condition}</p>
        </div>
      ) : (
        !error && <p>Enter a city and click "Get Weather"</p>
      )}
    </div>
  );
}

export default WeatherPage;
