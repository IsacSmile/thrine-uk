export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  industry: string;
  type: string;
  clientName: string;
  clientLogo?: string;
  clientLocation: string;
  timeline: string;
  status: string;
  liveUrl?: string;
  services: string[];
  technologies: string[];
  summary: string;
  problem: {
    overview: string;
    painPoints: string[];
  };
  whatWeChanged: {
    overview: string;
    highlights: string[];
  };
  businessImpact: {
    metric: string;
    label: string;
    description: string;
  }[];
  keyFeatures: {
    title: string;
    description: string;
    technicalDetail: string;
  }[];
  technicalHighlights: string[];
  screenshots: {
    hero: string;
    desktop: string;
    mobile: string;
    featureGrid: {
      title: string;
      caption: string;
      imageType: 'booking' | 'ordering' | 'dashboard' | 'mobile';
    }[];
  };
}

export const projects: Project[] = [
  {
    id: "travel-platform",
    slug: "travel",
    title: "Tours & Travel Booking Platform",
    tagline: "Digitizing tour package discovery & multi-vehicle seat reservation inquiries.",
    category: "Travel / Booking",
    industry: "Travel & Tourism",
    type: "Web Application & Booking System",
    clientName: "Travel Hault & Excursions",
    clientLogo: "/images/client-travel-halt-logo.png",
    clientLocation: "Dubai, UAE & Kerala, India",
    timeline: "6 Weeks",
    status: "Live in Production",
    liveUrl: "https://travelhault.com",
    services: [
      "Strategy",
      "UX & UI Design",
      "Custom Booking Flow",
      "Vehicle Seat Selector",
      "Inquiry System"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Node.js"],
    summary: "Designed and engineered a single unified booking workflow that enables travelers to explore multi-day itineraries, select vehicle seat configurations, and submit booking inquiries without back-and-forth communication.",
    problem: {
      overview: "The tour operator was managing all customer inquiries manually across WhatsApp messages, spreadsheets, and phone calls. Peak season traffic caused severe inquiry backlogs, misquoted group rates, and lost bookings.",
      painPoints: [
        "Customer drop-off caused by missing seat availability clarity for group SUV bookings.",
        "Over 3+ hours spent daily handling repetitive pricing quotes over WhatsApp.",
        "Inability for mobile users on slow networks to view detailed itineraries.",
        "Lack of centralized booking records for drivers and operational staff."
      ]
    },
    whatWeChanged: {
      overview: "We designed a streamlined digital booking funnel that allows customers to browse packages, choose travel dates and vehicle seat requirements, and submit verified booking requests directly to the operator.",
      highlights: [
        "Interactive day-by-day itinerary explorer with transparent pricing inclusions.",
        "Visual SUV fleet seat mapper supporting independent multi-car seat reservations.",
        "Structured inquiry routing that pre-fills traveler dates, counts, and selected seats.",
        "Touch-optimized mobile layout engineered to load in under 1.2 seconds."
      ]
    },
    businessImpact: [
      {
        metric: "70% Less",
        label: "Manual Inquiry Time",
        description: "Drastically reduced back-and-forth chat exchanges required to finalize booking details."
      },
      {
        metric: "3.5x Faster",
        label: "Customer Response",
        description: "Inquiries arrive pre-populated with exact passenger counts and travel dates."
      },
      {
        metric: "100% Clear",
        label: "Seat Allocation",
        description: "Zero group seat overlap errors during multi-vehicle booking dispatches."
      }
    ],
    keyFeatures: [
      {
        title: "Customer Booking Experience",
        description: "Travelers can browse package itineraries, choose travel dates, and select group requirements in a single intuitive flow.",
        technicalDetail: "Dynamic package configuration · availability logic · client-side state caching."
      },
      {
        title: "Vehicle Seat Selector",
        description: "Visual seat mapper allowing travelers to reserve specific seats across individual or multi-SUV vehicle fleets.",
        technicalDetail: "Isolated seat state maps · multi-car allocation logic · responsive touch targets."
      },
      {
        title: "Structured Inquiry Dispatch",
        description: "One-click inquiry routing that sends complete booking metadata straight to operator channels.",
        technicalDetail: "Pre-filled payload serialization · instant REST API dispatch · fallback handler."
      },
      {
        title: "Mobile Traveler View",
        description: "Fast, touch-first layout built for travelers booking tours on mobile connections.",
        technicalDetail: "Lightweight asset bundle · zero layout shift · optimized mobile viewport."
      }
    ],
    technicalHighlights: [
      "Architected isolated seat selection state maps to prevent cross-vehicle state synchronization bugs during multi-car bookings.",
      "Implemented responsive SVG layout renders for seat maps with touch-friendly 48px hit areas.",
      "Integrated lightweight REST API layer for instant inquiry dispatch without page reloads."
    ],
    screenshots: {
      hero: "travel-hero",
      desktop: "travel-desktop",
      mobile: "travel-mobile",
      featureGrid: [
        {
          title: "Itinerary & Package Explorer",
          caption: "Clear pricing, detailed day breakdown, and instant booking CTA.",
          imageType: "booking"
        },
        {
          title: "Seat & Fleet Selection",
          caption: "Interactive vehicle seat picker supporting independent multi-car configurations.",
          imageType: "dashboard"
        },
        {
          title: "Mobile Traveler View",
          caption: "Touch-optimized itinerary preview designed for quick booking on mobile screens.",
          imageType: "mobile"
        }
      ]
    }
  },
  {
    id: "bakery-ordering",
    slug: "bakery",
    title: "Boutique Bakery & Custom Cake System",
    tagline: "Modern online ordering experience & interactive custom cake build engine.",
    category: "Food / Ordering",
    industry: "Food & Hospitality",
    type: "E-Commerce & Ordering System",
    clientName: "myhomelycakes.com",
    clientLogo: "/images/client-homely-cakes-logo.png",
    clientLocation: "Trivandrum, India",
    timeline: "8 Weeks",
    status: "Live in Production",
    liveUrl: "https://yourbakery.com",
    services: [
      "Strategy",
      "Custom Cake Configurator",
      "Store Badging Logic",
      "Price Calculation Engine",
      "Kitchen Queue Dashboard"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage API", "REST APIs"],
    summary: "Engineered an intuitive online ordering hub and step-by-step custom cake builder that automates custom order collection, provides instant price calculations, and organizes kitchen order queues.",
    problem: {
      overview: "The bakery was spending substantial staff hours taking complex custom cake requests over Instagram DMs and phone calls. Miscalculated quotes, unrecorded customer details, and orders arriving during kitchen closures created operational friction.",
      painPoints: [
        "15+ minutes spent per custom cake order answering repetitive flavor and pricing questions.",
        "Customer pricing confusion leading to abandoned custom order requests.",
        "Orders received when specific outlets were closed or at daily baking capacity.",
        "Kitchen staff struggling to read handwritten custom cake messaging instructions."
      ]
    },
    whatWeChanged: {
      overview: "We built an interactive step-by-step cake customizer with live price calculations, dynamic outlet badging, and a dedicated kitchen order manager.",
      highlights: [
        "Visual 4-step cake builder for choosing flavors, tier sizes, custom text, and photo references.",
        "Real-time total cost calculation updated dynamically as options are selected.",
        "Outlet-specific status badging (e.g. 'Trivandrum Store • Accepting Orders').",
        "Clear kitchen order queue dashboard for tracking fulfillment statuses."
      ]
    },
    businessImpact: [
      {
        metric: "15 Mins → 2 Mins",
        label: "Order Taking Time",
        description: "Automated custom order detail collection with 0 back-and-forth messaging required."
      },
      {
        metric: "0 Errors",
        label: "Pricing Calculations",
        description: "Exact transparent pricing quotes generated instantly for custom tier options."
      },
      {
        metric: "100% Tracked",
        label: "Kitchen Queue",
        description: "Bakeries maintain full visibility over daily custom order fulfillment stages."
      }
    ],
    keyFeatures: [
      {
        title: "Online Custom Cake Configurator",
        description: "Customers build custom cakes step-by-step, selecting sponge flavors, tier sizes, fillings, custom text, and inspiration photo uploads.",
        technicalDetail: "Multi-step state machine · dynamic image preview · custom modifier logic."
      },
      {
        title: "Real-Time Price Calculator",
        description: "Generates an accurate, transparent total price estimate instantly as customers modify their cake configuration.",
        technicalDetail: "Client-side pricing calculation engine · itemized invoice calculation · zero checkout delay."
      },
      {
        title: "Dynamic Outlet Store Badging",
        description: "Displays current store status and outlet availability dynamically across storefront headers and ordering pages.",
        technicalDetail: "Store status API state · real-time operational window evaluation."
      },
      {
        title: "Kitchen Order Manager",
        description: "Streamlined operational dashboard for bakery staff to track incoming orders, fulfillment statuses, and custom client requirements.",
        technicalDetail: "Filtered queue views · order status toggles · operational data persistence."
      }
    ],
    technicalHighlights: [
      "Constructed a lightweight state machine for the multi-step cake customizer, ensuring seamless step validation.",
      "Utilized custom CSS animations for visual tier stacks and active modifier toggles without performance degradation.",
      "Implemented resilient fallback handling for image uploads and local cart persistence."
    ],
    screenshots: {
      hero: "bakery-hero",
      desktop: "bakery-desktop",
      mobile: "bakery-mobile",
      featureGrid: [
        {
          title: "Custom Cake Configurator",
          caption: "Step-by-step flavor, size, and custom detail selection with real-time price updates.",
          imageType: "ordering"
        },
        {
          title: "Artisanal Menu Catalog",
          caption: "High-resolution product showcase with instant add-to-order capability.",
          imageType: "dashboard"
        },
        {
          title: "Mobile Checkout Flow",
          caption: "Frictionless touch checkout optimized for mobile shoppers.",
          imageType: "mobile"
        }
      ]
    }
  }
];
