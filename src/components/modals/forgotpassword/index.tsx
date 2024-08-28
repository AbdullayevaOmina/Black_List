"use client";
import { Button, Modal, Spinner, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { schemaForgotPassword, schemaResetPassword } from "@validations";
import { useAuthStore } from "@store";
import { ResetPassword } from "@auth-interface";
import { toast } from "react-toastify";

export function ForgotPasswordModal() {
  const [openModal, setOpenModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [countdown, setCountdown] = useState(180); // 3 minutes countdown (180 seconds)
  const { forgot_password, reset_password } = useAuthStore();

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModal(false);
    setCountdown(120); // Reset countdown
  };

  useEffect(() => {
    if (successModal && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      handleCloseSuccessModal();
    }
  }, [successModal, countdown]);

  const initialValues: ResetPassword = {
    new_password: "",
    reset_token: "",
  };

  const handleFPSubmit = async (email: any) => {
    try {
      const fpStatus = await forgot_password(email);
      if (fpStatus === 200) {
        setOpenModal(false);
        setSuccessModal(true);
      }
    } catch (error) {
      console.error("Failed to send forgot password request", error);
    }
  };

  const handleRPSubmit = async (values: ResetPassword) => {
    console.log(values);

    try {
      const fpStatus = await reset_password(values);
      if (fpStatus === 200) {
        setSuccessModal(false);
        toast.success("Password changed!");
      }
    } catch (error) {
      console.error("Failed to send forgot password request", error);
    }
  };

  return (
    <>
      <small
        onClick={() => setOpenModal(true)}
        className="dark:text-gray-300 dark:hover:text-sky-500 hover:text-sky-500 cursor-pointer"
      >
        Forgot password
      </small>

      {/* Forgot Password Modal */}
      <Modal show={openModal} size="md" onClose={handleCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center">
              Enter your email
            </h3>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={schemaForgotPassword}
              onSubmit={handleFPSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="grid gap-2">
                  <Field name="email">
                    {({ field }: any) => (
                      <TextInput
                        {...field}
                        type="email"
                        placeholder="Email"
                        helperText={
                          <ErrorMessage
                            name="email"
                            component="small"
                            className="text-red-600"
                          />
                        }
                      />
                    )}
                  </Field>

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Spinner aria-label="Submitting" size="md" />{" "}
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>

      {/* Success Modal */}
      <Modal
        show={successModal}
        size="md"
        onClose={handleCloseSuccessModal}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
              Password reset link sent!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 ">
              Closing in{" "}
              <b className="text-red-600 ml-5">
                {Math.floor(countdown / 60)}:
                {(countdown % 60).toString().padStart(2, "0")}
              </b>
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={schemaResetPassword}
              onSubmit={handleRPSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="grid gap-1 text-start">
                  <Field name="new_password">
                    {({ field }: any) => (
                      <TextInput
                        {...field}
                        placeholder="New Password"
                        helperText={
                          <ErrorMessage
                            name="new_password"
                            component="b"
                            className="text-red-600 text-[12px]"
                          />
                        }
                      />
                    )}
                  </Field>
                  <Field name="reset_token">
                    {({ field }: any) => (
                      <TextInput
                        {...field}
                        placeholder="Code"
                        helperText={
                          <ErrorMessage
                            name="reset_token"
                            component="b"
                            className="text-red-600 text-[12px]"
                          />
                        }
                      />
                    )}
                  </Field>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Spinner aria-label="Submitting" size="md" />{" "}
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
