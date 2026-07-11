import { motion, useReducedMotion } from 'motion/react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import machineImg from '../../assets/products/mini-vending-machine.png'

const transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as const,
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            <p className="inline-flex items-center rounded-full bg-primary/8 px-3.5 py-1 text-xs font-medium tracking-wide text-primary">
              Los Angeles vending service
            </p>
            <h1
              id="hero-heading"
              className="mt-6 font-display text-4xl font-bold tracking-tighter text-charcoal sm:text-5xl lg:text-6xl lg:leading-[1.05]"
            >
              Smart vending for modern workplaces
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
              Premium snacks and drinks for the teams that keep LA moving. Zero hassle, zero upfront cost.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button to="/contact" size="lg" arrow>
                Get Started
              </Button>
              <Button to="/machines" variant="secondary" size="lg">
                View Our Machines
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/6 to-primary/2" />
              <div className="relative rounded-3xl border border-border/60 bg-section/50 p-6 sm:p-8">
                <img
                  src={machineImg}
                  alt="Mini 360 AI Smart Cooler - compact vending machine"
                  className="mx-auto h-auto w-full max-w-[320px] object-contain drop-shadow-lg"
                  width={320}
                  height={480}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
