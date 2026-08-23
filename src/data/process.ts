export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Deep dive into your business operations, target customers, revenue bottlenecks, and software requirements.",
    details: [
      "Analyze current booking/ordering workflows",
      "Identify conversion drop-off points",
      "Define key technical & functional scope"
    ]
  },
  {
    number: "02",
    title: "Plan",
    description: "Formulate the system architecture, component breakdown, data models, and user interaction flows.",
    details: [
      "Map out user journeys & wireframe wireframes",
      "Select optimal technology stack & integrations",
      "Establish strict project milestones"
    ]
  },
  {
    number: "03",
    title: "Design",
    description: "Craft a modern, responsive interface focused on high conversion rates and intuitive customer UX.",
    details: [
      "Design mobile-first responsive interfaces",
      "Build high-contrast typography hierarchy",
      "Refine interactive micro-states & micro-copy"
    ]
  },
  {
    number: "04",
    title: "Build",
    description: "Engineer clean, modular React & TypeScript code with fast API integrations and comprehensive state management.",
    details: [
      "Develop reusable component architecture",
      "Integrate payment, booking & CRM APIs",
      "Perform cross-device & performance testing"
    ]
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy to production, configure custom domains, set up monitoring, and provide post-launch support.",
    details: [
      "Production deployment & CDN edge setup",
      "SEO metadata & analytics verification",
      "Post-launch technical support & handoff"
    ]
  }
];
