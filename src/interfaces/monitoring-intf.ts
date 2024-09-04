export interface GetReq {
  limit: number;
  offset: number;
}

export interface MonitoringStore {
  dailydata: any[];
  weeklydata: any[];
  monthlydata: any[];
  alldata: any[];
  isLoading: boolean;
  DtotalCount: number;
  WtotalCount: number;
  MtotalCount: number;
  AtotalCount: number;
  get_all_data: (params: GetReq) => Promise<void>; // New method for fetching all data
}
export interface Request {
  get_all_data: (params: GetReq) => Promise<void>; // New method to fetch all data
}
