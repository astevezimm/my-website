import {Outlet} from '@remix-run/react'
import type {LoaderFunction} from '@remix-run/node'

export const loader: LoaderFunction = async ({params}) => {
  return {title: "Welcome to my thoughts and musings!"}
}

export default function BlogParent() {
  return <Outlet />
}