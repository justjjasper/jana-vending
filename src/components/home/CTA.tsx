import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export function CTA() {
  return (
    <Section id="contact" background="section" ariaLabelledBy="cta-heading">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-background px-8 py-12 text-center shadow-elevated sm:px-12">
        <h2
          id="cta-heading"
          className="font-display text-2xl font-bold tracking-tight text-charcoal sm:text-3xl"
        >
          Ready to bring smart vending to your workplace?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Tell us about your location and we will handle the rest. No commitment required
          to start the conversation.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/contact" size="lg">
            Email Us
          </Button>
          <Button
            href="mailto:janavending@gmail.com"
            variant="secondary"
            size="lg"
          >
            janavending@gmail.com
          </Button>
        </div>
      </div>
    </Section>
  )
}
