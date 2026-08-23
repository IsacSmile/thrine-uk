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
    id: "conversion-websites",
    number: "01",
    title: "Business Websites & Conversion Systems",
    shortDescription: "Websites designed around generating more bookings, orders, and qualified leads—not simply looking good.",
    fullDescription: "A high-performance marketing website built with modern engineering practices. Designed to articulate your value proposition clearly, remove buyer friction, and turn passive traffic into active customer inquiries or paid bookings.",
    deliverables: [
      "High-Converting Marketing Websites",
      "Custom Booking & Reservation Funnels",
      "Online Product & Order Flow Systems",
      "Payment Gateway Integrations (Stripe, PayPal)",
      "Lead Capture & Automated Email Dispatch",
      "CRM & Analytics Integrations",
      "Page Speed & Mobile Performance Optimization",
      "Production-Grade SEO Infrastructure"
    ],
    idealFor: [
      "Travel & Tour Operators",
      "Boutique Food & Bakery Businesses",
      "Professional Service Agencies",
      "Businesses seeking higher online conversion rates"
    ]
  },
  {
    id: "custom-systems",
    number: "02",
    title: "Custom Business Systems",
    shortDescription: "Custom software that replaces manual processes and makes day-to-day business operations easier.",
    fullDescription: "Bespoke internal software designed to eliminate tedious manual workflows, spreadsheets, and back-and-forth messaging. I build tailored web portals and operational dashboards that digitize your core business operations.",
    deliverables: [
      "Custom Booking Engines & Inventory Trackers",
      "Online Order Management & Queue Dashboards",
      "Admin Control Panels & Operational Portals",
      "Customer Self-Service Portals",
      "Internal Workflow & Task Automation",
      "REST API & Third-Party System Integrations",
      "AI-Powered Feature Enhancements (Inquiry Summaries, Auto-Drafts)",
      "Role-Based Access Control & Secure User Auth"
    ],
    idealFor: [
      "Companies overburdened by manual WhatsApp/Excel order tracking",
      "Service businesses needing real-time customer scheduling",
      "Operations teams requiring custom admin dashboards",
      "Businesses scaling beyond off-the-shelf SaaS limits"
    ]
  }
];
