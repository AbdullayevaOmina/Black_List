import { create } from "zustand";
import { AuthStore } from "@auth-interface";
import { auth } from "@service";
import { toast } from "react-toastify";
import { setDataToCookie } from "@cookie";
58
const useRegisterStore = create<AuthStore>((set) => ({
  data: [],
  isLoading: false,

  signin: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await auth.signin(data);
      console.log(response);

      if (response.status === 201) {
       
      } else if (response.status === 400)
        toast.warning("Wrong email or password!");
      else if (response.status === 404)
        toast.info("You are not registered yet. Please sign up");
      else if (response.status === 500)
        toast.warning("Sorry, the connection to the server has been lost");

      return response.status;
    } catch (error) {
      console.error("Sign-in error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  signup: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await auth.signup(data);
      return response;
    } catch (error) {
      console.error("Sign-up error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useRegisterStore;
