import axios from "axios"

export type PostType = {
    id: string
    title: string
    body: string
  }

export const fetchPosts = async () => {
    console.log('Fetching posts...')
    await new Promise((r) => setTimeout(r, 500))
    return axios
      .get<PostType[]>('/posts')
      .then((r) => r.data.slice(0, 10))
  }