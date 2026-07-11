import { Link } from 'react-router-dom'
import { IconPhoto } from '@tabler/icons-react'
import { useState } from 'react'
import { productTabs, products, type ProductCategory } from '../data/products'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/Typography'
import { Reveal, RevealStagger, RevealItem } from '../components/ui/Reveal'

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-card transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-elevated hover:-translate-y-0.5">
      <div className="flex aspect-square items-center justify-center bg-section">
        {product.image ? (
          <img
            src={product.image}
            alt={product.alt}
            className="h-full w-full object-contain p-5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div role="img" aria-label={product.alt}>
            <IconPhoto
              size={28}
              stroke={1.5}
              className="text-muted/40"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      <p className="px-4 py-3.5 text-sm font-medium text-charcoal">
        {product.name}
      </p>
    </div>
  )
}

export function ProductsPreview() {
  const featured = products.slice(0, 8)

  return (
    <Section
      id="products"
      background="section"
      ariaLabelledBy="products-preview-heading"
    >
      <SectionHeading
        id="products-preview-heading"
        title="Stocked for your team"
        description="Beverages, snacks, and everything in between - curated for your workplace and fully customizable."
      />
      <RevealStagger className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {featured.map((product) => (
          <RevealItem key={product.id}>
            <ProductCard product={product} />
          </RevealItem>
        ))}
      </RevealStagger>
      <Reveal delay={0.3}>
        <div className="mt-12 text-center">
          <Button to="/products" variant="secondary">
            Browse full menu
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}

export function ProductsPage() {
  const [activeTab, setActiveTab] = useState<ProductCategory>('beverages')

  return (
    <Section ariaLabelledBy="products-page-heading" className="pt-32 sm:pt-36">
      <SectionHeading
        id="products-page-heading"
        title="Products"
        description="We carry a wide range of beverages, snacks, and fresh options. Tell us what your team wants and we will stock it."
      />

      <div
        className="mb-12 flex flex-wrap justify-center gap-2"
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
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isActive
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-section text-muted hover:bg-border/60 hover:text-charcoal'
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
          {activeTab === tab.id && (
            <ul
              className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              role="list"
              aria-label={`${tab.label} products`}
            >
              {products
                .filter((p) => p.category === tab.id)
                .map((product) => (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                ))}
            </ul>
          )}
        </div>
      ))}

      <p className="mt-14 text-center text-sm text-muted">
        Have a specific request?{' '}
        <Link
          to="/contact"
          className="font-medium text-primary transition-colors duration-200 hover:text-primary-dark"
        >
          Let us know
        </Link>{' '}
        and we will add it to your machine.
      </p>
    </Section>
  )
}
