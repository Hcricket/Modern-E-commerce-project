import api from "../api";

export const getWeather = (city) => api.get(`weather/?city=${city}`);
