import { Link } from 'react-router-dom'
import { navItems } from '../../data/navigation'
import { Container } from '../ui/Container'

const contactInfo = {
  email: 'jannavending@gmail.com',
  phone: '310-989-4448',
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-section">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Janna Vending - Home"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-xs font-bold text-white"
                aria-hidden="true"
              >
                JV
              </span>
              <span className="font-display text-base font-semibold text-charcoal">
                Janna Vending
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Premium smart vending for workplaces across the Los Angeles area. Fresh
              snacks, zero hassle.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold text-charcoal">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted transition-colors duration-200 hover:text-charcoal"
                >
                  Home
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted transition-colors duration-200 hover:text-charcoal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted transition-colors duration-200 hover:text-charcoal"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold text-charcoal">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-muted transition-colors duration-200 hover:text-charcoal"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/-/g, '')}`}
                  className="text-sm text-muted transition-colors duration-200 hover:text-charcoal"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold text-charcoal">
              Service area
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Los Angeles County including Burbank, LA, Carson, Long Beach, and surrounding communities.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {currentYear} Janna Vending. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Smart vending for modern workplaces.
          </p>
        </div>
      </Container>
    </footer>
  )
}
