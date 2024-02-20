import { createFileRoute } from '@tanstack/react-router'
import { Posts } from '../../components/pages'
import { Suspense } from 'react'

export const Route = createFileRoute('/posts/')({
  component: () => <Suspense fallback={<p>loading...</p>}><Posts /></Suspense>
})