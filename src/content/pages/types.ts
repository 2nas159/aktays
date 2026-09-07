/** Long-form case-study body. Section headings live in `work.labels`
 *  so they are translated once rather than once per project. */
export type CaseStudy = {
  intro: string;
  challenge: string[];
  approach: { title: string; body: string }[];
  outcome: string[];
  credits: { role: string; value: string }[];
};

export type Engagement = {
  name: string;
  description: string;
  bestFor: string;
  timeline: string;
};

export type Faq = { question: string; answer: string };

export type Field = { label: string; placeholder?: string };

export type PagesContent = {
  common: {
    backToWork: string;
    nextProject: string;
    viewAll: string;
    getInTouch: string;
    startProject: string;
  };
  work: {
    meta: { title: string; description: string };
    eyebrow: string;
    title: string;
    lead: string;
    countLabel: string;
    labels: {
      client: string;
      year: string;
      category: string;
      services: string;
      role: string;
      duration: string;
      overview: string;
      challenge: string;
      approach: string;
      outcome: string;
      credits: string;
      results: string;
    };
    studies: Record<string, CaseStudy>;
  };
  services: {
    meta: { title: string; description: string };
    eyebrow: string;
    title: string;
    lead: string;
    deliverablesLabel: string;
    engagements: {
      title: string;
      lead: string;
      bestForLabel: string;
      timelineLabel: string;
      items: Engagement[];
    };
    faq: { title: string; items: Faq[] };
    cta: { title: string; lead: string; action: string };
  };
  studio: {
    meta: { title: string; description: string };
    eyebrow: string;
    title: string;
    lead: string;
    story: string[];
    principles: { title: string; items: { title: string; body: string }[] };
    disciplines: { title: string; lead: string; items: string[] };
    rhythm: { title: string; lead: string; items: { title: string; body: string }[] };
    cta: { title: string; lead: string; action: string };
  };
  contact: {
    meta: { title: string; description: string };
    eyebrow: string;
    title: string;
    lead: string;
    directTitle: string;
    responseNote: string;
    form: {
      legend: string;
      name: Field;
      email: Field;
      company: Field;
      projectType: { label: string; options: string[] };
      budget: { label: string; options: string[] };
      timeline: { label: string; options: string[] };
      message: Field;
      selectPlaceholder: string;
      optional: string;
      consentBefore: string;
      consentLink: string;
      consentAfter: string;
      submit: string;
      sending: string;
      successTitle: string;
      successBody: string;
      errorTitle: string;
      errorBody: string;
      notConfiguredTitle: string;
      notConfiguredBody: string;
      requiredError: string;
      emailError: string;
      messageError: string;
    };
  };
};
