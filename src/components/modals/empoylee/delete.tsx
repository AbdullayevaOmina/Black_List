"use client";
import { deleteIcon } from "@global-icons";
import { Button, Modal, Tooltip } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useEmpStore } from "@store";
import { toast } from "react-toastify";

export function DeleteEmpModal(id: any) {
  const [openModal, setOpenModal] = useState(false);
  const { delete_emp } = useEmpStore();

  const handleDelete = async () => {
    const res = await delete_emp(id.id);
    if (res === 200) {
      setOpenModal(false);
      toast.info("Deleted");
    } else {
      toast.warning(`an error occurred status code: ${res}`);
    }
    console.log(id.id);
  };

  return (
    <>
      <Tooltip content={"Delete"}>
        <button onClick={() => setOpenModal(true)}>{deleteIcon}</button>
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
              Are you sure you want to delete this employee?
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
