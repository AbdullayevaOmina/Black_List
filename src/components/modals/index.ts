import { AskModal } from "./ask/index";
import { ForgotPasswordModal } from "./forgotpassword/index";

import { DeleteUserModal } from "./users/delete";
import { ChangeRTEModal } from "./users/changeRoleToEmp";
import { ChangeRTHRModal } from "./users/changeRoleToHR";

import { DeleteEmpModal } from "./empoylee/delete";
import { EmployeeActionModal } from "./empoylee/block-unblock";
import { EditEmpModal } from "./empoylee/edit";

import { DeleteHRModal } from "./hr/delete";

export {
  ForgotPasswordModal,
  AskModal,

  // emp
  DeleteEmpModal,
  EmployeeActionModal,
  EditEmpModal,

  // user
  DeleteUserModal,
  ChangeRTEModal,
  ChangeRTHRModal,

  // hr
  DeleteHRModal,
};
