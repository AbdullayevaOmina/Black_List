import axios from "axios";
import { getDataFromCookie } from "@cookie";

const request = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://your-production-server.com" // HTTPS URL ni qo'llash
      : "http://13.126.34.169:5555", // Lokalhost uchun HTTP URL
  headers: {
    Authorization: `Bearer ${getDataFromCookie("access_token") || ""}`,
  },
});

request.interceptors.request.use((config) => {
  const access_token = getDataFromCookie("access_token");
  if (access_token) {
    config.headers["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

export default request;
