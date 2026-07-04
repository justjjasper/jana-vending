import {
  IconAdjustmentsHorizontal,
  IconCreditCard,
  IconLeaf,
  IconPackage,
  IconRefresh,
} from '@tabler/icons-react'

const iconProps = { size: 20, stroke: 1.5, 'aria-hidden': true as const }

const iconMap = {
  install: <IconPackage {...iconProps} />,
  payment: <IconCreditCard {...iconProps} />,
  snacks: <IconLeaf {...iconProps} />,
  custom: <IconAdjustmentsHorizontal {...iconProps} />,
  restock: <IconRefresh {...iconProps} />,
} as const

export function BenefitIcon({ name }: { name: keyof typeof iconMap }) {
  return iconMap[name]
}
