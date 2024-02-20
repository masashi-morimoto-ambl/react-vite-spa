import { useSuspenseQuery } from "@tanstack/react-query"
import { Link } from "@tanstack/react-router"
import { postsQueryOptions } from "../../../postsQueryOptions"

export const Posts = () => {
    const postsQuery = useSuspenseQuery(postsQueryOptions)
    const posts = postsQuery.data
    return (
        <div className="p-2 flex gap-2">
            <ul className="list-disc pl-4">
                {[...posts, { id: 'i-do-not-exist', title: 'Non-existent Post' }]?.map(
                (post) => {
                    return (
                    <li key={post.id} className="whitespace-nowrap">
                        <Link
                        to="/"
                        params={{
                            postId: post.id,
                        }}
                        className="block py-1 text-blue-800 hover:text-blue-600"
                        activeProps={{ className: 'text-black font-bold' }}
                        >
                        <div>{post.title.substring(0, 20)}</div>
                        </Link>
                    </li>
                    )
                },
                )}
            </ul>
        </div>
      )
}