export default function Pagination({pageNumber, numberOfPages}: {pageNumber: number, numberOfPages: number}) {
  // todo: make path work right for categories too
  const page = (i: number) => (
    <a key={i} href={`/posts/${i + 1}`} className={pageNumber === i + 1 ? "current" : ""}>
      {i + 1}
    </a>
  )
  
  return (
    <h2>
      Pages:&nbsp;
      {Array.from({length: numberOfPages - 1}, (_, i) => (<>{page(i)},&nbsp;</>))}
      {page(numberOfPages - 1)}
    </h2>
  )
}
