import { Request } from "@emp-intf";
import global_request from "../config/blacklist-config";

export const emp_service: Request = {
  create_emp: (data) => global_request.post(`/employee/create`, data),
  update_emp: (id, data) =>
    global_request.put(
      `/employee/update/{employee_id}?employee_id=${id}`,
      data
    ),
  delete_emp: (id) => global_request.delete(`/employee/${id}`),
  block_emp: (data) => global_request.post(`/blacklist/add`, data),
  unblock_emp: (id) => global_request.delete(`/blacklist/remove/${id}`),
  get_all_emp: (params) => global_request.get(`/employee/all`, { params }),
  get_emp: (id) => global_request.get(`/employee/${id}`),
};
