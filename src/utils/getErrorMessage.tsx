import { ErrorCodes } from '@/lib/errorCode';
import { ApiError } from '@/types/errors';
import { CircleX } from 'lucide-react';

export const getErrorElement = (error: ApiError) => {
  switch (error.errorCode) {
    case ErrorCodes.NOT_FOUND:
      return (
        <div className='font-display flex items-center gap-3'>
          <CircleX color='#c42348' />
          <p className='font-bold text-dark text-sm'>
            Invalid username or password
          </p>
        </div>
      );
    case ErrorCodes.UNATHORIZED:
      return <div></div>;
    case ErrorCodes.USERNAME_TAKEN:
      return (
        <div className='font-display flex items-center gap-3'>
          <CircleX color='#c42348' />
          <div>
            <p className='font-bold text-dark text-sm'>{error.message}</p>
            <p className='text-xs'>Contact: contact@linca.bio</p>
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
};
