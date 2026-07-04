import { Link } from "react-router-dom";
import { machine } from "../data/machine";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/Typography";

export function MachinesPreview() {
  return (
    <Section id="our-machines" ariaLabelledBy="machines-preview-heading">
      <SectionHeading
        id="machines-preview-heading"
        title="Our Machines"
        description="Smart, compact coolers built for modern workplaces."
      />
      <Card className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="flex aspect-[4/3] items-center justify-center bg-section lg:aspect-auto">
            <img
              src={machine.image}
              alt={machine.alt}
              className="h-full w-full object-contain p-6"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <p className="font-display text-sm font-medium text-primary">
              {machine.tagline}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-charcoal sm:text-2xl">
              {machine.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted line-clamp-3">
              {machine.description}
            </p>
            <div className="mt-6">
              <Button to="/machines" variant="secondary" size="sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}

export function MachinesPage() {
  return (
    <Section ariaLabelledBy="machines-page-heading" className="pt-12">
      <SectionHeading
        id="machines-page-heading"
        title="Our Machines"
        description="Purpose-built smart coolers designed for high-traffic workplaces with limited space."
      />
      <Card className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="flex min-h-[320px] items-center justify-center bg-section">
            <img
              src={machine.image}
              alt={machine.alt}
              className="h-full w-full object-contain p-8"
              loading="lazy"
            />
          </div>
          <div className="p-8 lg:p-10">
            <p className="font-display text-sm font-medium text-primary">
              {machine.tagline}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-charcoal sm:text-3xl">
              {machine.name}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {machine.description}
            </p>

            <h3 className="mt-8 font-display text-lg font-semibold text-charcoal">
              Key Features
            </h3>
            <ul className="mt-3 space-y-2" role="list">
              {machine.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-lg font-semibold text-charcoal">
              Specifications
            </h3>
            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              {machine.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-lg bg-section px-4 py-3"
                >
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-charcoal">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <Button to="/contact" size="md">
                Request This Machine
              </Button>
            </div>
          </div>
        </div>
      </Card>
      <p className="mt-8 text-center text-sm text-muted">
        Interested in a different setup?{" "}
        <Link
          to="/contact"
          className="font-medium text-primary hover:text-primary-dark"
        >
          Contact us
        </Link>{" "}
        to discuss your location.
      </p>
    </Section>
  );
}
