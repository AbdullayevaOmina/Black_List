import request from "../config";
import { Request } from "@auth-interface";
export const auth: Request = {
  signin: (data) => request.post("http://13.126.34.169:5555/login", data),
  signup: (data) => request.post("http://13.126.34.169:5555/register", data),
};
