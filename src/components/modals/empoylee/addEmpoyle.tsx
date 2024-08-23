"use client";
import { Button, Modal, Spinner, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { schemaProduct } from "@validations";

export function AddEmpoyleeModal() {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  useEffect(() => {
    if (openModal) {
    }
  }, [openModal]);

  const initialValues = {
    name: "",
    price: null,
    category_id: null,
    brand_category_id: null,
    brand_id: null,
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Add Empoylee</Button>
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
              Add Empoylee
            </h3>
            <Formik
              initialValues={initialValues}
              validationSchema={schemaProduct}
              onSubmit={() => {}}
            >
              {({ isSubmitting }) => (
                <Form className="grid gap-2">
                  <Field name="name">
                    {({ field }: any) => (
                      <TextInput
                        {...field}
                        placeholder="Full Name"
                        helperText={
                          <ErrorMessage
                            name="name"
                            component="small"
                            className="text-[red]"
                          />
                        }
                      />
                    )}
                  </Field>

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Spinner aria-label="Submitting" size="md" /> adding...
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
