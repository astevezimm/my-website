import type {LinksFunction, LoaderFunction, MetaFunction} from '@remix-run/node'
import {makeMeta} from '~/global'
import {fetchPost} from '~/data/data.server'
import {useLoaderData, useNavigate} from '@remix-run/react'
import Post, {PostProps} from './Post'
import styles from './post.css?url'
import {useEffect} from 'react'

type PostData = { title: string; content: string; summary: string }

export const loader: LoaderFunction = async ({params}) => {
    const post = await fetchPost(params.postId as string)
    if (post === null) {
        return {status: 404, title: "-", summary: ""}
    }
    return {title: post.title, post, summary: post.content?.slice(0, 100)}
}

export const links: LinksFunction = () => [{rel: 'stylesheet', href: styles}]

export const meta: MetaFunction = ({data}) => makeMeta((data as PostData).title, (data as PostData).summary)

export default function BlogPostPage() {
    const navigate = useNavigate()
    const data = useLoaderData()
    
    console.log("here")

    useEffect(() => {
        if ((data as {status: number}).status === 404) navigate('/404')
    }, [data, navigate]);
    
    const post = (data as {post: object}).post as PostProps
    return post && <Post {...post} />
}
