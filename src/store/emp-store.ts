import { create } from "zustand";
import { GetAllEployees, EmpoyleesStore } from "@emp-intf";
import { emp_service } from "@service";

const useEmpStore = create<EmpoyleesStore>((set) => ({
  empdata: [],
  isLoading: false,
  totalCount: 1,

  get_all_emp: async (params: GetAllEployees) => {
    set({ isLoading: true });
    try {
      const response: any = await emp_service.get_all_emp(params);
      if (response.status === 200) {
        set({
          empdata: response.data.employees,
          totalCount: Math.ceil(response.data.count / params.limit),
        });
      }
      console.log(response.data);
      return response.status;
    } catch (error) {
      console.error("getall users error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  create_emp: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await emp_service.create_emp(data);
      console.log(response);
      // return response;
    } catch (error) {
      console.error("deleteuser error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useEmpStore;
