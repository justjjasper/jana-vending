import { type FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { PageHeader } from '../components/ui/Typography'
import { Reveal } from '../components/ui/Reveal'

const contactInfo = {
  email: 'jannavending@gmail.com',
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

const inputClasses =
  'mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-charcoal transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'

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
      const subject = encodeURIComponent('Janna Vending Inquiry')
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
        'Something went wrong sending your message. Please email us directly at jannavending@gmail.com.',
      )
    }
  }

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Section ariaLabelledBy="contact-heading" className="pt-32 sm:pt-36">
      <PageHeader
        title="Contact us"
        description="Have a question or ready to get started? Reach out and we will get back to you promptly."
      />

      <Reveal>
        <div className="mx-auto mt-14 grid max-w-4xl gap-8 lg:grid-cols-5">
          <div className="rounded-2xl border border-border bg-background p-8 shadow-card lg:col-span-2">
            <h2 className="font-display text-lg font-semibold text-charcoal">
              Get in touch
            </h2>
            <ul className="mt-6 space-y-5" role="list">
              <li>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-1.5 block text-sm font-medium text-primary transition-colors duration-200 hover:text-primary-dark"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">Phone</p>
                <a
                  href={`tel:${contactInfo.phone.replace(/-/g, '')}`}
                  className="mt-1.5 block text-sm font-medium text-charcoal transition-colors duration-200 hover:text-primary"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              We typically respond within one business day. For faster service, give us a call.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8 shadow-card lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-charcoal">
                    Full name <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    className={inputClasses}
                    placeholder="Your full name"
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
                    className={inputClasses}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
                    Phone number <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className={inputClasses}
                    placeholder="(310) 555-0100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="businessName" className="block text-sm font-medium text-charcoal">
                    Business name <span className="text-muted">(optional)</span>
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    autoComplete="organization"
                    value={formData.businessName}
                    onChange={(e) => updateField('businessName', e.target.value)}
                    className={inputClasses}
                    placeholder="Your company"
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
                    className={`${inputClasses} resize-y`}
                    placeholder="Tell us about your location and what you are looking for..."
                  />
                </div>
              </div>

              {status === 'success' && (
                <p className="mt-5 rounded-xl bg-primary/8 px-4 py-3 text-sm text-primary" role="status">
                  Thank you. Your message has been sent. We will be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400" role="alert">
                  {errorMessage}
                </p>
              )}

              <div className="mt-7">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={status === 'loading'}
                  arrow
                >
                  {status === 'loading' ? 'Sending...' : 'Send message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
