import axios from "axios";
import { getDataFromCookie } from "@cookie";

const request = axios.create({
  baseURL: "",
  headers: {
    Authorization: `Bearer ${getDataFromCookie("access_token")}`,
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
