import { createFileRoute } from '@tanstack/react-router'
import { About } from '../../components/pages'

export const Route = createFileRoute('/about/')({
  component: () => <About />
})