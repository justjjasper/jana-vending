import { type ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

const transition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as const,
}

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealStagger({
  children,
  className,
  stagger = 0.06,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        visible: {
          transition: { staggerChildren: reduce ? 0 : stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
