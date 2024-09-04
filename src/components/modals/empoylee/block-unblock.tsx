"use client";
import { useState } from "react";
import { Button, Modal, Spinner, TextInput, Tooltip } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEmpStore } from "@store";
import { blockIcon, unBlockIcon } from "@global-icons";
import { schemaEmployeeBlock } from "@validations";
import { toast } from "react-toastify";

interface EmployeeModalProps {
  id: any;
  isBlock: string;
}

export function EmployeeActionModal({ id, isBlock }: EmployeeModalProps) {
  const [openModal, setOpenModal] = useState(false);
  const { block_emp, unblock_emp } = useEmpStore();

  const onCloseModal = () => setOpenModal(false);

  const handleSubmit = async (value: any) => {
    const data = { ...value, employee_id: id };
    const resStatus = await block_emp(data);
    if (resStatus === 200) {
      setOpenModal(false);
      toast.success("Blocked successfully.");
    } else {
      toast.error("Failed to block.");
    }
  };

  const handleUnBlock = async () => {
    const res = await unblock_emp(id);
    if (res === 200) {
      setOpenModal(false);
      toast.success("Unblocked successfully.");
    } else {
      toast.error("Failed to unblock.");
    }
  };

  const renderIcon = () => (isBlock === "true" ? unBlockIcon : blockIcon);

  return (
    <>
      <Tooltip content={isBlock === "true" ? "Unblock" : "Block"}>
        <button onClick={() => setOpenModal(true)}>{renderIcon()}</button>
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
          {isBlock === "true" ? (
            <UnblockEmployeeContent
              onClose={onCloseModal}
              onConfirm={handleUnBlock}
            />
          ) : (
            <BlockEmployeeForm onSubmit={handleSubmit} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

function BlockEmployeeForm({
  onSubmit,
}: {
  onSubmit: (value: any) => Promise<void>;
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
        Add this Employee to the blacklist
      </h3>
      <Formik
        initialValues={{ reason: "" }}
        validationSchema={schemaEmployeeBlock}
        onSubmit={onSubmit}
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
  );
}

function UnblockEmployeeContent({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => Promise<void>;
}) {
  return (
    <div className="text-center">
      <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        Are you sure you want to unblock this employee?
      </h3>
      <div className="flex justify-center gap-4">
        <Button color="blue" onClick={onConfirm}>
          {"Yes, I'm sure"}
        </Button>
        <Button color="gray" onClick={onClose}>
          No, cancel
        </Button>
      </div>
    </div>
  );
}
