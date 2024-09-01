"use client";
import { Button, Modal, Spinner, TextInput, Tooltip } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { schemaEmployee } from "@validations";
import { changeRoleIcon2 } from "@global-icons";
import { useUsersStore } from "@store";
import { toast } from "react-toastify";

export function ChangeRTEModal(id: any) {
  const [openModal, setOpenModal] = useState(false);
  const { change_role_to_emp } = useUsersStore();

  function onCloseModal() {
    setOpenModal(false);
  }

  const handleSubmit = async (value: any) => {
    const data = { ...value, user_id: id.id };
    const resStatus = await change_role_to_emp(data);
      if (resStatus === 200) {
        setOpenModal(false);
        toast.success("Role changed successfully.");
      } else {
        toast.error("Failed to change role.");
      }
  };

  return (
    <>
      <Tooltip content="Change role to Employee">
        <button onClick={() => setOpenModal(true)} className="">
          {changeRoleIcon2}
        </button>
      </Tooltip>
      <Modal
        dismissible
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center">
              Change role to Employee
            </h3>
            <Formik
              initialValues={{ position: "" }}
              validationSchema={schemaEmployee}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="grid gap-2">
                  <Field name="position">
                    {({ field }: any) => (
                      <TextInput
                        {...field}
                        placeholder="Position"
                        helperText={
                          <ErrorMessage
                            name="position"
                            component="b"
                            className="text-[red] text-[11px]"
                          />
                        }
                      />
                    )}
                  </Field>

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Spinner aria-label="Submitting" size="md" />{" "}
                        changing...
                      </>
                    ) : (
                      "Change"
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
