import { getUserQueryOptions } from '@/queries/user';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context }) => {
    try {
      await context.queryClient.fetchQuery(getUserQueryOptions());
    } catch {
      console.error('unathorized');
    }
    const user = context.queryClient.getQueryData(['user']);
    if (!user) {
      return redirect({
        to: '/login',
      });
    }
  },
});
