import { type ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'section'
  ariaLabelledBy?: string
}

export function Section({
  id,
  children,
  className = '',
  background = 'white',
  ariaLabelledBy,
}: SectionProps) {
  const bgClass = background === 'section' ? 'bg-section' : 'bg-background'

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`py-20 sm:py-28 lg:py-32 ${bgClass} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  )
}
