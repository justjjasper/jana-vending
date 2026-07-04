export interface NavItem {
  label: string
  sectionId: string
  path: string
}

export const navItems: NavItem[] = [
  { label: 'Our Machines', sectionId: 'our-machines', path: '/machines' },
  { label: 'Products', sectionId: 'products', path: '/products' },
  { label: 'Service Area', sectionId: 'service-area', path: '/service-area' },
]

export const benefits = [
  {
    title: 'No-Cost Installation',
    description: 'We handle delivery, setup, and placement at your location — at no upfront cost to you.',
    icon: 'install',
  },
  {
    title: 'Cashless Payments',
    description: 'Credit cards, debit cards, and mobile wallets. Fast, secure, and completely touchless.',
    icon: 'payment',
  },
  {
    title: 'Healthy & Traditional Snacks',
    description: 'A balanced selection of nutritious options alongside classic favorites your team already loves.',
    icon: 'snacks',
  },
  {
    title: 'Custom Product Selection',
    description: 'Tailor the menu to your workplace. Tell us what your team wants and we will stock it.',
    icon: 'custom',
  },
  {
    title: 'Fully Managed Restocking',
    description: 'We monitor inventory remotely and restock before shelves run empty. Zero effort on your end.',
    icon: 'restock',
  },
] as const

export const serviceAreas = [
  'Burbank',
  'Los Angeles',
  'Carson',
  'Long Beach',
  'And surrounding LA County communities',
] as const
