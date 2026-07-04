import machineImg from "../assets/products/mini-360-vending-machine.webp";

export const machine = {
  name: "Mini 360 AI Smart Cooler",
  image: machineImg,
  alt: "Mini 360 AI Smart Cooler",
  tagline: "Compact AI-powered vending for modern workplaces",
  description:
    "A space-efficient smart cooler built for offices, gyms, and break rooms where footprint matters. Customers tap their card or phone, open the door, and grab what they need — built-in vision technology identifies selections and handles checkout automatically. No buttons, no keypad, no friction.",
  features: [
    "Tap-and-go checkout with card and mobile wallet support",
    "Vision-based product recognition with high accuracy",
    "Adjustable shelving for drinks, snacks, and fresh items",
    "Remote inventory monitoring through a mobile operator app",
    "Heated anti-fog glass door with LED interior lighting",
    "Compact footprint ideal for high-traffic, limited-space locations",
  ],
  specs: [
    { label: "Dimensions", value: 'Approx. 77" H × 23" W × 30" D' },
    { label: "Capacity", value: "Up to ~245 items (configurable shelving)" },
    { label: "Temperature", value: "32°F – 50°F adjustable range" },
    { label: "Power", value: "Standard 110–120V outlet" },
  ],
} as const;
