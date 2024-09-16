import type {LoaderFunction, MetaFunction} from '@remix-run/node'
import {makeMeta} from '~/global'
import {fetchPost} from '~/data/data.server'
import {useLoaderData} from '@remix-run/react'
import Post, {PostProps} from './Post'

type PostData = { title: string; content: string; summary: string }

export const loader: LoaderFunction = async ({params}) => {
    const post = await fetchPost(params.postId as string)
    return {title: post.title, post, summary: post.content?.slice(0, 100)}
}

export const meta: MetaFunction = ({data}) => makeMeta((data as PostData).title, (data as PostData).summary)

export default function BlogPostPage() {
    const post = (useLoaderData() as {post: object}).post as PostProps
    return <Post {...post} />
}