import api from "../api";

// Register new user
export const register = (username, email, password) =>
  api.post("users/register/", { username, email, password });

// Login existing user
export const login = (username, password) =>
  api.post("users/login/", { username, password });

// Logout
export const logout = () => api.post("users/logout/");

// Get user info
export const getProfile = () => api.get("users/info/");
