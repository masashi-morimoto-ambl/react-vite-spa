import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="p-2 flex flex-col gap-2">
      <Link to="/posts" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/home" className="[&.active]:font-bold">
        Home
      </Link>
    </div>
  ),
})
