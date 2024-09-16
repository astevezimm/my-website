import {Link} from '@remix-run/react'

export default function PrevNext({url}: {url: string}) {
  return (
    <div className="prevnext">
      <Link to={`/post/${url}/prev`}>&lt; Prev</Link>
      <Link to={`/post/${url}/next`}>Next &gt;</Link>
    </div>
  )
}