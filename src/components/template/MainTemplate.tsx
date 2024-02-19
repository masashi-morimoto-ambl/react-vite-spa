import { Link, Outlet } from "@tanstack/react-router"

export const MainTemplate = () => {
    return (
        <div className="flex flex-col">
            <header className="p-2 bg-gray-100">GlobalHeader</header>
            <div className="flex h-[calc(100vh-40px)]">
                <aside className="min-w-max p-4 bg-gray-400">
                <div className={`divide-y w-56`}>
            {(
              [
                ['/home', 'Home'],
                ['/about', 'About'],
              ] as const
            ).map(([to, label]) => {
              return (
                <div key={to}>
                  <Link
                    to={to}
                    activeOptions={
                      {
                        // If the route points to the root of it's parent,
                        // make sure it's only active if it's exact
                        // exact: to === '.',
                      }
                    }
                    preload="intent"
                    className={`block py-2 px-3 text-blue-700`}
                    // Make "active" links bold
                    activeProps={{ className: `font-bold` }}
                  >
                    {label}
                  </Link>
                </div>
              )
            })}
          </div>
                </aside>
                <div className="p-4 grow">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}