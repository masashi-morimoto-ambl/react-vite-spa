import { createRootRoute } from '@tanstack/react-router'
import { MainTemplate } from '../components/template/MainTemplate'

export const Route = createRootRoute({
  component: () => <MainTemplate/>,
  notFoundComponent: () => {
    return <p>見つかりませんでした！</p>
  },
})