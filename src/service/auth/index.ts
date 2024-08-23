import request from "../config";
import { Request } from "@auth-interface";
export const auth: Request = {
  signup: (data) => request.post("/register", data),
  signin: (data) => request.post("/login", data),
};
