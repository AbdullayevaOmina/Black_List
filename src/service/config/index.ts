import axios from "axios";
import { getDataFromCookie } from "@cookie";

const request = axios.create({
  baseURL: "",
});

request.interceptors.request.use(
  (config) => {
    const access_token = getDataFromCookie("access_token");
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    } else {
      console.warn("No access token found in cookies.");
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default request;
