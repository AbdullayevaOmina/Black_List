export interface GetAllEmployees {
  position: string | undefined | null;
  limit: number;
  offset: number;
}
export interface CreateEpoylee {
  position: string;
  user_id: string;
}

export interface BlockEpoylee {
  employee_id: string;
  reason: string;
}

export interface EmployeesStore {
  empdata: any[];
  isLoading: boolean;
  totalCount: number;
  create_emp: (data: CreateEpoylee) => Promise<any>;
  block_emp: (data: BlockEpoylee) => Promise<any>;
  unblock_emp: (employee_id: string) => Promise<any>;
  delete_emp: (employee_id: string) => Promise<any>;
  get_all_emp: (params: GetAllEmployees) => Promise<any>;
}

export interface Request {
  create_emp: (data: CreateEpoylee) => unknown;
  delete_emp: (employee_id: string) => unknown;
  block_emp: (data: BlockEpoylee) => unknown;
  unblock_emp: (employee_id: string) => unknown;
  get_all_emp: (params: GetAllEmployees) => unknown;
}
