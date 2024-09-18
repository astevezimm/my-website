import { useEffect } from "react"
import {useLoaderData, useNavigate} from "@remix-run/react"
import type {LoaderFunction} from '@remix-run/node'
import {fetchPostList} from '~/data/data.server'

export const loader: LoaderFunction = async ({params}) => {
  const posts = await fetchPostList()
  const current = posts.findIndex(post => post.url === params.postId)
  if (current === -1) {
    return {status: 404}
  }
  if (params.direction === 'prev') {
    return {url: posts[current - 1].url}
  }
  if (params.direction === 'next') {
    return {url: posts[current + 1].url}
  }
  return {status: 404}
}

export default function PrevNextPage() {
  const navigate = useNavigate()
  const data = useLoaderData()

  useEffect(() => {
    if ((data as {status: number}).status === 404)
      navigate("/404")
    navigate(`/post/${(data as {url: string}).url}`, { replace: true })
  }, [navigate, data])

  return null
}
