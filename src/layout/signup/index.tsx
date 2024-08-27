"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Datepicker, Spinner, TextInput } from "flowbite-react";
import { DarkModeButton } from "@dark-mode";
import { schemaSignup } from "@validations";
import { Signup } from "@auth-interface";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { eyeIcon, eyeSlashIcon } from "@global-icons";

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: Signup = {
    full_name: "",
    username: "",
    email: "",
    date_of_birth: "",
    password: "",
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleDateChange = (date: any, setFieldValue: any) => {
    const formattedDate = formatDate(date);
    setFieldValue("date_of_birth", formattedDate); // Formik'ga sana qiymatini qo'shish
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (values: Signup) => {
    console.log(values);
    // Add signup and redirect logic here
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
          {({ isSubmitting, setFieldValue, values }) => (
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

              <Datepicker
                className="mb-[10px]"
                showTodayButton={false}
                showClearButton={false}
                placeholder="Date of birth"
                value={values.date_of_birth}
                onSelectedDateChanged={(date) =>
                  handleDateChange(date, setFieldValue)
                }
              />
              <ErrorMessage
                name="date_of_birth"
                component="small"
                className="text-[red]"
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
                      className="text-[red]"
                    />
                  }
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 flex items-center text-gray-600"
                >
                  {showPassword ? eyeSlashIcon : eyeIcon}
                </button>
              </div>

              <div className="flex justify-between mb-4">
                <small className="dark:text-gray-300">
                  Already registered?
                </small>
                <Link to="/" className="text-[13px] text-sky-500">
                  Sign In
                </Link>
              </div>

              <Button type="submit">
                {isSubmitting ? (
                  <>
                    <Spinner aria-label="Loading" size="sm" />
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
