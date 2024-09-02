import { Request } from "@monitoring-intf";
import global_request from "../config/blacklist-config";

export const monitoring_service: Request = {
  get_daily: (params) => global_request.get(`blacklist/daily`, { params }),
  get_weekly: (params) => global_request.get(`blacklist/weekly`, { params }),
  get_monthly: (params) => global_request.get(`blacklist/monthly`, { params }),
};
