import PostListing, {PostListingProps} from '~/routes/_app._blog/PostListing'

export default function PostList({ posts }: { posts: PostListingProps[] }) {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <PostListing key={post.slug} {...post} />
      ))}
    </ul>
  )
}