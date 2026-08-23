export interface SolutionCategory {
  sector: string;
  badge: string;
  description: string;
  solutions: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const solutionsData: SolutionCategory[] = [
  {
    sector: "For Travel & Tour Businesses",
    badge: "Travel & Hospitality",
    description: "Digital platforms built to simplify itinerary exploration and automate booking inquiries.",
    solutions: [
      {
        title: "Tour Package Showcases",
        description: "Filterable destination catalogs with day-by-day itineraries, pricing tiers, and visual highlights.",
        icon: "Compass"
      },
      {
        title: "Multi-Vehicle Seat Selection",
        description: "Interactive fleet maps allowing travelers to pick specific vehicle seats across multiple cars.",
        icon: "Car"
      },
      {
        title: "Inquiry Management Systems",
        description: "Direct WhatsApp and email dispatch pre-populated with exact passenger metadata and dates.",
        icon: "Send"
      },
      {
        title: "Admin Tour Manager",
        description: "Backend interface to update prices, itinerary details, and seasonal tour availability instantly.",
        icon: "LayoutDashboard"
      }
    ]
  },
  {
    sector: "For Bakery & Food Businesses",
    badge: "Food & Retail Ordering",
    description: "E-commerce engines designed to take the friction out of custom food & cake ordering.",
    solutions: [
      {
        title: "Visual Cake Builders",
        description: "Step-by-step custom cake configurator for size, sponge, fillings, text, and photo uploads.",
        icon: "Cake"
      },
      {
        title: "Dynamic Price Calculators",
        description: "Instant cost feedback as customers toggle custom options, modifiers, and rush delivery.",
        icon: "Calculator"
      },
      {
        title: "Outlet Location Badging",
        description: "Store status indicators dynamically informing clients of open ordering windows and locations.",
        icon: "MapPin"
      },
      {
        title: "Kitchen Queue Dashboards",
        description: "Prioritized order queue screen for kitchen staff to manage pending custom orders.",
        icon: "ChefHat"
      }
    ]
  }
];
