import { create } from "zustand";
import { GetReq, MonitoringStore } from "@monitoring-intf";
import { monitoring_service } from "@service";

const useMonitoringStore = create<MonitoringStore>((set) => ({
  dailydata: [],
  weeklydata: [],
  monthlydata: [],
  alldata: [],
  isLoading: false,
  DtotalCount: 1,
  WtotalCount: 1,
  MtotalCount: 1,
  AtotalCount: 1,

  get_all_data: async (params: GetReq) => {
    set({ isLoading: true });
    try {
      const response: any = await monitoring_service.get_all_data(params);
      set({
        dailydata: response.daily,
        weeklydata: response.weekly,
        monthlydata: response.monthly,
        alldata: response.all,
        DtotalCount: response.counts.dailyCount,
        WtotalCount: response.counts.weeklyCount,
        MtotalCount: response.counts.monthlyCount,
        AtotalCount: response.counts.allCount,
      });
    } catch (error) {
      console.error("get_all_data error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useMonitoringStore;
