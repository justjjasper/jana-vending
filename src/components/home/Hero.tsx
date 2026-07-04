import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="border-b border-border bg-background py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-medium uppercase tracking-widest text-primary">
            Los Angeles Vending Service
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl"
          >
            JANA Vending
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Smart snacks and drinks for the workplaces that keep LA moving. Premium
            vending, zero hassle — so your team can focus on what matters.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/contact" size="lg">
              Get Started
            </Button>
            <Button
              to="/machines"
              variant="secondary"
              size="lg"
            >
              View Our Machines
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
