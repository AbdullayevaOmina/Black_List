import { create } from "zustand";
import { GetAllUsers, UsersStore, ChangeRoleToEmp } from "@users-intf";
import { users_service } from "@service";

const useUsersStore = create<UsersStore>((set) => ({
  usersdata: [],
  userdata: null,
  isLoading: false,
  totalCount: 1,

  get_all_users: async (params: GetAllUsers) => {
    set({ isLoading: true });
    try {
      const response: any = await users_service.get_all_users(params);
      if (response.status === 200) {
        set({
          usersdata: response.data.users,
          totalCount: Math.ceil(response.data.count / params.limit),
        });
      }
      return response.status;
    } catch (error) {
      console.error("get_all_users error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  get_user: async (id) => {
    set({ isLoading: true });
    try {
      const response: any = await users_service.get_user(id);
      console.log(response);

      // if (response.status === 200) {
      //   set({
      //     userdata: response.data.user,
      //   });
      // }
      return response.status;
    } catch (error) {
      console.error("get_all_users error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  delete_user: async (id: string) => {
    set({ isLoading: true });
    try {
      const response: any = await users_service.delete_user(id);
      return response.status;
    } catch (error) {
      console.error("delete_user error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  change_role_to_hr: async (id: string) => {
    set({ isLoading: true });
    try {
      const response: any = await users_service.change_role_to_hr(id);
      if (response.status === 200) {
        set((state) => ({
          usersdata: state.usersdata.filter((user) => user.Id !== id),
        }));
      }
      return response.status;
    } catch (error) {
      console.error("change_role_to_hr error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  change_role_to_emp: async (data: ChangeRoleToEmp) => {
    set({ isLoading: true });

    try {
      const response: any = await users_service.change_role_to_emp(data);
      if (response.status === 200) {
        set((state) => ({
          usersdata: state.usersdata.filter((user) => user.Id !== data.user_id),
        }));
      }
      return response.status;
    } catch (error) {
      console.error("change_role_to_emp error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useUsersStore;
