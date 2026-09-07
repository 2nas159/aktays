export type Project = {
  slug: string;
  client: string;
  title: string;
  year: string;
  category: string;
  services: string[];
  summary: string;
  metrics: { value: string; label: string }[];
  /** Two hex colours driving the generated case-study visual. */
  palette: [string, string];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type Content = {
  meta: { title: string; description: string };
  nav: { work: string; services: string; approach: string; studio: string; contact: string };
  hero: {
    eyebrow: string;
    headline: string[];
    lead: string;
    scroll: string;
    availability: string;
    location: string;
  };
  marquee: string[];
  services: { eyebrow: string; title: string; lead: string; items: Service[] };
  work: {
    eyebrow: string;
    title: string;
    lead: string;
    projects: Project[];
    caseLabel: string;
    allLabel: string;
  };
  approach: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { title: string; description: string }[];
  };
  studio: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; name: string; role: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    email: string;
    cta: string;
    phoneLabel: string;
    phone: string;
    socials: { label: string; href: string }[];
  };
  footer: { note: string; rights: string; backToTop: string; builtBy: string };
};
