import { benefits } from '../../data/navigation'
import { BenefitIcon } from '../icons/BenefitIcons'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/Typography'
import { RevealStagger, RevealItem } from '../ui/Reveal'

export function Benefits() {
  return (
    <Section id="benefits" ariaLabelledBy="benefits-heading">
      <SectionHeading
        id="benefits-heading"
        title="Everything included"
        description="A fully managed vending program designed for busy workplaces. No hidden fees, no maintenance headaches."
      />
      <RevealStagger
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {benefits.map((benefit) => (
          <RevealItem key={benefit.title}>
            <div className="group rounded-2xl border border-border bg-background p-6 shadow-card transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-elevated hover:-translate-y-0.5">
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary/12"
                aria-hidden="true"
              >
                <BenefitIcon name={benefit.icon} />
              </div>
              <h3 className="font-display text-base font-semibold text-charcoal">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.description}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  )
}
