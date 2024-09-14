import {ReactNode} from 'react'
import Section from '~/components/Section'

type GameProps = {
  title: string,
  id: string,
  description?: ReactNode
}

export default function Game({ title, id, description = "" }: GameProps) {
  return (
    <Section title={title}>
      {description && <p>{description}</p>}
      <iframe src={`https://i.simmer.io/@astevezimm/${id}`} title={title} />
    </Section>
  )
}