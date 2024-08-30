import { create } from "zustand";
import { GetAllUsers, UsersStore } from "@users-intf";
import { users_service } from "@service";

const useUsersStore = create<UsersStore>((set) => ({
  usersdata: [],
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
      console.log(response.data);
      return response.status;
    } catch (error) {
      console.error("getall users error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  delete_user: async (id) => {
    set({ isLoading: true });
    try {
      const response: any = await users_service.delete_user(id);
      console.log(response);
      // return response;
    } catch (error) {
      console.error("deleteuser error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  change_role: async (id) => {
    set({ isLoading: true });
    try {
      const response: any = await users_service.change_role(id);
      console.log(response);
      // return response;
    } catch (error) {
      console.error("deleteuser error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useUsersStore;
