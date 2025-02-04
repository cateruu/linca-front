import { axiosInstante } from '@/utils/axios';
import { useQueryClient } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: RouteComponent,
});

function RouteComponent() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const logout = async () => {
    await axiosInstante.post('/auth/logout');
    queryClient.clear();
    navigate({ to: '/', from: '/dashboard' });
  };

  return (
    <div>
      <button onClick={logout}>log out</button>
    </div>
  );
}
