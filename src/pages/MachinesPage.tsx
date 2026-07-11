import { Link } from 'react-router-dom'
import { machine } from '../data/machine'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/Typography'
import { Reveal } from '../components/ui/Reveal'

export function MachinesPreview() {
  return (
    <Section id="our-machines" ariaLabelledBy="machines-preview-heading">
      <SectionHeading
        id="machines-preview-heading"
        title="Our machines"
        description="Smart, compact coolers built for modern workplaces."
      />
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-card">
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center justify-center bg-section p-8 lg:p-12">
              <img
                src={machine.image}
                alt={machine.alt}
                className="h-auto w-full max-w-[280px] object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="inline-flex w-fit items-center rounded-full bg-primary/8 px-3 py-1 text-xs font-medium tracking-wide text-primary">
                {machine.tagline}
              </p>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-charcoal sm:text-2xl">
                {machine.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted line-clamp-3">
                {machine.description}
              </p>
              <div className="mt-8">
                <Button to="/machines" variant="secondary" size="sm">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export function MachinesPage() {
  return (
    <Section ariaLabelledBy="machines-page-heading" className="pt-32 sm:pt-36">
      <SectionHeading
        id="machines-page-heading"
        title="Our machines"
        description="Purpose-built smart coolers designed for high-traffic workplaces with limited space."
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-card">
        <div className="grid lg:grid-cols-2">
          <div className="flex min-h-[320px] items-center justify-center bg-section p-8 lg:p-12">
            <img
              src={machine.image}
              alt={machine.alt}
              className="h-auto w-full max-w-[300px] object-contain drop-shadow-md"
              loading="lazy"
            />
          </div>
          <div className="p-8 lg:p-12">
            <p className="inline-flex w-fit items-center rounded-full bg-primary/8 px-3 py-1 text-xs font-medium tracking-wide text-primary">
              {machine.tagline}
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              {machine.name}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {machine.description}
            </p>

            <h3 className="mt-10 font-display text-lg font-semibold text-charcoal">
              Key features
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {machine.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-lg font-semibold text-charcoal">
              Specifications
            </h3>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {machine.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-xl bg-section px-4 py-3.5"
                >
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                    {spec.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-charcoal">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <Button to="/contact" size="md" arrow>
                Request this machine
              </Button>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-muted">
        Interested in a different setup?{' '}
        <Link
          to="/contact"
          className="font-medium text-primary transition-colors duration-200 hover:text-primary-dark"
        >
          Contact us
        </Link>{' '}
        to discuss your location.
      </p>
    </Section>
  )
}
