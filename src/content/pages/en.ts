import type { PagesContent } from "./types";

export const en: PagesContent = {
  common: {
    backToWork: "All work",
    nextProject: "Next project",
    viewAll: "View all",
    getInTouch: "Get in touch",
    startProject: "Start a project",
  },

  work: {
    meta: {
      title: "Work — Aktays",
      description:
        "Selected projects in web design, mobile product design and AI workflows, with the thinking behind each one.",
    },
    eyebrow: "Selected work",
    title: "Six projects we stand behind.",
    lead:
      "We take on a handful of projects a year. Each one below shipped, and each one has a number attached to it — the ones that moved, and the ones that didn't.",
    countLabel: "projects",
    labels: {
      client: "Client",
      year: "Year",
      category: "Discipline",
      services: "Services",
      role: "Our role",
      duration: "Duration",
      overview: "Overview",
      challenge: "The problem",
      approach: "What we did",
      outcome: "Where it landed",
      credits: "Credits",
      results: "Results",
    },
    studies: {
      meridian: {
        intro:
          "Meridian's platform had grown by accretion. Every new instrument added a panel, every panel added a tab, and the interface that once fit a screen had become something traders navigated from memory rather than from sight.",
        challenge: [
          "The brief we were handed asked for a visual refresh. Three days of watching people actually trade told us the visual layer was not the problem — the information hierarchy was. Traders were holding state in their heads because the screen would not hold it for them.",
          "We also found that the busiest users had quietly built their own workarounds: spreadsheets open on a second monitor, sticky notes on bezels, a shared document of keyboard shortcuts nobody had documented officially.",
        ],
        approach: [
          {
            title: "We reframed the brief",
            body:
              "We rewrote the problem as a single question — what does this trader need in the next four seconds? — and pushed everything that failed that test down one layer. It made the redesign a subtraction exercise rather than an addition one.",
          },
          {
            title: "We designed the dense case first",
            body:
              "Rather than designing an elegant empty state and hoping it survived reality, we started with the busiest account in the system and worked backwards. If it held at maximum density, everything lighter came free.",
          },
          {
            title: "We built the system, not the screens",
            body:
              "Forty-one components, tokenised and documented, so the in-house team could build the next twenty screens without us. That handover was written into the contract from week one.",
          },
        ],
        outcome: [
          "Task completion rose 64% in the first quarter after launch, measured against the same cohort on the old interface. Time-to-first-action dropped by just under half.",
          "The number we watch more closely: support tickets tagged \"can't find\" fell by 81%. The workarounds went away because they stopped being necessary.",
        ],
        credits: [
          { role: "Design direction", value: "Aktays" },
          { role: "Design system", value: "Aktays" },
          { role: "Front-end build", value: "Aktays + Meridian platform team" },
          { role: "Research", value: "Aktays" },
        ],
      },

      "nomad-atlas": {
        intro:
          "Trip planning apps tend to be built for the end of the process — the confirmed itinerary, the neat timeline. Nomad Atlas wanted the opposite: something that held the mess in the middle, when a trip is still six half-formed ideas in a group chat.",
        challenge: [
          "Every competitor we looked at demanded certainty up front. Pick your dates. Pick your city. Add your first booking. Most trips don't start that way — they start as a rumour and firm up slowly, usually across several people who disagree.",
          "The hard part was not the interface. It was designing for a document with no single author, where two people can be editing contradictory versions of the same afternoon and neither is wrong yet.",
        ],
        approach: [
          {
            title: "We made uncertainty a first-class state",
            body:
              "Ideas can live in the itinerary without dates, without bookings, without agreement. They sit in a holding lane until someone promotes them. Nothing forces a decision before the group is ready to make one.",
          },
          {
            title: "We tested with real groups, not individuals",
            body:
              "Eleven groups of friends planning real trips, observed over three weeks. Solo usability testing would have missed the entire social dynamic — the deferring, the vetoing, the one person who does all the work.",
          },
          {
            title: "We designed the notification restraint",
            body:
              "A shared planning tool can become a group chat that never shuts up. We wrote explicit rules for what is worth interrupting someone for. Most changes are not.",
          },
        ],
        outcome: [
          "4.8 on the App Store across the first eighteen months, with retention 3.2× the category benchmark for travel planning.",
          "The behaviour we designed for showed up in the data: the median trip is created 71 days before departure and edited on 19 separate days. People are using it as the mess, not just the summary.",
        ],
        credits: [
          { role: "Product strategy", value: "Aktays" },
          { role: "UX & UI design", value: "Aktays" },
          { role: "Brand identity", value: "Aktays" },
          { role: "iOS & Android build", value: "Nomad Atlas" },
        ],
      },

      verse: {
        intro:
          "Verse came to us with a request we hear a lot now: make the editorial team faster with AI. They also came with a fear we hear just as often, mostly unspoken — that the project's real purpose was to make the editorial team smaller.",
        challenge: [
          "Publishing an article took fourteen steps across five tools. Roughly nine of those steps were mechanical: reformatting, resizing, tagging, cross-posting, checking links. The remaining five were judgement, and judgement was what the editors were hired for.",
          "We said at the kickoff that we would not automate the five. That constraint shaped everything, and it was the reason the team engaged with the project honestly rather than defensively.",
        ],
        approach: [
          {
            title: "We mapped where the hours actually went",
            body:
              "Two weeks of time-tracking with the editors, not a workshop with their managers. The bottleneck was not writing or editing — it was the twenty minutes of reformatting after every single piece.",
          },
          {
            title: "We automated the mechanical nine",
            body:
              "Three assisted steps replaced fourteen manual ones. Every automated output lands as a draft an editor approves, never as a published artefact. The human stays in the loop by design, not by policy.",
          },
          {
            title: "We built the guardrails before the features",
            body:
              "Evaluation sets, regression checks on tone, and a rollback path. An assistant that is wrong 4% of the time is unusable in publishing unless you can find the 4% before your readers do.",
          },
        ],
        outcome: [
          "Hours per published article fell 71%. Output roughly quadrupled without a change in headcount.",
          "Zero editors were replaced — the number the team cared about most, and the reason they now ask us for more of it rather than less.",
        ],
        credits: [
          { role: "Workflow research", value: "Aktays" },
          { role: "Assistant design", value: "Aktays" },
          { role: "Automation build", value: "Aktays" },
          { role: "Evaluation framework", value: "Aktays + Verse editorial" },
        ],
      },

      kavun: {
        intro:
          "Kavun makes small-batch preserves and sells them in packaging loud enough to be seen from across a market hall. Their first website tried to match that energy and ended up competing with the product it was meant to sell.",
        challenge: [
          "The packaging was already doing the work. It was bold, saturated and unmistakable. The site repeated all of it — same colours, same scale, same volume — and the result was a page where nothing could be looked at because everything was shouting.",
          "There was a second, duller problem: the site took 6.4 seconds to show anything on a mid-range phone, which is the device most of their customers were using.",
        ],
        approach: [
          {
            title: "We made the site the quiet room",
            body:
              "Near-white, generous margins, one typeface, no decoration. The packaging supplies all the colour on the page, because it is the only thing on the page that needs to.",
          },
          {
            title: "We photographed for negative space",
            body:
              "Art direction with the jar small in the frame rather than filling it. Counter-intuitive for food, but it lets the label read as an object instead of a texture.",
          },
          {
            title: "We rebuilt the storefront properly",
            body:
              "Static rendering, responsive images, no third-party scripts above the fold. Largest Contentful Paint went from 6.4 seconds to 2.1 on the same test device.",
          },
        ],
        outcome: [
          "Conversion rate rose 118% against the previous storefront, measured over a matched eight-week window.",
          "Average order value rose too, which we did not predict — the calmer presentation seems to have made the larger gift sets easier to consider.",
        ],
        credits: [
          { role: "Brand identity", value: "Aktays" },
          { role: "Art direction", value: "Aktays" },
          { role: "Web design & build", value: "Aktays" },
          { role: "Photography", value: "Commissioned by Aktays" },
        ],
      },

      "halo-health": {
        intro:
          "Halo Health supports people managing long-term conditions — the sort of software someone opens on a bad day, one-handed, in poor light, while tired. We treated those conditions as the design brief rather than an edge case.",
        challenge: [
          "Most clinical software is designed for the clinician and then handed to the patient. The vocabulary, the density and the assumed attention span all belong to someone who is at work, not someone who is unwell.",
          "Accessibility here was not a compliance exercise. Tremor, fatigue, blurred vision and cognitive load are the everyday operating conditions of the actual users, not hypothetical impairments to accommodate at the end.",
        ],
        approach: [
          {
            title: "We set the constraints first",
            body:
              "AAA contrast, a 48px minimum target, no interaction requiring two hands, and no critical information conveyed by colour alone. Fixed before the first screen was drawn, so nothing had to be retrofitted.",
          },
          {
            title: "We cut the daily interaction to one tap",
            body:
              "The single most frequent action — logging how you feel — became one tap from the lock screen. Everything else in the product exists at a distance from that.",
          },
          {
            title: "We tested on bad days",
            body:
              "Sessions scheduled with participants during flare-ups rather than only when they felt well. It changed the type size, the copy length and the entire onboarding flow.",
          },
        ],
        outcome: [
          "WCAG 2.2 AAA on contrast across the product, verified by external audit rather than self-assessed.",
          "Daily active use rose 41%. Participants described the app as \"not tiring\", which was the actual goal, however unmeasurable it sounds.",
        ],
        credits: [
          { role: "Product design", value: "Aktays" },
          { role: "Accessibility strategy", value: "Aktays" },
          { role: "Design system", value: "Aktays" },
          { role: "Clinical review", value: "Halo Health" },
        ],
      },

      foundry: {
        intro:
          "Foundry's sales team was losing nine hours a week each to research and follow-up admin. The obvious fix — generate outbound messages automatically — was also the fastest way to destroy the reply rate they already had.",
        challenge: [
          "Fully automated outbound is easy to build and easy to detect. Recipients recognise it, and the reply rate collapses. The value was never in producing more messages; it was in producing the same number with the research already done.",
          "The team was also, reasonably, suspicious. They had seen a previous tool promise this and produce confident nonsense about companies it had misidentified.",
        ],
        approach: [
          {
            title: "We automated the research, not the writing",
            body:
              "The pipeline assembles a brief on each prospect — funding, hiring, recent announcements, mutual connections — and stops. A person writes the message. The hours saved come from the reading, not the typing.",
          },
          {
            title: "We made every claim traceable",
            body:
              "Each fact in a brief links to the source it came from. A rep can check anything in one click, which is what turned the team from suspicious into willing users.",
          },
          {
            title: "We kept a human name on every message",
            body:
              "Nothing sends itself. Every outbound message leaves under the name of the person who read the brief and chose to send it.",
          },
        ],
        outcome: [
          "Nine hours saved per rep per week, measured by the same time-tracking method used to establish the baseline.",
          "Reply rate rose 27% rather than falling — better-researched messages, not more of them.",
        ],
        credits: [
          { role: "Workflow audit", value: "Aktays" },
          { role: "Pipeline design & build", value: "Aktays" },
          { role: "Internal tool UI", value: "Aktays" },
          { role: "CRM integration", value: "Foundry" },
        ],
      },
    },
  },

  services: {
    meta: {
      title: "Services — Aktays",
      description:
        "Web design and build, mobile app design, AI workflows, and brand and design systems.",
    },
    eyebrow: "Services",
    title: "Four disciplines, one team.",
    lead:
      "We keep the offer narrow on purpose. Everything below is done in-house by the people you meet in the first call — there is no second team you get handed to once the contract is signed.",
    deliverablesLabel: "What you get",
    engagements: {
      title: "How we work together.",
      lead:
        "Three shapes, depending on how well-defined the problem is when you arrive. Most projects start as one and become another.",
      bestForLabel: "Best for",
      timelineLabel: "Typical length",
      items: [
        {
          name: "Diagnostic",
          description:
            "A short, fixed-scope engagement to work out what the actual problem is. You leave with a written brief, a recommendation and an estimate — whether or not you build it with us.",
          bestFor: "You know something is wrong but not what to fix first",
          timeline: "2–3 weeks",
        },
        {
          name: "Project",
          description:
            "The main way we work. Design and build in two-week loops with a demo every Friday, from first sketch through to launch and the weeks after it.",
          bestFor: "A defined thing that needs designing and shipping",
          timeline: "8–16 weeks",
        },
        {
          name: "Retained partner",
          description:
            "A recurring share of our month, for teams who need design capacity continuously rather than in one block. Capped so it never crowds out project work.",
          bestFor: "An in-house team that needs a design function beside it",
          timeline: "6 months minimum",
        },
      ],
    },
    faq: {
      title: "Questions we get asked.",
      items: [
        {
          question: "What does a project cost?",
          answer:
            "A diagnostic starts around €6,000. Most full projects land between €25,000 and €80,000 depending on scope and how much building is involved. We give a fixed price after the first conversation, not an hourly rate — you should know what you are spending before you commit.",
        },
        {
          question: "Do you build, or only design?",
          answer:
            "We build. Design that never survives implementation is not design, it is decoration. Most of our web work ships as a production Next.js codebase your team can own. For mobile we design and prototype, then work alongside your engineers through implementation.",
        },
        {
          question: "Who actually does the work?",
          answer:
            "The people you meet in the first call. We stay deliberately small and take on around six projects a year, which is the whole reason we can promise that.",
        },
        {
          question: "How involved do we need to be?",
          answer:
            "About two hours a week — a Friday demo and one working session. We would rather have a small amount of your attention consistently than a large amount at the end, when it is too late for it to change anything.",
        },
        {
          question: "What happens after launch?",
          answer:
            "We stay for four weeks to fix what the first real users find, then hand over documentation your team can build on. Most clients come back for the next thing rather than staying on a retainer they do not need.",
        },
        {
          question: "Do you sign NDAs?",
          answer:
            "Yes, routinely. Send yours over and we will sign it before the first substantive conversation.",
        },
      ],
    },
    cta: {
      title: "Tell us what you're building.",
      lead:
        "Rough scope and a budget range is enough to start. We reply to everything within two working days.",
      action: "Start a project",
    },
  },

  studio: {
    meta: {
      title: "Studio — Aktays",
      description:
        "An independent design studio in Istanbul, working with founders and product teams worldwide.",
    },
    eyebrow: "Studio",
    title: "Small on purpose, and staying that way.",
    lead:
      "Aktays is an independent design studio based in Istanbul, working with founders, product teams and marketing leads who care about the details most people skip.",
    story: [
      "The studio exists because of a pattern we kept seeing from the inside of larger agencies: the people who won the work were rarely the people who did it. By the time a project reached the team building it, the thinking that made it good had been summarised into a deck and lost.",
      "So we built the opposite. Everyone who sits in your first call stays on the project until it ships. There is no account layer, no handover, no junior team quietly inheriting your budget.",
      "That decision has a cost, and we would rather be honest about it: we can only take on about six projects a year. We turn down more work than we accept, and when we are not the right studio for something we will say so and point you somewhere better.",
      "We work in English, Turkish and Arabic, mostly remotely, and we have shipped in nine countries. Istanbul is where we are; it is not a constraint on where you are.",
    ],
    principles: {
      title: "What we hold to.",
      items: [
        {
          title: "The brief is a hypothesis",
          body:
            "The brief you arrive with is your best guess at the problem. Our first job is to test it, which sometimes means telling you it is wrong in week one. That conversation is uncomfortable and it is the most valuable thing we do.",
        },
        {
          title: "Show the work early and unfinished",
          body:
            "A demo every Friday, in a real browser, from the second week. Polished reveals at the end of a month protect the designer, not the client. Early and rough gives you time to change your mind while it is still cheap.",
        },
        {
          title: "Design in the medium",
          body:
            "Static mockups lie about motion, about long text, about slow connections and small screens. We design in the browser as early as we can, so what you approve is what ships.",
        },
        {
          title: "Constraints before decoration",
          body:
            "Accessibility, performance and content structure are decided before anything is styled. Retrofitting them costs more and produces worse work than treating them as the brief.",
        },
        {
          title: "Leave it maintainable",
          body:
            "We are not trying to make ourselves indispensable. Every project ends with documentation and a system your team can extend without us. Coming back should be a choice, not a dependency.",
        },
      ],
    },
    disciplines: {
      title: "What we actually do.",
      lead: "Four disciplines, deliberately overlapping, all in-house.",
      items: [
        "Art direction",
        "Web design",
        "Design engineering",
        "Next.js development",
        "Mobile product design",
        "Prototyping",
        "Design systems",
        "Brand identity",
        "Typography",
        "Motion design",
        "AI workflow design",
        "Automation engineering",
        "Internal tooling",
        "Accessibility",
        "Performance",
        "Research",
      ],
    },
    rhythm: {
      title: "How a project runs.",
      lead:
        "Four phases, weekly demos, and something working in front of you long before the end.",
      items: [
        {
          title: "Week 1 — Listen",
          body:
            "We talk to your team, your customers and your data before opening a design file. No workshops for their own sake; just the questions that change what gets built.",
        },
        {
          title: "Week 2 — Frame",
          body:
            "The problem, narrowed to something a small team can solve, written on one page. If it does not fit on a page, we do not understand it well enough yet.",
        },
        {
          title: "Weeks 3–12 — Make",
          body:
            "Design and build together in two-week loops. Real screens in a real browser every Friday. You redirect us while redirecting is still cheap.",
        },
        {
          title: "After launch — Land",
          body:
            "We ship it, watch it, and stay four weeks to fix what the first thousand users find. Then documentation, and a handover meant to actually be used.",
        },
      ],
    },
    cta: {
      title: "Think we might fit?",
      lead:
        "Tell us what you're making and roughly when you need it. If we're not right for it, we'll say so and suggest someone who is.",
      action: "Start a conversation",
    },
  },

  contact: {
    meta: {
      title: "Contact — Aktays",
      description:
        "Tell us about your project. We reply to every enquiry within two working days.",
    },
    eyebrow: "Contact",
    title: "Let's build something worth the scroll.",
    lead:
      "The more you tell us now, the more useful our first reply will be. Rough is fine — you do not need a finished brief to start a conversation.",
    directTitle: "Or reach us directly",
    responseNote: "We reply to every enquiry within two working days.",
    form: {
      legend: "Project enquiry",
      name: { label: "Your name", placeholder: "Jane Doe" },
      email: { label: "Email", placeholder: "jane@company.com" },
      company: { label: "Company", placeholder: "Company name" },
      projectType: {
        label: "What do you need?",
        options: [
          "Web design & build",
          "Mobile app design",
          "AI workflows",
          "Brand & design systems",
          "Not sure yet",
        ],
      },
      budget: {
        label: "Budget range",
        options: [
          "Under €25,000",
          "€25,000 – €50,000",
          "€50,000 – €80,000",
          "Over €80,000",
          "Not sure yet",
        ],
      },
      timeline: {
        label: "Timeline",
        options: [
          "As soon as possible",
          "Within 3 months",
          "In 3–6 months",
          "Just exploring",
        ],
      },
      message: {
        label: "Tell us about the project",
        placeholder:
          "What are you building, who is it for, and what does success look like?",
      },
      selectPlaceholder: "Select an option",
      optional: "optional",
      consentBefore: "By sending this you agree to our ",
      consentLink: "Privacy Policy",
      consentAfter: ". We use your details only to reply to this enquiry.",
      submit: "Send enquiry",
      sending: "Sending…",
      successTitle: "Thank you — that's arrived.",
      successBody:
        "We read every enquiry ourselves and reply within two working days. If it's urgent, email us directly.",
      errorTitle: "That didn't send.",
      errorBody:
        "Something went wrong on our end. Please try again, or email us directly and we'll pick it up straight away.",
      notConfiguredTitle: "The form isn't connected yet.",
      notConfiguredBody:
        "Email delivery hasn't been configured for this site. Please email us directly and we'll reply as normal.",
      requiredError: "This field is required.",
      emailError: "Please enter a valid email address.",
      messageError: "Please give us at least a sentence or two.",
    },
  },
};
