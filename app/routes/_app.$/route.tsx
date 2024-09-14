import {json, LinksFunction, LoaderFunction} from "@remix-run/node"
import styles from './notfound.css?url'
import {Link} from '@remix-run/react'

export const loader: LoaderFunction = async () => {
  return json({ title: "Oops!" }, { status: 404 })
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

export default function NotFound() {
  return (
    <Link className="page-not-found" to="/posts/1">
      Page Not Found
    </Link>
  )
}