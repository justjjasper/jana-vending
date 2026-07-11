import { IconMapPin } from '@tabler/icons-react'
import { serviceAreas } from '../data/navigation'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/Typography'
import { Reveal, RevealStagger, RevealItem } from '../components/ui/Reveal'

export function ServiceAreaPreview() {
  return (
    <Section id="service-area" ariaLabelledBy="service-area-preview-heading">
      <SectionHeading
        id="service-area-preview-heading"
        title="Service area"
        description="Proudly serving businesses across the greater Los Angeles area."
      />
      <RevealStagger className="flex flex-wrap justify-center gap-3">
        {serviceAreas.slice(0, 4).map((area) => (
          <RevealItem key={area}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-charcoal">
              <IconMapPin size={14} stroke={1.5} className="text-primary" aria-hidden="true" />
              {area}
            </span>
          </RevealItem>
        ))}
      </RevealStagger>
      <Reveal delay={0.2}>
        <div className="mt-10 text-center">
          <Button to="/service-area" variant="secondary">
            View full service area
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}

export function ServiceAreaPage() {
  return (
    <Section ariaLabelledBy="service-area-page-heading" className="pt-32 sm:pt-36">
      <SectionHeading
        id="service-area-page-heading"
        title="Service area"
        description="Janna Vending serves businesses throughout Los Angeles County. If you are in or near the areas below, we would love to partner with you."
      />

      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-border bg-background p-8 shadow-card sm:p-10">
          <h2 className="font-display text-xl font-semibold text-charcoal">
            Greater Los Angeles
          </h2>
          <p className="mt-4 max-w-[55ch] leading-relaxed text-muted">
            We currently operate across key LA County communities, bringing smart vending
            solutions to offices, gyms, warehouses, apartment complexes, and more. Our
            service area continues to grow.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2" role="list">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 rounded-xl bg-section px-4 py-3.5 transition-colors duration-200"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary"
                  aria-hidden="true"
                >
                  <IconMapPin size={14} stroke={1.5} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-charcoal">{area}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted">Not sure if we service your area?</p>
          <div className="mt-4">
            <Button to="/contact" size="lg" arrow>
              Check with us
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
