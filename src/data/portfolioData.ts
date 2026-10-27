export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  url: string;
  isPlaceholder?: boolean;
  image: string;
  tags: string[];
  themeColors?: string[];
  themeName?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const PORTFOLIO_DATA = {
  name: "Zafir Ahmed",
  role: "Data Entry Specialist & Web Developer",
  oneLiner: "Accurate data. Clean websites. Delivered on time.",
  location: "Pakistan (Remote Worldwide)",
  timezone: "US Business Hours (EST / PST)",
  email: "zafirahmed864@gmail.com",
  profileImage: "/assets/aistudio/profile.jpg_776450ed.jpeg",
  consultancyMeetingImage: "/assets/aistudio/Professional_Consultancy_Meeting_4e438a31.png",
  cvFileName: "Zafir_Ahmed_Resume_2026.pdf",
  links: {
    email: "mailto:zafirahmed864@gmail.com",
    linkedin: "https://linkedin.com/in/[zafir-ahmed-placeholder]",
    pavago: "https://pavago.com/[zafir-ahmed-placeholder]",
  },
  about:
    "Data Entry Specialist and Web Developer. I handle product catalog entry, data cleaning and spreadsheet management in MS Excel and Google Sheets, and I build clean, responsive websites for small businesses. Accurate, confidential and always on time. Based in Pakistan and available to work US business hours (EST/PST) for remote clients.",
  
  services: [
    {
      id: "data-entry-cleaning",
      title: "Data Entry and Data Cleaning",
      description:
        "High-volume data transcription, deduplication, error scrubbing, and standardizing raw records into structured, audit-ready databases.",
      deliverables: ["Raw data cleaning & deduplication", "Error auditing & verification", "Database record entry"]
    },
    {
      id: "catalog-management",
      title: "Product Catalog Management",
      description:
        "Comprehensive SKU entry, specification formatting, pricing updates, image tagging, and inventory categorization across e-commerce platforms.",
      deliverables: ["SKU specification mapping", "Inventory categorization", "Price & attribute updates"]
    },
    {
      id: "spreadsheet-formatting",
      title: "Spreadsheet Formatting (MS Excel / Google Sheets)",
      description:
        "Custom financial and operational spreadsheets with formulas, conditional formatting, pivot tables, data validation rules, and automated summary views.",
      deliverables: ["Advanced formula modeling", "Conditional formatting rules", "Automated executive summaries"]
    },
    {
      id: "virtual-assistance",
      title: "Virtual Assistance",
      description:
        "Dedicated administrative support, operational task execution, email triage, file organization, and ongoing digital management during your active business hours.",
      deliverables: ["US timezone business coverage", "Task & schedule tracking", "Operational document filing"]
    },
    {
      id: "website-design-dev",
      title: "Website Design and Development",
      description:
        "Modern, ultra-fast, mobile-responsive web development for service professionals, real estate firms, and growing businesses.",
      deliverables: ["Mobile-first responsive build", "SEO-optimized markup", "Interactive client inquiry forms"]
    },
    {
      id: "website-maintenance",
      title: "Website Maintenance",
      description:
        "Regular content updates, layout adjustments, speed optimization, link checks, and reliable technical upkeep so your site never goes stale.",
      deliverables: ["Content & asset updates", "Performance monitoring", "Broken link & layout fixes"]
    }
  ] as ServiceItem[],

  skills: [
    "MS Excel",
    "Google Sheets",
    "Data Entry",
    "Data Cleaning",
    "Data Verification",
    "Spreadsheet Formatting",
    "Virtual Assistance",
    "Web Development",
    "Website Design",
    "Responsive Design",
    "Landing Pages",
    "Website Maintenance",
    "AI-Assisted Development",
    "Online Marketing",
    "Blog Management"
  ],

  projects: [
    {
      id: "nasir-real-estate",
      title: "Nasir Real Estate Website",
      year: "2026",
      category: "Web Development · Luxury Property",
      description:
        "Official verified residential houses, ready-to-build plots, and commercial properties platform in Chenab Nagar & Chiniot with direct owner documentation.",
      url: "https://nasirrealestate.netlify.app",
      isPlaceholder: false,
      image: "/src/assets/images/nasir_realestate_real.jpg",
      tags: ["Web Development", "Local SEO", "Property Listings", "Netlify"],
      themeColors: ["#0F172A", "#059669", "#E2E8F0"],
      themeName: "Emerald & Deep Slate Luxury Architecture"
    },
    {
      id: "micheal-salazar-dentist",
      title: "Michael Salazar Dentist Website",
      year: "2026",
      category: "Web Development · Healthcare Clinic",
      description:
        "Clinical dental practice platform for Dr. Michael Salazar DDS in Orlando, FL featuring appointment scheduling, family & cosmetic treatments, and 4.9★ patient reviews.",
      url: "https://michealsalazardentist.netlify.app",
      isPlaceholder: false,
      image: "/src/assets/images/project_salazar_dentist_theme_1793095040132.jpg",
      tags: ["Healthcare UI", "Web Development", "Booking Flow", "Responsive Design"],
      themeColors: ["#0F5C5B", "#F5F1E8", "#D4AF37"],
      themeName: "Spruce Teal, Warm Cream & Clinical Gold"
    },
    {
      id: "bytenova-blog",
      title: "ByteNova Blog (ByteNovaPK)",
      year: "2025 - 2026",
      category: "Editorial Publication · AI & Freelancing",
      description:
        "High-traffic editorial guide covering AI tools, remote freelancing strategies, and digital income generation in Urdu & English with curated guide categories.",
      url: "https://bytenovapk.blogspot.com",
      isPlaceholder: false,
      image: "/src/assets/images/bytenova_real.jpg",
      tags: ["Blog Management", "Editorial SEO", "AI Tools", "Content Strategy"],
      themeColors: ["#58C6D5", "#0F172A", "#FFFFFF"],
      themeName: "Turquoise Cyan, Editorial Navy & Crisp White"
    },
    {
      id: "zafir-grace-co",
      title: "Zafir Grace Co. Etsy Shop",
      year: "2025 - 2026",
      category: "E-Commerce · Digital Craft Store",
      description:
        "Digital product storefront offering precision digital crochet patterns, printable aesthetic craft guides, and minimalist creator design templates.",
      url: "#",
      isPlaceholder: true,
      image: "/src/assets/images/project_zafir_etsy_1793090800125.jpg",
      tags: ["Digital Products", "Etsy Storefront", "Catalog Management"],
      themeColors: ["#D97706", "#FAF5EF", "#78350F"],
      themeName: "Warm Amber, Natural Oatmeal & Artisanal Craft"
    }
  ] as ProjectItem[],

  experience: [
    {
      id: "exp-freelance",
      role: "Freelance Data Entry Specialist and Web Developer",
      company: "Independent Remote Practice",
      period: "01/2024 - Present",
      description:
        "Partnering with international businesses to handle high-accuracy spreadsheet audits, structured catalog entries, and responsive web development aligned with US working hours.",
      highlights: [
        "Delivered error-free spreadsheet databases in MS Excel and Google Sheets",
        "Built and launched production websites for real estate and healthcare clients",
        "Conducted thorough data verification and cleanup for client catalogs"
      ]
    },
    {
      id: "exp-nasir",
      role: "Operations Manager (Assistant)",
      company: "Nasir Real Estate",
      period: "06/2025 - Present",
      description:
        "Assisting executive operations, maintaining property catalog records, client communications, and managing the company's digital web presence.",
      highlights: [
        "Maintained structured property listings and client transaction spreadsheets",
        "Managed and updated live listings on nasirrealestate.netlify.app",
        "Streamlined office administrative routines and documentation tracking"
      ]
    },
    {
      id: "exp-shahtaj",
      role: "Engine Room Operator",
      company: "Shahtaj Textile",
      period: "01/2024 - 06/2025",
      description:
        "Managed operational machinery logbooks, recorded real-time equipment telemetry, and ensured strict industrial safety and procedural compliance.",
      highlights: [
        "Maintained zero-deviation daily operational shift logs and mechanical records",
        "Monitored engine instrumentation and environmental indicators continuously",
        "Reinforced rigorous workplace discipline and attention to detail"
      ]
    }
  ] as ExperienceItem[],

  whyWorkWithMe: [
    {
      id: "accuracy",
      title: "Accuracy first",
      shortDesc:
        "Zero tolerance for typos, transposition errors, or broken formulas. Every record and line of code is verified before handoff."
    },
    {
      id: "confidential",
      title: "Confidential and reliable",
      shortDesc:
        "Strict non-disclosure integrity. Your business data, client records, and proprietary assets remain 100% secure and confidential."
    },
    {
      id: "timezone",
      title: "Works in your time zone",
      shortDesc:
        "Fully available during US business hours (EST / PST). Enjoy real-time Slack/email communication and rapid same-day turnaround."
    }
  ]
};
