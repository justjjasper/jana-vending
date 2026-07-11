import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'article'
}

export function Card({ children, className = '', as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={`rounded-2xl border border-border bg-background shadow-card transition-shadow duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${className}`}
    >
      {children}
    </Tag>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-border bg-background p-6 shadow-card transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-elevated hover:-translate-y-0.5">
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary/12"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="font-display text-base font-semibold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  )
}
