import { create } from "zustand";
import { AuthStore, GetAllUsers, ResetPassword, Signin } from "@auth-interface";
import { auth } from "@service";
import { toast } from "react-toastify";
import { setDataToCookie } from "../utils/token-service";

const useAuthStore = create<AuthStore>((set) => ({
  data: [],
  isLoading: false,
  totalCount: 1,

  signin: async (data: Signin) => {
    set({ isLoading: true });
    try {
      const response: any = await auth.signin(data);
      if (response.status === 200) {
        setDataToCookie("access_token", response.data.access_token);
        setDataToCookie("refresh_token", response.data.refresh_token);
        setDataToCookie("role", response.data.role);
        window.location.reload();
      } else if (response.status === 400) {
        toast.warning("Email or password is wrong");
      } else if (response.status === 404) {
        toast.info("You are not registered yet. Please sign up");
      } else if (response.status === 500) {
        toast.warning("Sorry, the connection to the server has been lost");
      }
      return response.status;
    } catch (error) {
      console.error("Sign-in error:", error);
      toast.error("An error occurred during sign in!");
    } finally {
      set({ isLoading: false });
    }
  },

  signup: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await auth.signup(data);
      return response.status;
    } catch (error) {
      console.error("Sign-up error:", error);
      toast.error("An error occurred during sign up!");
    } finally {
      set({ isLoading: false });
    }
  },

  forgot_password: async (email: string) => {
    set({ isLoading: true });
    try {
      const response: any = await auth.forgot_password(email);

      return response.status;
    } catch (error) {
      console.error("forgot_password error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  reset_password: async (data: ResetPassword) => {
    set({ isLoading: true });
    try {
      const response: any = await auth.reset_password(data);
      return response.status;
    } catch (error) {
      console.error("reset_password error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  get_all_users: async (params: GetAllUsers) => {
    set({ isLoading: true });
    try {
      const response: any = await auth.get_all_users(params);
      if (response.status === 200) {
        set({
          data: response.data.users,
          totalCount: Math.ceil(response.data.count / params.limit),
        });
      }
      console.log(response.data);
      return response.status;
    } catch (error) {
      console.error("reset_password error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAuthStore;
