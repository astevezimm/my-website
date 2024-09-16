import {Link} from '@remix-run/react'

export default function PrevNext({url}: {url: string}) {
  return (
    <div className="prevnext">
      <Link to={`/posts/${url}/prev`}>&lt; Prev</Link>
      <Link to={`/posts/${url}/next`}>Next &gt;</Link>
    </div>
  )
}