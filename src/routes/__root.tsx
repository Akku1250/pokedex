import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

type TRouteContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<TRouteContext>()({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    );
  },
});

function RootComponent() {
  return (
    <>
      <div className="flex gap-2 p-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
      </div>
      <hr />
      <Outlet />
      <ReactQueryDevtools
        buttonPosition="bottom-left"
        initialIsOpen={false}
      />
      <TanStackRouterDevtools
        position="bottom-right"
        initialIsOpen={false}
      />
    </>
  );
}
