import { create } from "zustand";
import { GetAllHR, HRstore } from "@hr-intf";
import { hr_service } from "@service";

const useHRstore = create<HRstore>((set) => ({
  hrdata: [],
  isLoading: false,
  totalCount: 1,

  get_all_hr: async (params: GetAllHR) => {
    set({ isLoading: true });
    try {
      const response: any = await hr_service.get_all_hr(params);
      console.log(response);
      if (response.status === 200) {
        set({
          hrdata: response.data.hr,
          totalCount: Math.ceil(response.data.count / params.limit),
        });
      }
      return response.status;
    } catch (error) {
      console.error("get_all_emp error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  delete_hr: async (hr_id: string) => {
    set({ isLoading: true });
    try {
      const response: any = await hr_service.delete_hr(hr_id);
      if (response.status === 200) {
        set((state: any) => ({
          hrdata: state.hrdata.filter((emp: any) => emp.id !== hr_id),
        }));
      }
      return response.status;
    } catch (error) {
      console.error("delete_emp error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useHRstore;
