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

  get_daily: async (params: GetReq) => {
    set({ isLoading: true });
    try {
      const response: any = await monitoring_service.get_daily(params);
      console.log(response);

      if (response.status === 200) {
        set({
          dailydata: response.data.reports,
          DtotalCount: Math.ceil(response.data.count / params.limit),
        });
      }
      return response.status;
    } catch (error) {
      console.error("get_daily error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  get_weekly: async (params: GetReq) => {
    set({ isLoading: true });
    try {
      const response: any = await monitoring_service.get_weekly(params);
      if (response.status === 200) {
        set({
          weeklydata: response.data.reports,
          WtotalCount: Math.ceil(response.data.count / params.limit),
        });
      }
      return response.status;
    } catch (error) {
      console.error("get_weekly error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  get_monthly: async (params: GetReq) => {
    set({ isLoading: true });
    try {
      const response: any = await monitoring_service.get_monthly(params);
      if (response.status === 200) {
        set({
          monthlydata: response.data.reports,
          MtotalCount: Math.ceil(response.data.count / params.limit),
        });
      }
      return response.status;
    } catch (error) {
      console.error("get_monthly error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  get_all: async (params: GetReq) => {
    set({ isLoading: true });
    try {
      const response: any = await monitoring_service.get_all(params);
      // console.log(response);
      if (response.status === 200) {
        set({
          alldata: response.data.black_lists,
          AtotalCount: Math.ceil(response.data.count / params.limit),
        });
      }
      return response.status;
    } catch (error) {
      console.error("get_all error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useMonitoringStore;
