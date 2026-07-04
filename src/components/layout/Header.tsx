import { useEffect, useState } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../../data/navigation'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { ThemeToggle } from '../ui/ThemeToggle'

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label="JANA Vending — Home"
    >
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-white"
        aria-hidden="true"
      >
        JV
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-charcoal">
        JANA Vending
      </span>
    </Link>
  )
}

function NavLinks({
  onNavigate,
  className = '',
}: {
  onNavigate?: () => void
  className?: string
}) {
  const scrollToSection = useScrollToSection()

  const handleClick = (sectionId: string) => {
    onNavigate?.()
    scrollToSection(sectionId)
  }

  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {navItems.map((item) => (
        <li key={item.sectionId}>
          <button
            type="button"
            onClick={() => handleClick(item.sectionId)}
            className="rounded-lg px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-section hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="border-b border-border bg-background">
      <Container as="nav" aria-label="Main navigation" className="flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-2 md:flex">
          <NavLinks />
          <ThemeToggle />
          <Button to="/contact" size="sm" className="ml-2">
            Contact Us
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-charcoal hover:bg-section md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <IconX size={20} stroke={1.5} aria-hidden="true" />
          ) : (
            <IconMenu2 size={20} stroke={1.5} aria-hidden="true" />
          )}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <Container className="flex flex-col gap-4 py-6">
            <NavLinks onNavigate={() => setMobileOpen(false)} className="flex-col items-stretch" />
            <Button to="/contact" className="w-full" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
