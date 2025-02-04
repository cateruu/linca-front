import { ErrorCodes } from '@/lib/errorCode';

export interface ApiError {
  statusCode: number;
  message: string;
  timestamp: string;
  errorCode: ErrorCodes;
  path: string;
}
