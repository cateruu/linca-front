export interface ApiError {
  statusCode: number;
  message: string;
  timestamp: string;
  errorCode: number;
  path: string;
}
