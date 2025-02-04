import { useUser } from '@/queries/user';
import { Link, useLocation } from '@tanstack/react-router';

function LandingNav() {
  const pathaname = useLocation({ select: (location) => location.pathname });
  const { data } = useUser();

  return (
    <>
      {pathaname === '/' && (
        <nav className='fixed top-6 w-full max-w-[1440px] left-1/2 -translate-x-1/2 bg-red p-3 rounded-4xl flex items-center justify-between'>
          <h2 className='font-logo text-xl pt-4 text-white ml-3'>linca</h2>
          <section className='flex items-center gap-3'>
            <p>asd</p>
            <p>dsa</p>
            <p>hdf</p>
          </section>
          {data ? (
            <Link
              to='/dashboard'
              className='bg-green text-white text-sm p-3 min-w-40 text-center font-medium rounded-3xl'
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to='/login'
              className='bg-green text-white text-sm p-3 min-w-40 text-center font-medium rounded-3xl'
            >
              Sign in
            </Link>
          )}
        </nav>
      )}
    </>
  );
}

export default LandingNav;
