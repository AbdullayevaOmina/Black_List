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

export interface EpoyleeData {
  DateOfBirth?: string;
  Email?: string;
  FullName?: string;
  hr_id?: string;
  id?: string;
  is_blocked?: string;
  position?: string;
}

export interface EmployeesStore {
  empdata: EpoyleeData[];
  empsdata: any[];
  isLoading: boolean;
  totalCount: number;
  create_emp: (data: CreateEpoylee) => Promise<any>;
  block_emp: (data: BlockEpoylee) => Promise<any>;
  unblock_emp: (employee_id: string) => Promise<any>;
  delete_emp: (employee_id: string) => Promise<any>;
  get_all_emp: (params: GetAllEmployees) => Promise<any>;
  get_emp: (id: any) => Promise<any>;
}

export interface Request {
  create_emp: (data: CreateEpoylee) => unknown;
  delete_emp: (employee_id: string) => unknown;
  block_emp: (data: BlockEpoylee) => unknown;
  unblock_emp: (employee_id: string) => unknown;
  get_all_emp: (params: GetAllEmployees) => unknown;
  get_emp: (id: any) => unknown;
}
