import { createRootRouteWithContext } from '@tanstack/react-router'
import { MainTemplate } from '../components/template/MainTemplate'
import { QueryClient } from '@tanstack/react-query'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => <MainTemplate />,
  notFoundComponent: () => {
    return <p>見つかりませんでした！</p>
  },
})
