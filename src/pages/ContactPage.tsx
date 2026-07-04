import { type FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { PageHeader } from '../components/ui/Typography'

const contactInfo = {
  email: 'janavending@gmail.com',
  phone: '310-989-4448',
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? ''

interface FormData {
  fullName: string
  email: string
  businessName: string
  phone: string
  message: string
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  businessName: '',
  phone: '',
  message: '',
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isEmailJsConfigured =
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    if (!isEmailJsConfigured) {
      const subject = encodeURIComponent('JANA Vending Inquiry')
      const body = encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\nBusiness: ${formData.businessName || 'N/A'}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
      )
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
      setStatus('success')
      return
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          business_name: formData.businessName || 'Not provided',
          phone: formData.phone,
          message: formData.message,
          to_email: contactInfo.email,
        },
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setFormData(initialFormData)
    } catch {
      setStatus('error')
      setErrorMessage(
        'Something went wrong sending your message. Please email us directly at janavending@gmail.com.',
      )
    }
  }

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Section ariaLabelledBy="contact-heading" className="pt-12">
      <PageHeader
        title="Contact Us"
        description="Have a question or ready to get started? Reach out and we will get back to you promptly."
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-5">
        <Card className="p-8 lg:col-span-2">
          <h2 className="font-display text-lg font-semibold text-charcoal">
            Get in touch
          </h2>
          <ul className="mt-6 space-y-5" role="list">
            <li>
              <p className="text-xs font-medium uppercase tracking-wide text-muted">Email</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="mt-1 block text-sm font-medium text-primary hover:text-primary-dark"
              >
                {contactInfo.email}
              </a>
            </li>
            <li>
              <p className="text-xs font-medium uppercase tracking-wide text-muted">Phone</p>
              <a
                href={`tel:${contactInfo.phone.replace(/-/g, '')}`}
                className="mt-1 block text-sm font-medium text-charcoal hover:text-primary"
              >
                {contactInfo.phone}
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            We typically respond within one business day. For faster service, give us a call.
          </p>
        </Card>

        <Card className="p-8 lg:col-span-3">
          <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-charcoal">
                  Full Name <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-charcoal transition-colors placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal">
                  Email <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-charcoal transition-colors placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
                  Phone Number <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-charcoal transition-colors placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="(310) 555-0100"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="businessName" className="block text-sm font-medium text-charcoal">
                  Business Name <span className="text-muted">(optional)</span>
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  autoComplete="organization"
                  value={formData.businessName}
                  onChange={(e) => updateField('businessName', e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-charcoal transition-colors placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your Company Inc."
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-charcoal">
                  Message <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  className="mt-1.5 w-full resize-y rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-charcoal transition-colors placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Tell us about your location and what you are looking for..."
                />
              </div>
            </div>

            {status === 'success' && (
              <p className="mt-4 text-sm text-primary" role="status">
                Thank you! Your message has been sent. We will be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
                {errorMessage}
              </p>
            )}

            <div className="mt-6">
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Section>
  )
}
