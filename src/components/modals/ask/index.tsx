"use client";
import { Button, Modal, Tooltip } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function AskModal({
  onDelete,
  title,
  tooltip,
  icon,
  btncolor,
}: {
  onDelete: () => unknown;
  title: string;
  tooltip: string;
  btncolor?: string;
  icon: JSX.Element; // Corrected the type here
}) {
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async () => {
    const res: any = await onDelete();
    // if (res === true) setOpenModal(false);

  };

  return (
    <>
      <Tooltip content={tooltip}>
        <button onClick={() => setOpenModal(true)}>{icon}</button>{" "}
        {/* Used the icon here */}
      </Tooltip>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
        dismissible={true}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {title}
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color={btncolor ? btncolor : "failure"}
                onClick={handleDelete}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
