import { Link } from '@tanstack/react-router';
import { ChangeEvent, useState } from 'react';

const ClaimUserInput = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className='flex items-center gap-2.5'>
      <div className='flex items-center bg-white rounded-3xl p-5'>
        <p className='font-medium text-dark'>linca.bio/</p>
        <input
          type='text'
          value={username}
          onChange={handleInputChange}
          className='outline-none border-none'
          placeholder='username'
        />
      </div>
      <Link
        to='/register'
        search={(prev) => ({ ...prev, username })}
        className='font-bold text-white bg-green rounded-3xl p-5'
      >
        Claim <span className='font-logo font-normal leading-0'>linca</span>
      </Link>
    </div>
  );
};

export default ClaimUserInput;
