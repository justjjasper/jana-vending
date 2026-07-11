import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="about" background="section" ariaLabelledBy="about-heading">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="about-heading"
            className="font-display text-2xl font-bold tracking-tight text-charcoal sm:text-3xl lg:text-4xl"
          >
            Vending that works as hard as your team
          </h2>
          <p className="mx-auto mt-6 max-w-[58ch] text-base leading-relaxed text-muted sm:text-lg">
            Janna Vending partners with businesses across Los Angeles to bring convenient food and drink access directly to the workplace. From office break rooms to gym lobbies and warehouse floors, we make sure your people have what they need.
          </p>
          <p className="mx-auto mt-4 max-w-[58ch] text-base leading-relaxed text-muted">
            We handle everything: machine placement, product curation, cashless payments, and ongoing restocking. You get a premium amenity for your employees and visitors. We take care of the rest.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
