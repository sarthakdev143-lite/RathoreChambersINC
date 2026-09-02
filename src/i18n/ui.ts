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
    tagline: 'Agricultural land & commercial property',
  },

  nav: {
    home: 'Home',
    services: 'Services',
    agriculturalLand: 'Agricultural land',
    commercialShops: 'Commercial shops',
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
      title: 'Agricultural Land & Commercial Shops — Buying and Selling',
      description:
        'Rathore Chambers INC helps buyers and sellers of agricultural land (krishi bhumi) and commercial shops find the right property, verify the title, negotiate fairly and complete registration.',
    },
    services: {
      title: 'Our Services',
      description:
        'Property sourcing, title verification, negotiation, documentation and registration support for agricultural land and commercial shops.',
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
    about: {
      title: 'About Us',
      description:
        'Rathore Chambers INC is a property advisory practice dealing in agricultural land and commercial shops, built on verified paperwork and straight advice.',
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
    eyebrow: 'Agricultural land · Commercial property',
    h1Lead: 'Land and shops,',
    h1Accent: 'handled end to end.',
    sub: 'We help buyers and sellers identify the right agricultural land and commercial shops, check the paperwork before money moves, negotiate on fair terms, and see the transaction through to registration.',
    primaryCta: 'Start a conversation',
    secondaryCta: 'See what we do',

    trust: [
      'Title checked before you commit',
      'Straight talk on price',
      'Documentation handled',
    ],

    panel: {
      label: 'Pre-purchase check',
      title: 'Due diligence',
      rows: [
        { name: 'Title chain', status: 'Verified' },
        { name: 'Encumbrances', status: 'Clear' },
        { name: 'Mutation', status: 'Updated' },
        { name: 'Land use', status: 'Confirmed' },
        { name: 'Access & measurement', status: 'Matched' },
      ],
      footnote: 'Every property we put in front of you clears this first.',
    },

    statLabels: {
      years: 'Years in practice',
      deals: 'Transactions closed',
      districts: 'Districts covered',
      clients: 'Clients advised',
    },

    servicesEyebrow: 'What we do',
    servicesTitle: 'Two things, done properly',
    servicesSub:
      'We deal in the purchase and sale of agricultural land and commercial property. Everything we offer sits under one of those two.',

    whyEyebrow: 'Why work with us',
    whyTitle: 'Paperwork first, price second, pressure never',
    whySub:
      'A property transaction goes wrong in the records long before it goes wrong in the money. We work in that order.',
    why: [
      {
        icon: 'shield',
        title: 'Title checked before you commit',
        body: 'We trace the ownership chain through the revenue records and look for mortgages, disputes, tenancy claims and acquisition notices before you part with a rupee.',
      },
      {
        icon: 'scales',
        title: 'Honest view of the price',
        body: 'You get comparable rates for the area and an opinion on whether the asking price is reasonable — including when our opinion is that you should walk away.',
      },
      {
        icon: 'network',
        title: 'Real local network',
        body: 'Sellers who are genuinely willing to sell and buyers who are genuinely able to buy. We would rather show you four real options than forty listings.',
      },
      {
        icon: 'handshake',
        title: 'Negotiation on your behalf',
        body: 'We carry the offers, hold the line on the terms that matter to you, and keep the conversation professional so the deal does not collapse over ego.',
      },
      {
        icon: 'document',
        title: 'Documentation and registry',
        body: 'Agreement to sale, stamp duty, registration, mutation and handover — we stay on the file until your name is on the record, not just until the deal is signed.',
      },
      {
        icon: 'user',
        title: 'One point of contact',
        body: 'The same person who took your first call is the person who walks you through registration. Nothing gets lost in a handover.',
      },
    ],

    processEyebrow: 'How it works',
    processTitle: 'A clear path from enquiry to registry',
    processSub:
      'You will always know which step you are on and what happens next.',
    process: [
      {
        title: 'Understand the requirement',
        body: 'What you want to buy or sell, the budget or the price you expect, the area, and the timeline you are working to.',
      },
      {
        title: 'Shortlist and visit',
        body: 'We put together a small set of options that actually fit, and take you to see them. Sellers get a shortlist of genuine buyers instead.',
      },
      {
        title: 'Check the records',
        body: 'Title chain, record of rights, mutation status, encumbrances, disputes and any notification affecting the land. Findings in writing.',
      },
      {
        title: 'Negotiate and agree',
        body: 'Price, payment schedule, possession date and conditions — settled and put into a written agreement to sale.',
      },
      {
        title: 'Register and hand over',
        body: 'Stamp duty, execution of the sale deed, registration, mutation into your name, and physical handover.',
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
    title: 'Purchase & sale of agricultural land and commercial shops',
    sub: 'We act for buyers and for sellers. The work is the same either way: find the right counterparty, verify the paperwork, agree fair terms, and complete the transaction cleanly.',

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
    ],

    alsoEyebrow: 'Across both',
    alsoTitle: 'What every engagement includes',
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

  about: {
    eyebrow: 'About',
    title: 'A property practice built on verified paperwork',
    lede: 'Rathore Chambers INC deals in the purchase and sale of agricultural land and commercial property. We help clients identify suitable properties, negotiate deals, and complete transactions smoothly.',

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
      'Purchase and sale of agricultural land and commercial shops. We help clients identify suitable properties, negotiate deals and complete transactions smoothly.',
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
    tagline: 'कृषि भूमि एवं व्यावसायिक संपत्ति',
  },

  nav: {
    home: 'मुख्य पृष्ठ',
    services: 'सेवाएँ',
    agriculturalLand: 'कृषि भूमि',
    commercialShops: 'व्यावसायिक दुकानें',
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
      title: 'कृषि भूमि एवं व्यावसायिक दुकानें — खरीद और बिक्री',
      description:
        'Rathore Chambers INC कृषि भूमि और व्यावसायिक दुकानों के खरीदारों व विक्रेताओं की सहायता करता है — उपयुक्त संपत्ति चुनना, टाइटल की जाँच, उचित मोल-भाव और रजिस्ट्री तक पूरा काम।',
    },
    services: {
      title: 'हमारी सेवाएँ',
      description:
        'कृषि भूमि और व्यावसायिक दुकानों के लिए संपत्ति की तलाश, टाइटल सत्यापन, मोल-भाव, दस्तावेज़ीकरण और रजिस्ट्री में सहायता।',
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
    about: {
      title: 'हमारे बारे में',
      description:
        'Rathore Chambers INC कृषि भूमि और व्यावसायिक दुकानों से जुड़ी एक संपत्ति सलाहकार फर्म है, जिसका आधार सत्यापित दस्तावेज़ और स्पष्ट सलाह है।',
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
    eyebrow: 'कृषि भूमि · व्यावसायिक संपत्ति',
    h1Lead: 'ज़मीन और दुकान,',
    h1Accent: 'शुरू से अंत तक।',
    sub: 'हम खरीदारों और विक्रेताओं को सही कृषि भूमि और व्यावसायिक दुकान चुनने, पैसा देने से पहले दस्तावेज़ों की जाँच करने, उचित शर्तों पर मोल-भाव करने और रजिस्ट्री तक सौदा पूरा कराने में मदद करते हैं।',
    primaryCta: 'बातचीत शुरू करें',
    secondaryCta: 'हम क्या करते हैं',

    trust: [
      'पैसा देने से पहले टाइटल की जाँच',
      'कीमत पर साफ़ बात',
      'दस्तावेज़ी काम हमारा',
    ],

    panel: {
      label: 'खरीद से पहले जाँच',
      title: 'सम्यक जाँच',
      rows: [
        { name: 'मालिकाना शृंखला', status: 'सत्यापित' },
        { name: 'बंधक व भार', status: 'मुक्त' },
        { name: 'नामांतरण', status: 'अद्यतन' },
        { name: 'भू-उपयोग', status: 'पुष्ट' },
        { name: 'रास्ता व पैमाइश', status: 'मेल खाता' },
      ],
      footnote: 'आपके सामने रखी जाने वाली हर संपत्ति पहले यह जाँच पास करती है।',
    },

    statLabels: {
      years: 'वर्षों का अनुभव',
      deals: 'पूर्ण हुए सौदे',
      districts: 'ज़िले',
      clients: 'ग्राहकों को सलाह',
    },

    servicesEyebrow: 'हम क्या करते हैं',
    servicesTitle: 'दो काम, पूरी ज़िम्मेदारी के साथ',
    servicesSub:
      'हम कृषि भूमि और व्यावसायिक संपत्ति की खरीद-बिक्री का काम करते हैं। हमारी हर सेवा इन्हीं दो में से किसी एक के अंतर्गत आती है।',

    whyEyebrow: 'हमें क्यों चुनें',
    whyTitle: 'पहले कागज़, फिर कीमत, दबाव कभी नहीं',
    whySub:
      'कोई भी संपत्ति सौदा पैसे में बिगड़ने से बहुत पहले रिकॉर्ड में बिगड़ चुका होता है। हम उसी क्रम में काम करते हैं।',
    why: [
      {
        icon: 'shield',
        title: 'पैसा देने से पहले टाइटल की जाँच',
        body: 'राजस्व रिकॉर्ड में मालिकाना हक़ की पूरी शृंखला देखते हैं और बंधक, विवाद, काश्तकारी दावे तथा अधिग्रहण सूचनाओं की जाँच करते हैं — एक रुपया देने से पहले।',
      },
      {
        icon: 'scales',
        title: 'कीमत पर ईमानदार राय',
        body: 'आपको क्षेत्र की तुलनात्मक दरें और यह स्पष्ट राय मिलती है कि माँगी गई कीमत उचित है या नहीं — तब भी जब हमारी राय यह हो कि आपको यह सौदा छोड़ देना चाहिए।',
      },
      {
        icon: 'network',
        title: 'वास्तविक स्थानीय नेटवर्क',
        body: 'ऐसे विक्रेता जो सचमुच बेचना चाहते हैं और ऐसे खरीदार जो सचमुच खरीद सकते हैं। चालीस लिस्टिंग दिखाने से बेहतर है चार असली विकल्प दिखाना।',
      },
      {
        icon: 'handshake',
        title: 'आपकी ओर से मोल-भाव',
        body: 'हम प्रस्ताव आगे-पीछे पहुँचाते हैं, आपकी ज़रूरी शर्तों पर डटे रहते हैं, और बातचीत को इतना संयत रखते हैं कि सौदा अहं के कारण न टूटे।',
      },
      {
        icon: 'document',
        title: 'दस्तावेज़ीकरण और रजिस्ट्री',
        body: 'बयाना अनुबंध, स्टाम्प ड्यूटी, रजिस्ट्री, नामांतरण और क़ब्ज़ा — हम फ़ाइल तब तक नहीं छोड़ते जब तक रिकॉर्ड में आपका नाम दर्ज न हो जाए।',
      },
      {
        icon: 'user',
        title: 'एक ही संपर्क व्यक्ति',
        body: 'जिस व्यक्ति ने आपका पहला फ़ोन उठाया, वही रजिस्ट्री तक आपके साथ रहता है। बीच में कुछ भी खोता नहीं।',
      },
    ],

    processEyebrow: 'प्रक्रिया',
    processTitle: 'पूछताछ से रजिस्ट्री तक स्पष्ट रास्ता',
    processSub:
      'आपको हमेशा पता रहेगा कि आप किस चरण पर हैं और आगे क्या होने वाला है।',
    process: [
      {
        title: 'आवश्यकता समझना',
        body: 'आप क्या खरीदना या बेचना चाहते हैं, बजट या अपेक्षित कीमत, क्षेत्र, और आपकी समय-सीमा।',
      },
      {
        title: 'विकल्प चुनना और दिखाना',
        body: 'हम कुछ ऐसे विकल्प तैयार करते हैं जो वाकई उपयुक्त हों, और आपको मौके पर ले जाते हैं। विक्रेताओं को इसके बदले गंभीर खरीदारों की सूची मिलती है।',
      },
      {
        title: 'रिकॉर्ड की जाँच',
        body: 'मालिकाना शृंखला, खतौनी, नामांतरण की स्थिति, बंधक, विवाद और भूमि पर लागू कोई भी सरकारी सूचना। निष्कर्ष लिखित रूप में।',
      },
      {
        title: 'मोल-भाव और सहमति',
        body: 'कीमत, भुगतान का क्रम, क़ब्ज़े की तारीख़ और शर्तें — तय करके लिखित बयाना अनुबंध में दर्ज।',
      },
      {
        title: 'रजिस्ट्री और क़ब्ज़ा',
        body: 'स्टाम्प ड्यूटी, विक्रय-पत्र का निष्पादन, रजिस्ट्री, आपके नाम नामांतरण और वास्तविक क़ब्ज़ा।',
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
    title: 'कृषि भूमि और व्यावसायिक दुकानों की खरीद व बिक्री',
    sub: 'हम खरीदार और विक्रेता, दोनों के लिए काम करते हैं। दोनों में काम एक ही है — सही पक्ष ढूँढना, दस्तावेज़ जाँचना, उचित शर्तें तय करना और सौदा साफ़-सुथरे ढंग से पूरा करना।',

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
    ],

    alsoEyebrow: 'दोनों में शामिल',
    alsoTitle: 'हर काम में यह सब शामिल रहता है',
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
