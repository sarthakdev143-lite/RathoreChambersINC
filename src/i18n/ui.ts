/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ALL WEBSITE COPY, IN BOTH LANGUAGES
 * ─────────────────────────────────────────────────────────────────────────────
 *  `en` is the source of truth for the shape of the content. `hi` is typed
 *  against it, so if you add a key to `en` TypeScript will tell you that the
 *  Hindi translation is missing. Run `npm run check` to verify.
 *
 *  Please read the copy before launch and adjust anything that does not match
 *  how you actually work — especially the FAQ answers about fees and process.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const en = {
  brand: {
    name: 'Rathore Chambers INC',
    tagline: 'IT staff augmentation & engineering delivery',
  },

  nav: {
    home: 'Home',
    services: 'Services',
    agriculturalLand: 'Agricultural land',
    commercialShops: 'Commercial shops',
    itStaffing: 'IT staff augmentation',
    about: 'About',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    openMenu: 'Open navigation menu',
    skipToContent: 'Skip to main content',
  },

  common: {
    whatsapp: 'WhatsApp us',
    call: 'Call',
    email: 'Email',
    getInTouch: 'Get in touch',
    talkToUs: 'Talk to us',
    learnMore: 'Learn more',
    viewServices: 'View our services',
    readMore: 'Read more',
    backHome: 'Back to home',
    directions: 'Get directions',
    languageLabel: 'Language',
    breadcrumb: 'Breadcrumb',
    copiedTitle: 'Response time',
    responseTime: 'We usually reply the same working day.',
  },

  meta: {
    home: {
      title: 'IT Staff Augmentation — Vetted Engineers for Growing Teams',
      description:
        'Rathore Chambers INC helps companies extend their engineering teams with vetted developers, QA engineers and DevOps specialists, alongside advisory on agricultural land and commercial property transactions.',
    },
    services: {
      title: 'Our Services',
      description:
        'Property sourcing, title verification, negotiation, documentation and registration support for agricultural land and commercial shops, plus IT staff augmentation for teams that need to scale engineering capacity.',
    },
    agriculturalLand: {
      title: 'Buy & Sell Agricultural Land (Krishi Bhumi)',
      description:
        'End-to-end help with buying and selling agricultural land: land identification, record of rights and title checks, mutation, conversion guidance, negotiation and registry.',
    },
    commercialShops: {
      title: 'Commercial Shops & Property',
      description:
        'Buy, sell or lease commercial shops, showrooms and retail units. Location assessment, rental yield analysis, title due diligence, negotiation and documentation.',
    },
    itStaffing: {
      title: 'IT Staff Augmentation — Hire Vetted Developers',
      description:
        'Extend your engineering team with vetted developers, QA engineers and DevOps specialists on flexible staff augmentation, dedicated team or project-based engagements.',
    },
    about: {
      title: 'About Our Engineering Practice',
      description:
        'Rathore Chambers INC provides vetted engineering talent for companies that need to scale, built on verified skill checks and straight advice.',
    },
    contact: {
      title: 'Contact Us',
      description:
        'Speak to Rathore Chambers INC about buying or selling agricultural land or a commercial shop. Message us on WhatsApp, call, or send an enquiry.',
    },
    notFound: {
      title: 'Page not found',
      description: 'The page you were looking for does not exist.',
    },
  },

  home: {
    eyebrow: 'Engineering teams · Delivery partners',
    h1Lead: 'Build faster,',
    h1Accent: 'with the right engineers.',
    sub: 'We provide vetted developers, QA engineers and DevOps specialists for staff augmentation, dedicated teams and fixed-scope projects — ready to contribute in days, not months.',
    primaryCta: 'Start a conversation',
    secondaryCta: 'See what we do',

    trust: [
      'Vetted engineers before onboarding',
      'Clear, agreed commercial terms',
      'NDAs and IP in place before work starts',
    ],

    panel: {
      label: 'Engagement readiness',
      title: 'Delivery readiness',
      rows: [
        { name: 'Skill validation', status: 'Verified' },
        { name: 'Timezone overlap', status: 'Clear' },
        { name: 'NDA & IP', status: 'Updated' },
        { name: 'Ramp-up plan', status: 'Confirmed' },
        { name: 'Communication cadence', status: 'Matched' },
      ],
      footnote: 'Every engineer we place clears this before joining your team.',
    },

    statLabels: {
      years: 'Years in practice',
      deals: 'Transactions closed',
      districts: 'Districts covered',
      clients: 'Clients advised',
    },

    servicesEyebrow: 'What we do',
    servicesTitle: 'Capabilities we deliver',
    servicesSub:
      'Engineering capacity through vetted talent, supported by advisory on agricultural land and commercial property. Everything we offer sits under one of these.',

    whyEyebrow: 'Why teams work with us',
    whyTitle: 'Delivery speed without delivery risk',
    whySub:
      'A good hire is not just the fastest profile or the cheapest quote. We work in the order that protects your roadmap.',
    why: [
      {
        icon: 'shield',
        title: 'Engineers verified before you see them',
        body: 'Technical screening before shortlisting, not resume matching alone.',
      },
      {
        icon: 'scales',
        title: 'Honest view of cost and timeline',
        body: 'You hear what a role will realistically cost and how long it will take — including when you should change the spec.',
      },
      {
        icon: 'network',
        title: 'Talent matched to your stack',
        body: 'Profiles matched to your stack, seniority and timezone, not whoever is on the bench.',
      },
      {
        icon: 'handshake',
        title: 'Offers and contracts handled',
        body: 'We manage offers, notice periods and contracts so your engineering managers stay focused on delivery.',
      },
      {
        icon: 'document',
        title: 'IP, NDA and onboarding',
        body: 'Agreements, confidentiality and access setup so work can start safely and quickly.',
      },
      {
        icon: 'user',
        title: 'One point of contact',
        body: 'The person who scoped your requirement is the person you escalate to later.',
      },
    ],

    processEyebrow: 'How engagements move',
    processTitle: 'From requirement to onboarded engineer',
    processSub:
      'A typical engagement moves fast once we understand what you need.',
    process: [
      {
        title: 'Scope the requirement',
        body: 'Role, seniority, stack, timezone overlap and the engagement model that fits your team.',
      },
      {
        title: 'Shortlist and interview',
        body: 'A small set of pre-screened profiles, interviewed and technically assessed before you see them.',
      },
      {
        title: 'You select and approve',
        body: 'You run your own interview round and sign off before anyone joins your team.',
      },
      {
        title: 'Onboard and ramp up',
        body: 'Access, tooling and a short ramp-up window, with a check-in at the end of the first sprint.',
      },
    ],

    faqEyebrow: 'Questions',
    faqTitle: 'Things people ask us first',

    ctaTitle: 'Have a property in mind, or one you want to sell?',
    ctaBody:
      'Send us the details and we will tell you honestly whether it is worth pursuing.',
  },

  services: {
    eyebrow: 'Services',
    title: 'IT staff augmentation and property advisory',
    sub: 'We help companies scale engineering capacity with vetted talent, and advise on agricultural land and commercial property transactions.',

    items: [
      {
        key: 'agriculturalLand',
        icon: 'field',
        title: 'Agricultural land',
        native: 'कृषि भूमि',
        summary:
          'Buying and selling farmland — identification, record and title verification, mutation, conversion guidance, negotiation and registry.',
        points: [
          'Land identification and site visits',
          'Record of rights and title chain verification',
          'Mutation and revenue record support',
          'Guidance on conversion / diversion of land use',
          'Price benchmarking and negotiation',
          'Agreement to sale, registration and handover',
        ],
      },
      {
        key: 'commercialShops',
        icon: 'shop',
        title: 'Commercial shops & property',
        native: 'व्यावसायिक दुकानें',
        summary:
          'Shops, showrooms and retail units — location assessment, yield analysis, title due diligence, negotiation, documentation and possession.',
        points: [
          'Shop, showroom and retail unit sourcing',
          'Footfall and location assessment',
          'Rental yield and return analysis',
          'Ownership, approvals and encumbrance checks',
          'Buy, sell or lease negotiation',
          'Documentation, registration and possession',
        ],
      },
      {
        key: 'itStaffing',
        icon: 'code',
        title: 'IT staff augmentation',
        native: 'आईटी स्टाफ संवर्धन',
        summary:
          'Extend your engineering team with vetted developers, QA engineers and DevOps specialists — on staff augmentation, dedicated team or project-based engagements.',
        points: [
          'Vetted developers, QA and DevOps talent',
          'Staff augmentation, dedicated team or project-based models',
          'Fast shortlist and interview turnaround',
          'Full-stack, cloud, data and mobile coverage',
          'Transparent, ramp-up-friendly commercials',
          'You keep control of the work; we keep the bench full',
        ],
      },
    ],

    alsoEyebrow: 'Across our property services',
    alsoTitle: 'What every property engagement includes',
    also: [
      {
        icon: 'search',
        title: 'Property sourcing',
        body: 'A shortlist built around your requirement and budget, not around whatever we happen to have on our books.',
      },
      {
        icon: 'shield',
        title: 'Due diligence',
        body: 'Ownership, encumbrances, disputes, approvals and notifications — checked and reported to you in writing.',
      },
      {
        icon: 'scales',
        title: 'Valuation context',
        body: 'Recent comparable transactions in the area so you can judge whether the asking price stands up.',
      },
      {
        icon: 'handshake',
        title: 'Negotiation',
        body: 'Offers, counter-offers and terms handled on your behalf, with your priorities kept intact.',
      },
      {
        icon: 'document',
        title: 'Documentation',
        body: 'Agreement to sale, sale deed, stamp duty and registration coordinated end to end.',
      },
      {
        icon: 'key',
        title: 'Completion',
        body: 'Mutation into your name and physical handover. The file is closed when the record is correct.',
      },
    ],
  },

  agriculturalLand: {
    eyebrow: 'Service',
    title: 'Agricultural land',
    native: 'कृषि भूमि',
    lede: 'Farmland transactions live or die on the revenue records. We read them first, tell you what they say, and only then talk about price.',

    forBuyersTitle: 'If you are buying',
    forBuyers: [
      'Land identified against your budget, acreage, irrigation and access requirements',
      'Site visits with an honest assessment of soil, water, road access and boundaries',
      'Full verification of the record of rights and the chain of ownership',
      'Checks for mortgages, court disputes, tenancy claims and acquisition notifications',
      'Confirmation of whether you are legally eligible to purchase, before you pay anything',
      'Negotiation, agreement to sale, registration and mutation into your name',
    ],

    forSellersTitle: 'If you are selling',
    forSellers: [
      'Realistic valuation based on recent comparable sales in the area',
      'A pre-sale check of your records so problems surface early, not at the registry',
      'Help correcting mutation entries, boundary discrepancies and missing paperwork',
      'Introduction to buyers who are genuinely able to complete',
      'Negotiation of price, payment schedule and possession date',
      'Execution, registration and receipt of the full consideration',
    ],

    watchTitle: 'What we look for before we let a deal proceed',
    watch: [
      {
        title: 'The chain of ownership',
        body: 'Whether the person selling actually holds clean title, and how they came to hold it.',
      },
      {
        title: 'Encumbrances',
        body: 'Existing mortgages, bank charges, loans against the land, and unpaid land revenue.',
      },
      {
        title: 'Disputes and claims',
        body: 'Pending litigation, family partition claims, tenancy rights and boundary disagreements.',
      },
      {
        title: 'Notifications',
        body: 'Whether the land falls under an acquisition, road-widening, forest or reserved-use notification.',
      },
      {
        title: 'Access and measurement',
        body: 'Whether there is a legal right of way, and whether the area on the ground matches the area on paper.',
      },
      {
        title: 'Eligibility to purchase',
        body: 'Whether the buyer is permitted to own agricultural land under the rules that apply in that state.',
      },
    ],

    ctaTitle: 'Send us the khasra number or the location',
    ctaBody:
      'Share what you have and we will tell you what the records need to show before this is worth pursuing.',
  },

  commercialShops: {
    eyebrow: 'Service',
    title: 'Commercial shops & property',
    native: 'व्यावसायिक दुकानें',
    lede: 'A commercial unit is an income asset. We assess it as one — what it earns, what it costs to hold, and what it will be worth to the next buyer.',

    forBuyersTitle: 'If you are buying or leasing',
    forBuyers: [
      'Units shortlisted against your trade, footfall requirement and budget',
      'Assessment of location, frontage, parking, visibility and neighbouring businesses',
      'Realistic rental yield and holding-cost analysis, not headline numbers',
      'Verification of ownership, building approvals, occupancy status and encumbrances',
      'Review of society, association or complex charges and restrictions',
      'Negotiation of price or rent, lock-in, escalation and possession terms',
    ],

    forSellersTitle: 'If you are selling or letting',
    forSellers: [
      'Valuation based on comparable units and achievable rent in the area',
      'Presentation of the unit to the buyers and tenants most likely to want it',
      'Screening of tenants for the ability to pay and the suitability of the trade',
      'Negotiation of terms that protect you at the end of the lease, not just the start',
      'Complete documentation — sale deed or lease deed, registration and handover',
      'Support with possession, deposits and fit-out timelines',
    ],

    watchTitle: 'What determines whether a shop is worth buying',
    watch: [
      {
        title: 'Location quality',
        body: 'Genuine footfall, road frontage, visibility from the main approach and ease of parking.',
      },
      {
        title: 'The neighbours',
        body: 'What trades surround the unit, and whether they bring in your customers or compete for them.',
      },
      {
        title: 'Approvals',
        body: 'Whether the building is approved for commercial use and whether the unit has occupancy clearance.',
      },
      {
        title: 'True yield',
        body: 'Rent set against maintenance, association charges, property tax and realistic vacancy periods.',
      },
      {
        title: 'Existing tenancy',
        body: 'If the unit is tenanted, what the lease actually says about rent, escalation, lock-in and exit.',
      },
      {
        title: 'Exit prospects',
        body: 'How easily the unit can be resold or re-let if your plans change in five years.',
      },
    ],

    ctaTitle: 'Looking at a shop, or want to sell one?',
    ctaBody:
      'Tell us the location and the asking price and we will tell you what the numbers really look like.',
  },

  itStaffing: {
    eyebrow: 'IT vertical',
    title: 'IT staff augmentation',
    native: 'आईटी स्टाफ संवर्धन',
    lede: 'When your engineering team needs to move faster than your hiring pipeline allows, we plug in vetted developers, QA engineers and DevOps specialists who can start contributing in days, not months.',

    forClientsTitle: 'If you are hiring',
    forClients: [
      'A shortlist of pre-vetted engineers matched to your stack and timezone',
      'Flexible engagement — staff augmentation, a dedicated team, or a fixed-scope project',
      'You interview and approve every profile before they join your team',
      'Direct day-to-day management, the same as an in-house hire',
      'Simple, transparent monthly billing with no long lock-in',
      'Scale the team up or down as the roadmap changes',
    ],

    forTalentTitle: 'If you are a tech professional',
    forTalent: [
      'Placement on real client projects, not bench time',
      'Clear contracts and on-time, predictable payouts',
      'Work across modern stacks — cloud, data, mobile and web',
      'Support during onboarding, code reviews and the first sprint',
      'Feedback carried back honestly from the client side',
      'A point of contact for anything that affects your engagement',
    ],

    modelsEyebrow: 'Engagement models',
    modelsTitle: 'Three ways to work with us',
    modelsSub:
      'Pick the model that matches how much control and continuity you need — you can switch as the project matures.',
    models: [
      {
        icon: 'users',
        title: 'Staff augmentation',
        body: 'Individual engineers join your existing team and report into your process, tools and stand-ups. Best when you already have technical leadership in place.',
      },
      {
        icon: 'layers',
        title: 'Dedicated team',
        body: 'A self-contained squad — engineers, QA and a lead — assigned to your roadmap full-time. Best for a sustained build that needs its own cadence.',
      },
      {
        icon: 'rocket',
        title: 'Project-based',
        body: 'A fixed scope, fixed timeline delivery with a single point of accountability. Best when the requirement is well-defined and the deadline is firm.',
      },
    ],

    stackEyebrow: 'Coverage',
    stackTitle: 'Talent across the stack',
    stackSub: 'If it is not listed here, ask us — the roster is broader than this page.',
    stack: [
      { category: 'Frontend', items: ['React', 'Next.js', 'Vue', 'Angular', 'TypeScript'] },
      { category: 'Backend', items: ['Node.js', 'Java', 'Python', 'Go', '.NET'] },
      { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'] },
      { category: 'Data & AI', items: ['PostgreSQL', 'MongoDB', 'Spark', 'LLM integrations'] },
      { category: 'Mobile', items: ['React Native', 'Flutter', 'iOS', 'Android'] },
      { category: 'Quality', items: ['Manual QA', 'Automation', 'Performance testing'] },
    ],

    processEyebrow: 'How it works',
    processTitle: 'From requirement to onboarded engineer',
    processSub: 'A typical engagement moves fast once we understand what you need.',
    process: [
      {
        title: 'Scope the requirement',
        body: 'Role, seniority, stack, timezone overlap and the engagement model that fits your team.',
      },
      {
        title: 'Shortlist and interview',
        body: 'A small set of pre-screened profiles, interviewed and technically assessed before you see them.',
      },
      {
        title: 'You select and approve',
        body: 'You run your own interview round and sign off before anyone joins your team.',
      },
      {
        title: 'Onboard and ramp up',
        body: 'Access, tooling and a short ramp-up window, with a check-in at the end of the first sprint.',
      },
    ],

    watchTitle: 'What determines whether an engagement works',
    watch: [
      {
        title: 'Skill verification',
        body: 'Every engineer is technically screened before being shortlisted, not just resume-matched.',
      },
      {
        title: 'Timezone overlap',
        body: 'Enough working-hours overlap for daily stand-ups and quick decisions, not just async handoffs.',
      },
      {
        title: 'IP and confidentiality',
        body: 'NDAs and IP assignment in place before any code or credentials are shared.',
      },
      {
        title: 'Communication cadence',
        body: 'Agreed check-ins, reporting and escalation paths from day one.',
      },
      {
        title: 'Ramp-up speed',
        body: 'How quickly someone goes from onboarded to actually shipping.',
      },
      {
        title: 'Exit clarity',
        body: 'A clean handover process if an engagement ends or a role is no longer needed.',
      },
    ],

    faq: [
      {
        q: 'What is IT staff augmentation?',
        a: 'It is hiring individual engineers or a small team to work as an extension of your own — under your direction, tools and process — without the overhead of a direct full-time hire. You get the control of an in-house team member with the flexibility of a contract engagement.',
      },
      {
        q: 'How fast can you onboard a developer?',
        a: 'For common stacks we can usually put a shortlist in front of you within a few working days. Niche skill sets or senior and lead roles take longer because the pool of genuinely qualified people is smaller.',
      },
      {
        q: 'Do we get to interview candidates ourselves?',
        a: 'Yes. We pre-screen for technical skill and communication, but you run your own interview and make the final call before anyone joins your team.',
      },
      {
        q: 'Who manages the engineer day to day?',
        a: 'You do, for staff augmentation — they work inside your process and tools like any other team member. For a dedicated team or project-based engagement, we provide a lead who manages delivery and reports to you.',
      },
      {
        q: 'What happens if an engagement is not working out?',
        a: 'Tell us early. We would rather swap a profile in the first few weeks than let a bad fit run its course, and the contracts are structured so that is a straightforward change, not a renegotiation.',
      },
    ],

    ctaTitle: 'Tell us the role, the stack and the timeline',
    ctaBody:
      'Share what you are trying to build and we will tell you honestly what a realistic shortlist and timeline look like.',
  },

  about: {
    eyebrow: 'About',
    title: 'A property practice built on verified paperwork',
    lede: 'Rathore Chambers INC helps companies extend their engineering teams with vetted developers, QA engineers and DevOps specialists, while advising on property transactions.',

    bodyTitle: 'How we think about this work',
    body: [
      'Most property transactions that go wrong were already broken at the record stage. A mutation that was never completed, a partition that was never registered, a bank charge nobody mentioned. The money is not usually the problem — the paper is.',
      'So we work in the opposite order to the way property is usually sold. We read the records before we talk about price. We tell you what we found, including when what we found means you should not buy. A deal we talk you out of costs us a commission; a deal we should have talked you out of costs you a great deal more.',
      'The other half of the job is simply being reachable. Property transactions run on timelines that do not care about office hours, and the most common complaint people have about brokers is that they disappear after the token amount is paid. We stay on the file until the record shows your name.',
    ],

    principlesTitle: 'What you can hold us to',
    principles: [
      {
        icon: 'shield',
        title: 'We check before we recommend',
        body: 'No property is put in front of you until we have looked at what the records say about it.',
      },
      {
        icon: 'scales',
        title: 'We tell you when to walk away',
        body: 'If the title is unclear or the price does not stand up, you will hear that from us plainly.',
      },
      {
        icon: 'document',
        title: 'Our fee is agreed in writing first',
        body: 'You will know what our involvement costs before any work starts. No adjustments at the end.',
      },
      {
        icon: 'clock',
        title: 'We give real timelines',
        body: 'A realistic estimate after we have seen the documents, rather than an optimistic one before.',
      },
      {
        icon: 'user',
        title: 'You deal with one person',
        body: 'The same point of contact from the first call through to mutation and handover.',
      },
      {
        icon: 'lock',
        title: 'Your details stay private',
        body: 'What you are buying, selling or paying is not discussed with anyone outside the transaction.',
      },
    ],

    coverageTitle: 'Where we work',
    coverageSub: 'Areas we regularly transact in.',

    ctaTitle: 'Want to talk it through first?',
    ctaBody:
      'An initial conversation costs nothing and usually saves time. Tell us what you are considering.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Tell us what you are looking for',
    lede: 'Message us on WhatsApp for the quickest reply, or send the details through the form and we will come back to you.',

    channelsTitle: 'Direct lines',
    whatsappCard: {
      title: 'WhatsApp',
      body: 'Fastest way to reach us. Send photos, documents or a location pin.',
      action: 'Open WhatsApp',
    },
    phoneCard: {
      title: 'Phone',
      body: 'Call during office hours and you will get a person, not a menu.',
      action: 'Call now',
    },
    emailCard: {
      title: 'Email',
      body: 'Best for sending scanned records and detailed requirements.',
      action: 'Send an email',
    },
    officeTitle: 'Office',
    hoursTitle: 'Office hours',
    hoursNote: 'Sunday by appointment.',
    closed: 'Closed',

    prepareTitle: 'Useful to have ready',
    prepare: [
      'The location — a village and khasra number, or a map pin',
      'Whether you are buying or selling, and your budget or expected price',
      'Copies of any records you already hold',
      'Your timeline, and whether bank finance is involved',
    ],
    prepareNote:
      'None of this is required to get in touch. It just means we can give you a useful answer sooner.',
  },

  form: {
    title: 'Send an enquiry',
    sub: 'Fill this in and it opens WhatsApp with your details ready to send.',
    name: 'Your name',
    namePlaceholder: 'Full name',
    phone: 'Phone number',
    phonePlaceholder: 'So we can call you back',
    intent: 'I want to',
    intentBuy: 'Buy',
    intentSell: 'Sell',
    intentLease: 'Lease or rent',
    intentAdvice: 'Get advice',
    propertyType: 'Property type',
    typeAgricultural: 'Agricultural land',
    typeCommercial: 'Commercial shop or property',
    typeIT: 'IT staff augmentation requirement',
    typeOther: 'Something else',
    location: 'Location or area',
    locationPlaceholder: 'Village, city or district',
    budget: 'Budget or expected price',
    budgetPlaceholder: 'Optional',
    message: 'Details',
    messagePlaceholder:
      'Khasra number, size, what you are looking for, or anything else that helps.',
    optional: 'optional',
    submit: 'Continue on WhatsApp',
    submitNote: 'This opens WhatsApp. Nothing is sent until you press send there.',
    noscript:
      'This form needs JavaScript to open WhatsApp. Please use the phone, WhatsApp or email links above instead.',
    required: 'Please fill in this field.',

    waIntro: 'Enquiry from your website',
    waName: 'Name',
    waPhone: 'Phone',
    waIntent: 'Looking to',
    waType: 'Property type',
    waLocation: 'Location',
    waBudget: 'Budget',
    waMessage: 'Details',
  },

  faq: [
    {
      q: 'Can anyone buy agricultural land?',
      a: 'Not everywhere. Several states restrict the purchase of agricultural land to people who are already farmers or who are domiciled in that state, and some require prior government permission. The rules differ from state to state and they do change. We confirm what applies to your specific situation before you commit any money, and we will tell you plainly if a purchase is not open to you.',
    },
    {
      q: 'What documents are needed to sell agricultural land?',
      a: 'Usually the title deed, the current record of rights, mutation entries, a map or measurement extract, land revenue receipts, an encumbrance certificate, and the seller’s identity and PAN documents. The exact list varies by state and by how the land was acquired. We prepare a checklist for your specific property at the start so nothing is discovered late.',
    },
    {
      q: 'How do you verify that a title is clean?',
      a: 'We trace the chain of ownership through the revenue records, confirm that the current record holder is the person selling, and check for mortgages, bank charges, pending litigation, tenancy claims, family partition claims and any acquisition or reserved-use notification affecting the land. Where the value at stake justifies it, we also recommend a formal written opinion from an advocate.',
    },
    {
      q: 'What do you charge?',
      a: 'Our fee is agreed in writing before any work begins, so you know the cost upfront. It depends on the type and size of the transaction and on how much of the process you want us to handle. Get in touch with the details and we will quote you.',
    },
    {
      q: 'Do you help with conversion of agricultural land to non-agricultural use?',
      a: 'Yes. We guide you through conversion or diversion — which authority the application goes to, what documents are required, what it is likely to cost and how long it realistically takes. Approval is granted by the government and not by us, so we do not promise an outcome, and we will tell you upfront if we think an application is unlikely to succeed.',
    },
    {
      q: 'How long does a transaction usually take?',
      a: 'A straightforward sale with clean records and a ready buyer often completes within a few weeks. Anything involving mutation corrections, family settlements, missing documents, land conversion or bank finance takes longer. We give you a realistic timeline once we have seen the documents, rather than an optimistic one before.',
    },
    {
      q: 'Do you act for buyers, sellers, or both?',
      a: 'Both. Where we are introducing a buyer to a seller, we tell each side that upfront so everyone knows where they stand.',
    },
    {
      q: 'Can you help if I live outside India?',
      a: 'Yes. We carry out site visits on your behalf, share photographs and video walkthroughs, and coordinate with your representative or under a power of attorney where that is appropriate. Note that rules on the purchase of agricultural land by non-residents are restrictive, so that is the first thing we check.',
    },
  ],

  footer: {
    blurb:
      'Vetted engineering capacity for product teams, plus advisory on agricultural land and commercial property transactions.',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    followTitle: 'Follow',
    rights: 'All rights reserved.',
    disclaimer:
      'The information on this website is general in nature and is not legal, tax or investment advice. Laws governing agricultural land differ from state to state. Please obtain independent professional advice for your specific transaction.',
  },

  notFound: {
    code: '404',
    title: 'This page does not exist',
    body: 'The link may be out of date, or the address may have been typed incorrectly.',
  },
};

export type UI = typeof en;

const hi: UI = {
  brand: {
    name: 'Rathore Chambers INC',
    tagline: 'आईटी स्टाफ संवर्धन एवं इंजीनियरिंग डिलीवरी',
  },

  nav: {
    home: 'मुख्य पृष्ठ',
    services: 'सेवाएँ',
    agriculturalLand: 'कृषि भूमि',
    commercialShops: 'व्यावसायिक दुकानें',
    itStaffing: 'आईटी स्टाफिंग',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    menu: 'मेन्यू',
    close: 'बंद करें',
    openMenu: 'नेविगेशन मेन्यू खोलें',
    skipToContent: 'मुख्य सामग्री पर जाएँ',
  },

  common: {
    whatsapp: 'व्हाट्सएप करें',
    call: 'कॉल करें',
    email: 'ईमेल',
    getInTouch: 'संपर्क करें',
    talkToUs: 'हमसे बात करें',
    learnMore: 'और जानें',
    viewServices: 'हमारी सेवाएँ देखें',
    readMore: 'और पढ़ें',
    backHome: 'मुख्य पृष्ठ पर लौटें',
    directions: 'रास्ता देखें',
    languageLabel: 'भाषा',
    breadcrumb: 'ब्रेडक्रम्ब',
    copiedTitle: 'उत्तर देने का समय',
    responseTime: 'हम आमतौर पर उसी कार्यदिवस में उत्तर देते हैं।',
  },

  meta: {
    home: {
      title: 'आईटी स्टाफ संवर्धन — बढ़ती टीमों के लिए सत्यापित इंजीनियर',
      description:
        'Rathore Chambers INC कंपनियों को सत्यापित डेवलपर्स, क्यूए इंजीनियर और डेवऑप्स विशेषज्ञों के साथ अपनी इंजीनियरिंग टीम बढ़ाने में मदद करता है, साथ ही कृषि भूमि और व्यावसायिक संपत्ति लेन-देन में सलाह देता है।',
    },
    services: {
      title: 'हमारी सेवाएँ',
      description:
        'कृषि भूमि और व्यावसायिक दुकानों के लिए संपत्ति की तलाश, टाइटल सत्यापन, मोल-भाव, दस्तावेज़ीकरण और रजिस्ट्री में सहायता, साथ ही इंजीनियरिंग क्षमता बढ़ाने वाली कंपनियों के लिए आईटी स्टाफ संवर्धन।',
    },
    agriculturalLand: {
      title: 'कृषि भूमि की खरीद व बिक्री',
      description:
        'कृषि भूमि खरीदने और बेचने में पूरी सहायता — भूमि की पहचान, खतौनी व टाइटल जाँच, नामांतरण, भू-उपयोग परिवर्तन मार्गदर्शन, मोल-भाव और रजिस्ट्री।',
    },
    commercialShops: {
      title: 'व्यावसायिक दुकानें एवं संपत्ति',
      description:
        'व्यावसायिक दुकानें, शोरूम और रिटेल यूनिट खरीदें, बेचें या किराये पर लें। स्थान का आकलन, किराया प्रतिफल विश्लेषण, टाइटल जाँच, मोल-भाव और दस्तावेज़ीकरण।',
    },
    itStaffing: {
      title: 'आईटी स्टाफ संवर्धन — दक्ष डेवलपर्स प्राप्त करें',
      description:
        'लचीले स्टाफ संवर्धन, समर्पित टीम या प्रोजेक्ट-आधारित सहभागिता पर सत्यापित डेवलपर्स, क्यूए इंजीनियर और डेवऑप्स विशेषज्ञों के साथ अपनी इंजीनियरिंग टीम का विस्तार करें।',
    },
    about: {
      title: 'हमारे बारे में',
      description:
        'Rathore Chambers INC बढ़ती कंपनियों के लिए सत्यापित इंजीनियरिंग प्रतिभा उपलब्ध कराता है — सत्यापित कौशल जाँच और स्पष्ट सलाह के आधार पर।',
    },
    contact: {
      title: 'संपर्क करें',
      description:
        'कृषि भूमि या व्यावसायिक दुकान खरीदने-बेचने के लिए Rathore Chambers INC से बात करें। व्हाट्सएप करें, कॉल करें या पूछताछ भेजें।',
    },
    notFound: {
      title: 'पृष्ठ नहीं मिला',
      description: 'आप जिस पृष्ठ को खोज रहे हैं वह मौजूद नहीं है।',
    },
  },

  home: {
    eyebrow: 'इंजीनियरिंग टीमें · डिलीवरी पार्टनर',
    h1Lead: 'तेज़ बनाएँ,',
    h1Accent: 'सही इंजीनियरों के साथ।',
    sub: 'हम स्टाफ संवर्धन, समर्पित टीम और निश्चित-स्कोप प्रोजेक्ट के लिए सत्यापित डेवलपर्स, क्यूए इंजीनियर और डेवऑप्स विशेषज्ञ उपलब्ध कराते हैं — महीनों नहीं, दिनों में योगदान करने तैयार।',
    primaryCta: 'बातचीत शुरू करें',
    secondaryCta: 'हम क्या करते हैं',

    trust: [
      'जॉइनिंग से पहले इंजीनियरों की जाँच',
      'साफ़ और तय व्यावसायिक शर्तें',
      'काम शुरू होने से पहले एनडीए और आईपी',
    ],

    panel: {
      label: 'सहभागिता तैयारी',
      title: 'डिलीवरी तैयारी',
      rows: [
        { name: 'कौशल सत्यापन', status: 'सत्यापित' },
        { name: 'समय-क्षेत्र अधिव्यापन', status: 'पर्याप्त' },
        { name: 'एनडीए और आईपी', status: 'निपटा' },
        { name: 'रैम्प-अप योजना', status: 'तैयार' },
        { name: 'संवाद ताल', status: 'मेल खाता' },
      ],
      footnote: 'हम जिन इंजीनियरों की जगह दिलाते हैं, वे जॉइनिंग से पहले यह छानबीन पास करते हैं।',
    },

    statLabels: {
      years: 'वर्षों का अनुभव',
      deals: 'पूर्ण हुए सौदे',
      districts: 'ज़िले',
      clients: 'ग्राहकों को सलाह',
    },

    servicesEyebrow: 'हम क्या करते हैं',
    servicesTitle: 'हम क्या डिलीवर करते हैं',
    servicesSub:
      'सत्यापित प्रतिभा के through engineering capacity, supported by advisory on agricultural land and commercial property. हमारी हर सेवा इन्हीं में से किसी एक के अंतर्गत आती है।',

    whyEyebrow: 'टीमें हमें क्यों चुनती हैं',
    whyTitle: 'डिलीवरी तेज़, जोखिम नियंत्रित',
    whySub:
      'सही हायरिंग सिर्फ़ सबसे तेज़ प्रोफ़ाइल या सस्ता कोट हासिल करना नहीं है। हम ऐसे क्रम में काम करते हैं जो आपके रोडमैप की रक्षा करे।',
    why: [
      {
        icon: 'shield',
        title: 'आपके देखने से पहले इंजीनियरों की जाँच',
        body: 'शॉर्टलिस्टिंग से पहले तकनीकी स्क्रीनिंग, न कि सिर्फ़ रिज़्यूमे मिलान।',
      },
      {
        icon: 'scales',
        title: 'लागत और समय-सीमा पर ईमानदार राय',
        body: 'आप जानेंगे कि भूमिका कितनी लागत आएगी और कितना समय लगेगा — जब आपको विनिर्देश बदलना हो तब भी।',
      },
      {
        icon: 'network',
        title: 'आपके स्टैक में फिट प्रतिभा',
        body: 'प्रोफ़ाइल आपके स्टैक, वरिष्ठता और टाइम ज़ोन से मैच, न कि जो बेंच पर बैठा हो।',
      },
      {
        icon: 'handshake',
        title: 'ऑफ़र और अनुबंध की देखभाल',
        body: 'हम ऑफ़र, नोटिस पीरियड और अनुबंध संभालते हैं ताकि आपके इंजीनियरिंग मैनेजर डिलीवरी पर फोकस कर सकें।',
      },
      {
        icon: 'document',
        title: 'आईपी, एनडीए और ऑनबोर्डिंग',
        body: 'समझौते, गोपनीयता और एक्सेस सेटअप ताकि काम जल्दी और सुरक्षित शुरू हो।',
      },
      {
        icon: 'user',
        title: 'एक ही संपर्क व्यक्ति',
        body: 'जिस व्यक्ति ने आपकी आवश्यकता समझी, बाद में आप उसी से बात करें।',
      },
    ],

    processEyebrow: 'प्रक्रिया',
    processTitle: 'आवश्यकता से ऑनबोर्ड इंजीनियर तक',
    processSub:
      'आवश्यकता समझते ही सहभागिता तेज़ी से आगे बढ़ती है।',
    process: [
      {
        title: 'आवश्यकता का दायरा',
        body: 'भूमिका, वरिष्ठता, स्टैक, समय-क्षेत्र अधिव्यापन और वह सहभागिता मॉडल जो आपकी टीम में फिट हो।',
      },
      {
        title: 'विकल्प और इंटरव्यू',
        body: 'पहले तकनीकी रूप से जाँचे गए प्रोफ़ाइल्स का एक छोटा सेट, जिसे आप देखें उससे पहले इंटरव्यू लिया जाता है।',
      },
      {
        title: 'आप चुनें और अनुमोदित करें',
        body: 'आप अपना इंटरव्यू राउंड चलाते हैं और कोई टीम में शामिल हो उससे पहले अंतिम सहमति देते हैं।',
      },
      {
        title: 'ऑनबोर्ड और रैम्प-अप',
        body: 'एक्सेस, टूलिंग और छोटा रैम्प-अप विंडो, पहले स्प्रिंट के अंत में चेक-इन।',
      },
    ],

    faqEyebrow: 'प्रश्न',
    faqTitle: 'जो लोग सबसे पहले पूछते हैं',

    ctaTitle: 'कोई संपत्ति देखी है, या कुछ बेचना है?',
    ctaBody:
      'विवरण भेजिए — हम ईमानदारी से बताएँगे कि इसमें आगे बढ़ना सही रहेगा या नहीं।',
  },

  services: {
    eyebrow: 'सेवाएँ',
    title: 'आईटी स्टाफ संवर्धन और संपत्ति परामर्श',
    sub: 'हम सत्यापित प्रतिभा के साथ कंपनियों की इंजीनियरिंग क्षमता बढ़ाने में मदद करते हैं, और कृषि भूमि एवं व्यावसायिक संपत्ति लेन-देन में सलाह देते हैं।',

    items: [
      {
        key: 'agriculturalLand',
        icon: 'field',
        title: 'कृषि भूमि',
        native: 'Krishi Bhumi',
        summary:
          'खेती की ज़मीन की खरीद-बिक्री — भूमि की पहचान, रिकॉर्ड व टाइटल सत्यापन, नामांतरण, भू-उपयोग परिवर्तन मार्गदर्शन, मोल-भाव और रजिस्ट्री।',
        points: [
          'भूमि की पहचान और मौके का निरीक्षण',
          'खतौनी और मालिकाना शृंखला का सत्यापन',
          'नामांतरण और राजस्व रिकॉर्ड में सहायता',
          'भू-उपयोग परिवर्तन पर मार्गदर्शन',
          'दर की तुलना और मोल-भाव',
          'बयाना अनुबंध, रजिस्ट्री और क़ब्ज़ा',
        ],
      },
      {
        key: 'commercialShops',
        icon: 'shop',
        title: 'व्यावसायिक दुकानें व संपत्ति',
        native: 'Commercial Shops',
        summary:
          'दुकानें, शोरूम और रिटेल यूनिट — स्थान का आकलन, प्रतिफल विश्लेषण, टाइटल जाँच, मोल-भाव, दस्तावेज़ीकरण और क़ब्ज़ा।',
        points: [
          'दुकान, शोरूम और रिटेल यूनिट की तलाश',
          'ग्राहक आवाजाही और स्थान का आकलन',
          'किराया प्रतिफल और लाभ का विश्लेषण',
          'स्वामित्व, स्वीकृतियाँ और बंधक की जाँच',
          'खरीद, बिक्री या किराये पर मोल-भाव',
          'दस्तावेज़ीकरण, रजिस्ट्री और क़ब्ज़ा',
        ],
      },
      {
        key: 'itStaffing',
        icon: 'code',
        title: 'आईटी स्टाफ संवर्धन',
        native: 'IT Staff Augmentation',
        summary:
          'सत्यापित डेवलपर्स, क्यूए इंजीनियर और डेवऑप्स विशेषज्ञों से अपनी इंजीनियरिंग टीम बढ़ाएँ — स्टाफ संवर्धन, समर्पित टीम या प्रोजेक्ट-आधारित सहभागिता पर।',
        points: [
          'सत्यापित डेवलपर, क्यूए और डेवऑप्स प्रतिभा',
          'स्टाफ संवर्धन, समर्पित टीम या प्रोजेक्ट-आधारित मॉडल',
          'तेज़ शॉर्टलिस्ट और साक्षात्कार प्रक्रिया',
          'फुल-स्टैक, क्लाउड, डेटा और मोबाइल कवरेज',
          'पारदर्शी, रैंप-अप के अनुकूल शुल्क',
          'काम पर नियंत्रण आपका; टीम तैयार रखना हमारा',
        ],
      },
    ],

    alsoEyebrow: 'हमारी संपत्ति सेवाओं में',
    alsoTitle: 'हर संपत्ति सेवा में यह सब शामिल रहता है',
    also: [
      {
        icon: 'search',
        title: 'संपत्ति की तलाश',
        body: 'आपकी ज़रूरत और बजट के अनुसार चुनी गई सूची — न कि वह जो संयोग से हमारे पास पड़ी हो।',
      },
      {
        icon: 'shield',
        title: 'सम्यक जाँच',
        body: 'स्वामित्व, बंधक, विवाद, स्वीकृतियाँ और सरकारी सूचनाएँ — जाँच कर लिखित रूप में आपको दी जाती हैं।',
      },
      {
        icon: 'scales',
        title: 'मूल्य का संदर्भ',
        body: 'क्षेत्र में हाल के तुलनात्मक सौदे, ताकि आप स्वयं आँक सकें कि माँगी गई कीमत सही है या नहीं।',
      },
      {
        icon: 'handshake',
        title: 'मोल-भाव',
        body: 'प्रस्ताव, जवाबी प्रस्ताव और शर्तें आपकी ओर से संभाली जाती हैं, आपकी प्राथमिकताएँ बरकरार रखते हुए।',
      },
      {
        icon: 'document',
        title: 'दस्तावेज़ीकरण',
        body: 'बयाना अनुबंध, विक्रय-पत्र, स्टाम्प ड्यूटी और रजिस्ट्री — शुरू से अंत तक समन्वय।',
      },
      {
        icon: 'key',
        title: 'समापन',
        body: 'आपके नाम नामांतरण और वास्तविक क़ब्ज़ा। फ़ाइल तभी बंद होती है जब रिकॉर्ड सही हो जाए।',
      },
    ],
  },

  agriculturalLand: {
    eyebrow: 'सेवा',
    title: 'कृषि भूमि',
    native: 'Krishi Bhumi',
    lede: 'खेती की ज़मीन का सौदा राजस्व रिकॉर्ड पर टिका होता है। हम पहले उन्हें पढ़ते हैं, आपको बताते हैं कि उनमें क्या लिखा है, और उसके बाद ही कीमत की बात करते हैं।',

    forBuyersTitle: 'यदि आप खरीद रहे हैं',
    forBuyers: [
      'आपके बजट, रकबे, सिंचाई और रास्ते की ज़रूरत के अनुसार भूमि की पहचान',
      'मौके का निरीक्षण, साथ में मिट्टी, पानी, सड़क पहुँच और सीमाओं का ईमानदार आकलन',
      'खतौनी और मालिकाना शृंखला का पूरा सत्यापन',
      'बंधक, न्यायालयी विवाद, काश्तकारी दावे और अधिग्रहण सूचनाओं की जाँच',
      'कोई भुगतान करने से पहले यह पुष्टि कि आप कानूनी रूप से खरीदने के पात्र हैं',
      'मोल-भाव, बयाना अनुबंध, रजिस्ट्री और आपके नाम नामांतरण',
    ],

    forSellersTitle: 'यदि आप बेच रहे हैं',
    forSellers: [
      'क्षेत्र में हाल की तुलनात्मक बिक्री के आधार पर वास्तविक मूल्यांकन',
      'बिक्री से पहले आपके रिकॉर्ड की जाँच, ताकि समस्याएँ रजिस्ट्री पर नहीं, शुरुआत में सामने आएँ',
      'नामांतरण की प्रविष्टियों, सीमा संबंधी अंतर और अधूरे कागज़ों को दुरुस्त कराने में सहायता',
      'ऐसे खरीदारों से परिचय जो वास्तव में सौदा पूरा कर सकें',
      'कीमत, भुगतान क्रम और क़ब्ज़े की तारीख़ पर मोल-भाव',
      'निष्पादन, रजिस्ट्री और पूरी राशि की प्राप्ति',
    ],

    watchTitle: 'सौदा आगे बढ़ाने से पहले हम क्या देखते हैं',
    watch: [
      {
        title: 'मालिकाना शृंखला',
        body: 'बेचने वाले के पास वास्तव में साफ़ टाइटल है या नहीं, और वह उसे कैसे प्राप्त हुआ।',
      },
      {
        title: 'बंधक और भार',
        body: 'मौजूदा बंधक, बैंक ऋण, ज़मीन पर लिया गया कर्ज़ और बकाया भू-राजस्व।',
      },
      {
        title: 'विवाद और दावे',
        body: 'लंबित मुक़दमे, पारिवारिक बँटवारे के दावे, काश्तकारी अधिकार और सीमा विवाद।',
      },
      {
        title: 'सरकारी सूचनाएँ',
        body: 'भूमि किसी अधिग्रहण, सड़क चौड़ीकरण, वन या आरक्षित उपयोग की अधिसूचना में तो नहीं आती।',
      },
      {
        title: 'रास्ता और पैमाइश',
        body: 'क़ानूनी रास्ता उपलब्ध है या नहीं, और मौके का रकबा कागज़ के रकबे से मेल खाता है या नहीं।',
      },
      {
        title: 'खरीदने की पात्रता',
        body: 'उस राज्य के नियमों के अनुसार खरीदार कृषि भूमि रख सकता है या नहीं।',
      },
    ],

    ctaTitle: 'हमें खसरा नंबर या स्थान भेजिए',
    ctaBody:
      'आपके पास जो जानकारी है वह साझा कीजिए — हम बताएँगे कि आगे बढ़ने से पहले रिकॉर्ड में क्या दिखना ज़रूरी है।',
  },

  commercialShops: {
    eyebrow: 'सेवा',
    title: 'व्यावसायिक दुकानें व संपत्ति',
    native: 'Commercial Shops',
    lede: 'व्यावसायिक इकाई एक आय देने वाली संपत्ति है। हम उसका आकलन उसी तरह करते हैं — वह कितना कमाती है, उसे रखने में कितना खर्च होता है, और अगले खरीदार के लिए उसका क्या मूल्य होगा।',

    forBuyersTitle: 'यदि आप खरीद या किराये पर ले रहे हैं',
    forBuyers: [
      'आपके व्यापार, ग्राहक आवाजाही की ज़रूरत और बजट के अनुसार चुनी गई इकाइयाँ',
      'स्थान, सामने की चौड़ाई, पार्किंग, दृश्यता और आसपास के व्यापारों का आकलन',
      'वास्तविक किराया प्रतिफल और रखरखाव लागत का विश्लेषण, केवल दिखावटी आँकड़े नहीं',
      'स्वामित्व, भवन स्वीकृतियाँ, क़ब्ज़े की स्थिति और बंधक का सत्यापन',
      'सोसाइटी, एसोसिएशन या कॉम्प्लेक्स के शुल्क और प्रतिबंधों की समीक्षा',
      'कीमत या किराया, लॉक-इन, वार्षिक वृद्धि और क़ब्ज़े की शर्तों पर मोल-भाव',
    ],

    forSellersTitle: 'यदि आप बेच या किराये पर दे रहे हैं',
    forSellers: [
      'तुलनात्मक इकाइयों और क्षेत्र में मिलने वाले किराये के आधार पर मूल्यांकन',
      'इकाई को उन्हीं खरीदारों और किरायेदारों के सामने रखना जिन्हें उसकी वास्तव में ज़रूरत है',
      'किरायेदारों की भुगतान क्षमता और व्यापार की उपयुक्तता की जाँच',
      'ऐसी शर्तें जो केवल शुरुआत में नहीं, पट्टे के अंत में भी आपकी रक्षा करें',
      'पूरा दस्तावेज़ीकरण — विक्रय-पत्र या पट्टा-पत्र, रजिस्ट्री और क़ब्ज़ा',
      'क़ब्ज़ा, जमा राशि और साज-सज्जा की समय-सीमा में सहायता',
    ],

    watchTitle: 'कोई दुकान खरीदने योग्य है या नहीं, यह किससे तय होता है',
    watch: [
      {
        title: 'स्थान की गुणवत्ता',
        body: 'वास्तविक ग्राहक आवाजाही, सड़क पर सामने की चौड़ाई, मुख्य रास्ते से दृश्यता और पार्किंग की सुविधा।',
      },
      {
        title: 'आसपास के व्यापार',
        body: 'इकाई के चारों ओर कौन-से व्यापार हैं, और वे आपके ग्राहक लाते हैं या उन्हीं के लिए मुकाबला करते हैं।',
      },
      {
        title: 'स्वीकृतियाँ',
        body: 'भवन व्यावसायिक उपयोग के लिए स्वीकृत है या नहीं, और इकाई को क़ब्ज़ा प्रमाणपत्र मिला है या नहीं।',
      },
      {
        title: 'वास्तविक प्रतिफल',
        body: 'किराये की तुलना रखरखाव, एसोसिएशन शुल्क, संपत्ति कर और वास्तविक खाली अवधि से करके।',
      },
      {
        title: 'मौजूदा किरायेदारी',
        body: 'यदि इकाई किराये पर है, तो पट्टे में किराया, वृद्धि, लॉक-इन और निकासी के बारे में वास्तव में क्या लिखा है।',
      },
      {
        title: 'आगे बेचने की संभावना',
        body: 'यदि पाँच वर्ष में आपकी योजना बदले, तो इकाई कितनी आसानी से दोबारा बिक या किराये पर चढ़ सकती है।',
      },
    ],

    ctaTitle: 'कोई दुकान देख रहे हैं, या बेचना चाहते हैं?',
    ctaBody:
      'स्थान और माँगी गई कीमत बताइए — हम बताएँगे कि हिसाब वास्तव में क्या कहता है।',
  },

  itStaffing: {
    eyebrow: 'आईटी वर्टिकल',
    title: 'आईटी स्टाफ संवर्धन',
    native: 'IT Staff Augmentation',
    lede: 'जब आपकी इंजीनियरिंग टीम को भर्ती प्रक्रिया से तेज़ रफ़्तार चाहिए, तब हम सत्यापित डेवलपर्स, क्यूए इंजीनियर और डेवऑप्स विशेषज्ञ जोड़ते हैं जो महीनों नहीं, कुछ दिनों में योगदान शुरू कर सकते हैं।',

    forClientsTitle: 'यदि आप भर्ती कर रहे हैं',
    forClients: [
      'आपके स्टैक और समय-क्षेत्र से मेल खाते पूर्व-सत्यापित इंजीनियरों की शॉर्टलिस्ट',
      'लचीली सहभागिता — स्टाफ संवर्धन, समर्पित टीम, या निश्चित-दायरे का प्रोजेक्ट',
      'टीम में शामिल होने से पहले हर प्रोफ़ाइल का साक्षात्कार और अनुमोदन आप स्वयं करते हैं',
      'सीधा दैनिक प्रबंधन, ठीक वैसे ही जैसे किसी इन-हाउस नियुक्ति में होता है',
      'सरल, पारदर्शी मासिक बिलिंग और कोई लंबा लॉक-इन नहीं',
      'योजना बदलने पर टीम को बढ़ाना या घटाना आसान',
    ],

    forTalentTitle: 'यदि आप एक टेक प्रोफेशनल हैं',
    forTalent: [
      'वास्तविक क्लाइंट प्रोजेक्ट्स पर नियुक्ति, बेंच पर बैठने का समय नहीं',
      'स्पष्ट अनुबंध और समय पर, निश्चित भुगतान',
      'आधुनिक स्टैक पर काम — क्लाउड, डेटा, मोबाइल और वेब',
      'ऑनबोर्डिंग, कोड रिव्यू और पहले स्प्रिंट के दौरान सहयोग',
      'क्लाइंट की ओर से मिली प्रतिक्रिया ईमानदारी से आप तक पहुँचाई जाती है',
      'आपकी सहभागिता को प्रभावित करने वाली किसी भी बात के लिए एक संपर्क बिंदु',
    ],

    modelsEyebrow: 'सहभागिता मॉडल',
    modelsTitle: 'हमारे साथ काम करने के तीन तरीके',
    modelsSub:
      'जितना नियंत्रण और निरंतरता चाहिए, उसी के अनुसार मॉडल चुनें — प्रोजेक्ट आगे बढ़ने पर बदल भी सकते हैं।',
    models: [
      {
        icon: 'users',
        title: 'स्टाफ संवर्धन',
        body: 'व्यक्तिगत इंजीनियर आपकी मौजूदा टीम, प्रक्रिया, टूल्स और स्टैंड-अप में शामिल होते हैं। सबसे उपयुक्त जब तकनीकी नेतृत्व पहले से मौजूद हो।',
      },
      {
        icon: 'layers',
        title: 'समर्पित टीम',
        body: 'इंजीनियर, क्यूए और एक लीड की एक स्वतंत्र टीम पूर्णकालिक रूप से आपकी योजना पर काम करती है। निरंतर निर्माण के लिए उपयुक्त जिसे अपनी गति चाहिए।',
      },
      {
        icon: 'rocket',
        title: 'प्रोजेक्ट-आधारित',
        body: 'निश्चित दायरा, निश्चित समय-सीमा और एक ही जवाबदेह बिंदु के साथ डिलीवरी। तब उपयुक्त जब ज़रूरत स्पष्ट हो और समय-सीमा तय हो।',
      },
    ],

    stackEyebrow: 'कवरेज',
    stackTitle: 'हर स्टैक में प्रतिभा',
    stackSub: 'यहाँ सूचीबद्ध न हो तो भी पूछिए — सूची इस पृष्ठ से कहीं व्यापक है।',
    stack: [
      { category: 'फ्रंटएंड', items: ['React', 'Next.js', 'Vue', 'Angular', 'TypeScript'] },
      { category: 'बैकएंड', items: ['Node.js', 'Java', 'Python', 'Go', '.NET'] },
      { category: 'क्लाउड व डेवऑप्स', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'] },
      { category: 'डेटा व एआई', items: ['PostgreSQL', 'MongoDB', 'Spark', 'LLM Integrations'] },
      { category: 'मोबाइल', items: ['React Native', 'Flutter', 'iOS', 'Android'] },
      { category: 'गुणवत्ता', items: ['मैनुअल क्यूए', 'ऑटोमेशन', 'परफॉर्मेंस टेस्टिंग'] },
    ],

    processEyebrow: 'प्रक्रिया',
    processTitle: 'ज़रूरत से लेकर ऑनबोर्ड इंजीनियर तक',
    processSub: 'ज़रूरत समझते ही सहभागिता तेज़ी से आगे बढ़ती है।',
    process: [
      {
        title: 'ज़रूरत तय करना',
        body: 'भूमिका, अनुभव-स्तर, स्टैक, समय-क्षेत्र का ओवरलैप और आपकी टीम के अनुकूल सहभागिता मॉडल।',
      },
      {
        title: 'शॉर्टलिस्ट और साक्षात्कार',
        body: 'आपके सामने आने से पहले साक्षात्कार और तकनीकी मूल्यांकन से गुज़रीं कुछ चुनी हुई प्रोफ़ाइलें।',
      },
      {
        title: 'आपका चयन और अनुमोदन',
        body: 'टीम में शामिल होने से पहले आप स्वयं साक्षात्कार लेते हैं और मंज़ूरी देते हैं।',
      },
      {
        title: 'ऑनबोर्डिंग और रैंप-अप',
        body: 'एक्सेस, टूलिंग और एक छोटी रैंप-अप अवधि, पहले स्प्रिंट के अंत में एक चेक-इन के साथ।',
      },
    ],

    watchTitle: 'सहभागिता के सफल होने का निर्धारण किससे होता है',
    watch: [
      {
        title: 'कौशल सत्यापन',
        body: 'शॉर्टलिस्ट में शामिल करने से पहले हर इंजीनियर की तकनीकी जाँच होती है, केवल रिज़्यूमे मिलान नहीं।',
      },
      {
        title: 'समय-क्षेत्र ओवरलैप',
        body: 'दैनिक स्टैंड-अप और त्वरित निर्णयों के लिए पर्याप्त कार्य-घंटों का ओवरलैप, केवल असिंक्रोनस हैंडऑफ़ नहीं।',
      },
      {
        title: 'आईपी और गोपनीयता',
        body: 'कोई कोड या क्रेडेंशियल साझा करने से पहले एनडीए और आईपी असाइनमेंट पूरे किए जाते हैं।',
      },
      {
        title: 'संवाद की नियमितता',
        body: 'पहले दिन से ही तय चेक-इन, रिपोर्टिंग और एस्केलेशन का रास्ता।',
      },
      {
        title: 'रैंप-अप की गति',
        body: 'ऑनबोर्ड होने से लेकर वास्तव में काम डिलीवर करने तक कितनी जल्दी पहुँचा जाता है।',
      },
      {
        title: 'स्पष्ट एग्ज़िट',
        body: 'सहभागिता समाप्त होने या भूमिका की ज़रूरत न रहने पर एक स्वच्छ हैंडओवर प्रक्रिया।',
      },
    ],

    faq: [
      {
        q: 'आईटी स्टाफ संवर्धन क्या है?',
        a: 'यह व्यक्तिगत इंजीनियरों या एक छोटी टीम को आपकी अपनी टीम के विस्तार के रूप में — आपके निर्देशन, टूल्स और प्रक्रिया के अंतर्गत — काम पर रखना है, बिना सीधी पूर्णकालिक नियुक्ति के बोझ के। आपको इन-हाउस टीम सदस्य जैसा नियंत्रण और अनुबंध सहभागिता जैसी लचीलापन दोनों मिलते हैं।',
      },
      {
        q: 'आप कितनी जल्दी किसी डेवलपर को ऑनबोर्ड कर सकते हैं?',
        a: 'सामान्य स्टैक के लिए हम आमतौर पर कुछ ही कार्यदिवसों में आपके सामने शॉर्टलिस्ट रख सकते हैं। विशिष्ट कौशल-सेट या सीनियर व लीड भूमिकाओं में अधिक समय लगता है क्योंकि वास्तव में योग्य लोगों का समूह छोटा होता है।',
      },
      {
        q: 'क्या हम स्वयं उम्मीदवारों का साक्षात्कार ले सकते हैं?',
        a: 'हाँ। हम तकनीकी कौशल और संवाद क्षमता की पूर्व-जाँच करते हैं, लेकिन टीम में शामिल होने से पहले साक्षात्कार और अंतिम निर्णय आप स्वयं लेते हैं।',
      },
      {
        q: 'दैनिक कार्य किसके अधीन होता है?',
        a: 'स्टाफ संवर्धन में, आपके — वे आपकी प्रक्रिया और टूल्स के भीतर किसी अन्य टीम सदस्य की तरह काम करते हैं। समर्पित टीम या प्रोजेक्ट-आधारित सहभागिता में, हम एक लीड देते हैं जो डिलीवरी संभालता है और आपको रिपोर्ट करता है।',
      },
      {
        q: 'यदि सहभागिता सही नहीं बैठ रही तो क्या होगा?',
        a: 'हमें जल्दी बताइए। हम किसी गलत मेल को चलने देने के बजाय पहले कुछ हफ़्तों में ही प्रोफ़ाइल बदलना पसंद करेंगे, और अनुबंध इस तरह बनाए जाते हैं कि यह एक सीधा बदलाव हो, दोबारा बातचीत नहीं।',
      },
    ],

    ctaTitle: 'हमें भूमिका, स्टैक और समय-सीमा बताइए',
    ctaBody:
      'आप क्या बनाना चाहते हैं यह बताइए — हम ईमानदारी से बताएँगे कि एक वास्तविक शॉर्टलिस्ट और समय-सीमा कैसी दिखेगी।',
  },

  about: {
    eyebrow: 'परिचय',
    title: 'सत्यापित दस्तावेज़ों पर टिकी एक संपत्ति सलाहकार फर्म',
    lede: 'Rathore Chambers INC कृषि भूमि और व्यावसायिक संपत्ति की खरीद-बिक्री का काम करता है। हम ग्राहकों को उपयुक्त संपत्ति चुनने, मोल-भाव करने और सौदा सुचारु रूप से पूरा करने में सहायता करते हैं।',

    bodyTitle: 'हम इस काम को कैसे देखते हैं',
    body: [
      'जो संपत्ति सौदे बिगड़ते हैं, उनमें से अधिकतर रिकॉर्ड के स्तर पर पहले ही ख़राब हो चुके होते हैं। नामांतरण जो कभी पूरा नहीं हुआ, बँटवारा जो कभी दर्ज नहीं हुआ, बैंक का भार जिसका किसी ने ज़िक्र नहीं किया। समस्या आमतौर पर पैसे की नहीं, कागज़ की होती है।',
      'इसलिए हम उस क्रम से उल्टा काम करते हैं जिस क्रम में संपत्ति आमतौर पर बेची जाती है। हम कीमत की बात से पहले रिकॉर्ड पढ़ते हैं। जो मिलता है वह आपको बताते हैं — तब भी जब उसका अर्थ यह हो कि आपको यह संपत्ति नहीं खरीदनी चाहिए। जिस सौदे से हम आपको रोक देते हैं, उसमें हमारा कमीशन जाता है; जिस सौदे से हमें आपको रोकना चाहिए था, उसमें आपका उससे कहीं अधिक जाता है।',
      'काम का दूसरा आधा हिस्सा बस उपलब्ध रहना है। संपत्ति के सौदे ऐसी समय-सीमाओं पर चलते हैं जिन्हें दफ़्तर के समय से कोई मतलब नहीं होता, और दलालों के बारे में सबसे आम शिकायत यही होती है कि बयाना मिलते ही वे गायब हो जाते हैं। हम फ़ाइल तब तक नहीं छोड़ते जब तक रिकॉर्ड में आपका नाम न आ जाए।',
    ],

    principlesTitle: 'आप हमसे यह अपेक्षा रख सकते हैं',
    principles: [
      {
        icon: 'shield',
        title: 'सुझाव से पहले जाँच',
        body: 'कोई भी संपत्ति आपके सामने तब तक नहीं रखी जाती जब तक हम यह न देख लें कि रिकॉर्ड उसके बारे में क्या कहते हैं।',
      },
      {
        icon: 'scales',
        title: 'कब पीछे हटना है, यह भी बताते हैं',
        body: 'यदि टाइटल स्पष्ट नहीं है या कीमत उचित नहीं है, तो यह आप हमसे साफ़ शब्दों में सुनेंगे।',
      },
      {
        icon: 'document',
        title: 'शुल्क पहले लिखित में तय',
        body: 'काम शुरू होने से पहले आपको पता होगा कि हमारी सेवा का खर्च क्या है। अंत में कोई बदलाव नहीं।',
      },
      {
        icon: 'clock',
        title: 'वास्तविक समय-सीमा',
        body: 'दस्तावेज़ देखने के बाद वास्तविक अनुमान, न कि उससे पहले कोई आशावादी वादा।',
      },
      {
        icon: 'user',
        title: 'एक ही व्यक्ति से व्यवहार',
        body: 'पहले फ़ोन से लेकर नामांतरण और क़ब्ज़े तक वही एक संपर्क व्यक्ति।',
      },
      {
        icon: 'lock',
        title: 'आपकी जानकारी गोपनीय',
        body: 'आप क्या खरीद, बेच या भुगतान कर रहे हैं, इसकी चर्चा सौदे से बाहर किसी से नहीं होती।',
      },
    ],

    coverageTitle: 'हम कहाँ काम करते हैं',
    coverageSub: 'वे क्षेत्र जहाँ हम नियमित रूप से सौदे करते हैं।',

    ctaTitle: 'पहले बात करके देखना चाहते हैं?',
    ctaBody:
      'पहली बातचीत में कोई खर्च नहीं होता और आमतौर पर समय बच जाता है। बताइए आप क्या सोच रहे हैं।',
  },

  contact: {
    eyebrow: 'संपर्क',
    title: 'बताइए आप क्या खोज रहे हैं',
    lede: 'सबसे तेज़ उत्तर के लिए व्हाट्सएप पर संदेश भेजें, या फ़ॉर्म के ज़रिए विवरण भेजें — हम आपसे संपर्क करेंगे।',

    channelsTitle: 'सीधा संपर्क',
    whatsappCard: {
      title: 'व्हाट्सएप',
      body: 'हम तक पहुँचने का सबसे तेज़ तरीका। फ़ोटो, दस्तावेज़ या लोकेशन भेजें।',
      action: 'व्हाट्सएप खोलें',
    },
    phoneCard: {
      title: 'फ़ोन',
      body: 'दफ़्तर के समय में कॉल कीजिए — आपसे व्यक्ति बात करेगा, कोई मशीन नहीं।',
      action: 'अभी कॉल करें',
    },
    emailCard: {
      title: 'ईमेल',
      body: 'स्कैन किए दस्तावेज़ और विस्तृत आवश्यकताएँ भेजने के लिए सबसे उपयुक्त।',
      action: 'ईमेल भेजें',
    },
    officeTitle: 'कार्यालय',
    hoursTitle: 'कार्यालय समय',
    hoursNote: 'रविवार को पूर्व-नियुक्ति पर।',
    closed: 'बंद',

    prepareTitle: 'साथ में रखें तो अच्छा रहेगा',
    prepare: [
      'स्थान — गाँव और खसरा नंबर, या नक्शे पर लोकेशन',
      'आप खरीद रहे हैं या बेच रहे हैं, और आपका बजट या अपेक्षित कीमत',
      'आपके पास मौजूद किसी भी रिकॉर्ड की प्रतियाँ',
      'आपकी समय-सीमा, और बैंक ऋण शामिल है या नहीं',
    ],
    prepareNote:
      'संपर्क करने के लिए इनमें से कुछ भी ज़रूरी नहीं है। बस इससे हम आपको जल्दी उपयोगी उत्तर दे पाते हैं।',
  },

  form: {
    title: 'पूछताछ भेजें',
    sub: 'यह भरिए — आपका विवरण भरकर व्हाट्सएप खुल जाएगा।',
    name: 'आपका नाम',
    namePlaceholder: 'पूरा नाम',
    phone: 'फ़ोन नंबर',
    phonePlaceholder: 'ताकि हम वापस कॉल कर सकें',
    intent: 'मुझे यह करना है',
    intentBuy: 'खरीदना',
    intentSell: 'बेचना',
    intentLease: 'किराये पर लेना/देना',
    intentAdvice: 'सलाह लेना',
    propertyType: 'संपत्ति का प्रकार',
    typeAgricultural: 'कृषि भूमि',
    typeCommercial: 'व्यावसायिक दुकान या संपत्ति',
    typeIT: 'आईटी स्टाफ संवर्धन आवश्यकता',
    typeOther: 'कुछ और',
    location: 'स्थान या क्षेत्र',
    locationPlaceholder: 'गाँव, शहर या ज़िला',
    budget: 'बजट या अपेक्षित कीमत',
    budgetPlaceholder: 'वैकल्पिक',
    message: 'विवरण',
    messagePlaceholder:
      'खसरा नंबर, रकबा, आप क्या खोज रहे हैं, या और कोई उपयोगी जानकारी।',
    optional: 'वैकल्पिक',
    submit: 'व्हाट्सएप पर आगे बढ़ें',
    submitNote:
      'इससे व्हाट्सएप खुलेगा। जब तक आप वहाँ भेजें न दबाएँ, कुछ नहीं भेजा जाता।',
    noscript:
      'व्हाट्सएप खोलने के लिए इस फ़ॉर्म को JavaScript चाहिए। कृपया ऊपर दिए फ़ोन, व्हाट्सएप या ईमेल लिंक का उपयोग करें।',
    required: 'कृपया यह जानकारी भरें।',

    waIntro: 'आपकी वेबसाइट से पूछताछ',
    waName: 'नाम',
    waPhone: 'फ़ोन',
    waIntent: 'उद्देश्य',
    waType: 'संपत्ति का प्रकार',
    waLocation: 'स्थान',
    waBudget: 'बजट',
    waMessage: 'विवरण',
  },

  faq: [
    {
      q: 'क्या कोई भी व्यक्ति कृषि भूमि खरीद सकता है?',
      a: 'हर जगह नहीं। कई राज्यों में कृषि भूमि केवल वही खरीद सकते हैं जो पहले से किसान हैं या उस राज्य के निवासी हैं, और कुछ राज्यों में सरकार की पूर्व अनुमति आवश्यक होती है। नियम राज्य-दर-राज्य अलग हैं और समय-समय पर बदलते रहते हैं। कोई भी भुगतान करने से पहले हम आपकी स्थिति पर लागू नियम की पुष्टि करते हैं, और यदि खरीद आपके लिए संभव नहीं है तो साफ़ बता देते हैं।',
    },
    {
      q: 'कृषि भूमि बेचने के लिए कौन-से दस्तावेज़ चाहिए?',
      a: 'आमतौर पर विक्रय-पत्र, वर्तमान खतौनी, नामांतरण की प्रविष्टियाँ, नक्शा या पैमाइश का उद्धरण, भू-राजस्व की रसीदें, भार-मुक्ति प्रमाणपत्र, और विक्रेता के पहचान व पैन दस्तावेज़। सटीक सूची राज्य के अनुसार और इस बात पर निर्भर करती है कि भूमि कैसे प्राप्त हुई थी। हम शुरुआत में ही आपकी संपत्ति के लिए सूची तैयार कर देते हैं ताकि बाद में कोई कमी सामने न आए।',
    },
    {
      q: 'आप टाइटल साफ़ होने की जाँच कैसे करते हैं?',
      a: 'हम राजस्व रिकॉर्ड में मालिकाना हक़ की पूरी शृंखला देखते हैं, यह पुष्टि करते हैं कि वर्तमान दर्ज धारक ही बेचने वाला व्यक्ति है, और बंधक, बैंक भार, लंबित मुक़दमे, काश्तकारी दावे, पारिवारिक बँटवारे के दावे तथा भूमि पर लागू किसी भी अधिग्रहण या आरक्षित-उपयोग अधिसूचना की जाँच करते हैं। जहाँ रकम बड़ी हो, वहाँ हम अधिवक्ता से लिखित क़ानूनी राय लेने की भी सलाह देते हैं।',
    },
    {
      q: 'आपका शुल्क कितना है?',
      a: 'हमारा शुल्क काम शुरू होने से पहले लिखित रूप में तय होता है, ताकि लागत आपको पहले से पता हो। यह सौदे के प्रकार व आकार पर और इस बात पर निर्भर करता है कि प्रक्रिया का कितना हिस्सा आप हमसे संभलवाना चाहते हैं। विवरण के साथ संपर्क कीजिए, हम आपको दर बता देंगे।',
    },
    {
      q: 'क्या आप कृषि भूमि को गैर-कृषि उपयोग में बदलवाने में मदद करते हैं?',
      a: 'हाँ। हम भू-उपयोग परिवर्तन की प्रक्रिया में मार्गदर्शन करते हैं — आवेदन किस कार्यालय में जाएगा, कौन-से दस्तावेज़ लगेंगे, अनुमानित खर्च कितना होगा और वास्तव में कितना समय लगेगा। स्वीकृति सरकार देती है, हम नहीं, इसलिए हम परिणाम का वादा नहीं करते; और यदि हमें लगता है कि आवेदन सफल होने की संभावना कम है तो पहले ही बता देते हैं।',
    },
    {
      q: 'एक सौदा पूरा होने में आमतौर पर कितना समय लगता है?',
      a: 'साफ़ रिकॉर्ड और तैयार खरीदार के साथ सीधा-सादा सौदा अक्सर कुछ हफ़्तों में पूरा हो जाता है। नामांतरण में सुधार, पारिवारिक बँटवारा, अधूरे दस्तावेज़, भू-उपयोग परिवर्तन या बैंक ऋण शामिल हो तो अधिक समय लगता है। हम दस्तावेज़ देखने के बाद वास्तविक समय-सीमा बताते हैं, उससे पहले कोई आशावादी अनुमान नहीं।',
    },
    {
      q: 'आप खरीदार के लिए काम करते हैं, विक्रेता के लिए, या दोनों के लिए?',
      a: 'दोनों के लिए। जब हम किसी खरीदार का परिचय किसी विक्रेता से करा रहे होते हैं, तो दोनों पक्षों को यह पहले ही बता देते हैं, ताकि सबको अपनी स्थिति स्पष्ट रहे।',
    },
    {
      q: 'क्या आप मदद कर सकते हैं यदि मैं भारत से बाहर रहता हूँ?',
      a: 'हाँ। हम आपकी ओर से मौके का निरीक्षण करते हैं, फ़ोटो व वीडियो साझा करते हैं, और जहाँ उपयुक्त हो वहाँ आपके प्रतिनिधि के साथ या मुख़्तारनामे के अंतर्गत समन्वय करते हैं। ध्यान रहे कि अनिवासियों द्वारा कृषि भूमि खरीदने पर नियम कड़े हैं, इसलिए हम सबसे पहले यही जाँचते हैं।',
    },
  ],

  footer: {
    blurb:
      'कृषि भूमि और व्यावसायिक दुकानों की खरीद व बिक्री। हम ग्राहकों को उपयुक्त संपत्ति चुनने, मोल-भाव करने और सौदा सुचारु रूप से पूरा करने में सहायता करते हैं।',
    servicesTitle: 'सेवाएँ',
    companyTitle: 'कंपनी',
    contactTitle: 'संपर्क',
    followTitle: 'फ़ॉलो करें',
    rights: 'सर्वाधिकार सुरक्षित।',
    disclaimer:
      'इस वेबसाइट की जानकारी सामान्य प्रकृति की है और यह क़ानूनी, कर या निवेश सलाह नहीं है। कृषि भूमि से जुड़े क़ानून राज्य-दर-राज्य अलग होते हैं। कृपया अपने विशिष्ट सौदे के लिए स्वतंत्र पेशेवर सलाह लें।',
  },

  notFound: {
    code: '404',
    title: 'यह पृष्ठ मौजूद नहीं है',
    body: 'हो सकता है लिंक पुराना हो, या पता लिखने में कोई त्रुटि रह गई हो।',
  },
};

export const ui = { en, hi } as const;
