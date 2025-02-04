import { Link } from '@tanstack/react-router';

function RootNotFound() {
  return (
    <main className='w-screen h-screen flex flex-col items-center justify-center bg-green gap-3'>
      <h1 className='font-logo text-5xl text-white'>linca</h1>
      <p className='text-center text-white text-xl'>
        Page you are trying to access does not exist.
      </p>
      <Link to='/' className='text-orange font-medium'>
        Back home
      </Link>
    </main>
  );
}

export default RootNotFound;
