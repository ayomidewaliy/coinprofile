export type ErrorResponse = {data?: any; message: string; status: 'error'};
export type RequestResponse<T> = [ErrorResponse | null, T | null];
export interface DeviceData {
  deviceId: string;
  ip: string;
  deviceInfo: string;
}
