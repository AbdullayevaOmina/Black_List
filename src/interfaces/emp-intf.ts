export interface GetAllEmployees {
  position: string | undefined | null;
  limit: number;
  offset: number;
}
export interface CreateEpoylee {
  position: string;
  user_id: string;
}

export interface EmployeesStore {
  empdata: any[];
  isLoading: boolean;
  totalCount: number;
  create_emp: (data: CreateEpoylee) => Promise<any>;
  delete_emp: (employee_id: string) => Promise<any>;
  get_all_emp: (params: GetAllEmployees) => Promise<any>;
}

export interface Request {
  create_emp: (data: CreateEpoylee) => unknown;
  delete_emp: (employee_id: string) => unknown;
  get_all_emp: (params: GetAllEmployees) => unknown;
}
