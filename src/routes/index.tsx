import { createFileRoute } from '@tanstack/react-router';
import ClaimUserInput from '../components/ClaimUserInput/ClaimUserInput';
import { getUserQueryOptions } from '@/queries/user';

export const Route = createFileRoute('/')({
  component: MainPage,
  loader: async ({ context }) => {
    try {
      await context.queryClient.fetchQuery(getUserQueryOptions());
    } catch {
      console.error('no user');
    }
  },
  pendingComponent: () => <p>Loading...</p>,
});

function MainPage() {
  return (
    <section className='h-screen w-screen bg-orange'>
      <div className='max-w-[1440px] flex items-center justify-between h-full mx-auto px-3'>
        <section>
          <h1 className='text-orange-dark font-black text-8xl/tight max-w-4xl'>
            Simplify Your Social Presence with One Link
          </h1>
          <p className='text-orange-dark font-bold text-2xl max-w-2xl mt-4 mb-5'>
            Combine all your socials, websites, and more into one easy to share
            link. Customize it, and make your online life a whole lot simpler
            (and cooler)!
          </p>
          <ClaimUserInput />
        </section>
        <section>
          <div className='aspect-9/16 w-96 bg-violet rounded-xl'></div>
        </section>
      </div>
    </section>
  );
}
