import { Link } from 'react-router-dom'
import { IconPhoto } from '@tabler/icons-react'
import { useState } from 'react'
import { productTabs, products, type ProductCategory } from '../data/products'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/Typography'

function ProductGrid({ category }: { category: ProductCategory }) {
  const filtered = products.filter((p) => p.category === category)

  return (
    <ul
      className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      role="list"
      aria-label={`${productTabs.find((t) => t.id === category)?.label} products`}
    >
      {filtered.map((product) => (
        <li key={product.id}>
          <Card className="overflow-hidden transition-shadow hover:shadow-elevated">
            <div className="flex aspect-square items-center justify-center bg-section">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-contain p-4"
                  loading="lazy"
                />
              ) : (
                <div role="img" aria-label={product.alt}>
                  <IconPhoto size={32} stroke={1.5} className="text-muted/50" aria-hidden="true" />
                </div>
              )}
            </div>
            <p className="border-t border-border px-4 py-3 text-sm font-medium text-charcoal">
              {product.name}
            </p>
          </Card>
        </li>
      ))}
    </ul>
  )
}

export function ProductsPreview() {
  return (
    <Section id="products" background="section" ariaLabelledBy="products-preview-heading">
      <SectionHeading
        id="products-preview-heading"
        title="Products"
        description="Beverages, snacks, and everything in between — curated for your team and fully customizable."
      />
      <div className="text-center">
        <Button to="/products" variant="secondary">
          Browse Full Menu
        </Button>
      </div>
    </Section>
  )
}

export function ProductsPage() {
  const [activeTab, setActiveTab] = useState<ProductCategory>('beverages')

  return (
    <Section ariaLabelledBy="products-page-heading" className="pt-12">
      <SectionHeading
        id="products-page-heading"
        title="Products"
        description="We carry a wide range of beverages, snacks, and fresh options. Don't see what you need? Tell us — we will work to stock it for your location."
      />

      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Product categories"
      >
        {productTabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isActive
                  ? 'bg-primary text-white'
                  : 'bg-section text-charcoal hover:bg-border/60'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {productTabs.map((tab) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          tabIndex={activeTab === tab.id ? 0 : -1}
        >
          {activeTab === tab.id && <ProductGrid category={tab.id} />}
        </div>
      ))}

      <p className="mt-12 text-center text-sm text-muted">
        Have a specific request?{' '}
        <Link to="/contact" className="font-medium text-primary hover:text-primary-dark">
          Let us know
        </Link>{' '}
        and we will add it to your machine.
      </p>
    </Section>
  )
}
