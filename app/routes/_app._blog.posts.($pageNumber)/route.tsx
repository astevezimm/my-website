import type {LoaderFunction} from '@remix-run/node'
import {extractCategories, fetchPostList} from '~/data/data.server'

export const loader: LoaderFunction = async ({params}) => {
  const posts = await fetchPostList()
  const categories = extractCategories(posts as Array<{cat_url: string, category: string}>);
  return {posts, categories, pageNumber: params.pageNumber}
}

export default function BlogNumberedPage() { return null }
