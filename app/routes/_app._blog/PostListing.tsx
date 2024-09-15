import {Link} from '@remix-run/react'

export type PostListingProps = {
  title: string
  date: string
  category: string
  image: string
  slug: string
  blurb?: string
}

export default function PostListing({ title, date, category, image, slug, blurb='' }: PostListingProps) {
  return (
    <li className={blurb ? "expanded" : ""}>
      <Link to={`/post/${slug}`}>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{category}</p>
        {blurb ? (
          <div>
            <img src={image} alt={title}/>
            <p>{blurb}</p>
          </div>
        ) : <img src={image} alt={title}/>}
      </Link>
    </li>
  )
}