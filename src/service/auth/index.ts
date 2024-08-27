import request from "../config";
import { Request } from "@auth-interface";
export const auth: Request = {
  signin: (data) => request.post("/login", data),
  signup: (data) => request.post("/register", data),
};
