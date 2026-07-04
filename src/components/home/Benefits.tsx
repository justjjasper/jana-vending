import { benefits } from '../../data/navigation'
import { BenefitIcon } from '../icons/BenefitIcons'
import { FeatureCard } from '../ui/Card'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/Typography'

export function Benefits() {
  return (
    <Section id="benefits" ariaLabelledBy="benefits-heading">
      <SectionHeading
        id="benefits-heading"
        title="Everything included"
        description="A fully managed vending program designed for busy workplaces. No hidden fees, no maintenance headaches."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {benefits.map((benefit) => (
          <li key={benefit.title}>
            <FeatureCard
              title={benefit.title}
              description={benefit.description}
              icon={<BenefitIcon name={benefit.icon} />}
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
