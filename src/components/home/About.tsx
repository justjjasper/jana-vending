import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/Typography'

export function About() {
  return (
    <Section id="about" background="section" ariaLabelledBy="about-heading">
      <SectionHeading
        id="about-heading"
        title="Vending that works as hard as your team"
        description="JANA Vending partners with businesses across Los Angeles to bring convenient food and drink access directly to the workplace. From office break rooms to gym lobbies and warehouse floors, we make sure your people have what they need — without adding another task to your plate."
      />
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-base leading-relaxed text-muted">
          We believe access to good snacks and beverages should be effortless. That is
          why we handle everything: machine placement, product curation, cashless
          payments, and ongoing restocking. You get a premium amenity for your employees
          and visitors. We take care of the rest.
        </p>
      </div>
    </Section>
  )
}
