export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  idealFor: string[];
}

export const services: Service[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    shortDescription: "Clean, fast websites designed to turn visitors into customers.",
    fullDescription: "Clean, fast websites designed to turn visitors into customers.",
    deliverables: [
      "Modern design that loads quickly on mobile",
      "Clear calls-to-action so people order or enquire",
      "Easy for you to update content yourself",
      "Built to rank on Google",
      "Fully owned by you — no lock-in"
    ],
    idealFor: [
      "Boutique bakeries & cake shops",
      "Tour & activity operators",
      "Local service businesses"
    ]
  },
  {
    id: "custom-web-systems",
    number: "02",
    title: "Custom Systems",
    shortDescription: "Simple tools that replace messy spreadsheets, WhatsApp chats, and manual work.",
    fullDescription: "Simple tools that replace messy spreadsheets, WhatsApp chats, and manual work.",
    deliverables: [
      "Admin dashboard so you control everything in one place",
      "Customer portal if needed",
      "Automatic order or booking tracking",
      "Secure login for you and your team",
      "Connects with the tools you already use"
    ],
    idealFor: [
      "Bakeries managing custom cake orders",
      "Tour operators handling guest manifests",
      "Businesses outgrowing WhatsApp chaos"
    ]
  },
  {
    id: "ai-automation",
    number: "03",
    title: "Simple Automation",
    shortDescription: "We remove repetitive tasks so you spend less time on admin.",
    fullDescription: "We remove repetitive tasks so you spend less time on admin.",
    deliverables: [
      "Auto-replies to common customer questions",
      "Automatic order or booking notifications",
      "Less copy-pasting between WhatsApp, email and spreadsheets",
      "Simple workflows that save you hours every week",
      "Easy to adjust as your business grows"
    ],
    idealFor: [
      "Businesses dealing with repeat customer inquiries",
      "Owners spending hours sending manual confirmations",
      "Teams needing instant WhatsApp & email alerts"
    ]
  },
  {
    id: "booking-ordering-systems",
    number: "04",
    title: "Booking & Ordering Systems",
    shortDescription: "Let customers order or book online without calling or messaging you.",
    fullDescription: "Let customers order or book online without calling or messaging you.",
    deliverables: [
      "Online ordering for bakeries",
      "Tour booking with availability",
      "Real-time seat or product availability",
      "Payment collection if needed",
      "Everything goes straight into your dashboard"
    ],
    idealFor: [
      "Tour & excursion operators",
      "Boutique bakeries & custom cake bakers",
      "Local businesses accepting online reservations"
    ]
  }
];
