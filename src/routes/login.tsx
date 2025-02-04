import { Button } from '@/components/ui/buttons';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { TokenResponse } from '@/types/auth';
import { axiosInstante } from '@/utils/axios';
import { getErrorElement } from '@/utils/getErrorMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { AxiosError } from 'axios';
import { LoaderCircle, Undo } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
});

const FormSchema = z.object({
  username: z.string().min(3, 'Username has to be at least 3 characters long.'),
  password: z.string().min(6, 'Password has to be at least 6 charaters long.'),
});

type FormInput = z.infer<typeof FormSchema>;

function RouteComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate({ from: '/login' });

  const form = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setIsLoading(true);
    try {
      await axiosInstante.post<TokenResponse>('/auth/login', data);
      navigate({ to: '/' });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(getErrorElement(error.response?.data));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='w-screen h-screen bg-green flex flex-col items-center justify-center'>
      <h1 className='font-logo text-4xl text-white'>linca</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-md space-y-2'>
          <Link to='/' className='flex items-center gap-2'>
            <Undo size={14} /> Home
          </Link>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className='w-full space-y-0'>
                <FormLabel className='text-white'>Username</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className='bg-white py-3 outline-none border-2 focus:border-orange focus:outline-none focus-visible:ring-0'
                  />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='w-full space-y-0'>
                <FormLabel className='text-white'>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='password'
                    className='bg-white py-3  outline-none border-2 focus:border-orange focus:outline-none focus-visible:ring-0'
                  />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className={cn(
              'w-full text-base bg-orange py-3 text-dark font-medium rounded-md cursor-pointer hover:bg-orange-hover'
            )}
            disabled={isLoading}
          >
            {isLoading && <LoaderCircle className='animate-spin' />}
            Sign in
          </Button>
          <p className='text-center text-sm '>
            Don't have an account?{' '}
            <Link to='/register' className='text-orange'>
              Sign up
            </Link>
          </p>
        </form>
      </Form>
    </section>
  );
}
