import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  ChartNoAxesCombined,
  CheckCircle2,
  Code2,
  Gauge,
  Globe2,
  LineChart,
  MessageSquareText,
  Rocket,
  Search,
  Settings2,
  Share2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

export const brand = {
  name: "Explore Digi Tona",
  founder: "Tona Shahi Thakuri",
  title: "AI Marketing Consultant & Digital Growth Strategist",
  email: "exploredigitona@gmail.com",
  phone: "+977 9841990343",
  location: "Banasthali, Virkuti Tole, Kathmandu, Nepal",
  url: "https://exploredigitona.com",
  description:
    "Premium AI growth consulting, automation, SEO, website strategy, data analytics, and digital marketing systems for ambitious businesses.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    icon: Workflow,
    short:
      "Automated workflows that reduce repetitive marketing, sales, and operations work.",
    overview:
      "AI Automation helps your team replace manual, repetitive tasks with structured workflows that save time, improve consistency, and make growth activity easier to manage.",
    benefits: [
      "Reduce manual follow-up and reporting tasks.",
      "Create faster content, lead handling, and internal workflows.",
      "Improve consistency across marketing and operations.",
    ],
    deliverables: [
      "Automation opportunity audit",
      "Workflow map",
      "Tool recommendations",
      "Implementation checklist",
      "Team handover guide",
    ],
    process: ["Workflow audit", "Priority scoring", "System design", "Testing", "Optimization"],
    faqs: [
      {
        q: "Which tasks can be automated?",
        a: "Lead intake, content planning, reporting, email follow-up, CRM updates, and internal reminders are common starting points.",
      },
      {
        q: "Will automation replace my team?",
        a: "No. The goal is to free your team from low-value repetition so they can focus on strategy, service, and relationships.",
      },
    ],
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    icon: MessageSquareText,
    short:
      "Website and social chat experiences that answer questions, qualify leads, and support customers.",
    overview:
      "AI Chatbots give visitors a helpful first response while collecting useful lead context for your team. The focus is clear conversation design, helpful answers, and smooth handoff.",
    benefits: [
      "Answer common questions around the clock.",
      "Qualify leads before a sales conversation.",
      "Improve website engagement and response speed.",
    ],
    deliverables: [
      "Conversation strategy",
      "FAQ knowledge base",
      "Lead qualification flow",
      "Handoff rules",
      "Launch QA checklist",
    ],
    process: ["Use-case planning", "Conversation design", "Knowledge setup", "Testing", "Launch review"],
    faqs: [
      {
        q: "Can the chatbot match our brand voice?",
        a: "Yes. The chatbot flow and response guidance can be shaped around your tone, services, and customer expectations.",
      },
      {
        q: "Can it collect consultation requests?",
        a: "Yes. Lead capture, service selection, and follow-up routing can be included in the chatbot plan.",
      },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    icon: Code2,
    short:
      "Fast, modern, SEO-ready websites built around clarity, trust, and conversion.",
    overview:
      "Website Development focuses on creating a professional digital presence that communicates your offer clearly, loads quickly, works beautifully on mobile, and turns visitors into qualified inquiries.",
    benefits: [
      "Create a premium first impression.",
      "Improve mobile experience and conversion paths.",
      "Launch with a strong SEO and performance foundation.",
    ],
    deliverables: [
      "Website structure",
      "Responsive page design",
      "SEO-ready content sections",
      "Conversion-focused CTAs",
      "Launch support",
    ],
    process: ["Discovery", "Content structure", "Design", "Development", "Launch QA"],
    faqs: [
      {
        q: "Can you improve an existing website?",
        a: "Yes. Existing sites can be redesigned, restructured, or improved through focused UX, SEO, and performance work.",
      },
      {
        q: "Will the website be mobile responsive?",
        a: "Yes. Mobile-first layout and responsive testing are part of the website development process.",
      },
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    icon: Search,
    short:
      "Technical SEO, content planning, and keyword strategy to increase organic visibility.",
    overview:
      "SEO helps your business become easier to find through search-ready website structure, technical clarity, useful content, and local visibility improvements.",
    benefits: [
      "Improve discoverability for high-intent search terms.",
      "Fix technical issues that limit search performance.",
      "Build a content system that compounds over time.",
    ],
    deliverables: ["SEO audit", "Keyword map", "Technical recommendations", "Content plan", "Monthly tracking plan"],
    process: ["Audit", "Keyword research", "On-page improvements", "Content roadmap", "Performance tracking"],
    faqs: [
      {
        q: "When will SEO show results?",
        a: "Early technical improvements can help quickly, while stronger organic growth usually builds over several months.",
      },
      {
        q: "Do you support local SEO?",
        a: "Yes. Local visibility, Google Business Profile optimization, and location landing pages can be included.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Share2,
    short:
      "Strategy, campaigns, content, and channel planning for stronger digital presence.",
    overview:
      "Digital Marketing brings your channels into one clear growth plan across SEO, social media, content, email, paid campaigns, and conversion tracking.",
    benefits: [
      "Focus effort on the channels most likely to convert.",
      "Clarify campaign messages and customer journeys.",
      "Create a measurable growth plan for the next 90 days.",
    ],
    deliverables: ["Growth audit", "Channel plan", "Messaging framework", "Campaign calendar", "KPI dashboard"],
    process: ["Research", "Positioning", "Channel planning", "Campaign execution", "Optimization"],
    faqs: [
      {
        q: "Which channels should my business use?",
        a: "The channel plan is based on your audience, offer, budget, timeline, and operational capacity.",
      },
      {
        q: "Can you support ongoing campaigns?",
        a: "Yes. Strategy, content planning, performance reviews, and optimization support can be structured monthly.",
      },
    ],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    icon: Settings2,
    short:
      "Operational systems that connect marketing, leads, customer follow-up, and reporting.",
    overview:
      "Business Automation connects the back-office pieces of growth so leads, tasks, reporting, and customer follow-up do not depend on memory or scattered tools.",
    benefits: [
      "Improve response speed and operational consistency.",
      "Connect marketing activity to sales follow-up.",
      "Reduce lost leads and manual admin work.",
    ],
    deliverables: ["Process audit", "Automation blueprint", "CRM and tool recommendations", "Reporting workflow", "Team SOPs"],
    process: ["Process mapping", "System design", "Automation setup plan", "Testing", "Team enablement"],
    faqs: [
      {
        q: "Do I need a CRM?",
        a: "Not always, but many growing businesses benefit from a simple CRM or structured lead tracker before automation expands.",
      },
      {
        q: "Can automation work with my current tools?",
        a: "Usually yes. The first step is reviewing your current tools and identifying practical connection points.",
      },
    ],
  },
  {
    slug: "ai-strategy-consulting",
    title: "AI Strategy Consulting",
    icon: BrainCircuit,
    short:
      "Executive-level AI roadmap planning for marketing, operations, and customer experience.",
    overview:
      "AI Strategy Consulting helps business owners decide where AI should be used, where it should not be used, and how to adopt it responsibly without overwhelming the team.",
    benefits: [
      "Identify high-impact AI opportunities across your business.",
      "Prioritize practical use cases before buying tools.",
      "Build a responsible adoption plan for your team.",
    ],
    deliverables: ["AI readiness audit", "Use-case roadmap", "Risk and governance notes", "Tool shortlist", "90-day adoption plan"],
    process: ["Discovery", "Readiness assessment", "Use-case mapping", "Roadmap design", "Adoption review"],
    faqs: [
      {
        q: "Do I need advanced technical knowledge?",
        a: "No. The consulting process is designed around practical business use cases and clear implementation steps.",
      },
      {
        q: "Can AI help a small business?",
        a: "Yes. Small teams often benefit quickly from content systems, reporting automation, and smarter campaign planning.",
      },
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    icon: BarChart3,
    short:
      "Dashboards, KPI tracking, and insight reporting that turn data into decisions.",
    overview:
      "Data Analytics gives your business a clearer view of what is working. The focus is simple measurement, useful dashboards, and decision-ready insights.",
    benefits: [
      "Know which campaigns and channels are actually working.",
      "Track meaningful KPIs instead of vanity metrics.",
      "Make faster decisions with clear reporting rhythms.",
    ],
    deliverables: ["KPI framework", "Analytics audit", "Dashboard plan", "Monthly reporting template", "Insight review system"],
    process: ["Measurement audit", "KPI design", "Dashboard setup", "Insight review", "Optimization"],
    faqs: [
      {
        q: "Can you work with my current tools?",
        a: "Yes. The reporting plan can adapt to Google Analytics, Search Console, ads platforms, CRM exports, and spreadsheets.",
      },
      {
        q: "What metrics should I track?",
        a: "The best metrics connect marketing activity to visibility, engagement, lead quality, conversion, and revenue impact.",
      },
    ],
  },
];

export const stats = [
  { value: "8", label: "Core growth services" },
  { value: "90-day", label: "Roadmap planning" },
  { value: "3x", label: "Faster decision cycles" },
  { value: "24/7", label: "Digital lead capture" },
];

export const whyChoose = [
  {
    icon: Bot,
    title: "AI-first execution",
    text: "Modern marketing and automation systems that use AI where it improves speed, insight, and consistency.",
  },
  {
    icon: TrendingUp,
    title: "Growth-focused strategy",
    text: "Every recommendation connects to visibility, lead quality, conversion, operational clarity, or customer trust.",
  },
  {
    icon: LineChart,
    title: "Data-led decisions",
    text: "Clear measurement frameworks help you see what is working and where to optimize next.",
  },
  {
    icon: Sparkles,
    title: "Premium personal guidance",
    text: "A consultant-led approach with direct communication, clear priorities, and practical next steps.",
  },
];

export const aiSolutions = [
  {
    icon: Zap,
    title: "Lead response automation",
    text: "Route inquiries, qualify leads, and trigger follow-up workflows without relying on manual reminders.",
  },
  {
    icon: MessageSquareText,
    title: "AI customer conversations",
    text: "Use chatbot flows and knowledge bases to answer common questions and capture consultation interest.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Insight dashboards",
    text: "Turn marketing data into simple dashboards that show visibility, engagement, conversion, and revenue signals.",
  },
];

export const values = [
  { icon: ShieldCheck, title: "Trust", text: "Clear communication, honest recommendations, and ethical AI adoption." },
  { icon: Gauge, title: "Performance", text: "Fast websites, focused campaigns, and measurable improvement." },
  { icon: CheckCircle2, title: "Clarity", text: "Simple systems, practical roadmaps, and decisions based on evidence." },
  { icon: Rocket, title: "Momentum", text: "Consistent action that compounds into stronger digital growth." },
];

export const projects = [
  {
    slug: "ai-content-growth-system",
    title: "AI Content Growth System",
    category: "AI Automation",
    type: "Marketing Campaign",
    summary: "A service brand needed a repeatable content engine without adding more admin work.",
    result: "Built a repeatable content engine for faster planning and consistent publishing.",
    before: "Content ideas were scattered, publishing was inconsistent, and reporting was manual.",
    after: "A structured content calendar, AI-assisted briefs, and monthly insight reviews created a reliable growth rhythm.",
    metrics: ["40% faster planning", "3 content pillars", "Monthly reporting rhythm"],
  },
  {
    slug: "local-seo-visibility-sprint",
    title: "Local SEO Visibility Sprint",
    category: "SEO",
    type: "SEO Project",
    summary: "A local service business needed clearer pages and stronger search signals.",
    result: "Improved service-page structure, local search signals, and conversion-focused copy.",
    before: "The website had thin service pages, unclear local signals, and weak calls to action.",
    after: "Service pages were reorganized around buyer intent, local relevance, and clearer consultation paths.",
    metrics: ["12 priority keywords", "Improved page structure", "Local SEO checklist"],
  },
  {
    slug: "consulting-website-conversion-audit",
    title: "Consulting Website Conversion Audit",
    category: "Website Development",
    type: "Website Project",
    summary: "A consulting website needed stronger trust signals and a clearer path to inquiry.",
    result: "Mapped stronger calls-to-action, trust elements, and offer clarity across key pages.",
    before: "Visitors could read about services but did not have a clear reason to take the next step.",
    after: "The revised structure clarified offers, emphasized proof, and made booking a consultation easier.",
    metrics: ["6 page audit", "CTA map", "Conversion checklist"],
  },
  {
    slug: "social-authority-campaign",
    title: "Social Authority Campaign",
    category: "Digital Marketing",
    type: "Case Study",
    summary: "A founder-led brand needed a consistent social presence connected to business goals.",
    result: "Created content pillars and reporting rhythm for stronger brand recognition.",
    before: "Posting was irregular and content did not connect clearly to service demand.",
    after: "The campaign created a focused publishing system built around education, trust, and consultation intent.",
    metrics: ["4 content themes", "Weekly publishing plan", "Engagement review"],
  },
  {
    slug: "analytics-command-center",
    title: "Analytics Command Center",
    category: "Data Analytics",
    type: "Analytics Project",
    summary: "A growing team needed one simple view of campaign performance and lead quality.",
    result: "Designed a KPI framework and reporting dashboard for faster decision-making.",
    before: "Data lived in separate platforms and decisions were based on incomplete snapshots.",
    after: "A simple reporting model connected traffic, leads, channels, and conversion quality.",
    metrics: ["10 KPI dashboard", "Lead quality view", "Monthly insight agenda"],
  },
];

export const testimonials = [
  {
    quote:
      "Tona helped us understand what digital growth actually means for our business and gave us a clear path forward.",
    name: "Growth Client",
    role: "Founder",
  },
  {
    quote:
      "The strategy was practical, modern, and easy for our small team to execute without feeling overwhelmed.",
    name: "Marketing Partner",
    role: "Operations Lead",
  },
  {
    quote:
      "Explore Digi Tona brought structure to our SEO, content, and social media planning.",
    name: "Local Business",
    role: "Business Owner",
  },
];

export const faqs = [
  {
    q: "What type of businesses do you work with?",
    a: "Explore Digi Tona is built for service businesses, founders, local companies, and growing teams that want clearer digital strategy, better systems, and smarter AI adoption.",
  },
  {
    q: "Can I start with a small project?",
    a: "Yes. A focused audit, strategy sprint, or consultation is often the best way to identify priorities before investing in larger implementation.",
  },
  {
    q: "Do you provide implementation or only strategy?",
    a: "Both can be supported. Some engagements focus on roadmap and consulting, while others include website, automation, content, SEO, or reporting implementation guidance.",
  },
  {
    q: "How soon can we begin?",
    a: "After the consultation request, the next step is clarifying fit, scope, timeline, and the most useful starting point for your business.",
  },
];

export const blogPosts = [
  {
    slug: "ai-marketing-roadmap-small-business",
    title: "How Small Businesses Can Build an AI Marketing Roadmap",
    category: "AI Marketing",
    excerpt:
      "A practical way to identify AI opportunities, prioritize workflows, and improve marketing consistency.",
    date: "2026-06-18",
    readTime: "5 min read",
    author: brand.founder,
    content: [
      "An AI marketing roadmap should begin with business priorities, not tools. The most useful question is where your team loses time, clarity, or consistency across the customer journey.",
      "Start by mapping repetitive work: content planning, lead follow-up, reporting, frequently asked questions, and campaign research. These areas often produce early wins because they are repeated every week.",
      "Next, score each opportunity by value, effort, risk, and team readiness. A simple 90-day roadmap keeps adoption practical and prevents the business from chasing every new tool.",
      "The strongest AI systems still need human judgment. Use AI to speed up research, structure ideas, draft first versions, and surface insights, while keeping strategy, ethics, and final decisions in human hands.",
    ],
  },
  {
    slug: "seo-foundations-that-still-matter",
    title: "SEO Foundations That Still Matter in an AI Search World",
    category: "SEO",
    excerpt:
      "Technical clarity, topical authority, and useful content remain essential for sustainable visibility.",
    date: "2026-06-10",
    readTime: "6 min read",
    author: brand.founder,
    content: [
      "Search is changing, but the foundation of visibility remains surprisingly steady: clear pages, useful answers, trusted signals, and a technically healthy website.",
      "AI search experiences still need reliable source material. Businesses that explain their services clearly, answer specific customer questions, and organize content around real intent are better positioned to be understood.",
      "Technical SEO matters because search systems need to access, interpret, and trust your website. Page speed, internal links, metadata, schema, and mobile experience all support that process.",
      "The best SEO strategy combines helpful content with business relevance. Visibility only matters when it attracts the right audience and supports conversion.",
    ],
  },
  {
    slug: "content-pillars-for-service-brands",
    title: "Content Pillars for Service-Based Brands",
    category: "Content Marketing",
    excerpt:
      "Use content pillars to create a focused publishing system that builds trust and supports conversion.",
    date: "2026-05-28",
    readTime: "4 min read",
    author: brand.founder,
    content: [
      "Service brands often struggle with content because every post feels like a fresh decision. Content pillars solve that by creating repeatable themes tied to customer needs.",
      "A strong content pillar might educate, handle objections, show proof, explain process, or clarify the cost of inaction. Together, these pillars support the full decision journey.",
      "Once pillars are defined, content planning becomes faster. One idea can become a short post, an article section, an email, and a consultation talking point.",
      "The goal is not to post more for the sake of volume. The goal is to become consistently useful and memorable to the people most likely to need your service.",
    ],
  },
  {
    slug: "measure-digital-marketing-performance",
    title: "What to Measure in Digital Marketing Performance",
    category: "Business Growth",
    excerpt:
      "Move beyond vanity metrics with a simple framework for visibility, engagement, leads, and revenue impact.",
    date: "2026-05-12",
    readTime: "5 min read",
    author: brand.founder,
    content: [
      "Marketing measurement should help you make better decisions, not just create busier reports. The first step is separating vanity metrics from decision metrics.",
      "A practical dashboard can group metrics into four levels: visibility, engagement, lead generation, and business impact. This keeps the team focused on movement through the funnel.",
      "For example, impressions and rankings show visibility. Clicks, time on page, and replies show engagement. Form submissions and calls show lead generation. Qualified opportunities and revenue show business impact.",
      "The right reporting rhythm matters. Monthly reviews are usually enough for strategic decisions, while active campaigns may need weekly checks.",
    ],
  },
  {
    slug: "website-conversion-signals",
    title: "Website Conversion Signals Every Consulting Brand Needs",
    category: "Digital Marketing",
    excerpt:
      "Trust, clarity, proof, and low-friction calls to action make a website easier to believe and easier to use.",
    date: "2026-04-24",
    readTime: "5 min read",
    author: brand.founder,
    content: [
      "A consulting website has one primary job: help the right visitor understand whether you can solve their problem and what to do next.",
      "Strong conversion signals include a clear headline, specific services, founder credibility, proof of process, testimonials, FAQs, and visible consultation paths.",
      "Visitors should not need to hunt for your offer, location, contact details, or next step. Every important page should make those signals easy to find.",
      "Good design supports trust, but clarity creates action. The best websites combine both.",
    ],
  },
];

export const categories = [
  "AI Marketing",
  "SEO",
  "Digital Marketing",
  "Social Media Marketing",
  "Content Marketing",
  "Business Growth",
];

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/exploredigitona" },
  { label: "LinkedIn", href: "https://linkedin.com/company/explore-digi-tona" },
  { label: "Instagram", href: "https://instagram.com/exploredigitona" },
];

export const trustSignals = [
  { icon: Building2, label: "Built for service businesses" },
  { icon: CalendarClock, label: "90-day growth roadmaps" },
  { icon: BriefcaseBusiness, label: "Founder-led consulting" },
  { icon: Globe2, label: "Kathmandu based, globally available" },
];
