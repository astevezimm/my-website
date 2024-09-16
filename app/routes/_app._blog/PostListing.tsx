import {Link} from '@remix-run/react'

export type PostListingProps = {
  title: string
  date: string
  category: string
  img_url: string
  url: string
  blurb?: string
}

export default function PostListing({ title, date, category, img_url, url, blurb }: PostListingProps) {
  return (
    <li className={blurb ? "expanded" : ""}>
      <Link to={`/post/${url}`}>
        <h2>{title}</h2>
        <p>{(new Date(date).toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"}))}</p>
        <p>{category}</p>
        {blurb ? (
          <div className="expanded-bottom">
            <img src={`/images/blog/${img_url}`} alt={title}/>
            <p className="blurb">{blurb}</p>
          </div>
        ) : <img src={`/images/blog/${img_url}`} alt={title}/>}
      </Link>
    </li>
  )
}
