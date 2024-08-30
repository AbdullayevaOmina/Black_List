import { Request } from "@emp-intf";
import global_request from "../config/blacklist-config";

export const emp_service: Request = {
  create_emp: (data) => global_request.post(`/employee/create`, data),
  get_all_emp: (params) => global_request.get(`/employee/all`, { params }),
};
