import { Request } from "@users-intf";
import auth_request from "../config/auth-config";
import global_request from "../config/blacklist-config";

export const users_service: Request = {
  get_all_users: (params) => auth_request.get(`/users`, { params }),
  delete_user: (id) => auth_request.delete(`/user/${id}`),
  change_role_to_hr: (id) => global_request.post(`/admin/approve/${id}`),
  change_role_to_emp: (data) => global_request.post(`/employee/create`, data),
};
