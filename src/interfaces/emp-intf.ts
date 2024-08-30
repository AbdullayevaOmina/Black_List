export interface GetAllEployees {
  position: string | undefined | null;
  limit: number;
  offset: number;
}
export interface CreateEpoylee {
  position: string;
  user_id: string;
}

export interface EmpoyleesStore {
  empdata: any[];
  isLoading: boolean;
  totalCount: number;
  create_emp: (data: CreateEpoylee) => Promise<any>;
  get_all_emp: (params: GetAllEployees) => Promise<any>;
}

export interface Request {
  create_emp: (data: CreateEpoylee) => unknown;
  get_all_emp: (params: GetAllEployees) => unknown;
}
