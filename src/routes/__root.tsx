import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <main className='font-display'>
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  ),
});
