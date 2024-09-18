export default function Youtube({ data }: { data: string }) {
  return (
    <div className="post-content">
      <iframe
        className="youtube"
        src={`https://www.youtube.com/embed/${data}`}
        allowFullScreen
        title={data}
      />
    </div>
  )
}
