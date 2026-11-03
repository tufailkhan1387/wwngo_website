export type Lang = 'en' | 'fr';

export type FaqItem = { q: string; a: string };

export type StepItem = { title: string; body: string };

export type FeatureItem = { title: string; body: string };

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalPageCopy = {
  title: string;
  lead: string;
  draftNotice: string;
  lastUpdatedLabel: string;
  lastUpdatedValue: string;
  sections: LegalSection[];
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export type TranslationTree = {
  nav: {
    home: string;
    about: string;
    howItWorks: string;
    forCustomers: string;
    forTravelers: string;
    forReceivers: string;
    features: string;
    safety: string;
    faq: string;
    contact: string;
    downloadApp: string;
    solutions: string;
    language: string;
    menuOpen: string;
    menuClose: string;
  };
  common: {
    brand: string;
    getOnGooglePlay: string;
    downloadOnAppStore: string;
    storeLinkPlaceholder: string;
    appLabel: string;
    downloadTitle: string;
    downloadLead: string;
    learnMore: string;
    learnHow: string;
    viewAllFaq: string;
    sendMessage: string;
    required: string;
    successContact: string;
    errorContact: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    inquiryType: string;
    inquiryGeneral: string;
    inquirySender: string;
    inquiryTraveler: string;
    inquiryReceiver: string;
    inquiryPartnership: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderSubject: string;
    placeholderMessage: string;
    backToHome: string;
    readMore: string;
    stepLabel: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    customerLinks: string;
    travelerLinks: string;
    receiverLinks: string;
    contactInfo: string;
    legal: string;
    social: string;
    rights: string;
    supportEmail: string;
    businessEmail: string;
    address: string;
    supportEmailPlaceholder: string;
    businessEmailPlaceholder: string;
    addressPlaceholder: string;
    privacy: string;
    terms: string;
    cookies: string;
    safetyRules: string;
    prohibited: string;
    refund: string;
    socialPlaceholder: string;
  };
  home: {
    heroBrand: string;
    heroBadge: string;
    heroBadgeAccent: string;
    heroHeadline: string;
    heroLead: string;
    heroCtaDownload: string;
    heroCtaHow: string;
    whatIsEyebrow: string;
    whatIsTitle: string;
    whatIsLead: string;
    whatIsBody: string;
    howWorksEyebrow: string;
    howWorksTitle: string;
    howWorksLead: string;
    flowRoleSender: string;
    flowRoleTraveler: string;
    flowRoleReceiver: string;
    howWorksSteps: StepItem[];
    rolesEyebrow: string;
    rolesTitle: string;
    rolesLead: string;
    roleCustomerTitle: string;
    roleCustomerLead: string;
    roleTravelerTitle: string;
    roleTravelerLead: string;
    roleReceiverTitle: string;
    roleReceiverLead: string;
    featuresEyebrow: string;
    featuresTitle: string;
    featuresLead: string;
    featuresItems: FeatureItem[];
    safetyEyebrow: string;
    safetyTitle: string;
    safetyLead: string;
    safetyPoints: string[];
    whyEyebrow: string;
    whyTitle: string;
    whyItems: FeatureItem[];
    faqEyebrow: string;
    faqTitle: string;
    faqPreview: FaqItem[];
    testimonialsNote: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaDownload: string;
    ctaHow: string;
    missionEyebrow: string;
    missionTitle: string;
    missionBody: string;
    visionEyebrow: string;
    visionTitle: string;
    visionBody: string;
    marketplaceEyebrow: string;
    marketplaceTitle: string;
    marketplaceBody: string;
    marketplaceOutLabel: string;
    marketplaceOutItems: string[];
    marketplaceInLabel: string;
    marketplaceInItems: string[];
    valuesEyebrow: string;
    valuesTitle: string;
    values: FeatureItem[];
    appOnlyEyebrow: string;
    appOnlyTitle: string;
    appOnlyBody: string;
  };
  howItWorks: {
    title: string;
    lead: string;
    flowTitle: string;
    flowLead: string;
    steps: StepItem[];
    escrowTitle: string;
    escrowBody: string;
    nfcTitle: string;
    nfcBody: string;
    paymentTitle: string;
    paymentBody: string;
  };
  customers: {
    title: string;
    lead: string;
    stepsLabel: string;
    journeyTitle: string;
    steps: StepItem[];
    benefitsTitle: string;
    benefits: FeatureItem[];
    faqTitle: string;
    faqs: FaqItem[];
  };
  travelers: {
    title: string;
    lead: string;
    stepsLabel: string;
    journeyTitle: string;
    steps: StepItem[];
    benefitsTitle: string;
    benefits: FeatureItem[];
    faqTitle: string;
    faqs: FaqItem[];
  };
  receivers: {
    title: string;
    lead: string;
    journeyTitle: string;
    steps: StepItem[];
    flowVisualLabel: string;
    benefitsTitle: string;
    benefits: FeatureItem[];
    faqTitle: string;
    faqs: FaqItem[];
  };
  features: {
    title: string;
    lead: string;
    eyebrow: string;
    groups: { title: string; items: FeatureItem[] }[];
  };
  safety: {
    title: string;
    lead: string;
    sections: { title: string; body: string; bullets?: string[] }[];
  };
  faq: {
    title: string;
    lead: string;
    topicsLabel: string;
    searchPlaceholder: string;
    categories: FaqCategory[];
  };
  contact: {
    title: string;
    lead: string;
    formTitle: string;
    formLead: string;
    officeTitle: string;
    phoneLabel: string;
    phonePlaceholder: string;
  };
  download: {
    title: string;
    lead: string;
    introTitle: string;
    introBody: string;
    benefitsTitle: string;
    benefits: FeatureItem[];
    qrTitle: string;
    qrNote: string;
    webNote: string;
  };
  legal: {
    privacy: LegalPageCopy;
    terms: LegalPageCopy;
    cookies: LegalPageCopy;
    safetyRules: LegalPageCopy;
    prohibited: LegalPageCopy;
    refund: LegalPageCopy;
  };
};
