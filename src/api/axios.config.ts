import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:5048/api"
    : "https://pony-vast-badly.ngrok-free.app/api",
  headers: {
    "ngrok-skip-browser-warning": "any-value",
  },
});
