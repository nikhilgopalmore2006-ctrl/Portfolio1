type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <div className="section-kicker">
        <span>{index}</span>
        <span className="section-kicker__line" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  )
}
