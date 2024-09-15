import {LinksFunction, LoaderFunction, type MetaFunction} from '@remix-run/node'
import styles from './blog.css?url'
import {makeMeta} from '~/global'
import {useMatches} from '@remix-run/react'
import PostList from './PostList'
import Categories from './Categories'
import Pagination from './Pagination'

export const loader: LoaderFunction = async () => {
  return {title: "Welcome to my thoughts and musings!"}
}

export const meta: MetaFunction = () => makeMeta("Blog", "Welcome to my thoughts and musings!")

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

export default function BlogParent() {
  const postsPerPage = 25
  // @ts-expect-error - should be able to destructure the data
  const {posts, categories, pageNumber} = useMatches().find(match => match.data.posts).data
  const pageNumberValue = +pageNumber || 1
  return (
    <>
      <Categories categories={categories} />
      <PostList posts={posts.slice((pageNumberValue - 1) * postsPerPage, pageNumberValue * postsPerPage)} />
      {posts.length > postsPerPage &&
        <Pagination pageNumber={pageNumberValue} numberOfPages={Math.ceil(posts.length / postsPerPage)} />
      }
    </>
  )
}
