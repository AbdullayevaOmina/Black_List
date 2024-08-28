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

export interface AuthStore {
  data: any[];
  isLoading: boolean;
  signin: (data: Signin) => Promise<any>;
  signup: (data: Signup) => Promise<any>;
  forgot_password: (email: string) => Promise<any>;
  reset_password: (data: ResetPassword) => Promise<any>;
}

export interface Request {
  signin: (data: Signin) => unknown;
  signup: (data: Signup) => unknown;
  forgot_password: (email: string) => unknown;
  reset_password: (data: ResetPassword) => unknown;
}
