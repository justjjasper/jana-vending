import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { IconArrowUpRight } from '@tabler/icons-react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-sm focus-visible:ring-primary',
  secondary:
    'bg-surface text-charcoal border border-border hover:bg-section shadow-sm dark:bg-surface dark:hover:bg-section',
  ghost: 'text-charcoal hover:bg-section',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  arrow?: boolean
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: never; href?: never }

type ButtonAsLink = BaseProps & LinkProps & { disabled?: never; href?: never }

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: never }

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const baseClasses =
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium font-display transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]'

function ArrowIcon() {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
      <IconArrowUpRight size={14} stroke={2} aria-hidden="true" />
    </span>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  arrow = false,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const content = (
    <>
      {children}
      {arrow && <ArrowIcon />}
    </>
  )

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsAnchor
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    )
  }

  if ('to' in props && props.to) {
    const { to, ...linkProps } = props as ButtonAsLink
    return (
      <Link to={to} className={classes} {...linkProps}>
        {content}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  )
}
