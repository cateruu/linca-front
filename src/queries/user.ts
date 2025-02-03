import { axiosInstante } from '@/utils/axios';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

type Role = {
  id: number;
  name: 'user' | 'admin';
};

export interface User {
  id: string;
  username: string;
  email: string;
  roles: Role[];
}

async function getUser() {
  try {
    const resp = await axiosInstante.get<User>('/auth/verify');

    return resp.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
  }
}

export function getUserQueryOptions() {
  return queryOptions({
    queryKey: ['user'],
    queryFn: async () => await getUser(),
    staleTime: Infinity,
  });
}

export function useUser() {
  return useQuery(getUserQueryOptions());
}
