# JANA Vending

Premium smart vending website for JANA Vending — serving businesses across the Los Angeles area.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- React Router

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## EmailJS Setup (Contact Form)

The contact form uses [EmailJS](https://www.emailjs.com/) to send submissions to `janavending@gmail.com`. Without configuration, the form falls back to opening the user's email client via `mailto:`.

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an email service connected to Gmail
3. Create an email template with these variables:
   - `from_name`
   - `from_email`
   - `business_name`
   - `phone`
   - `message`
4. Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Build

```bash
npm run build
npm run preview
```

## Design

- **Primary:** Emerald `#10B981`
- **Dark:** Charcoal `#111827`
- **Background:** White `#FFFFFF`
- **Section:** `#F9FAFB`
- **Border:** `#E5E7EB`
- **Fonts:** Space Grotesk (display), Inter (body)
