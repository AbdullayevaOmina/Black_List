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

export interface AuthStore {
  data: any[];
  isLoading: boolean;
  signin: (data: Signin) => Promise<any>;
  signup: (data: Signup) => Promise<any>;
}

export interface Request {
  signin: (data: Signin) => unknown;
  signup: (data: Signup) => unknown;
  
}
