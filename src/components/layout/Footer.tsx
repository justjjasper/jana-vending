import { Link } from 'react-router-dom'
import { navItems } from '../../data/navigation'
import { Container } from '../ui/Container'

const contactInfo = {
  email: 'janavending@gmail.com',
  phone: '310-989-4448',
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-charcoal text-white">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              aria-label="JANA Vending — Home"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-white"
                aria-hidden="true"
              >
                JV
              </span>
              <span className="font-display text-lg font-semibold">JANA Vending</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Premium smart vending for workplaces across the Los Angeles area. Fresh
              snacks, zero hassle.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-300">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contact
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/-/g, '')}`}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-300">
              Service Area
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Los Angeles County — Burbank, LA, Carson, Long Beach, and surrounding
              communities.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} JANA Vending. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Smart vending for modern workplaces.
          </p>
        </div>
      </Container>
    </footer>
  )
}
