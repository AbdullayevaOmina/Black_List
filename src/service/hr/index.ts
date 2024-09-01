import { Request } from "@hr-intf";
import global_request from "../config/blacklist-config";

export const hr_service: Request = {
  delete_hr: (hr_id) => global_request.delete(`/admin/delete_hr/${hr_id}`),
  get_all_hr: (params) => global_request.get(`/admin/hr_list`, { params }),
};
