import { useParams } from "react-router"
import type {LoaderFunction, MetaFunction} from '@remix-run/node'
import {makeMeta} from '~/global'

export const loader: LoaderFunction = async ({params}) => {
  return [1, 2, 3]
}

export const meta: MetaFunction = () => makeMeta("Blog", "Welcome to my thoughts and musings!")

export default function BlogNumberedPage() {
  const pageNumber = useParams().pageNumber
  return <>{pageNumber}</>
}