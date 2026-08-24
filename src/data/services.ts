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
    shortDescription: "High-converting websites built to get you more customers.",
    fullDescription: "High-converting websites built to get you more customers.",
    deliverables: [
      "Clean, fast design that works perfectly on mobile",
      "Clear calls-to-action that turn visitors into orders",
      "Easy for you to update yourself",
      "Fully owned by you — no platform lock-in"
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
    shortDescription: "Simple tools that replace WhatsApp chaos and spreadsheets.",
    fullDescription: "Simple tools that replace WhatsApp chaos and spreadsheets.",
    deliverables: [
      "One dashboard to manage everything",
      "Automatic order or booking tracking",
      "Secure access for you and your team",
      "Built around how your business actually works"
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
    shortDescription: "We remove repetitive admin so you get time back.",
    fullDescription: "We remove repetitive admin so you get time back.",
    deliverables: [
      "Automatic replies to common questions",
      "Instant notifications for new orders or bookings",
      "Less manual work between WhatsApp, email and sheets",
      "Easy to adjust as you grow"
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
    title: "Booking & Ordering",
    shortDescription: "Let customers order or book online without calling you.",
    fullDescription: "Let customers order or book online without calling you.",
    deliverables: [
      "Online ordering for bakeries",
      "Tour bookings with live availability",
      "Payments collected automatically (if needed)",
      "Everything lands cleanly in your dashboard"
    ],
    idealFor: [
      "Tour & excursion operators",
      "Boutique bakeries & custom cake bakers",
      "Local businesses accepting online reservations"
    ]
  }
];
