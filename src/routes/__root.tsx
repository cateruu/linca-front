import LandingNav from '@/components/LandingNav/LandingNav';
import RootNotFound from '@/components/RootNotFound/RootNotFound';
import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Toaster } from 'sonner';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: Root,
    notFoundComponent: RootNotFound,
  }
);

function Root() {
  return (
    <main className='font-display'>
      <LandingNav />
      <Outlet />
      <TanStackRouterDevtools />
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: '#ffe5dc',
          },
        }}
      />
    </main>
  );
}
