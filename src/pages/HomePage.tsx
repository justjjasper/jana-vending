import { Hero } from '../components/home/Hero'
import { About } from '../components/home/About'
import { Benefits } from '../components/home/Benefits'
import { CTA } from '../components/home/CTA'
import { MachinesPreview } from './MachinesPage'
import { ProductsPreview } from './ProductsPage'
import { ServiceAreaPreview } from './ServiceAreaPage'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <MachinesPreview />
      <ProductsPreview />
      <ServiceAreaPreview />
      <CTA />
    </>
  )
}
