import { IconMapPin } from '@tabler/icons-react'
import { serviceAreas } from '../data/navigation'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/Typography'

export function ServiceAreaPreview() {
  return (
    <Section id="service-area" ariaLabelledBy="service-area-preview-heading">
      <SectionHeading
        id="service-area-preview-heading"
        title="Service Area"
        description="Proudly serving businesses across the greater Los Angeles area."
      />
      <ul className="flex flex-wrap justify-center gap-3" role="list">
        {serviceAreas.slice(0, 4).map((area) => (
          <li
            key={area}
            className="rounded-full border border-border bg-section px-4 py-2 text-sm font-medium text-charcoal"
          >
            {area}
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Button to="/service-area" variant="secondary">
          View Service Area
        </Button>
      </div>
    </Section>
  )
}

export function ServiceAreaPage() {
  return (
    <Section ariaLabelledBy="service-area-page-heading" className="pt-12">
      <SectionHeading
        id="service-area-page-heading"
        title="Service Area"
        description="JANA Vending serves businesses throughout Los Angeles County. If you are in or near the areas below, we would love to partner with you."
      />

      <div className="mx-auto max-w-3xl">
        <Card className="p-8 sm:p-10">
          <h2 className="font-display text-xl font-semibold text-charcoal">
            Greater Los Angeles
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            We currently operate across key LA County communities, bringing smart vending
            solutions to offices, gyms, warehouses, apartment complexes, and more. Our
            service area continues to grow — reach out even if your location is not listed
            below.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2" role="list">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 rounded-lg bg-section px-4 py-3"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                  aria-hidden="true"
                >
                  <IconMapPin size={16} stroke={1.5} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-charcoal">{area}</span>
              </li>
            ))}
          </ul>
        </Card>

        <div className="mt-10 text-center">
          <p className="text-muted">Not sure if we service your area?</p>
          <div className="mt-4">
            <Button to="/contact" size="lg">
              Check With Us
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
