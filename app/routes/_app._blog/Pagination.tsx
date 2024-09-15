import { useLocation } from "@remix-run/react"

type PaginationProps = {
  pageNumber: number
  numberOfPages: number
  count: string
}

export default function Pagination({pageNumber, numberOfPages, count}: PaginationProps) {
  const location = useLocation()
  const match = location.pathname.match(/(\/posts)|(\/categories\/[^/]*)/)
  const basePath = match ? match[0] : "/posts"

  const page = (i: number) => (
    <a key={`${count}-${i}`} href={`${basePath}/${i + 1}`} className={pageNumber === i + 1 ? "current" : ""}>
      {i + 1}
    </a>
  )

  return (
    <p>
      Pages:&nbsp;
      {Array.from({length: numberOfPages - 1}, (_, i) => (<>{page(i)},&nbsp;</>))}
      {page(numberOfPages - 1)}
    </p>
  )
}
