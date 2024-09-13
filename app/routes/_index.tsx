import type { MetaFunction } from "@remix-run/node"
import { RootTitle } from "~/global"

export const meta: MetaFunction = () => {
  return [
    { title: `${RootTitle} | Blog` },
    { name: "description", content: "Welcome to my thoughts and musings!" },
  ]
}

// todo: redirect to /posts/1
export default function HomePage() {
  return ""
}
