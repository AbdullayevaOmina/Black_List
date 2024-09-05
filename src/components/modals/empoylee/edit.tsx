"use client";
import { useState } from "react";
import { useEmpStore } from "@store";
import { Button, Modal, Spinner, TextInput, Tooltip } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { schemaEmployee } from "@validations";
import { editIcon } from "@global-icons";
import { toast } from "react-toastify";

export function EditEmpModal({ id, oldPosition, hr_id }: any) {
  const [openModal, setOpenModal] = useState(false);
  const { update_emp } = useEmpStore();

  function onCloseModal() {
    setOpenModal(false);
  }

  const handleSubmit = async (value: any) => {
    const data = { ...value, hr_id: hr_id };
    const resStatus = await update_emp(id, data);
    if (resStatus === 200) {
      setOpenModal(false);
      toast.success("Edited successfully.");
    } else {
      toast.error("Failed to edit role.");
    }
  };

  return (
    <>
      <Tooltip content="Edit">
        <button onClick={() => setOpenModal(true)} className="">
          {editIcon}
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
              Edit employee position
            </h3>
            <Formik
              initialValues={{ position: oldPosition }}
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
                        onKeyDown={(e) => {
                          if (/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
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
                        <Spinner aria-label="Submitting" size="md" /> Editing...
                      </>
                    ) : (
                      "Edit"
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
