import type {LoaderFunction} from '@remix-run/node'
import {extractCategories, fetchBlurb, fetchPostList} from '~/data/data.server'

export const loader: LoaderFunction = async ({params}) => {
  const posts = await fetchPostList()
  const categories = extractCategories(posts as Array<{cat_url: string, category: string}>)
  const postsByCategory = posts.filter(post => post.cat_url === params.category)
  const blurb = await fetchBlurb(postsByCategory[0].id, params.category as string)
  return {
    posts: postsByCategory,
    categories,
    pageNumber: params.pageNumber,
    blurb,
  }
}

export default function BlogCategoryPage() { return null }
