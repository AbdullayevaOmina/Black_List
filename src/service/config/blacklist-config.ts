import axios from "axios";
import { getDataFromCookie } from "@cookie";

const global_request = axios.create({
  baseURL: "https://blacklist.ulgur.uz",
  headers: {
    Authorization: `Bearer ${getDataFromCookie("access_token") || ""}`,
  },
});

global_request.interceptors.request.use((config) => {
  const access_token = getDataFromCookie("access_token");
  if (access_token) {
    config.headers["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

export default global_request;
