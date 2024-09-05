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
  full_name: Yup.string()
    .test(
      "has-two-words",
      "Full name must be at least two words long and each word must contain 3 or more letters",
      (value) => {
        if (!value) return false;
        const words = value.trim().split(/\s+/);
        return words.length >= 2 && words.every((word) => word.length >= 3);
      }
    )
    .required("Full name is required"),
  username: Yup.string().required("User name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date_of_birth: Yup.string().required("Date of birth is required"),
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

export const schemaEmployeeBlock = Yup.object().shape({
  reason: Yup.string().required("Reason required"),
});
