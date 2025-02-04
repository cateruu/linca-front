import LandingNav from '@/components/LandingNav/LandingNav';
import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: Root,
  }
);

function Root() {
  return (
    <main className='font-display'>
      <LandingNav />
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  );
}
