type SectionHeadingProps = {
  label: string
  title: string
  intro: string
}

export function SectionHeading({
  label,
  title,
  intro,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      <p className="section-intro">{intro}</p>
    </header>
  )
}
