"use client";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterStore } from "@store";
import { schemaSignin } from "@validations";
import { Signin } from "@auth-interface";
import { Button, Card, Spinner, TextInput } from "flowbite-react";
import { DarkModeButton } from "@dark-mode";
import { ErrorMessage, Field, Form, Formik } from "formik";

// import frame from "../../assets/frame.png";
// import Logo from "../../assets/logo2.png";
import "./style.css";

export default function SignIn() {
  const { signin } = useRegisterStore();
  const navigate = useNavigate();

  const initialValues: Signin = {
    username: "",
    password: "",
  };

  const handleSubmit = async (values: Signin) => {
    const phNumber = values.username.replace(/\D/g, "");
    const payload = { ...values, username: `+${phNumber}` };
    const status = await signin(payload);
    if (status === 201) {
      navigate("/main");
    } else if (status === 404) navigate("/signup");
  };

  return (
    <div className="flex items-center justify-between w-screen h-screen px-5">
      {/* <div className="hidden lg:relative w-[50%] bg-gra-200 p-28  lg:flex items-center justify-center">
        <img src={frame} className="rotate-clockwise absolute w-[720px]" />
        <img src={Logo} className="fixed z-10 w-[320px]" />
      </div> */}
      <div className="w-[100%] lg:w-[100%] bg-gra-200 flex justify-center">
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
                      className="text-[red]"
                    />
                  }
                />
                <Field
                  name="password"
                  type="password"
                  as={TextInput}
                  placeholder="Password"
                  helperText={
                    <ErrorMessage
                      name="password"
                      component="small"
                      className="text-[red] "
                    />
                  }
                />

                <div className="flex justify-between mb-4">
                  <small className="dark:text-gray-300">
                    Not registered yet?
                  </small>
                  <Link to="/signup" className="text-[13px] text-sky-500">
                    Sign Up
                  </Link>
                </div>

                <Button type="submit">
                  {isSubmitting ? (
                    <>
                      <Spinner aria-label="Default status example" size="md" />{" "}
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
