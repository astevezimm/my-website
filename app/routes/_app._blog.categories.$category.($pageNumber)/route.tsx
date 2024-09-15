import type {LoaderFunction} from '@remix-run/node'

export const loader: LoaderFunction = async ({params}) => {
  return {posts: [], categories: [], pageNumber: params.pageNumber}
}

export default function BlogCategoryPage() { return null }
