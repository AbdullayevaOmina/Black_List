export interface GetAllHR {
  limit: number;
  offset: number;
}

export interface HRstore {
  hrdata: any[];
  isLoading: boolean;
  totalCount: number;
  delete_hr: (hr_id: string) => Promise<any>;
  get_all_hr: (params: GetAllHR) => Promise<any>;
}

export interface Request {
  delete_hr: (hr_id: string) => unknown;
  get_all_hr: (params: GetAllHR) => unknown;
}
