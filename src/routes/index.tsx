import { createFileRoute } from '@tanstack/react-router';

const MainPage = () => {
  return <div>index</div>;
};

export const Route = createFileRoute('/')({
  component: MainPage,
});
