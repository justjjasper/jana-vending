import { type ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

interface SectionHeadingProps {
  id?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  id,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      <h2
        id={id}
        className="font-display text-2xl font-bold tracking-tight text-charcoal sm:text-3xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      )}
    </div>
  )
}
