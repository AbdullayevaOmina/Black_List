"use client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@store";
import { schemaSignin } from "@validations";
import { Signin } from "@auth-interface";
import { Button, Card, Spinner, TextInput } from "flowbite-react";
import { DarkModeButton } from "@dark-mode";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { eyeIcon2, eyeSlashIcon } from "@global-icons";
import { ForgotPasswordModal } from "@modals";
import { toast } from "react-toastify";

export default function SignIn() {
  const { signin } = useAuthStore();
  const navigate = useNavigate();

  const initialValues: Signin = {
    username: "feruza",
    password: "feruza17",
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (values: Signin) => {
    const status = await signin(values);
    if (status === 200) {
      navigate("/main");
    } else if (status === 400) {
      toast.warning("Email or password is wrong");
    }
  };

  return (
    <div className="flex items-center justify-between w-screen h-screen px-5">
      <div className="w-full lg:w-full bg-gra-200 flex justify-center">
        <Card className="w-96 shadow-lg">
          <h1 className="text-center text-[#0e7490] my-3 text-3xl font-semibold dark:text-white">
            Sign In
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={schemaSignin}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="grid gap-2">
                <Field
                  name="username"
                  type="text"
                  as={TextInput}
                  placeholder="User name"
                  helperText={
                    <ErrorMessage
                      name="username"
                      component="small"
                      className="text-red-500"
                    />
                  }
                />

                <div className="relative">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    as={TextInput}
                    placeholder="Password"
                    helperText={
                      <ErrorMessage
                        name="password"
                        component="small"
                        className="text-red-500"
                      />
                    }
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 flex items-center text-gray-600"
                  >
                    {showPassword ? eyeSlashIcon : eyeIcon2}
                  </button>
                </div>

                <div className="flex justify-between mb-4">
                  {/* <small className="dark:text-gray-300">
                    Not registered yet?
                  </small> */}
                  <ForgotPasswordModal />
                  <Link to="/signup" className="text-[13px] text-sky-500">
                    Sign Up
                  </Link>
                </div>

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Spinner aria-label="Loading" size="md" />
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Form>
            )}
          </Formik>
        </Card>
      </div>
      <DarkModeButton />
    </div>
  );
}
