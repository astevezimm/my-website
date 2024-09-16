import {Link} from '@remix-run/react'
import {formatDate} from '~/global'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import PrevNext from '~/routes/_app.post.$postId/PrevNext'

export type PostProps = {
  markup_content: string
  url: string
  date: string
  category: string
  cat_extended_descript: string
  cat_url: string
}

export default function Post({
  markup_content,
  url,
  date,
  category,
  cat_extended_descript,
  cat_url,
}: PostProps) {
  
  return (
    <>
      <PrevNext url={url} />
      
      <p className="post-header">{formatDate(date)}</p>
      <p className="post-header category">Category: <Link to={`/categories/${cat_url}`}>{category}</Link></p>
      <p className="post-header category">{cat_extended_descript}</p>
      
      <Markdown className="post-content" remarkPlugins={[remarkGfm]}>{markup_content}</Markdown>
      
      <PrevNext url={url} />
    </>
  )
}