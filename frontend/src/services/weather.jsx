// import api from "../api";

// export const getWeather = (city) => api.get(`weather/?city=${city}`);


import api from "../api";

export const getWeather = (city) =>
  api.post("weather/", { city });
