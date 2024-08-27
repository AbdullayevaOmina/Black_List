import { create } from "zustand";
import { AuthStore, Signin } from "@auth-interface";
import { auth } from "@service";
import { toast } from "react-toastify";

const useRegisterStore = create<AuthStore>((set) => ({
  data: [],
  isLoading: false,

  signin: async (dataa: Signin) => {
    set({ isLoading: true });
    try {
      const response: any = await auth.signin(dataa);
      console.log(response);

      if (response.status === 201) {
        // Successful sign-in logic
      } else if (response.status === 400) {
        toast.warning("Wrong email or password!");
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
      console.log(response);
      
      // if (response.status === 201) {
      //   // Success logic for signup
      // } else if (response.status === 400) {
      //   toast.warning("Please check your input fields!");
      // }
      // return response;
    } catch (error) {
      console.error("Sign-up error:", error);
      toast.error("An error occurred during sign up!");
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useRegisterStore;
