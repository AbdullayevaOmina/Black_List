import { GetReq } from "@monitoring-intf";
import global_request from "../config/blacklist-config";

export const monitoring_service = {
  get_all_data: async (params: GetReq) => {
    const [daily, weekly, monthly, all] = await Promise.all([
      global_request.get(`blacklist/daily`, { params }),
      global_request.get(`blacklist/weekly`, { params }),
      global_request.get(`blacklist/monthly`, { params }),
      global_request.get(`blacklist/all`, { params }),
    ]);

    return {
      daily: daily.data.reports,
      weekly: weekly.data.reports,
      monthly: monthly.data.reports,
      all: all.data.black_lists,
      counts: {
        dailyCount: Math.ceil(daily.data.count / params.limit),
        weeklyCount: Math.ceil(weekly.data.count / params.limit),
        monthlyCount: Math.ceil(monthly.data.count / params.limit),
        allCount: Math.ceil(all.data.count / params.limit),
      },
    };
  },
};
