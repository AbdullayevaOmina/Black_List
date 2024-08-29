// --------- Authorization  -------------

export interface Signin {
  username: string;
  password: string;
}

export interface Signup extends Signin {
  full_name: string;
  email: string;
  date_of_birth: any;
}

export interface ResetPassword {
  new_password: string;
  reset_token: string | number;
}

export interface GetAllUsers {
  username: string | undefined | null;
  full_name: string | undefined | null;
  limit: number;
  offset: number;
}

export interface AuthStore {
  data: any[];
  isLoading: boolean;
  totalCount: number;
  signin: (data: Signin) => Promise<any>;
  signup: (data: Signup) => Promise<any>;
  forgot_password: (email: string) => Promise<any>;
  reset_password: (data: ResetPassword) => Promise<any>;
  get_all_users: (params: GetAllUsers) => Promise<any>;
}

export interface Request {
  signin: (data: Signin) => unknown;
  signup: (data: Signup) => unknown;
  forgot_password: (email: string) => unknown;
  reset_password: (data: ResetPassword) => unknown;
  get_all_users: (params: GetAllUsers) => unknown;
}
