"use client";
import { changeRoleIcon } from "@global-icons";
import { Button, Modal, Tooltip } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useUsersStore } from "@store";
import { toast } from "react-toastify";

export function ChangeRTHRModal(id: string | any) {
  const [openModal, setOpenModal] = useState(false);
  const { change_role_to_hr } = useUsersStore();

  const handleChangeRoleUser = async () => {
    try {
      const res = await change_role_to_hr(id.id);
      if (res === 200) {
        setOpenModal(false);
        toast.success("User role changed to HR successfully.");
      } else {
        console.error("Failed to change user role to HR.");
        if (res === 403) {
          console.error("Permission denied.");
        }
      }
    } catch (error) {
      console.error("Error changing user role:", error);
    }
  };

  return (
    <>
      <Tooltip content={"Change role to HR"}>
        <button onClick={() => setOpenModal(true)}>{changeRoleIcon}</button>
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
              Are you sure you want to change this user's role to HR?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="blue" onClick={handleChangeRoleUser}>
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
