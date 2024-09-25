import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Youtube from './Youtube'

const COMPONENT_MAP: { [key: string]: React.ComponentType<{ key: number; data: string }> } = {
  "youtube": Youtube
}

function processMarkdown(markdown: string, isPoems=false) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      className={`post-content ${isPoems ? 'poems' : ''}`}
    >
      {markdown}
    </Markdown>
  )
}

function createCustomComponent(mapkey: string, data: string, key: number) {
  const Component = COMPONENT_MAP[mapkey]
  if (!Component) return null
  return React.createElement(Component, { key, data })
}

const apendPart = (md: Array<string>, part: string) => `${md[md.length - 1]}  \n${part}`

export default function ExtendedMarkdown({children, isPoems, isBlurb=false}: {children: string, isPoems: boolean, isBlurb?: boolean}) {
  if (isPoems) return processMarkdown(children, isPoems)
  if (isBlurb) return processMarkdown(children, false)
  
  const parts = children.split(/[^\S\n]*\n[^\S\n]*/)
  // @ts-expect-error - md is an array of strings and React components
  return parts.reduce((md, part, index) => {
    if (part.startsWith('###### ')) {
      const vals = part.replace('###### ', '').split(/[^\S\n]*:[^\S\n]*/, 2)
      if (vals.length < 2) {
        return [
          ...md.slice(0, -1),
          processMarkdown(apendPart(md, part)),
          <h6 key={index}>{vals[0]}</h6>
        ]
      }
      return [
        ...md.slice(0, -1),
        processMarkdown(md[md.length - 1]),
        createCustomComponent(vals[0], vals[1], index)
      ]
    } else if (index === parts.length - 1) {
      return [...md.slice(0, -1), processMarkdown(apendPart(md, part))]
    } else if (typeof md[md.length - 1] === 'string') {
      return [...md.slice(0, -1), apendPart(md, part)]
    }
    return [...md, part]
  }, [""])
}
