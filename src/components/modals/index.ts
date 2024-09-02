import { AskModal } from "./ask/index";
import { ForgotPasswordModal } from "./forgotpassword/index";

import { DeleteUserModal } from "./users/delete";
import { ChangeRTEModal } from "./users/changeRoleToEmp";
import { ChangeRTHRModal } from "./users/changeRoleToHR";

import { DeleteEmpModal } from "./empoylee/delete";
import { UnblockEmpModal } from "./empoylee/unblock";
import { EmpoyleeBlockModal } from "./empoylee/block";

import { DeleteHRModal } from "./hr/delete";

export {
  ForgotPasswordModal,
  AskModal,

  // emp
  DeleteEmpModal,
  EmpoyleeBlockModal,
  UnblockEmpModal,

  // user
  DeleteUserModal,
  ChangeRTEModal,
  ChangeRTHRModal,

  // hr
  DeleteHRModal,
};
