export type LegalSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
  /** Renders the registration details table from `src/lib/company.ts`. */
  showCompanyDetails?: boolean;
};

export type LegalSlug = "privacy" | "terms" | "cookies" | "accessibility";

export type LegalDoc = {
  slug: LegalSlug;
  title: string;
  summary: string;
  sections: LegalSection[];
};

export type LegalContent = {
  index: {
    meta: { title: string; description: string };
    eyebrow: string;
    title: string;
    lead: string;
  };
  updatedLabel: string;
  contentsLabel: string;
  companyLabels: {
    legalName: string;
    address: string;
    registration: string;
    taxOffice: string;
    taxNumber: string;
    email: string;
  };
  docs: LegalDoc[];
};
