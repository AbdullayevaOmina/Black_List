import request from "../config/auth-config";
import { Request } from "@auth-interface";
export const auth: Request = {
  signin: (data) => request.post("/login", data),
  signup: (data) => request.post("/register", data),
  forgot_password: (email) => request.post("/forgot-password", email),
  reset_password: (data) => request.post("/reset-password", data),
  get_all_users: (params) => request.get(`/users`, { params }),
};
