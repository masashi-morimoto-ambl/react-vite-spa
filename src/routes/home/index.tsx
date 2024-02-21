import { createFileRoute } from '@tanstack/react-router'
import { Home } from '../../components/pages'

export const Route = createFileRoute('/home/')({
  component: () => <Home />,
})
