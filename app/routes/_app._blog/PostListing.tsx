import {Link} from '@remix-run/react'
import {formatDate} from '~/global'
import Markdown from '~/components/ExtendedMarkdown'

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
        <p>{formatDate(date)}</p>
        <p>{category}</p>
        {blurb ? (
          <div className="expanded-bottom">
            <img src={`/images/blog/${img_url.replace(".png", ".jpg")}`} alt={title}/>
            <div className="blurb">
              <Markdown isPoems={false} isBlurb={true}>
                {blurb}
              </Markdown>
            </div>
          </div>
        ) : <img src={`/images/blog/${img_url.replace(".png", ".jpg")}`} alt={title}/>}
      </Link>
    </li>
  )
}
