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
        title: "Tour Package Showcase",
        description: "Show your trips clearly with prices and itineraries",
        icon: "Compass"
      },
      {
        title: "Multi-Vehicle Seat Selection",
        description: "Let customers choose seats across different vehicles",
        icon: "Car"
      },
      {
        title: "Enquiry Management System",
        description: "All booking requests land in one organised place",
        icon: "Send"
      },
      {
        title: "Admin Tour Manager",
        description: "Manage trips, availability and bookings from one dashboard",
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
        title: "Visual Cake Builder",
        description: "Customers design custom cakes step by step",
        icon: "Cake"
      },
      {
        title: "Dynamic Price Calculator",
        description: "Instant accurate pricing as they customise",
        icon: "Calculator"
      },
      {
        title: "Outlet Location Badging",
        description: "Show which store the order is for",
        icon: "MapPin"
      },
      {
        title: "Kitchen Queue Dashboard",
        description: "Kitchen sees every order clearly and in order",
        icon: "ChefHat"
      }
    ]
  }
];
