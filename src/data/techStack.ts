export interface TechCategory {
  category: string;
  items: {
    name: string;
    description: string;
    iconName: string;
  }[];
}

export const techStackData: TechCategory[] = [
  {
    category: "Frontend Engineering",
    items: [
      { name: "React", description: "UI component architecture & state management", iconName: "Code2" },
      { name: "TypeScript", description: "End-to-end type safety & code reliability", iconName: "FileCode" },
      { name: "Tailwind CSS", description: "Custom editorial dark design systems", iconName: "Palette" },
      { name: "Vite", description: "Lightning-fast modern build toolchain", iconName: "Zap" }
    ]
  },
  {
    category: "Backend & Data Architecture",
    items: [
      { name: "Node.js", description: "Scalable backend services & API routes", iconName: "Server" },
      { name: "Python", description: "Automations & custom data scripts", iconName: "Terminal" },
      { name: "PostgreSQL", description: "Relational database schema & queries", iconName: "Database" }
    ]
  },
  {
    category: "Integrations & Automation",
    items: [
      { name: "REST & GraphQL APIs", description: "Clean client-server communication", iconName: "Cpu" },
      { name: "Payment Gateways", description: "Stripe & secure checkout flows", iconName: "CreditCard" },
      { name: "Email & Notifications", description: "Resend & automated notifications", iconName: "Mail" },
      { name: "AI APIs", description: "Intelligent summary & drafting flows", iconName: "Sparkles" }
    ]
  }
];
