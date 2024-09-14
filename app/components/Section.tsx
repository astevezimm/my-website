type SectionProps = {
  children: React.ReactNode
  title: string
}

export default function Section({ children, title }: SectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}