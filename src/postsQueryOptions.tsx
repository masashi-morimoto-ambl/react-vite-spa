import { queryOptions } from '@tanstack/react-query'
import { fetchPosts } from './repositories/service/postRepository'

export const postsQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn: () => fetchPosts(),
})
