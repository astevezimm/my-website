import type {LoaderFunction} from '@remix-run/node'
import data from '~/data/blog.json'

export const loader: LoaderFunction = async ({params}) => {
  const categories = Array.from(new Set(data.map(post => post.category_slug)))
    .map(category_slug => {
      const post = data.find(post => post.category_slug === category_slug);
      return { category: post.category, category_slug: post.category_slug };
    });
  return {
    posts: data.filter(post => post.category_slug === params.category),
    categories,
    pageNumber: params.pageNumber
  }
}

export default function BlogCategoryPage() { return null }
