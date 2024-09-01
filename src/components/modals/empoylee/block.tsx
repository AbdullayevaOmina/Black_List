"use client";
import { Button, Modal, Spinner, TextInput, Tooltip } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { schemaEmployeeBlock } from "@validations";
import { banIcon } from "@global-icons";
import { useEmpStore } from "@store";
import { toast } from "react-toastify";

export function EmpoyleeBlockModal(id: any) {
  const [openModal, setOpenModal] = useState(false);
  const { block_emp } = useEmpStore();

  function onCloseModal() {
    setOpenModal(false);
  }

  const handleSubmit = async (value: any) => {
    const data = { ...value, employee_id: id.id };
    console.log(data);
    const resStatus = await block_emp(data);
    if (resStatus === 200) {
      setOpenModal(false);
      toast.success("Blocked.");
    } else {
      toast.error("Failed block.");
    }
  };

  return (
    <>
      <Tooltip content="Block">
        <button onClick={() => setOpenModal(true)}>{banIcon}</button>
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
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
              Add this Employee to the blacklist
            </h3>
            <Formik
              initialValues={{ reason: "" }}
              validationSchema={schemaEmployeeBlock}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="grid gap-2">
                  <Field name="reason">
                    {({ field }: any) => (
                      <TextInput
                        {...field}
                        placeholder="Reason"
                        helperText={
                          <ErrorMessage
                            name="reason"
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
                        <Spinner aria-label="Submitting" size="md" /> Adding...
                      </>
                    ) : (
                      "Add"
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
