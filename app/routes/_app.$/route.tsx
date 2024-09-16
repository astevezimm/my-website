import {json, LinksFunction, LoaderFunction, MetaFunction} from "@remix-run/node"
import styles from './notfound.css?url'
import {Link} from '@remix-run/react'
import {RootTitle} from '~/global'

export const loader: LoaderFunction = async () => {
  return json({ title: "Oops!" }, { status: 404 })
}

export const meta: MetaFunction = () => [{ title: `${RootTitle} | Oops!` }]

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

export default function NotFound() {
  return (
    <Link className="page-not-found" to="/posts/1">
      Page Not Found
    </Link>
  )
}