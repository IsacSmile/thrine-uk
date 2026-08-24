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
    shortDescription: "High-converting, bespoke marketing websites engineered to capture qualified business leads and articulate your value proposition.",
    fullDescription: "A modern, high-performance website built with editorial typography and custom code. Designed to eliminate buyer friction, load instantaneously, and convert anonymous web traffic into active inquiries.",
    deliverables: [
      "Bespoke High-Conversion UI/UX Design",
      "Mobile-Optimized Responsive Architecture",
      "SEO Structure & Metadata Infrastructure",
      "Lead Capture & Inquiry Funnels",
      "Content Management & Performance Optimization"
    ],
    idealFor: [
      "B2B service providers",
      "Consultancies & professional agencies",
      "Businesses replacing template websites"
    ]
  },
  {
    id: "custom-web-systems",
    number: "02",
    title: "Custom Web Systems",
    shortDescription: "Purpose-built web applications, customer portals, and internal admin control panels that digitize core operations.",
    fullDescription: "Bespoke internal software designed to replace spreadsheets and fragmented messaging. We build tailored web applications and operational dashboards that digitize your end-to-end business workflows.",
    deliverables: [
      "Admin Control Panels & Management Dashboards",
      "Client Self-Service & Status Portals",
      "Database Schema Setup & REST APIs",
      "Role-Based Access & Authentication",
      "Third-Party System Integrations"
    ],
    idealFor: [
      "Companies with complex operational workflows",
      "Operations teams needing custom dashboards",
      "Businesses outgrowing off-the-shelf SaaS limits"
    ]
  },
  {
    id: "ai-automation",
    number: "03",
    title: "AI & Automation",
    shortDescription: "Automated inquiry handlers, workflow pipelines, CRM synchronization, and AI-assisted data tools.",
    fullDescription: "Connect your customer touchpoints to automated back-office workflows. We implement practical AI inquiry processing, automated email/CRM synchronization, and system notifications that save hours of manual effort.",
    deliverables: [
      "AI-Assisted Customer Inquiry Processing",
      "Automated WhatsApp & Email Notifications",
      "CRM & Lead Pipeline Synchronization",
      "Data Extraction & Document Automation",
      "Operational Bot & Webhook Workflows"
    ],
    idealFor: [
      "Businesses with high inquiry volumes",
      "Teams spending hours on manual data entry",
      "Companies automating lead routing & follow-ups"
    ]
  },
  {
    id: "booking-ordering-systems",
    number: "04",
    title: "Booking & Ordering Systems",
    shortDescription: "End-to-end reservation platforms, outlet ordering portals, real-time availability calendars, and payment checkouts.",
    fullDescription: "Tailored booking and order processing systems designed to eliminate manual scheduling back-and-forth. Built with custom seat/outlet selection, instant confirmation, and real-time inventory management.",
    deliverables: [
      "Multi-Tier Booking & Reservation Portals",
      "Online Outlet & Product Ordering Dashboards",
      "Stripe / Payment Gateway Integrations",
      "Real-Time Seat & Inventory Lock Engine",
      "Instant Email & SMS Receipt Dispatch"
    ],
    idealFor: [
      "Tour & hospitality operators",
      "Boutique bakeries & cloud kitchens",
      "Service businesses managing appointments"
    ]
  }
];
