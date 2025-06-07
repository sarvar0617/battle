import axios from "axios";

export const api = axios.create({
  baseURL: "https://nt-shopping-list.onrender.com/api",
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});
