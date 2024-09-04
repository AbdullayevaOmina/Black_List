import axios from "axios";
import { clearAllCookies, getDataFromCookie } from "@cookie";

const auth_request = axios.create({
  baseURL: "https://authbl.ulgur.uz",
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

auth_request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      clearAllCookies();
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default auth_request;
