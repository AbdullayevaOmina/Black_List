import { create } from "zustand";
import { GetAllEmployees, EmployeesStore } from "@emp-intf";
import { emp_service } from "@service";

const useEmpStore = create<EmployeesStore>((set) => ({
  empdata: [],
  isLoading: false,
  totalCount: 1,

  get_all_emp: async (params: GetAllEmployees) => {
    set({ isLoading: true });
    try {
      const response: any = await emp_service.get_all_emp(params);
      if (response.status === 200) {
        set({
          empdata: response.data.employees,
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

  create_emp: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await emp_service.create_emp(data);
      return response.status;
    } catch (error) {
      console.error("create_emp error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  block_emp: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await emp_service.block_emp(data);
      if (response.status === 200) {
        set((state: any) => ({
          empdata: state.empdata.filter(
            (emp: any) => emp.id !== data.employee_id
          ),
        }));
      }
      return response.status;
    } catch (error) {
      console.error("delete_emp error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  unblock_emp: async (employee_id: string) => {
    set({ isLoading: true });
    try {
      const response: any = await emp_service.delete_emp(employee_id);
      if (response.status === 200) {
        set((state: any) => ({
          empdata: state.empdata.filter((emp: any) => emp.id !== employee_id),
        }));
      }
      return response.status;
    } catch (error) {
      console.error("delete_emp error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  delete_emp: async (employee_id: string) => {
    set({ isLoading: true });
    try {
      const response: any = await emp_service.delete_emp(employee_id);
      if (response.status === 200) {
        set((state: any) => ({
          empdata: state.empdata.filter((emp: any) => emp.id !== employee_id),
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

export default useEmpStore;
