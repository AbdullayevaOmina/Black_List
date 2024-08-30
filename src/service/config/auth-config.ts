import axios from "axios";
import { getDataFromCookie } from "@cookie";

const auth_request = axios.create({
  baseURL: "https://authbl.ulgur.uz", // HTTP URL ni qo'llash
  headers: {
    Authorization: `Bearer ${getDataFromCookie("access_token") || ""}`,
  },
});

auth_request.interceptors.request.use((config) => {
  const access_token = getDataFromCookie("access_token");
  if (access_token) {
    config.headers["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

export default auth_request;
