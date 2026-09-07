import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Aktays — Design Studio for Web, Product & AI",
    description:
      "Aktays is an independent design studio building websites, mobile products and AI workflows for ambitious teams.",
  },
  nav: {
    work: "Work",
    services: "Services",
    approach: "Approach",
    studio: "Studio",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Independent design studio",
    headline: ["Design that", "earns", "attention."],
    lead:
      "Aktays is a small studio making websites, mobile products and AI workflows for teams who refuse to look like everyone else.",
    scroll: "Scroll",
    availability: "Booking projects for Q2",
    location: "Istanbul — Worldwide",
  },
  marquee: [
    "Web Design",
    "Mobile Apps",
    "AI Workflows",
    "Brand Systems",
    "Motion",
    "Design Engineering",
  ],
  services: {
    eyebrow: "Services",
    title: "Four things, done properly.",
    lead:
      "We keep the offer narrow on purpose. Fewer disciplines, deeper craft — and one team from first sketch to production.",
    items: [
      {
        id: "web",
        title: "Web Design & Build",
        description:
          "Marketing sites and platforms designed to be read, remembered and shipped. We design in the browser, so what you approve is what goes live.",
        deliverables: [
          "Art direction",
          "Responsive design",
          "Next.js build",
          "CMS integration",
          "Performance & SEO",
        ],
      },
      {
        id: "mobile",
        title: "Mobile App Design",
        description:
          "iOS and Android products designed around the two or three moments that actually matter, then pressure-tested with real users before a line of code is written.",
        deliverables: [
          "Product strategy",
          "UX flows",
          "UI design",
          "Prototyping",
          "Handoff & QA",
        ],
      },
      {
        id: "ai",
        title: "AI Workflows",
        description:
          "We map where your team loses hours, then build the automation that gives them back — assistants, pipelines and internal tools that fit the way you already work.",
        deliverables: [
          "Workflow audit",
          "Agent & assistant design",
          "Automation build",
          "Evaluation & guardrails",
          "Team enablement",
        ],
      },
      {
        id: "brand",
        title: "Brand & Design Systems",
        description:
          "Identity, type and a component library that stays coherent long after we hand it over — documented well enough that your team can build on it alone.",
        deliverables: [
          "Visual identity",
          "Typography",
          "Component library",
          "Design tokens",
          "Guidelines",
        ],
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "Recent projects.",
    lead: "A short list. We would rather show six things we stand behind than sixty we don't.",
    caseLabel: "View case",
    allLabel: "All projects",
    projects: [
      {
        slug: "meridian",
        client: "Meridian",
        title: "A trading platform that finally reads like a product",
        year: "2025",
        category: "Platform",
        services: ["Web Design", "Design System"],
        summary:
          "We rebuilt a dense financial dashboard around a single question: what does the trader need in the next four seconds? Everything else moved one layer down.",
        metrics: [
          { value: "+64%", label: "Task completion" },
          { value: "12wk", label: "Design to launch" },
        ],
        palette: ["#1B2A4A", "#7C9AC4"],
      },
      {
        slug: "nomad-atlas",
        client: "Nomad Atlas",
        title: "Travel planning without the twenty open tabs",
        year: "2025",
        category: "Mobile",
        services: ["Mobile App Design", "Brand"],
        summary:
          "An itinerary app built for the messy middle of planning — half-formed ideas, shared with friends, resolved into a trip that actually happens.",
        metrics: [
          { value: "4.8★", label: "App Store rating" },
          { value: "3.2×", label: "Weekly retention" },
        ],
        palette: ["#2F4A34", "#C8D6A8"],
      },
      {
        slug: "verse",
        client: "Verse",
        title: "An editorial team that ships four times faster",
        year: "2024",
        category: "AI Workflow",
        services: ["AI Workflows", "Internal Tools"],
        summary:
          "We replaced a fourteen-step publishing checklist with three assisted steps, keeping every editorial judgement call in human hands.",
        metrics: [
          { value: "−71%", label: "Hours per article" },
          { value: "0", label: "Editors replaced" },
        ],
        palette: ["#3A2A4A", "#C0A8D6"],
      },
      {
        slug: "kavun",
        client: "Kavun",
        title: "A food brand with an appetite for white space",
        year: "2024",
        category: "Brand & Web",
        services: ["Brand", "Web Design"],
        summary:
          "Identity and storefront for a producer who wanted their packaging to be the loudest thing in the room — and the website to be the quietest.",
        metrics: [
          { value: "+118%", label: "Conversion rate" },
          { value: "2.1s", label: "Largest paint" },
        ],
        palette: ["#5A3418", "#E8C48E"],
      },
      {
        slug: "halo-health",
        client: "Halo Health",
        title: "Clinical software that doesn't feel clinical",
        year: "2024",
        category: "Mobile",
        services: ["Mobile App Design", "Design System"],
        summary:
          "A care companion for people managing chronic conditions, designed with the accessibility constraints treated as the brief rather than the afterthought.",
        metrics: [
          { value: "AAA", label: "Contrast compliance" },
          { value: "+41%", label: "Daily active use" },
        ],
        palette: ["#1F3F42", "#9FCBC7"],
      },
      {
        slug: "foundry",
        client: "Foundry",
        title: "Turning a sales team's inbox into a system",
        year: "2023",
        category: "AI Workflow",
        services: ["AI Workflows", "Web Design"],
        summary:
          "Research, drafting and follow-up compressed into one assisted pipeline, with every outbound message still leaving under a human name.",
        metrics: [
          { value: "9hrs", label: "Saved per rep, weekly" },
          { value: "+27%", label: "Reply rate" },
        ],
        palette: ["#4A2A22", "#D6A894"],
      },
    ],
  },
  approach: {
    eyebrow: "Approach",
    title: "How the work happens.",
    lead:
      "No discovery theatre, no forty-page decks. Four phases, weekly demos, and a working thing in front of you early.",
    steps: [
      {
        title: "Listen",
        description:
          "A week of questions. We talk to your team, your customers and your data before we open a design file — because the brief you arrive with is rarely the one you need.",
      },
      {
        title: "Frame",
        description:
          "We narrow the problem to something a small team can actually solve, and write it down in a page. If we can't explain it in a page, we don't understand it yet.",
      },
      {
        title: "Make",
        description:
          "Design and build run together in two-week loops. You see real screens in a real browser every Friday, not static mockups at the end of a month.",
      },
      {
        title: "Land",
        description:
          "We ship it, measure it, and stay long enough to fix what the first thousand users find. Then we hand over documentation your team can build on.",
      },
    ],
  },
  studio: {
    eyebrow: "Studio",
    title: "Small on purpose.",
    paragraphs: [
      "Aktays is an independent design studio working with founders, product teams and marketing leads who care about the details that most people skip.",
      "We stay deliberately small. The people you meet in the first call are the people doing the work — no account layer, no handover to a junior team once the contract is signed.",
      "We take on a handful of projects a year so each one gets the attention it was sold. If we're not the right studio for what you're building, we'll say so and point you somewhere better.",
    ],
    stats: [
      { value: "6", label: "Projects a year" },
      { value: "48h", label: "Average reply time" },
      { value: "9", label: "Countries shipped to" },
      { value: "100%", label: "Work done in-house" },
    ],
  },
  testimonials: {
    eyebrow: "Words",
    title: "What clients say.",
    items: [
      {
        quote:
          "They pushed back on half our brief in the first week. It was uncomfortable, and it was completely correct.",
        name: "Elif Demir",
        role: "Head of Product, Meridian",
      },
      {
        quote:
          "The first working prototype landed in nine days. Nine. We'd budgeted a month just for the kickoff phase.",
        name: "Jonas Weber",
        role: "Founder, Nomad Atlas",
      },
      {
        quote:
          "Our editors were braced for an AI project that would quietly replace them. Six months on, they're the ones asking for more of it.",
        name: "Priya Raman",
        role: "Editorial Director, Verse",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something worth the scroll.",
    lead:
      "Tell us what you're making, roughly when you need it, and the budget range you're working within. We reply to everything within two days.",
    email: "hello@aktays.com",
    cta: "Start a project",
    phoneLabel: "Phone",
    phone: "+90 000 000 00 00",
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Dribbble", href: "https://dribbble.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
  footer: {
    note: "Independent design studio. Istanbul and wherever the work is.",
    rights: "All rights reserved.",
    backToTop: "Back to top",
    builtBy: "Designed & built in-house",
  },
};
