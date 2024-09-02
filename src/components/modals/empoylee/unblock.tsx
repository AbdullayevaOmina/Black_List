"use client";
import { unBlockIcon } from "@global-icons";
import { Button, Modal, Tooltip } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useEmpStore } from "@store";
import { toast } from "react-toastify";

export function UnblockEmpModal(id: string | any) {
  const [openModal, setOpenModal] = useState(false);
  const { unblock_emp } = useEmpStore();

  const handleUnBlock = async () => {
    const res = await unblock_emp(id.id);
    if (res === 200) {
      setOpenModal(false);
      toast.info("Unblocked");
    } else {
      toast.warning(`an error occurred status code: ${res}`);
    }
    console.log(id.id);
  };

  return (
    <>
      <Tooltip content={"Delete"}>
        <button onClick={() => setOpenModal(true)}>{unBlockIcon}</button>
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
              Are you sure you want to unblock this employee?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="blue" onClick={handleUnBlock}>
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
