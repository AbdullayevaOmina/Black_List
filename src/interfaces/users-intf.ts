// "@users-intf" file
export interface GetAllUsers {
  username: string | undefined | null;
  full_name: string | undefined | null;
  limit: number;
  offset: number;
}

export interface UsersStore {
  usersdata: any[];
  isLoading: boolean;
  totalCount: number;
  get_all_users: (params: GetAllUsers) => Promise<any>;
  change_role: (id: string) => Promise<any>;
  delete_user: (id: string | any) => Promise<any>;
}

export interface Request {
  get_all_users: (params: GetAllUsers) => unknown;
  change_role: (id: string) => unknown;
  delete_user: (id: string | any) => unknown;
}
