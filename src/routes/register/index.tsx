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
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute } from '@tanstack/react-router';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  username: z.string().min(3, 'Username has to be at least 3 characters long.'),
  email: z.string().email('Invalid email.'),
  password: z.string().min(6, 'Password has to be at least 6 charaters long.'),
});

type FormInput = z.infer<typeof FormSchema>;

const RouteComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { username } = Route.useSearch();
  const form = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: username,
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setIsLoading(true);
    const resp = await fetch('http://localhost:1337/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // catch errors

    const user = await resp.json();
    // set token
    // set user in context
    // add verify endpoint in api
    setIsLoading(false);
  };

  return (
    <section className='w-screen h-screen bg-green flex flex-col items-center justify-center'>
      <h1 className='font-logo text-4xl text-white'>linca</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-md space-y-2'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className='w-full space-y-0'>
                <FormLabel className='text-sone-900'>Username</FormLabel>
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
            name='email'
            render={({ field }) => (
              <FormItem className='w-full space-y-0'>
                <FormLabel className='text-sone-900'>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className='bg-white py-3  outline-none border-2 focus:border-orange focus:outline-none focus-visible:ring-0'
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
                <FormLabel className='text-sone-900'>Password</FormLabel>
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
              'w-full text-base bg-orange py-3 text-orange-dark font-medium rounded-md cursor-pointer hover:bg-orange-hover'
            )}
            disabled={isLoading}
          >
            {isLoading && <LoaderCircle className='animate-spin' />}
            Sign up
          </Button>
        </form>
      </Form>
    </section>
  );
};

const searchSchema = z.object({
  username: z.string(),
});

export const Route = createFileRoute('/register/')({
  component: RouteComponent,
  validateSearch: searchSchema,
});
