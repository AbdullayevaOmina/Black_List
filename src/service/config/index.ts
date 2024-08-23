import { getDataFromCookie } from "@cookie";
import axios from "axios";

const request = axios.create({
  baseURL: "https://ecomapi.ilyosbekdev.uz",
  headers: {
    Authorization: `Bearer ${getDataFromCookie("access_token")}`,
  },
});

// async function refreshAccessToken() {
//   try {
//     const refresh_token = getDataFromCookie("refresh_token");

//     if (!refresh_token) {
//       throw new Error("refresh token yo'q");
//     }

//     const response = await axios.post(
//       `http://18.159.214.90/api/admin/refresh-token/${refresh_token}`
//     );

//     const { access_token } = response.data;
//     if (access_token) {
//       setDataToCookie("access_token", access_token);
//     }
//     return access_token;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function refreshAccessToken() {
//   try {
//     const id = getDataFromCookie("admin_id");

//     if (!id) {
//       throw new Error("ID yo'q");
//     }

//     const response = await axios.post(
//       `http://18.159.214.90/api/admin/refresh-token/${id}`
//     );

//     if (response.status === 204) {
//       const { access_token } = response.data;
//       if (access_token) {
//         setDataToCookie("access_token", access_token);
//       }
//       return access_token;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

request.interceptors.request.use((config) => {
  const access_token = getDataFromCookie("access_token");
  if (access_token) {
    config.headers["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

// request.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       const access_token = await refreshAccessToken();
//       if (access_token) {
//         const originalRequest = error.config;
//         originalRequest.headers[`Authorization`] = access_token;
//       } else {
//         console.log(
//           `Failed to refresh acces token. Redicarting to login page...`
//         );
//         return Promise.reject(error);
//       }
//     }
//   }
// );

export default request;
