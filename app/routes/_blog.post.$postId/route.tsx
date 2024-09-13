import { useParams } from "react-router"
import type {LoaderFunction, MetaFunction} from '@remix-run/node'
import {makeMeta} from '~/global'

type PostData = { title: string; content: string; summary: string }

export const loader: LoaderFunction = async ({params}) => {
    return {title: "test", content: "test", summary: "test"}
}

export const meta: MetaFunction = ({data}) => makeMeta((data as PostData).title, (data as PostData).summary)

export default function BlogPostPage() {
    const postId = useParams().postId
    return <>{postId}</>
}