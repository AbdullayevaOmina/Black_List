// "@users-intf" file
export interface GetAllUsers {
  username: string | undefined | null;
  full_name: string | undefined | null;
  limit: number;
  offset: number;
}

export interface ChangeRoleToEmp {
  position: string;
  user_id: string;
}

export interface UsersStore {
  usersdata: any[];
  isLoading: boolean;
  totalCount: number;
  get_all_users: (params: GetAllUsers) => Promise<any>;
  change_role_to_emp: (data: ChangeRoleToEmp) => Promise<any>;
  change_role_to_hr: (id: string) => Promise<any>;
  delete_user: (id: string | any) => Promise<any>;
}

export interface Request {
  get_all_users: (params: GetAllUsers) => unknown;
  change_role_to_emp: (data: ChangeRoleToEmp) => unknown;
  change_role_to_hr: (id: string) => unknown;
  delete_user: (id: string | any) => unknown;
}
