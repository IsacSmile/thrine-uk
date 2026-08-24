export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Do you work with businesses outside India?",
    answer: "Yes. The studio works with service businesses, tour operators, and hospitality brands across the UK, US, UAE, Europe, Australia, and internationally. All communication is managed asynchronously over structured video updates, email, and scheduled discovery calls tailored to your time zone."
  },
  {
    question: "How much does a project cost?",
    answer: "Projects are scoped based on system complexity, custom workflows, and integration requirements rather than rigid tier templates. Following a 30-minute discovery call, you receive a detailed written proposal with a defined scope, fixed investment breakdown, and delivery milestones."
  },
  {
    question: "How long does a typical project take?",
    answer: "Websites take approximately 3 to 5 weeks from discovery to launch. Custom booking or ordering systems take 6 to 8 weeks depending on your scope."
  },
  {
    question: "Do you build custom booking and ordering systems?",
    answer: "Yes. Tailored booking engines, multi-vehicle seat selectors, custom product configurators, inquiry routing, and admin dashboards are core systems we build."
  },
  {
    question: "Can you integrate payment providers?",
    answer: "Yes. We integrate leading regional and global payment gateways including Stripe, PayPal, Razorpay, Apple Pay, and local banking gateways, ensuring full compliance, security, and automated invoice dispatches."
  },
  {
    question: "Can you integrate with our existing tools?",
    answer: "Yes. We integrate custom systems with your existing CRMs (HubSpot, Salesforce), email marketing platforms (Klaviyo, Mailchimp), WhatsApp APIs, Google Sheets, or custom database backends."
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes. All projects include 30 days of post-launch warranty and technical support to ensure smooth operation. Afterwards, optional monthly maintenance retainers are available for technical updates, security monitoring, and feature enhancements."
  },
  {
    question: "Who owns the website and code?",
    answer: "You do — completely. Upon project completion and final handover, 100% of source code, design assets, database schemas, and content belong to your business. You are never locked into proprietary platforms or vendor dependencies."
  }
];
