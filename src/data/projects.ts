export interface ProjectWorkflowStep {
  step: string;
  title: string;
  description: string;
  image?: string;
}

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
  challenge: {
    overview: string;
    painPoints: string[];
  };
  solution: {
    overview: string;
    highlights: string[];
  };
  outcome: {
    overview: string;
    metrics: {
      metric: string;
      label: string;
      description: string;
    }[];
  };
  customerWorkflow: ProjectWorkflowStep[];
  adminWorkflow: ProjectWorkflowStep[];
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
    title: "Travel & Hault — Tour Booking Platform",
    tagline: "A booking system for a tour operator. Customers can view trips, check availability, and send booking requests. The business manages everything from one simple dashboard.",
    category: "Travel & Tourism",
    industry: "Travel & Tourism",
    type: "Customer Platform & Booking System",
    clientName: "Travel & Hault",
    clientLogo: "/images/client-travel-halt-logo.png",
    clientLocation: "Dubai, UAE & Kerala, India",
    timeline: "6 Weeks",
    status: "Live in Production",
    liveUrl: "https://travelhault.com",
    services: [
      "Customer Booking Experience",
      "Interactive Itinerary Builder",
      "Vehicle Seat Selector",
      "Enquiry Management System"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Node.js"],
    summary: "A booking system for a tour operator. Customers can view trips, check availability, and send booking requests. The business manages everything from one simple dashboard.",
    challenge: {
      overview: "Managing all customer inquiries manually across WhatsApp messages, spreadsheets, and phone calls created peak season backlogs, misquoted rates, and delayed booking confirmations.",
      painPoints: [
        "Customer drop-off caused by lack of seat availability clarity for group bookings.",
        "Hours spent daily handling repetitive pricing quotes over chat channels.",
        "Inability for travelers on mobile connections to explore multi-day itineraries.",
        "Lack of a centralized booking record for driver dispatches and operational staff."
      ]
    },
    solution: {
      overview: "We engineered a unified customer booking portal paired with an operational booking manager that structures traveler requests before they reach the operator.",
      highlights: [
        "Day-by-day itinerary explorer with transparent pricing inclusions.",
        "Visual SUV fleet seat mapper supporting independent multi-car seat reservations.",
        "Structured inquiry routing that pre-fills traveler dates, counts, and selected seats.",
        "Touch-optimized mobile layout engineered for fast loading on cellular networks."
      ]
    },
    outcome: {
      overview: "Eliminated manual booking friction, accelerated response times, and created a structured operational pipeline for group tour dispatches.",
      metrics: [
        {
          metric: "Simplified",
          label: "Customer Enquiries",
          description: "Drastically reduced back-and-forth chat exchanges to confirm dates and seats."
        },
        {
          metric: "Faster",
          label: "Response Handling",
          description: "Inquiries arrive pre-populated with exact traveler counts and date selections."
        },
        {
          metric: "Zero",
          label: "Seat Errors",
          description: "Zero group seat overlap errors during multi-vehicle booking dispatches."
        }
      ]
    },
    customerWorkflow: [
      { step: "01", title: "Explore Trip", description: "Browse tour packages, multi-day itineraries, and transparent pricing." },
      { step: "02", title: "Select Package", description: "Choose travel dates, passenger count, and optional tour extras." },
      { step: "03", title: "Review Itinerary", description: "Inspect daily schedules, hotel stops, and included amenities." },
      { step: "04", title: "Submit Enquiry", description: "Submit verified booking request with passenger details." },
      { step: "05", title: "Confirm Booking", description: "Receive instant confirmation and trip itinerary voucher." }
    ],
    adminWorkflow: [
      { step: "01", title: "Create Package", description: "Set up tour details, pricing tiers, and seasonal availability." },
      { step: "02", title: "Build Itinerary", description: "Configure day-by-day schedule, vehicle allocations, and inclusions." },
      { step: "03", title: "Publish System", description: "Push live updates directly to traveler-facing booking pages." },
      { step: "04", title: "Receive Enquiry", description: "View structured booking inquiries pre-filled with traveler metadata." },
      { step: "05", title: "Manage Trip", description: "Assign drivers, vehicles, and track active excursion schedules." }
    ],
    keyFeatures: [
      {
        title: "Customer Experience: Tour Explorer",
        description: "Travelers can explore package itineraries, choose travel dates, and select group requirements in a single intuitive flow.",
        technicalDetail: "Dynamic package configuration · itinerary system · availability logic."
      },
      {
        title: "Vehicle & Fleet Seat Selector",
        description: "Visual seat mapper allowing travelers to reserve specific seats across individual or multi-vehicle fleets.",
        technicalDetail: "Isolated seat state maps · multi-car allocation logic · responsive touch targets."
      },
      {
        title: "Structured Enquiry Dispatch",
        description: "One-click inquiry routing that sends complete booking metadata straight to operator channels.",
        technicalDetail: "Pre-filled payload serialization · instant REST API dispatch · fallback handler."
      }
    ],
    technicalHighlights: [
      "Architected isolated seat selection state maps to prevent cross-vehicle state synchronization bugs during multi-car bookings.",
      "Implemented responsive SVG layout renders for seat maps with touch-friendly hit areas.",
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
    title: "My Homely Cakes — Custom Bakery System",
    tagline: "An online ordering system for a local bakery. Customers can browse the menu, place orders, and the bakery receives everything in one place — no more WhatsApp chaos.",
    category: "Food & Hospitality",
    industry: "Food & Hospitality",
    type: "Online Ordering & Kitchen System",
    clientName: "My Homely Cakes",
    clientLogo: "/images/client-homely-cakes-logo.png",
    clientLocation: "Trivandrum, India",
    timeline: "8 Weeks",
    status: "Live in Production",
    liveUrl: "https://yourbakery.com",
    services: [
      "Online Product Catalog",
      "Step-by-Step Custom Cake Builder",
      "Real-Time Price Calculator",
      "Kitchen Order Queue Dashboard"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage API", "REST APIs"],
    summary: "An online ordering system for a local bakery. Customers can browse the menu, place orders, and the bakery receives everything in one place — no more WhatsApp chaos.",
    challenge: {
      overview: "Taking complex custom cake requests over Instagram DMs and phone calls led to miscalculated quotes, unrecorded customer details, and orders arriving during kitchen closures.",
      painPoints: [
        "15+ minutes spent per custom order answering repetitive flavor and size questions.",
        "Customer pricing confusion leading to abandoned custom order requests.",
        "Orders received when specific outlets were closed or at daily baking capacity.",
        "Kitchen staff struggling to read handwritten custom cake messaging instructions."
      ]
    },
    solution: {
      overview: "We built an interactive step-by-step cake customizer with live price calculations, dynamic outlet badging, and a dedicated kitchen order manager.",
      highlights: [
        "Visual 4-step cake builder for choosing flavors, tier sizes, custom text, and photo references.",
        "Real-time total cost calculation updated dynamically as options are selected.",
        "Outlet-specific status badging (e.g. 'Trivandrum Store • Accepting Orders').",
        "Clear kitchen order queue dashboard for tracking fulfillment statuses."
      ]
    },
    outcome: {
      overview: "Automated custom order collection, eliminated pricing errors, and provided kitchen staff with full visibility over daily order fulfillment.",
      metrics: [
        {
          metric: "Automated",
          label: "Order Collection",
          description: "Zero back-and-forth messaging required to gather flavor and custom wording details."
        },
        {
          metric: "Instant",
          label: "Price Transparency",
          description: "Exact transparent pricing quotes generated dynamically as customers select cake tiers."
        },
        {
          metric: "Centralized",
          label: "Kitchen Queue",
          description: "Bakeries maintain full visibility over daily custom order fulfillment stages."
        }
      ]
    },
    customerWorkflow: [
      { step: "01", title: "Browse Catalog", description: "Explore artisanal cake options, pastries, and house specialties." },
      { step: "02", title: "Select Product", description: "Choose base cake design, sponge flavor, and serving weight." },
      { step: "03", title: "Customize Cake", description: "Add custom text, cake toppings, and reference photos." },
      { step: "04", title: "Add To Cart", description: "Review itemized invoice with instant pricing breakdown." },
      { step: "05", title: "Checkout Order", description: "Select fulfillment date, store pickup, and confirm order." }
    ],
    adminWorkflow: [
      { step: "01", title: "Dashboard Overview", description: "View real-time daily order volume, revenue, and store badging." },
      { step: "02", title: "Add Product", description: "Upload new seasonal cake items with dynamic size pricing." },
      { step: "03", title: "Configure Product", description: "Set available flavor combinations, add-ons, and lead times." },
      { step: "04", title: "Manage Orders", description: "Track incoming orders in structured kitchen queue columns." },
      { step: "05", title: "Complete Order", description: "Mark orders ready for pickup or dispatch with client notifications." }
    ],
    keyFeatures: [
      {
        title: "Customer Experience: Cake Configurator",
        description: "Customers build custom cakes step-by-step, selecting sponge flavors, tier sizes, fillings, custom text, and photo uploads.",
        technicalDetail: "Multi-step state machine · dynamic preview · custom modifier logic."
      },
      {
        title: "Real-Time Price Calculator",
        description: "Generates an accurate, transparent total price estimate instantly as customers modify their cake configuration.",
        technicalDetail: "Client-side pricing calculation engine · itemized invoice calculation."
      },
      {
        title: "Kitchen Order Manager",
        description: "Streamlined operational dashboard for bakery staff to track incoming orders, fulfillment statuses, and custom requirements.",
        technicalDetail: "Filtered queue views · order status toggles · operational data persistence."
      }
    ],
    technicalHighlights: [
      "Constructed a lightweight state machine for the multi-step cake customizer, ensuring seamless step validation.",
      "Utilized custom CSS animations for visual tier stacks and active modifier toggles.",
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
