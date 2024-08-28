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

// ---------------------- Category ----------------------
export const schemaCatgory = Yup.object().shape({
  name: Yup.string().required("Category name is required"),
});

// Validation schema for the brand form
export const schemaBrand = Yup.object().shape({
  name: Yup.string().required("Brand name is required"),
  description: Yup.string().required("Description is required"),
  category_id: Yup.number().required("Category is required"),
  file: Yup.mixed().required("Brand file is required"),
});

// ---------------------- Product ----------------------
export const schemaProduct = Yup.object().shape({
  category_id: Yup.number().required("Category is required"),
  brand_id: Yup.number().required("Brand is required"),
  brand_category_id: Yup.number().required("Brand category is required"),
  name: Yup.string().required("Product name is required"),
  price: Yup.number().required("Price is required"),
});

export const schemaForgotPassword = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const schemaResetPassword = Yup.object().shape({
  new_password: Yup.string().required("New Password is required"),
  reset_token: Yup.string().required("Code is required"),
});

// ---------------------- Product ----------------------
export const schemaProductupdate = Yup.object().shape({
  // category_id: Yup.number().required("Category is required"),
  // brand_id: Yup.number().required("Brand is required"),
  // brand_category_id: Yup.number().required("Brand category is required"),
  name: Yup.string().required("Product name is required"),
  price: Yup.number().required("Price is required"),
});

// ---------------------- Product ----------------------
export const schemaProductDetail = Yup.object().shape({
  quantity: Yup.number().required("quantity is required"),
  discount: Yup.number().required("discount is required"),
  description: Yup.string().required("description is required"),
  product_id: Yup.number().required("product category is required"),
  colors: Yup.string().required("colors is required"),
});
