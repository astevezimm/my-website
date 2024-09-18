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
  const matches = useMatches()
  // @ts-expect-error - should be able to destructure the data
  const {posts, categories, pageNumber, blurb} = matches.find(match => match.data && match.data.posts).data
  const numberOfPages = Math.ceil(posts.length / postsPerPage)
  const pageNumberValue = Math.min(+pageNumber || 1, numberOfPages)
  const pagination = (count: string) => (
    <>
      {posts.length > postsPerPage &&
        <Pagination pageNumber={pageNumberValue} numberOfPages={numberOfPages} count={count} />
      }
    </>
  )
  if (blurb) posts[0].blurb = blurb
  
  return (
    <>
      <Categories categories={categories} />
      {pagination('1')}
      <PostList posts={posts.slice((pageNumberValue - 1) * postsPerPage, pageNumberValue * postsPerPage)} />
      {pagination('2')}
    </>
  )
}
