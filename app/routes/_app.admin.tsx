import fs from 'fs/promises'
import path from 'path'
import {useEffect, useState} from 'react'
import type {LinksFunction, LoaderFunction} from '@remix-run/node'
import {useLoaderData, useNavigate} from '@remix-run/react'
import styles from '~/routes/_app.post.$postId/post.css?url'
import Post from '~/routes/_app.post.$postId/Post'

export const loader: LoaderFunction = async () => {
  if (!process.env.ADMIN)
    return {status: 404, data: '', title: '-'}
  const filePath = path.join(process.cwd(), 'blog-tools/markdown.md')
  return {data: await fs.readFile(filePath, 'utf-8'), title: '-'}
}

export const links: LinksFunction = () => [{rel: 'stylesheet', href: styles}]

export default function AdminPage() {
  const navigate = useNavigate()
  const data = (useLoaderData() as {data: string, status?: number})
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (data.status === 404) navigate('/404')
    else setTimeout(() => setIsReady(true), 200)
  }, [data, navigate])

  if (!isReady) return null
  return (
    <Post
      markup_content={data.data}
      url=""
      date="August 1, 2021"
      category="Not My Birthday"
      cat_extended_descript="This is not my birthday"
      cat_url="this-is-not-my-birthday"
      isFirst={true}
      isLast={true}
    />
  )
}