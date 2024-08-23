"use client";
import { Button, Card, Datepicker, Spinner, TextInput } from "flowbite-react";
import { DarkModeButton } from "@dark-mode";
import { schemaSignup } from "@validations";
import { Signup } from "@auth-interface";
import { Link } from "react-router-dom";
import { useRegisterStore } from "@store";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function Signin() {
  // const navigate = useNavigate();
  const { signup } = useRegisterStore();

  const initialValues: Signup = {
    full_name: "",
    username: "",
    email: "",
    date_of_birth: "",
    password: "",
  };

  const handleSubmit = async (values: Signup) => {
    try {
      const response = await signup(values);
      console.log(response);

      // if (response.status === 201) {
      //   const resSignIn: any = signin({
      //     password: values.password,
      //   });
      //   if (resSignIn === 200) {
      //     toast.success("You registrated! 🤗");
      //     navigate("/main");
      //   }
      // }
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Card className="w-96">
        <h1 className="text-center text-[#0e7490] my-3 text-2xl font-semibold dark:text-white">
          Sign Up
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={schemaSignup}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid gap-1">
              <Field
                name="full_name"
                type="text"
                as={TextInput}
                placeholder="Full name"
                helperText={
                  <ErrorMessage
                    name="full_name"
                    component="small"
                    className="text-[red]"
                  />
                }
              />

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
                name="date_of_birth"
                as={Datepicker}
                placeholder="Date of birth"
                helperText={
                  <ErrorMessage
                    name="date_of_birth"
                    component="small"
                    className="text-[red]"
                  />
                }
              />

              <Field
                name="email"
                type="email"
                as={TextInput}
                placeholder="Email"
                helperText={
                  <ErrorMessage
                    name="email"
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
                    className="text-[red]"
                  />
                }
              />

              <div className="flex justify-between mb-4">
                <small className="dark:text-gray-300 ">
                  Are you already registered?
                </small>
                <Link to="/" className="text-[13px] text-sky-500">
                  Sign In
                </Link>
              </div>

              <Button type="submit">
                {isSubmitting ? (
                  <>
                    <Spinner aria-label="Spinner button example" size="sm" />{" "}
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
      <DarkModeButton />
    </div>
  );
}
