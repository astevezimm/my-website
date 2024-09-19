import type {LinksFunction, LoaderFunction, MetaFunction} from '@remix-run/node'
import {makeMeta} from '~/global'
import {fetchPost, isFirstOrLast} from '~/data/data.server'
import {useLoaderData, useNavigate} from '@remix-run/react'
import Post, {PostProps} from './Post'
import styles from './post.css?url'
import {useEffect} from 'react'

type PostData = { title: string; content: string; summary: string, image: string }

export const loader: LoaderFunction = async ({params}) => {
    const post = await fetchPost(params.postId as string)
    if (post === null) {
        return {status: 404, title: "-", summary: ""}
    }
    const {isFirst, isLast} = await isFirstOrLast(post.id)
    return {title: post.title, post, isFirst, isLast, summary: post.content?.slice(0, 100), image: `/images/blog/${post.img_url.replace(".png", ".jpg")}`}
}

export const links: LinksFunction = () => [{rel: 'stylesheet', href: styles}]

export const meta: MetaFunction = ({data}) => makeMeta((data as PostData).title, (data as PostData).summary, (data as PostData).image)

export default function BlogPostPage() {
    const navigate = useNavigate()
    const data = useLoaderData()

    useEffect(() => {
        if ((data as {status: number}).status === 404) navigate('/404')
    }, [data, navigate]);
    
    const {post, isFirst, isLast} = (data as {post: PostProps, isFirst: boolean, isLast: boolean})
    return post && <Post {...post} isFirst={isFirst} isLast={isLast} />
}
