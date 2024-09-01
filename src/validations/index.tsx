import * as Yup from "yup";

// ---------------------- Signin ----------------------
export const schemaSignin = Yup.object().shape({
  username: Yup.string()
    .min(4, "Invalid User name")
    .required("User name required"),
  password: Yup.string()
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
    //   "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter"
    // )
    .required("Password is required"),
});

export const schemaForgotPassword = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const schemaResetPassword = Yup.object().shape({
  new_password: Yup.string().required("New Password is required"),
  reset_token: Yup.string().required("Code is required"),
});

// ---------------------- Signup ----------------------
export const schemaSignup = Yup.object().shape({
  full_name: Yup.string().required("Full name is required"),
  username: Yup.string().required("User name is required"),
  // date_of_birth: Yup.string().required("Date of birth is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
      "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter"
    )
    .required("Password is required"),
});

// ---------------------- employee ----------------------
export const schemaEmployee = Yup.object().shape({
  position: Yup.string().required("Position required"),
});
