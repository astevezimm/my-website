import {Link} from '@remix-run/react'

type PrevNextProps = {
  url: string
  isFirst: boolean
  isLast: boolean
}

export default function PrevNext({url, isFirst, isLast}: PrevNextProps) {
  return (
    <div className={`prevnext ${isFirst ? "keep-next-right": ""}`}>
      {!isFirst && <Link to={`/post/${url}/prev`}>&lt; Prev</Link>}
      {!isLast && <Link to={`/post/${url}/next`}>Next &gt;</Link>}
    </div>
  )
}