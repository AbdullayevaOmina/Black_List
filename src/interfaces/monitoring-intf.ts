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
  get_daily: (params: GetReq) => Promise<any>;
  get_weekly: (params: GetReq) => Promise<any>;
  get_monthly: (params: GetReq) => Promise<any>;
  get_all: (params: GetReq) => Promise<any>;
}

export interface Request {
  get_daily: (params: GetReq) => unknown;
  get_weekly: (params: GetReq) => unknown;
  get_monthly: (params: GetReq) => unknown;
  get_all: (params: GetReq) => unknown;
}
