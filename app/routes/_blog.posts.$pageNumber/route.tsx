import { useParams } from "react-router"

// todo: add loader and meta like in _index

export function BlogNumberedPage() {
  const pageNumber = useParams().pageNumber
  return <>{pageNumber}</>
}