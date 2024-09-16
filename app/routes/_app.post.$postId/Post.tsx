import {Link} from '@remix-run/react'
import {formatDate} from '~/global'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
      <Link to={`/posts/${url}/prev`}>&lt; Prev</Link>
      <Link to={`/posts/${url}/next`}>Next &gt;</Link>
      
      <p>{formatDate(date)}</p>
      <p>Category: <Link to={`/categories/${cat_url}`}>{category}</Link></p>
      <p>{cat_extended_descript}</p>
      
      <Markdown remarkPlugins={[remarkGfm]}>{markup_content}</Markdown>
      
      <Link to={`/posts/${url}/prev`}>&lt; Prev</Link>
      <Link to={`/posts/${url}/next`}>Next &gt;</Link>
    </>
  )
}