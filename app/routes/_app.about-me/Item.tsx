import {ReactNode} from 'react'
import Section from '~/components/Section'

type ItemProps = {
  title: string
  subtitle?: string
  image: string
  alt: string
  description: ReactNode
}

export default function Item({ title, subtitle="", image, alt, description }: ItemProps) {
  return (
    <Section title={title}>
      <h3>{subtitle}</h3>
      <div className="content">
        <img src={image} className="item-img" alt={alt} />
        <p>{description}</p>
      </div>
    </Section>
  )
}