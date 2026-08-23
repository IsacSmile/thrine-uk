export interface WorkflowStep {
  id: string;
  stepNumber: string;
  title: string;
  shortLabel: string;
  description: string;
  statusTag: 'Live' | 'Implemented' | 'System Workflow';
  metadata?: {
    label: string;
    value: string;
  }[];
  mockupId: string;
}

export interface ProjectWorkflows {
  projectId: 'bakery' | 'travel';
  projectName: string;
  customerFlow: {
    heading: string;
    steps: WorkflowStep[];
  };
  adminFlow: {
    heading: string;
    steps: WorkflowStep[];
  };
}

export const howItWorksData: Record<'bakery' | 'travel', ProjectWorkflows> = {
  bakery: {
    projectId: 'bakery',
    projectName: 'My Homely Cakes (Bakery)',
    customerFlow: {
      heading: 'How a customer places a custom cake order',
      steps: [
        {
          id: 'b-c-01',
          stepNumber: '01',
          title: 'Browse Bakery Catalogue',
          shortLabel: 'Browse',
          description: 'Customer opens the bakery storefront and explores categorized offerings including artisanal cakes, pastries, bakery items, and special celebratory collections.',
          statusTag: 'Live',
          metadata: [
            { label: 'Category View', value: 'Fresh Cream Cakes, Pastries' },
            { label: 'Speed', value: '1.1s instant load' }
          ],
          mockupId: 'bakery-cust-browse'
        },
        {
          id: 'b-c-02',
          stepNumber: '02',
          title: 'Choose a Product',
          shortLabel: 'Choose',
          description: 'Customer selects a cake product to view details, high-resolution photography, base pricing, size variants, and available flavor options.',
          statusTag: 'Live',
          metadata: [
            { label: 'Product', value: 'Chocolate Truffle cake' },
            { label: 'Base Price', value: '₹1,000' }
          ],
          mockupId: 'bakery-cust-choose'
        },
        {
          id: 'b-c-03',
          stepNumber: '03',
          title: 'Customize Cake Configuration',
          shortLabel: 'Customize',
          description: 'Customer selects available options (700g, 1kg, 2kg, custom cake message piping "Happy Birthday Jiju"). Total price updates dynamically in real-time.',
          statusTag: 'Implemented',
          metadata: [
            { label: 'Selected Size', value: '1 kg (₹1,000)' },
            { label: 'Cake Message', value: '"Happy Birthday Jiju"' }
          ],
          mockupId: 'bakery-cust-customize'
        },
        {
          id: 'b-c-04',
          stepNumber: '04',
          title: 'Add To Cart & Review Itemization',
          shortLabel: 'Cart',
          description: 'Customer reviews selected product, quantity, weight additions, and custom piping message in the cart summary before proceeding to checkout.',
          statusTag: 'Live',
          metadata: [
            { label: 'Item Subtotal', value: '₹1,000' },
            { label: 'Cart Status', value: '1 Item' }
          ],
          mockupId: 'bakery-cust-cart'
        },
        {
          id: 'b-c-05',
          stepNumber: '05',
          title: 'Checkout & Delivery Info',
          shortLabel: 'Checkout',
          description: 'Customer provides recipient name (Nirmal), mobile number (9847431696), delivery city (Trivandrum), preferred date/time slot, and order notes.',
          statusTag: 'Live',
          metadata: [
            { label: 'Recipient', value: 'Nirmal (9847431696)' },
            { label: 'City', value: 'Trivandrum (Default)' }
          ],
          mockupId: 'bakery-cust-checkout'
        },
        {
          id: 'b-c-06',
          stepNumber: '06',
          title: 'Confirm Order & Select Payment',
          shortLabel: 'Payment',
          description: 'Customer reviews final total, applies store coupons if valid, chooses payment method (UPI / Card / Cash on Delivery), and places the order.',
          statusTag: 'Implemented',
          metadata: [
            { label: 'Payment Method', value: 'UPI / Direct Transfer' },
            { label: 'Total Payable', value: '₹1,000' }
          ],
          mockupId: 'bakery-cust-pay'
        },
        {
          id: 'b-c-07',
          stepNumber: '07',
          title: 'Order Confirmed & Status Tracker',
          shortLabel: 'Confirmed',
          description: 'Order confirmation screen appears with Order #MHC-6502. Customer receives a direct tracking status view (New → Contacted → Confirmed → Completed → Delivered).',
          statusTag: 'Live',
          metadata: [
            { label: 'Order Reference', value: '#MHC-6502' },
            { label: 'Initial Status', value: 'New → Confirmed' }
          ],
          mockupId: 'bakery-cust-confirmed'
        }
      ]
    },
    adminFlow: {
      heading: 'How the MyHomelyCake team manages executive overview, catalog modal, bakers, subscribers, and hero settings',
      steps: [
        {
          id: 'b-a-01',
          stepNumber: '01',
          title: 'Store Executive Overview',
          shortLabel: 'Executive Dashboard',
          description: 'Real-time sales dashboard showing orders placed today, weekly/monthly revenue (₹2,386), newsletter subscribers (4), top ordered cakes (Red Velvet #1, Choco Butter Scotch #2), search terms ("Special Theme Cakes"), and recent order #MHC-6502.',
          statusTag: 'Live',
          metadata: [
            { label: 'Active Store', value: 'MyHomelyCake Trivandrum' },
            { label: 'Key Metrics', value: 'Orders, Revenue, Search Analytics' }
          ],
          mockupId: 'bakery-admin-overview'
        },
        {
          id: 'b-a-02',
          stepNumber: '02',
          title: 'Products Catalog & Edit Cake Modal',
          shortLabel: 'Products & Modal',
          description: 'Manage 76 cakes with position numbers, custom weight prices (700g: ₹650, 1kg: ₹1000, 2kg: ₹2000), stock toggles, and open the Edit Cake Details & Photos modal to manage image galleries and custom prices.',
          statusTag: 'Live',
          metadata: [
            { label: 'Catalog Size', value: '76 Cakes • 5 Categories' },
            { label: 'Modal Control', value: 'Batch photo gallery & weight prices' }
          ],
          mockupId: 'bakery-admin-catalog'
        },
        {
          id: 'b-a-03',
          stepNumber: '03',
          title: 'Order Management Workflow & Stages',
          shortLabel: 'Order Management',
          description: 'Staff inspects incoming order cards (#MHC-6502, #MHC-4075) with continuous audio notifications (Sound ON), date filters (All Time, Today), customer phone numbers (9847431696), cake piping messages ("Happy Birthday Jiju"), and 1-click status actions.',
          statusTag: 'Live',
          metadata: [
            { label: 'Live Order Ref', value: '#MHC-6502 (₹1,000)' },
            { label: 'Pipeline Filters', value: 'New, Contacted, Confirmed, Completed' }
          ],
          mockupId: 'bakery-admin-orders'
        },
        {
          id: 'b-a-04',
          stepNumber: '04',
          title: 'Team & Bakers Management (5 Bakers)',
          shortLabel: 'Team & Bakers',
          description: 'Manage artisans, head chefs, and bakers (Angem Head Chef, Lilong Chef, Ayon Head Baker, Angap Baker, Jennifer Baker) featured in the homepage "Behind the Scenes" showcase.',
          statusTag: 'Live',
          metadata: [
            { label: 'Team Count', value: '5 Artisans & Bakers' },
            { label: 'Showcase', value: 'Homepage Behind-the-Scenes' }
          ],
          mockupId: 'bakery-admin-team'
        },
        {
          id: 'b-a-[#05]',
          stepNumber: '05',
          title: 'Newsletter Subscribers (4 Emails)',
          shortLabel: 'Subscribers',
          description: 'Captured customer emails list (coady@gmail.com, test@gmail.com, itsfaizimam@gmail.com, myhomelycakes@gmail.com) with 1-click Export CSV capability.',
          statusTag: 'Live',
          metadata: [
            { label: 'Captured Leads', value: '4 Newsletter Subscribers' },
            { label: 'Export Mode', value: '📥 Export CSV' }
          ],
          mockupId: 'bakery-admin-subscribers'
        },
        {
          id: 'b-a-[#06]',
          stepNumber: '06',
          title: 'Admin Settings & Hero Customization',
          shortLabel: 'Hero Settings',
          description: 'Custom main hero banner titles ("Freshly Baked Homemade Cakes Delivered in Trivandrum"), manage active hero slides (Chocolate Truffle, Vancho Cake, Red Velvet), and update admin login credentials.',
          statusTag: 'Live',
          metadata: [
            { label: 'Hero Slides', value: '3 Active Banner Slides' },
            { label: 'Credentials', value: 'myhomelycakes@gmail.com' }
          ],
          mockupId: 'bakery-admin-settings'
        },
        {
          id: 'b-a-[#07]',
          stepNumber: '07',
          title: 'Delivery Cities & Outlets Manager',
          shortLabel: 'Delivery Cities',
          description: 'Manage allowed delivery cities and bakery outlets. Trivandrum is auto-selected as default. Staff can enable/disable cities (TVM, Kochi) without breaking existing order history.',
          statusTag: 'Live',
          metadata: [
            { label: 'Default City', value: 'Trivandrum (Active)' },
            { label: 'Safety Rule', value: 'Order history preserved on disable' }
          ],
          mockupId: 'bakery-admin-cities'
        },
        {
          id: 'b-a-[#08]',
          stepNumber: '08',
          title: 'Real-Time Storefront Synchronization',
          shortLabel: 'Store Sync',
          description: 'Any change made in the admin panel—updating a cake price, position number, team member, delivery city, or order status—automatically reflects on the customer-facing website in real time.',
          statusTag: 'Live',
          metadata: [
            { label: 'System Sync', value: 'One system connecting storefront to kitchen' },
            { label: 'Notifications', value: 'Continuous audio order chimes' }
          ],
          mockupId: 'bakery-admin-sync'
        }
      ]
    }
  },
  travel: {
    projectId: 'travel',
    projectName: 'Travel & Hault (Tours)',
    customerFlow: {
      heading: 'How a traveler explores and requests a tour package',
      steps: [
        {
          id: 't-c-01',
          stepNumber: '01',
          title: 'Explore Tour Packages',
          shortLabel: 'Explore',
          description: 'Traveler visits the website to explore curated travel packages categorized by destinations, trip durations, and themes (Domestic / International).',
          statusTag: 'Live',
          metadata: [
            { label: 'Package Catalog', value: 'Dubai, Kerala, Europe' },
            { label: 'Filter By', value: 'Duration & Starting Price' }
          ],
          mockupId: 'travel-cust-explore'
        },
        {
          id: 't-c-02',
          stepNumber: '02',
          title: 'Select a Tour Package',
          shortLabel: 'Select Package',
          description: 'Traveler opens a package to review tour title, destination overview, duration (e.g. 7 Days / 6 Nights), starting price, and inclusion highlights.',
          statusTag: 'Live',
          metadata: [
            { label: 'Selected Package', value: '7-Day Scenic Expedition' },
            { label: 'Starting Price', value: '$480 / person' }
          ],
          mockupId: 'travel-cust-select'
        },
        {
          id: 't-c-03',
          stepNumber: '03',
          title: 'Review Day-by-Day Itinerary',
          shortLabel: 'Itinerary',
          description: 'Traveler expands day-by-day itinerary accordions, accommodation details, transport arrangements, and clear transparent inclusions.',
          statusTag: 'Live',
          metadata: [
            { label: 'Day 1-2', value: 'Coastal Routes & Fleet Pickup' },
            { label: 'Day 3-5', value: 'Guided SUV Excursions' }
          ],
          mockupId: 'travel-cust-itinerary'
        },
        {
          id: 't-c-04',
          stepNumber: '04',
          title: 'Configure Trip & Vehicle Seats',
          shortLabel: 'Configure',
          description: 'Traveler selects departure date, passenger count, room requirements, and reserves specific seats on the interactive SUV fleet map.',
          statusTag: 'Implemented',
          metadata: [
            { label: 'Seats Selected', value: '3 Seats (Fleet SUV #02)' },
            { label: 'Travelers', value: '4 Adults' }
          ],
          mockupId: 'travel-cust-configure'
        },
        {
          id: 't-c-05',
          stepNumber: '05',
          title: 'Enter Traveler Information',
          shortLabel: 'Traveler Details',
          description: 'Traveler fills lead details (Primary Contact Name, Email, WhatsApp Phone, and special dietary or room preferences).',
          statusTag: 'Live',
          metadata: [
            { label: 'Contact', value: 'Direct WhatsApp Dispatch' },
            { label: 'Preferences', value: 'Shared SUV / Twin Rooms' }
          ],
          mockupId: 'travel-cust-details'
        },
        {
          id: 't-c-06',
          stepNumber: '06',
          title: 'Review & Submit Inquiry',
          shortLabel: 'Submit Inquiry',
          description: 'Traveler reviews complete trip summary, selected dates, seat allocations, and estimated price quote before clicking Submit Inquiry.',
          statusTag: 'Live',
          metadata: [
            { label: 'Inquiry Dispatch', value: '1-Click Pre-filled Routing' },
            { label: 'Est. Total', value: '$1,920 for 4 Travelers' }
          ],
          mockupId: 'travel-cust-submit'
        },
        {
          id: 't-c-07',
          stepNumber: '07',
          title: 'Booking Request Received',
          shortLabel: 'Confirmed',
          description: 'Confirmation screen displays Reference #TH-2026-1024 and next steps: "Our travel team will review your request and contact you within 2 hours."',
          statusTag: 'Live',
          metadata: [
            { label: 'Ref Number', value: '#TH-2026-1024' },
            { label: 'Next Step', value: 'Travel Desk Confirmation' }
          ],
          mockupId: 'travel-cust-received'
        }
      ]
    },
    adminFlow: {
      heading: 'How the travel team manages packages & booking inquiries',
      steps: [
        {
          id: 't-a-01',
          stepNumber: '01',
          title: 'Travel Admin Dashboard',
          shortLabel: 'Dashboard',
          description: 'Travel desk staff opens dashboard showing New Inquiries, Pending Quotes, Confirmed Trips, and Upcoming Departure Fleets.',
          statusTag: 'Live',
          metadata: [
            { label: 'New Inquiries', value: '8 Pending' },
            { label: 'Upcoming Departures', value: '4 Fleets' }
          ],
          mockupId: 'travel-admin-dashboard'
        },
        {
          id: 't-a-02',
          stepNumber: '02',
          title: 'Create Tour Package',
          shortLabel: 'Create Tour',
          description: 'Staff fills Create Package form with Package Name, Code (TH-PKG-02), Destination, Duration, Starting Price, and Hero Image.',
          statusTag: 'Implemented',
          metadata: [
            { label: 'Package Code', value: 'TH-PKG-02' },
            { label: 'Duration', value: '7 Days / 6 Nights' }
          ],
          mockupId: 'travel-admin-createpkg'
        },
        {
          id: 't-a-03',
          stepNumber: '03',
          title: 'Build Itinerary Days',
          shortLabel: 'Build Itinerary',
          description: 'Staff builds itinerary day by day (Day 1 Title, Activity description, Transport mode) without needing developer assistance.',
          statusTag: 'Live',
          metadata: [
            { label: 'Itinerary Engine', value: 'No-code Day Builder' },
            { label: 'Inclusions', value: 'Hotels, Meals, SUV Fleet' }
          ],
          mockupId: 'travel-admin-builditinerary'
        },
        {
          id: 't-a-04',
          stepNumber: '04',
          title: 'Configure Package & Publish',
          shortLabel: 'Configure',
          description: 'Staff specifies inclusions/exclusions, pricing tiers, vehicle allocations, and clicks Publish Package to update the public site.',
          statusTag: 'Live',
          metadata: [
            { label: 'Publish Action', value: 'Instant Web Visibility' },
            { label: 'Fleet Assigned', value: 'SUV Fleet #02' }
          ],
          mockupId: 'travel-admin-configure'
        },
        {
          id: 't-a-05',
          stepNumber: '05',
          title: 'Manage Incoming Inquiries',
          shortLabel: 'Inquiries',
          description: 'Staff views centralized list of incoming booking requests with traveler counts, dates, and assigned inquiry status.',
          statusTag: 'Live',
          metadata: [
            { label: 'Inquiry #TH-1024', value: '4 Travelers • Pending' },
            { label: 'Action', value: 'Open Details & Assign' }
          ],
          mockupId: 'travel-admin-inquiries'
        },
        {
          id: 't-a-06',
          stepNumber: '06',
          title: 'Open Booking & Confirm',
          shortLabel: 'Open Booking',
          description: 'Staff inspects requested dates, seat allocations, sends custom quote confirmation to traveler, and marks booking as Confirmed.',
          statusTag: 'Implemented',
          metadata: [
            { label: 'Seat Allocation', value: '3 SUV Seats Confirmed' },
            { label: 'Quote Status', value: 'Confirmed & Voucher Sent' }
          ],
          mockupId: 'travel-admin-openbooking'
        },
        {
          id: 't-a-07',
          stepNumber: '07',
          title: 'Booking Lifecycle Management',
          shortLabel: 'Lifecycle',
          description: 'Complete booking lifecycle pipeline: Inquiry → Review → Quote → Customer Confirmation → Payment → Confirmed → Trip Completed.',
          statusTag: 'Live',
          metadata: [
            { label: 'Lifecycle State', value: 'Trip Confirmed' },
            { label: 'System Value', value: 'Operational control behind website' }
          ],
          mockupId: 'travel-admin-lifecycle'
        }
      ]
    }
  }
};
