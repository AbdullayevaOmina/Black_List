"use client";
import { deleteIcon } from "@global-icons";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function DeleteUserModal({
  onDelete,
  title,
}: {
  onDelete: () => Promise<void>;
  title: string;
}) {
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    await onDelete(); // Delete function passed as prop
    setOpenModal(false); // Close modal after delete
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="flex">
        {deleteIcon} Delete
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this {title}?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDelete}>
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
