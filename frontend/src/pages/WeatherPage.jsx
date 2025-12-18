import React, { useEffect, useState } from "react";
import { getWeather } from "../services/weather";

function WeatherPage() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await getWeather("New York"); // example city
      setWeather(res.data);
    };
    fetchWeather();
  }, []);

  return (
    <div className="p-3">
      <h2>Weather</h2>
      {weather ? <pre>{JSON.stringify(weather, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default WeatherPage;
