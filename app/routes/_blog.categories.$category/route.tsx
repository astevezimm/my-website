import { useParams } from "react-router"
import type {LoaderFunction, MetaFunction} from '@remix-run/node'
import {makeMeta} from '~/global'

type CategoryData = { category: string; description: string }

export const loader: LoaderFunction = async ({params}) => {
    return {category: "test", description: "test"}
}

export const meta: MetaFunction = ({data}) => makeMeta((data as CategoryData).category, (data as CategoryData).description)

export default function BlogCategoryPage() {
    const category = useParams().category
    return <>{category}</>
}