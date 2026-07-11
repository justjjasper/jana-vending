import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

export function CTA() {
  return (
    <Section id="contact" background="section" ariaLabelledBy="cta-heading">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="font-display text-2xl font-bold tracking-tight text-charcoal sm:text-3xl lg:text-4xl"
          >
            Ready to bring smart vending to your workplace?
          </h2>
          <p className="mx-auto mt-5 max-w-[48ch] text-base leading-relaxed text-muted">
            Tell us about your location and we will handle the rest. No commitment required to start the conversation.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/contact" size="lg" arrow>
              Get in Touch
            </Button>
            <Button
              href="mailto:jannavending@gmail.com"
              variant="secondary"
              size="lg"
            >
              jannavending@gmail.com
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
