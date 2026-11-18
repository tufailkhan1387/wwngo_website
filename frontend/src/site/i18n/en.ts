import type { TranslationTree } from './types';

export const en: TranslationTree = {
  nav: {
    home: 'Home',
    about: 'About',
    howItWorks: 'How it works',
    forCustomers: 'For senders',
    forTravelers: 'For travelers',
    forReceivers: 'For receivers',
    features: 'Features',
    safety: 'Safety & Security',
    faq: 'FAQ',
    contact: 'Contact',
    downloadApp: 'Download app',
    solutions: 'Solutions',
    language: 'Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  common: {
    brand: 'WWNGO',
    getOnGooglePlay: 'Get it on Google Play',
    downloadOnAppStore: 'Download on the App Store',
    storeLinkPlaceholder: 'Store link will be added when the app is published.',
    appLabel: 'Mobile app',
    downloadTitle: 'Bookings and delivery happen in the app',
    downloadLead:
      'WWNGO connects senders, travelers, and receivers worldwide. Download the app to create trips, send parcels, and complete secure handoffs.',
    learnMore: 'Learn more',
    learnHow: 'See how it works',
    viewAllFaq: 'View all FAQ',
    sendMessage: 'Send message',
    required: 'Required',
    minChars: 'Please enter at least {n} characters.',
    successContact: 'Thank you, your message was sent. We will respond as soon as possible.',
    errorContact: 'Something went wrong. Please try again or email us directly.',
    name: 'Full name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    inquiryType: 'Inquiry type',
    inquiryGeneral: 'General question',
    inquirySender: 'Sender support',
    inquiryTraveler: 'Traveler support',
    inquiryReceiver: 'Receiver support',
    inquiryPartnership: 'Partnerships',
    placeholderName: 'Your name',
    placeholderEmail: 'you@example.com',
    placeholderSubject: 'How can we help?',
    placeholderMessage: 'Tell us more about your request…',
    backToHome: 'Back to home',
    readMore: 'Read more',
    stepLabel: 'Step',
  },
  footer: {
    tagline: 'Peer-to-peer international parcel delivery, powered by verified travelers.',
    quickLinks: 'Quick links',
    customerLinks: 'For senders',
    travelerLinks: 'For travelers',
    receiverLinks: 'For receivers',
    contactInfo: 'Contact',
    legal: 'Legal',
    social: 'Social',
    rights: 'All rights reserved.',
    supportEmail: 'Support',
    businessEmail: 'Business',
    address: 'Office',
    supportEmailPlaceholder: 'support@wwngo.com',
    businessEmailPlaceholder: 'info@wwngo.com',
    addressPlaceholder: 'info@wwngo.com',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
    cookies: 'Cookie policy',
    safetyRules: 'Safety rules',
    prohibited: 'Prohibited items',
    refund: 'Refund policy',
    deleteAccount: 'Delete account',
    socialPlaceholder: 'Social links will be published here.',
  },
  home: {
    heroBrand: 'WWNGO',
    heroBadge: 'Peer-to-peer parcel marketplace',
    heroBadgeAccent: 'International',
    heroHeadline: 'Send parcels across borders with travelers you can trust',
    heroLead:
      'A peer-to-peer marketplace connecting senders, verified travelers, and receivers, with escrow, identity checks, and NFC handoff in the mobile app.',
    heroCtaDownload: 'Download the app',
    heroCtaHow: 'How it works',
    whatIsEyebrow: 'What is WWNGO',
    whatIsTitle: 'International delivery through real journeys',
    whatIsLead: 'Not a courier franchise, a marketplace built around people already traveling.',
    whatIsBody:
      'WWNGO lets senders post parcel requests along international routes. Travelers who are already flying or driving can carry items within agreed limits, earn compensation, and hand off securely to receivers. Payments are held in escrow until delivery is confirmed in the app.',
    howWorksEyebrow: 'Overview',
    howWorksTitle: 'Three roles, one connected flow',
    howWorksLead: 'Every delivery follows the same transparent path from request to release.',
    flowRoleSender: 'Sender',
    flowRoleTraveler: 'Traveler',
    flowRoleReceiver: 'Receiver',
    howWorksSteps: [
      {
        title: 'Sender posts a request',
        body: 'Describe the parcel, route, and timing. WWNGO helps match you with a verified traveler heading your way.',
      },
      {
        title: 'Traveler accepts and carries',
        body: 'Funds move to escrow via Stripe. The traveler picks up the item, updates tracking, and travels with your parcel.',
      },
      {
        title: 'Receiver confirms handoff',
        body: 'NFC or in-app confirmation completes delivery. Escrow releases payment to the traveler after successful handoff.',
      },
    ],
    rolesEyebrow: 'Who it is for',
    rolesTitle: 'Built for every side of the journey',
    rolesLead: 'Choose your role to see the full journey in the app.',
    roleCustomerTitle: 'For senders',
    roleCustomerLead: 'Ship affordably with travelers on your route. Escrow protects your payment until delivery.',
    roleTravelerTitle: 'Travelers',
    roleTravelerLead: 'Monetize spare luggage space on trips you already take, with KYC verification and clear rules.',
    roleReceiverTitle: 'Receivers',
    roleReceiverLead: 'Get notified when a parcel is on its way and confirm pickup with a secure in-app handoff.',
    featuresEyebrow: 'Platform',
    featuresTitle: 'Tools designed for cross-border trust',
    featuresLead: 'Identity, payments, messaging, and handoff, integrated in one marketplace.',
    featuresItems: [
      {
        title: 'Identity verification (KYC)',
        body: 'Sumsub-powered checks help verify travelers and participants before they transact.',
      },
      {
        title: 'Escrow & Stripe payments',
        body: 'Sender funds are held securely until delivery conditions are met.',
      },
      {
        title: 'NFC handoff',
        body: 'Confirm physical exchange with NFC-supported confirmation where available.',
      },
      {
        title: 'In-app chat & tracking',
        body: 'Coordinate pickup windows and follow status updates without leaving WWNGO.',
      },
    ],
    safetyEyebrow: 'Safety',
    safetyTitle: 'Safety is built into the marketplace',
    safetyLead: 'Clear rules, verification, and dispute paths, not anonymous handoffs.',
    safetyPoints: [
      'Verified identities through KYC before travelers carry parcels',
      'Escrow holds payment until confirmed delivery',
      'Prohibited-items policy and community safety rules',
      'Ratings and reporting to maintain marketplace quality',
    ],
    whyEyebrow: 'Why WWNGO',
    whyTitle: 'Why choose peer-to-peer delivery',
    whyItems: [
      {
        title: 'Flexible routes',
        body: 'Match parcels to real trips instead of fixed hub networks.',
      },
      {
        title: 'Transparent pricing',
        body: 'Agree terms in the app before funds are committed to escrow.',
      },
      {
        title: 'Global reach',
        body: 'Connect senders and receivers across countries through traveler journeys.',
      },
      {
        title: 'App-first experience',
        body: 'Booking, chat, wallet, and handoff live in the mobile app, this site is your guide.',
      },
    ],
    faqEyebrow: 'FAQ',
    faqTitle: 'Common questions',
    faqPreview: [
      {
        q: 'Can I book a delivery on this website?',
        a: 'No. WWNGO bookings, payments, and handoffs happen in the mobile app. This site explains how the marketplace works.',
      },
      {
        q: 'How is my payment protected?',
        a: 'Sender payments are processed through Stripe and held in escrow until delivery is confirmed according to marketplace rules.',
      },
      {
        q: 'Who can become a traveler?',
        a: 'Adults who complete identity verification (KYC) and accept traveler guidelines can offer capacity on eligible routes.',
      },
    ],
    testimonialsNote:
      'Community stories will appear here when verified user testimonials are available.',
  },
  about: {
    eyebrow: 'About',
    title: 'About WWNGO',
    lead: 'We connect senders, travelers, and receivers in a peer-to-peer international parcel marketplace.',
    ctaDownload: 'Download the app',
    ctaHow: 'How it works',
    missionEyebrow: 'Mission',
    missionTitle: 'Our mission',
    missionBody:
      'WWNGO makes cross-border parcel delivery more accessible by aligning shipments with journeys people already take. We focus on trust, transparency, and tools that keep every participant informed from pickup to handoff.',
    visionEyebrow: 'Vision',
    visionTitle: 'Our vision',
    visionBody:
      'A world where sending a parcel abroad is as natural as sharing a ride, with strong safeguards, verified identities, and fair compensation for travelers.',
    marketplaceEyebrow: 'Model',
    marketplaceTitle: 'A marketplace, not a traditional courier',
    marketplaceBody:
      'WWNGO is a technology platform. Travelers are independent participants who choose which requests to accept. Senders and receivers agree to terms in the app. We provide matching, payments infrastructure, messaging, and safety policies, delivery execution happens through the community.',
    marketplaceOutLabel: 'Not this',
    marketplaceOutItems: ['Courier franchise', 'Fixed hub network', 'Centralized execution'],
    marketplaceInLabel: 'WWNGO',
    marketplaceInItems: ['Marketplace platform', 'Trips already planned', 'Verified community'],
    valuesEyebrow: 'Values',
    valuesTitle: 'What we stand for',
    values: [
      { title: 'Trust by design', body: 'Verification, escrow, and clear rules before money moves.' },
      { title: 'Respect for travelers', body: 'Fair earnings and explicit limits on what can be carried.' },
      { title: 'Clarity for receivers', body: 'Notifications and handoff steps that reduce uncertainty.' },
      { title: 'Safety over speed', body: 'Prohibited items and reporting paths protect the community.' },
    ],
    appOnlyEyebrow: 'App first',
    appOnlyTitle: 'Mobile app for transactions',
    appOnlyBody:
      'This marketing website does not process bookings or payments. Download the WWNGO app to create requests, accept trips, fund escrow, and complete NFC or in-app confirmation.',
  },
  howItWorks: {
    title: 'How WWNGO works',
    lead: 'From sender request to payment release, a step-by-step look at the marketplace flow.',
    flowTitle: 'Sender → traveler → receiver',
    flowLead: 'Each role has dedicated screens in the app; this is the shared delivery lifecycle.',
    steps: [
      {
        title: 'Sender creates a parcel request',
        body: 'Enter route, dates, parcel details, and compensation. WWNGO surfaces matching travelers.',
      },
      {
        title: 'Traveler reviews and accepts',
        body: 'Travelers see requests on their route, confirm capacity, and accept terms.',
      },
      {
        title: 'Payment to escrow',
        body: 'The sender pays through Stripe. Funds are held in escrow, not released to the traveler yet.',
      },
      {
        title: 'Pickup and transit',
        body: 'Traveler collects the parcel, uses in-app chat, and updates status while traveling.',
      },
      {
        title: 'Handoff to receiver',
        body: 'Receiver meets the traveler (or designated handoff). NFC or in-app confirmation records delivery.',
      },
      {
        title: 'Escrow release',
        body: 'After successful confirmation, escrow releases payment to the traveler per marketplace rules.',
      },
    ],
    escrowTitle: 'Escrow protects both sides',
    escrowBody:
      'Escrow means the sender’s payment is secured until delivery criteria are met. If a trip cannot be completed according to policy, refund and dispute processes apply, see our refund policy placeholder for draft terms.',
    nfcTitle: 'NFC-supported confirmation',
    nfcBody:
      'Where supported on devices, NFC helps verify that the physical handoff occurred between the right participants, adding an extra layer of proof alongside in-app status.',
    paymentTitle: 'Stripe-powered payments',
    paymentBody:
      'WWNGO uses Stripe for payment processing. Wallet and payout details for travelers are managed in the app according to regional availability.',
  },
  customers: {
    title: 'For senders',
    lead: 'Post a parcel request, fund escrow, and track your shipment until the receiver confirms delivery.',
    stepsLabel: 'Steps',
    journeyTitle: 'Your journey as a sender',
    steps: [
      {
        title: 'Register and verify with OTP',
        body: 'Create your account in the WWNGO app and confirm your phone or email with a one-time code.',
      },
      {
        title: 'Complete identity verification',
        body: 'Finish KYC through Sumsub when required so travelers and receivers can trust your profile.',
      },
      {
        title: 'Build your sender profile',
        body: 'Add profile details that help matching and support smoother coordination.',
      },
      {
        title: 'Add receiver details',
        body: 'Nominate who will receive the parcel and how they will be notified for handoff.',
      },
      {
        title: 'Create a parcel request',
        body: 'Enter origin, destination, timing, parcel description, size/weight, and proposed compensation.',
      },
      {
        title: 'Upload parcel photos',
        body: 'Attach clear photos so travelers can assess the item before accepting.',
      },
      {
        title: 'Find matching travelers',
        body: 'Review travelers already heading your way, including ratings and trip details.',
      },
      {
        title: 'Send a delivery request',
        body: 'Invite a traveler to carry your parcel and agree on public meetup logistics.',
      },
      {
        title: 'Pay into escrow (Stripe)',
        body: 'Fund the trip securely. Money is held in escrow, not released until confirmed delivery.',
      },
      {
        title: 'Handover and NFC verification',
        body: 'Meet at an agreed public location. Confirm collection with NFC or in-app verification.',
      },
      {
        title: 'Track and chat',
        body: 'Follow status updates and coordinate with traveler and receiver in real-time chat.',
      },
      {
        title: 'Receiver confirmation & release',
        body: 'When the receiver confirms handoff, escrow releases payment and the trip is complete.',
      },
    ],
    benefitsTitle: 'Why send with WWNGO',
    benefits: [
      { title: 'Route-based matching', body: 'Find travelers already going your way.' },
      { title: 'Escrow-backed payments', body: 'Pay with confidence until delivery is confirmed.' },
      { title: 'Clear parcel rules', body: 'Prohibited-items and safety policies set expectations upfront.' },
      { title: 'Support path', body: 'Contact support through the app or our contact form for account help.' },
    ],
    faqTitle: 'Sender FAQ',
    faqs: [
      {
        q: 'What can I send?',
        a: 'Only items allowed under WWNGO prohibited-items and safety rules. Dangerous, illegal, or restricted goods are not permitted.',
      },
      {
        q: 'When is my card charged?',
        a: 'When you fund escrow for an accepted trip. Release to the traveler happens after confirmed delivery.',
      },
      {
        q: 'What if my traveler cancels?',
        a: 'Marketplace and refund policies define next steps. See the refund policy page for draft placeholder terms.',
      },
    ],
  },
  travelers: {
    title: 'For travelers',
    lead: 'Earn by carrying parcels on trips you already plan, with verification, escrow, and clear guidelines.',
    stepsLabel: 'Steps',
    journeyTitle: 'Your journey as a traveler',
    steps: [
      {
        title: 'Register and verify',
        body: 'Create your traveler account and confirm access with OTP verification.',
      },
      {
        title: 'Complete Sumsub KYC',
        body: 'Verify your identity so senders can trust who is carrying their parcel.',
      },
      {
        title: 'Create your traveler profile',
        body: 'Add the details that help senders evaluate reliability and trip fit.',
      },
      {
        title: 'Add travel details',
        body: 'Publish origin, destination, and travel dates for the routes you already plan.',
      },
      {
        title: 'Declare luggage capacity',
        body: 'Share available space/weight so only suitable parcels are matched to you.',
      },
      {
        title: 'Discover matching requests',
        body: 'Browse parcel requests that align with your route and timing.',
      },
      {
        title: 'Submit delivery bids',
        body: 'Offer to carry a parcel and propose or accept compensation within marketplace rules.',
      },
      {
        title: 'Accept and agree meetup',
        body: 'Confirm the trip and agree on a public meetup location with the sender.',
      },
      {
        title: 'Inspect and collect with NFC',
        body: 'Inspect the parcel against the listing, then confirm collection with NFC or in-app proof.',
      },
      {
        title: 'Deliver and confirm handoff',
        body: 'Meet the receiver, complete final NFC/in-app confirmation, then receive escrow payout.',
      },
    ],
    benefitsTitle: 'Why travel with WWNGO',
    benefits: [
      { title: 'Monetize spare capacity', body: 'Use allowed luggage space on journeys you already take.' },
      { title: 'Transparent earnings', body: 'See compensation before you accept a request.' },
      { title: 'Wallet & payouts', body: 'Manage earnings in the app where payouts are supported.' },
      { title: 'Ratings', body: 'Build reputation with completed deliveries and sender feedback.' },
    ],
    faqTitle: 'Traveler FAQ',
    faqs: [
      {
        q: 'Do I need to be a professional courier?',
        a: 'No. You are an independent traveler accepting requests you choose, subject to verification and marketplace rules.',
      },
      {
        q: 'What verification is required?',
        a: 'KYC through Sumsub and acceptance of safety and prohibited-items policies.',
      },
      {
        q: 'When do I receive payment?',
        a: 'After successful delivery confirmation and escrow release according to marketplace rules.',
      },
    ],
  },
  receivers: {
    title: 'For receivers',
    lead: 'Be ready for handoff, notifications, chat, and secure confirmation when your parcel arrives.',
    journeyTitle: 'Your journey as a receiver',
    steps: [
      {
        title: 'Receive an invitation',
        body: 'The sender links you as the receiver for a specific parcel request in the app.',
      },
      {
        title: 'Register and verify with OTP',
        body: 'Create your receiver account and confirm it with a one-time verification code.',
      },
      {
        title: 'Set up your receiver profile',
        body: 'Complete basic profile details so handoffs and support can identify you correctly.',
      },
      {
        title: 'View parcel details',
        body: 'Review photos, description, traveler info, and expected timing before collection.',
      },
      {
        title: 'Track delivery progress',
        body: 'Follow status updates as the traveler moves from pickup toward your location.',
      },
      {
        title: 'Chat with sender and traveler',
        body: 'Coordinate timing and a public meeting point without leaving the app.',
      },
      {
        title: 'Accept or raise an issue',
        body: 'Confirm you can receive the delivery, or report a problem before final confirmation.',
      },
      {
        title: 'Meet, inspect, and NFC confirm',
        body: 'Inspect the parcel, then complete NFC or in-app confirmation to mark successful receipt.',
      },
    ],
    flowVisualLabel: 'Receiver handoff flow',
    benefitsTitle: 'Why receivers use WWNGO',
    benefits: [
      { title: 'Visibility', body: 'Know when a parcel is in transit and who is carrying it.' },
      { title: 'Secure confirmation', body: 'Handoff steps tied to escrow release reduce disputes.' },
      { title: 'Direct coordination', body: 'Chat with traveler and sender without third-party guesswork.' },
      { title: 'No website booking needed', body: 'Everything happens in the app once the sender adds you.' },
    ],
    faqTitle: 'Receiver FAQ',
    faqs: [
      {
        q: 'Do I need an account?',
        a: 'Yes, receivers participate in the app to confirm delivery and receive notifications.',
      },
      {
        q: 'What is NFC confirmation?',
        a: 'A device-supported way to record that handoff occurred between the correct parties.',
      },
      {
        q: 'What if I cannot meet the traveler?',
        a: 'Coordinate alternatives in chat. Unresolved issues follow marketplace support and refund policies.',
      },
    ],
  },
  features: {
    title: 'Platform features',
    lead: 'Everything that powers trust, matching, and delivery in the WWNGO mobile app.',
    eyebrow: 'Features',
    groups: [
      {
        title: 'Trust & compliance',
        items: [
          {
            title: 'Sumsub KYC',
            body: 'Identity verification for travelers and participants as required by marketplace policy.',
          },
          {
            title: 'Ratings & reviews',
            body: 'Post-delivery feedback helps the community choose reliable partners.',
          },
          {
            title: 'Safety rules & prohibited items',
            body: 'Published policies define what may not be carried or sent.',
          },
        ],
      },
      {
        title: 'Payments & wallet',
        items: [
          {
            title: 'Stripe checkout',
            body: 'Card payments for senders funding escrow.',
          },
          {
            title: 'Escrow holding',
            body: 'Funds held until delivery confirmation triggers release.',
          },
          {
            title: 'Traveler wallet',
            body: 'Track earnings and payouts where supported in your region.',
          },
        ],
      },
      {
        title: 'Delivery experience',
        items: [
          {
            title: 'Route matching',
            body: 'Connect parcel requests with travelers on compatible trips.',
          },
          {
            title: 'Live tracking & status',
            body: 'Milestone updates from pickup through handoff.',
          },
          {
            title: 'NFC handoff',
            body: 'Optional NFC confirmation at delivery where devices support it.',
          },
          {
            title: 'In-app chat',
            body: 'Coordinate pickup and delivery without sharing personal contact details unnecessarily.',
          },
          {
            title: 'Push notifications',
            body: 'Alerts for matches, messages, and handoff reminders.',
          },
        ],
      },
    ],
  },
  safety: {
    title: 'Safety',
    lead: 'How WWNGO approaches verification, payments, acceptable items, and community conduct.',
    sections: [
      {
        title: 'Identity verification',
        body: 'Travelers complete KYC through Sumsub before carrying parcels. Verification helps reduce fraud and builds sender confidence.',
      },
      {
        title: 'Escrow and payments',
        body: 'Payments are processed via Stripe and held in escrow until delivery is confirmed. This aligns incentives for senders, travelers, and receivers.',
        bullets: [
          'Senders fund escrow when a trip is accepted',
          'Travelers are paid after confirmed handoff',
          'Disputes follow marketplace and refund policies',
        ],
      },
      {
        title: 'Prohibited and restricted items',
        body: 'WWNGO maintains a prohibited-items policy. Illegal, dangerous, or restricted goods must not be sent. Violations can lead to account action.',
      },
      {
        title: 'In-app communication',
        body: 'Use WWNGO chat for coordination. Report suspicious behavior through in-app reporting where available or via contact support.',
      },
      {
        title: 'Handoff best practices',
        body: 'Meet in safe public locations when possible, verify parcel details, and complete NFC or in-app confirmation at handoff.',
        bullets: [
          'Confirm traveler identity in the app',
          'Inspect parcels for damage before confirming',
          'Complete confirmation only when you have received the correct item',
        ],
      },
      {
        title: 'Community standards',
        body: 'Ratings, reporting, and enforcement of safety rules help maintain marketplace quality. Full legal text appears in our safety rules placeholder page.',
      },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    lead: 'Answers about WWNGO, the app, payments, and each role in the marketplace.',
    topicsLabel: 'Topics',
    searchPlaceholder: 'Search questions',
    categories: [
      {
        id: 'general',
        title: 'General',
        items: [
          {
            q: 'What is WWNGO?',
            a: 'WWNGO is a peer-to-peer international parcel delivery marketplace connecting senders, travelers, and receivers through a mobile app.',
          },
          {
            q: 'Is this website where I book deliveries?',
            a: 'No. This site is informational. Bookings, escrow, chat, and handoff are in the mobile app.',
          },
          {
            q: 'Which languages are supported?',
            a: 'This marketing site is available in English and French. In-app language support may vary by release.',
          },
        ],
      },
      {
        id: 'customers',
        title: 'Senders',
        items: [
          {
            q: 'How do I create a parcel request?',
            a: 'Download the app, sign in, and follow the sender flow to post route and parcel details.',
          },
          {
            q: 'Are my items insured?',
            a: 'Insurance terms depend on marketplace policy and regional rules. Refer to terms of service placeholder for draft details.',
          },
        ],
      },
      {
        id: 'travelers',
        title: 'Travelers',
        items: [
          {
            q: 'How do I get verified?',
            a: 'Complete Sumsub KYC in the app and accept traveler guidelines.',
          },
          {
            q: 'Can I refuse a parcel?',
            a: 'You choose which requests to accept. Do not accept items that violate prohibited-items rules.',
          },
        ],
      },
      {
        id: 'receivers',
        title: 'Receivers',
        items: [
          {
            q: 'How am I notified?',
            a: 'Push notifications and in-app updates keep you informed until handoff.',
          },
        ],
      },
      {
        id: 'payments',
        title: 'Payments & escrow',
        items: [
          {
            q: 'What is escrow?',
            a: 'Funds are held securely until delivery confirmation, then released to the traveler per policy.',
          },
          {
            q: 'Which payment methods are supported?',
            a: 'Stripe handles card payments in the app. Available methods may vary by country.',
          },
        ],
      },
      {
        id: 'safety',
        title: 'Security & verification',
        items: [
          {
            q: 'Where can I see prohibited items?',
            a: 'See the Prohibited items page under Legal for draft policy placeholder text.',
          },
          {
            q: 'How do I report a problem?',
            a: 'Use in-app reporting or contact support via the Contact page.',
          },
          {
            q: 'What is Sumsub used for?',
            a: 'Sumsub powers identity verification (KYC) so marketplace participants can be vetted before carrying or sending parcels.',
          },
        ],
      },
      {
        id: 'delivery',
        title: 'Parcel delivery',
        items: [
          {
            q: 'How is handoff confirmed?',
            a: 'Receivers confirm delivery with NFC or in-app verification so escrow can release payment.',
          },
          {
            q: 'Where should we meet?',
            a: 'WWNGO recommends public meetup locations agreed in chat between the parties.',
          },
        ],
      },
      {
        id: 'app',
        title: 'Mobile app',
        items: [
          {
            q: 'Where do I download the app?',
            a: 'Use the Download App page. Store links appear as placeholders until official Google Play and App Store URLs are provided.',
          },
          {
            q: 'Can I book a delivery on this website?',
            a: 'No. Booking, matching, escrow, chat, and NFC confirmation happen only in the WWNGO mobile app.',
          },
        ],
      },
    ],
  },
  contact: {
    title: 'Contact us',
    lead: 'Questions about WWNGO, partnerships, or support, send us a message.',
    formTitle: 'Send a message',
    formLead: 'We typically respond within a few business days. Fields marked with * are required.',
    officeTitle: 'Other ways to reach us',
    phoneLabel: 'Phone',
    phonePlaceholder: '[Phone number placeholder]',
  },
  deleteAccount: {
    title: 'Delete account',
    lead:
      'Request permanent deletion of your WWNGO account and associated personal data. This page explains the process and lets you submit a deletion request online.',
    formTitle: 'Account deletion request',
    formLead:
      'Use the email address linked to your WWNGO account. We may contact you to verify ownership before completing deletion.',
    stepsTitle: 'How account deletion works',
    steps: [
      {
        title: 'Submit a request',
        body: 'Fill out the form on this page with the email used for your WWNGO account. You can also email support@wwngo.com with the subject “Delete my account”.',
      },
      {
        title: 'Identity verification',
        body: 'We verify that the request comes from the account owner. Active deliveries, open disputes, or unpaid balances may need to be resolved first.',
      },
      {
        title: 'Permanent deletion',
        body: 'After verification, we permanently delete or anonymize personal account data. You will lose access to the app with that account.',
      },
    ],
    dataTitle: 'What happens to your data',
    dataDeletedIntro: 'When deletion is completed, we remove or anonymize:',
    dataDeleted: [
      'Account profile details (name, email, phone, preferences)',
      'Login credentials and authentication tokens',
      'In-app chat history tied to your account where feasible',
      'Device tokens used for push notifications',
    ],
    dataRetainedIntro: 'We may retain limited records where required by law or for fraud prevention, for example:',
    dataRetained: [
      'Transaction, escrow, and payout records needed for accounting or disputes',
      'KYC or security logs required by legal or compliance obligations',
      'Records needed to prevent abuse after deletion',
    ],
    processingNote:
      'Deletion requests are typically processed within 30 days after identity verification. Incomplete requests may take longer while we contact you.',
    emailLabel: 'Account email',
    emailHint: 'Must match the email on your WWNGO account',
    nameLabel: 'Full name',
    phoneLabel: 'Phone number',
    phoneOptional: 'Optional',
    reasonLabel: 'Reason (optional)',
    reasonPlaceholder: 'Tell us briefly why you are leaving (optional)',
    confirmLabel:
      'I understand that deleting my WWNGO account is permanent and that I will lose access to my profile, wallet balance handling, and delivery history linked to this account.',
    submit: 'Request account deletion',
    success:
      'Your deletion request was submitted. We will follow up at the email you provided after verifying your account.',
    error: 'Something went wrong. Please try again or email support@wwngo.com.',
  },
  download: {
    title: 'Download WWNGO',
    lead: 'Get the app to send parcels, carry on your trips, and confirm handoffs.',
    introTitle: 'The marketplace lives in your pocket',
    introBody:
      'Create requests, accept trips, fund escrow, chat, track, and complete NFC or in-app confirmation, all in the WWNGO mobile app.',
    benefitsTitle: 'What you can do in the app',
    benefits: [
      { title: 'Send & receive', body: 'Full sender and receiver workflows with notifications.' },
      { title: 'Travel & earn', body: 'Offer capacity on routes you already travel.' },
      { title: 'Pay securely', body: 'Stripe and escrow integrated into each trip.' },
      { title: 'Stay connected', body: 'Chat, ratings, and wallet in one place.' },
    ],
    qrTitle: 'Scan to download',
    qrNote: '[QR code placeholder, add store URLs and QR artwork when apps are published.]',
    webNote: 'Store badges link to Google Play and the App Store when URLs are configured in environment variables.',
  },
  legal: {
    privacy: {
      title: 'Privacy policy',
      lead:
        'How WWNGO collects, uses, stores, and protects personal data across our website and mobile marketplace for Senders, Travelers, and Receivers.',
      draftNotice: '',
      lastUpdatedLabel: 'Last updated',
      lastUpdatedValue: '',
      sections: [
        {
          heading: '1. Who we are',
          paragraphs: [
            'WWNGO is a peer-to-peer international parcel delivery marketplace. We connect Senders who need parcels delivered, Travelers who can carry capacity on trips they already take, and Receivers who collect parcels at destination.',
            'In this policy, “WWNGO”, “we”, “us”, and “our” refer to the WWNGO platform and its operators. For privacy requests, contact support@wwngo.com. For general inquiries, contact info@wwngo.com.',
          ],
        },
        {
          heading: '2. Scope of this policy',
          paragraphs: [
            'This Privacy Policy covers personal data processed through:',
          ],
          list: [
            'The WWNGO marketing website, including language preference, contact forms, and account-deletion request forms',
            'The WWNGO mobile app used for accounts, matching, chat, escrow payments, KYC, tracking, ratings, wallet activity, and NFC or in-app handoff confirmation',
            'Backend systems that support authentication, notifications, disputes, and marketplace operations',
          ],
        },
        {
          heading: '3. Data we collect',
          paragraphs: [
            'We collect only what is needed to run a trusted delivery marketplace. The exact data depends on your role and how you use WWNGO.',
          ],
          list: [
            'Account and profile: name, email, phone number, password or auth tokens, preferred language, selected role (Sender, Traveler, Receiver), and profile information you choose to add',
            'Identity verification (KYC): identity documents, selfie or biometric checks, nationality, date of birth, and verification outcome processed by Sumsub',
            'Delivery and trip data: parcel descriptions, photos, dimensions and weight, pickup and drop-off details, trip routes and dates, offers or matches, meetup coordination, NFC checkpoint confirmations, and delivery status',
            'Communications: in-app chat between matched users, support messages, dispute evidence, and website contact or deletion requests',
            'Payments and wallet: payment and payout metadata handled with Stripe, escrow status, fees, refunds, and wallet activity. Full card numbers are processed by Stripe and are not stored on WWNGO servers',
            'Device and usage: device type, OS and app version, IP address, approximate location when required for meetup or safety features, crash diagnostics, and security logs',
          ],
        },
        {
          heading: '4. How we use your data',
          paragraphs: ['We use personal data to operate and protect the WWNGO marketplace, including to:'],
          list: [
            'Create accounts, authenticate users, and support Sender, Traveler, and Receiver workflows',
            'Match parcel requests with traveler capacity and show relevant route or delivery information',
            'Enable in-app chat, notifications, tracking updates, and NFC or in-app delivery confirmation',
            'Complete KYC checks, reduce fraud, and enforce Safety Rules and Prohibited Items policies',
            'Process escrow payments, Traveler payouts, refunds, and dispute outcomes through Stripe and WWNGO wallet features',
            'Respond to support, privacy, and account-deletion requests',
            'Improve reliability, diagnose issues, and keep the website and app secure',
            'Meet legal, accounting, and regulatory obligations where they apply',
          ],
        },
        {
          heading: '5. How we store and protect data',
          paragraphs: [
            'WWNGO stores account, delivery, chat, and transaction records in secured backend systems used to run the service. Access is limited to authorized systems and personnel who need it to operate support, compliance, or engineering functions.',
            'We apply safeguards such as HTTPS encryption in transit, access controls, monitoring, and partner security practices for payments (Stripe) and identity verification (Sumsub). No online service is perfectly secure. Protect your login details and contact support@wwngo.com if you suspect unauthorized access.',
          ],
        },
        {
          heading: '6. Legal bases',
          paragraphs: [
            'Where privacy laws require a legal basis, we process data to perform our contract with you, for legitimate interests such as platform safety and fraud prevention, to comply with legal obligations, and, where required, based on your consent (for example optional cookies or communications).',
          ],
        },
        {
          heading: '7. How we share data',
          paragraphs: [
            'We do not sell personal data. We share information only when needed to run the marketplace or when the law requires it:',
          ],
          list: [
            'Other users: limited profile, verification status, parcel or trip details, and chat needed to complete a matched delivery',
            'Stripe: payment processing, escrow-related flows, refunds, and payouts',
            'Sumsub: identity verification and related KYC processing',
            'Service providers: hosting, email or SMS, push notifications, analytics, and support tools under contractual safeguards',
            'Authorities or safety partners: when required by law or to investigate fraud, prohibited items, or serious policy violations',
          ],
        },
        {
          heading: '8. International transfers',
          paragraphs: [
            'Because WWNGO supports cross-border deliveries, personal data may be processed in countries other than where you live, including by Stripe, Sumsub, and infrastructure providers. Where required, we use appropriate transfer safeguards.',
          ],
        },
        {
          heading: '9. Retention',
          paragraphs: [
            'We retain personal data only as long as needed for marketplace operations, support, dispute handling, fraud prevention, accounting, and legal compliance.',
            'Delivery, escrow, payout, and KYC-related records may be kept longer when required by law or to resolve disputes. When data is no longer needed, we delete or anonymize it where feasible.',
          ],
        },
        {
          heading: '10. Your rights',
          paragraphs: [
            'Depending on where you live, you may have rights to access, correct, delete, or restrict processing of your personal data, object to certain processing, request portability, and withdraw consent where processing is consent-based.',
            'You can request account deletion through the Delete Account page on this website or by emailing support@wwngo.com. We may verify identity before acting, and some records may be retained where the law or fraud prevention requires it.',
          ],
        },
        {
          heading: '11. Children',
          paragraphs: [
            'WWNGO is for users aged 18 and older. We do not knowingly collect personal data from children under 18. If you believe a minor has created an account or submitted data, contact support@wwngo.com so we can remove it.',
          ],
        },
        {
          heading: '12. Cookies and similar technologies',
          paragraphs: [
            'The marketing website may use essential cookies such as language preference and, when configured, analytics cookies to understand site usage. See our Cookie Policy for details.',
            'The mobile app may store login state, notification tokens, and device identifiers needed for authentication, messaging, and security.',
          ],
        },
        {
          heading: '13. Changes to this policy',
          paragraphs: [
            'We may update this Privacy Policy to reflect product, legal, or operational changes. Material updates may be shown in the app, on the website, or by email where appropriate. Continued use of WWNGO after an update means you acknowledge the revised policy.',
          ],
        },
        {
          heading: '14. Contact',
          paragraphs: [
            'Privacy and data requests: support@wwngo.com',
            'General inquiries: info@wwngo.com',
            'Account deletion requests can also be submitted at /delete-account on this website.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms of service',
      lead:
        'These Terms of Service govern your access to and use of the WWNGO website, mobile app, and marketplace that connects Senders, Travelers, and Receivers for peer-to-peer international parcel delivery.',
      draftNotice: '',
      lastUpdatedLabel: 'Last updated',
      lastUpdatedValue: '',
      sections: [
        {
          heading: '1. Acceptance of terms',
          paragraphs: [
            'By creating an account, downloading the app, using the website, or participating in any delivery arranged through WWNGO, you agree to these Terms, our Privacy Policy, Safety Rules, Prohibited Items policy, Cookie Policy, and Refund Policy.',
            'If you do not agree, do not use WWNGO. We may update these Terms from time to time. Material updates may be shown in the app or on the website. Continued use after an update means you accept the revised Terms.',
          ],
        },
        {
          heading: '2. About WWNGO',
          paragraphs: [
            'WWNGO is a peer-to-peer marketplace platform. We help users discover matches, communicate in-app, verify identity, hold payments in escrow, track deliveries, and confirm handoffs (including NFC checkpoints where available).',
            'WWNGO is not a traditional courier, airline, freight forwarder, or customs broker. We do not take physical possession of parcels as a carrier. Travelers are independent users, not employees, agents, or partners of WWNGO in an employment sense.',
          ],
        },
        {
          heading: '3. Eligibility and accounts',
          paragraphs: [],
          list: [
            'You must be at least 18 years old and able to form a binding contract.',
            'You must provide accurate registration information and keep it up to date.',
            'You are responsible for safeguarding your login credentials and for activity under your account.',
            'We may require email, phone, and identity verification (KYC via Sumsub) before you can send, carry, or receive parcels.',
            'One person should maintain one account unless we expressly allow otherwise. Fake, duplicate, or shared accounts are prohibited.',
          ],
        },
        {
          heading: '4. User roles',
          paragraphs: [
            'Users may act as Senders, Travelers, Receivers, or more than one role depending on the transaction:',
          ],
          list: [
            'Senders request delivery of a parcel, provide accurate parcel details, fund escrow when required, and complete pickup confirmation.',
            'Travelers offer travel capacity, accept parcels they can legally and safely transport, keep parcels secure, and complete pickup and delivery confirmations.',
            'Receivers review delivery details, meet at the agreed location, inspect the parcel, and confirm receipt or open a dispute when appropriate.',
          ],
        },
        {
          heading: '5. Marketplace rules',
          paragraphs: [
            'All deliveries must be arranged and completed through WWNGO workflows. Do not move payments, negotiations, or handoff confirmations outside the platform.',
            'You must comply with our Safety Rules and Prohibited Items policy, as well as airline, customs, border, and destination-country laws. False parcel descriptions, prohibited items, or fake handoff confirmations are grounds for immediate suspension.',
            'Meetups should be arranged thoughtfully. Prefer public locations when practical, use in-app chat, and never confirm an NFC or in-app checkpoint for a handoff that did not occur.',
          ],
        },
        {
          heading: '6. Payments, escrow, and fees',
          paragraphs: [
            'Payments are processed through Stripe. Sender funds may be held in escrow until delivery is confirmed according to marketplace rules, after which Traveler payouts may be released subject to fees, holds, disputes, or compliance checks.',
            'WWNGO may charge service, platform, or payment-processing fees. Applicable fees are shown in the app before you confirm a transaction. Currency availability and payout options may vary by region.',
            'You authorize WWNGO and Stripe to process charges, refunds, chargebacks, and adjustments related to your use of the service. You are responsible for any taxes that apply to your activity where required by law.',
          ],
        },
        {
          heading: '7. Cancellations, disputes, and refunds',
          paragraphs: [
            'Cancellations, failed handoffs, damaged or missing parcels, and similar issues should be reported through the in-app dispute process as soon as possible. Outcomes depend on confirmation status, evidence, Safety Rules, and our Refund Policy.',
            'WWNGO may pause escrow release, reverse or withhold payouts, request additional information, or mediate between parties. Opening a dispute does not guarantee a refund. See the Refund Policy for more detail.',
          ],
        },
        {
          heading: '8. Acceptable use',
          paragraphs: ['You agree not to:'],
          list: [
            'Send, carry, or request illegal, dangerous, stolen, counterfeit, or otherwise prohibited items.',
            'Misrepresent identity, trip details, parcel contents, photos, weight, value, or delivery status.',
            'Harass, threaten, or defraud other users, or attempt to bypass KYC, escrow, chat, or confirmation features.',
            'Scrape, reverse engineer, disrupt, or overload the service, or access accounts or data without authorization.',
            'Use WWNGO for money laundering, sanctions evasion, or any unlawful purpose.',
          ],
        },
        {
          heading: '9. Verification and trust',
          paragraphs: [
            'Identity verification through Sumsub and other checks helps reduce fraud, but no verification system is perfect. Users remain responsible for their own diligence when meeting others and handing over parcels.',
            'Ratings, reviews, and verification badges are informational. WWNGO does not guarantee the conduct, punctuality, or customs compliance of any user.',
          ],
        },
        {
          heading: '10. Intellectual property',
          paragraphs: [
            'WWNGO’s name, logo, app, website, and related content are owned by WWNGO or its licensors. You receive a limited, non-exclusive, non-transferable license to use the service for its intended purpose.',
            'You retain rights to content you submit (such as parcel photos or chat messages), and grant WWNGO a license to host, process, and display that content as needed to operate the marketplace and enforce these Terms.',
          ],
        },
        {
          heading: '11. Third-party services',
          paragraphs: [
            'The service relies on third parties including Stripe for payments and Sumsub for KYC. Their terms and privacy practices also apply to the processing they perform. App store providers (Google Play, Apple App Store) may have additional terms for downloading the app.',
          ],
        },
        {
          heading: '12. Disclaimers',
          paragraphs: [
            'WWNGO is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.',
            'We do not warrant uninterrupted availability, error-free matching, successful customs clearance, or that every user will complete a delivery as expected. Cross-border travel and parcel transport involve risks outside our control.',
          ],
        },
        {
          heading: '13. Limitation of liability',
          paragraphs: [
            'To the fullest extent permitted by law, WWNGO and its operators are not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, lost data, or loss of parcels arising from marketplace use, user conduct, travel disruptions, customs actions, or force majeure.',
            'Where liability cannot be excluded, our aggregate liability related to your use of WWNGO is limited to the greater of (a) the fees you paid to WWNGO for the specific transaction giving rise to the claim in the three months before the claim, or (b) USD 100, except where applicable law requires otherwise.',
          ],
        },
        {
          heading: '14. Indemnity',
          paragraphs: [
            'You agree to indemnify and hold harmless WWNGO from claims, losses, and expenses (including reasonable legal fees) arising from your misuse of the service, your parcels or travel, your violation of these Terms or law, or disputes between you and other users, airlines, or authorities.',
          ],
        },
        {
          heading: '15. Suspension and termination',
          paragraphs: [
            'You may stop using WWNGO at any time. We may suspend or terminate access, withhold payouts pending investigation, or remove content if you breach these Terms, create risk for other users, fail verification, or if required by law.',
            'Provisions that by nature should survive (including payments owed, disclaimers, liability limits, indemnity, and dispute terms) continue after termination.',
          ],
        },
        {
          heading: '16. Governing law',
          paragraphs: [
            'These Terms are governed by the laws applicable to WWNGO’s place of operation, without regard to conflict-of-law rules, except where mandatory consumer protections in your country apply. Courts in that jurisdiction may have exclusive venue for disputes that are not resolved informally, unless applicable law requires otherwise.',
          ],
        },
        {
          heading: '17. Contact',
          paragraphs: [
            'Questions about these Terms: support@wwngo.com',
            'General inquiries: info@wwngo.com',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie policy',
      lead: 'Draft placeholder, describe cookies used on this marketing site.',
      draftNotice: 'This document is placeholder text for the WWNGO marketing site and is not legal advice.',
      lastUpdatedLabel: 'Last updated',
      lastUpdatedValue: '[Date placeholder]',
      sections: [
        {
          heading: 'What are cookies',
          paragraphs: ['Cookies are small files stored on your device to remember preferences and measure site performance.'],
        },
        {
          heading: 'How we use cookies',
          paragraphs: [
            'This site may use essential cookies for language preference and analytics cookies once configured. Details will be updated before launch.',
          ],
        },
      ],
    },
    safetyRules: {
      title: 'Safety Rules',
      lead: 'WWNGO is a peer-to-peer parcel delivery marketplace connecting Senders, Travelers and Receivers. All participants must follow these safety rules when using the platform.',
      draftNotice: '',
      lastUpdatedLabel: 'Last updated',
      lastUpdatedValue: 'November 5, 2026',
      sections: [
        {
          heading: '1. Account Verification',
          paragraphs: [],
          list: [
            'Users must be at least 18 years old.',
            'Provide accurate personal and contact information.',
            'Complete email, phone and identity verification before participating in deliveries.',
            'Never share your account login credentials.',
          ],
        },
        {
          heading: '2. Sender Responsibilities',
          paragraphs: [],
          list: [
            'Provide accurate parcel descriptions, photos, weight and dimensions.',
            'Only request delivery of legal items.',
            'Follow airline, customs and destination country regulations.',
            'Meet the Traveler at the agreed location and confirm the handover through NFC Checkpoint 1.',
          ],
        },
        {
          heading: '3. Traveler Responsibilities',
          paragraphs: [],
          list: [
            'Provide accurate trip details and delivery capacity.',
            'Only accept parcels that can be legally and safely transported.',
            'Keep parcels secure throughout the journey.',
            'Never open, use, swap or abandon a parcel.',
            'Complete NFC Checkpoint 1 at pickup and NFC Checkpoint 2 at delivery.',
          ],
        },
        {
          heading: '4. Receiver Responsibilities',
          paragraphs: [],
          list: [
            'Review parcel details before accepting a delivery.',
            'Be available at the agreed destination meetup.',
            'Verify the parcel before confirming receipt.',
            'Do not complete NFC Checkpoint 2 if the parcel is missing, damaged or not as described. Raise a dispute in the app instead.',
          ],
        },
        {
          heading: '5. Safe Meetups and Communication',
          paragraphs: [],
          list: [
            'Choose appropriate public meetup locations.',
            'Coordinate deliveries through WWNGO in-app chat.',
            'Do not move payments or delivery arrangements outside the platform.',
            'Never confirm a handover that has not actually taken place.',
          ],
        },
        {
          heading: '6. Reporting and Disputes',
          paragraphs: [
            'Report suspicious activity, delivery issues or safety concerns through the in-app dispute process. For support, contact support@wwngo.com.',
          ],
        },
      ],
    },
    prohibited: {
      title: 'Prohibited Items',
      lead: 'WWNGO does not allow users to send, carry or request illegal, dangerous or restricted items through the platform.',
      draftNotice: '',
      lastUpdatedLabel: 'Last updated',
      lastUpdatedValue: 'November 5, 2026',
      sections: [
        {
          heading: 'Items Not Allowed',
          paragraphs: ['The following items are prohibited:'],
          list: [
            'Illegal drugs and substances.',
            'Weapons and explosives.',
            'Hazardous materials.',
            'Stolen goods.',
            'Counterfeit items.',
            'Cash or bearer instruments beyond what local law allows.',
            'Live animals.',
            'Human remains.',
            'Any item prohibited by the carrier, airline or destination country.',
          ],
        },
        {
          heading: 'Important Legal Requirements',
          paragraphs: [],
          list: [
            'All parcels must comply with applicable laws and transportation regulations.',
            'Senders must provide truthful descriptions of parcel contents.',
            'Travelers must ensure that items they carry comply with airline, border and customs requirements.',
            'Users must not request delivery of items that are illegal or unsafe to transport.',
          ],
        },
        {
          heading: 'Zero-Tolerance Conduct',
          paragraphs: ['The following activities are also prohibited:'],
          list: [
            'Fake identities or misleading parcel photos.',
            'Fraudulent activity.',
            'Harassment of other users.',
            'Manipulation of ratings and reviews.',
            'Attempts to bypass WWNGO escrow or payment processes.',
          ],
        },
        {
          heading: "Traveler's Right to Refuse",
          paragraphs: [
            'Travelers should only accept parcels they can legally and safely carry. They may decline requests that appear unsafe or non-compliant.',
            'Violations may result in account suspension, escrow freezes or reporting to relevant authorities.',
            'For assistance, contact support@wwngo.com.',
          ],
        },
      ],
    },
    refund: {
      title: 'Refund Policy',
      lead: 'WWNGO uses an escrow system to manage payments between Senders and Travelers. Refund eligibility depends on the delivery status, cancellation timing and applicable in-app rules.',
      draftNotice: '',
      lastUpdatedLabel: 'Last updated',
      lastUpdatedValue: 'November 5, 2026',
      sections: [
        {
          heading: '1. Escrow and Payments',
          paragraphs: [],
          list: [
            "When a Sender accepts a Traveler's offer, the agreed Traveler payout is transferred into escrow.",
            'Escrow funds remain held until delivery confirmation, refund or dispute resolution.',
            'Successful NFC Checkpoint 2 confirmation marks the shipment as Delivered and releases escrow to the Traveler unless a dispute has frozen the funds.',
          ],
        },
        {
          heading: '2. Cancellation and Refunds',
          paragraphs: [],
          list: [
            'Booked deliveries may be cancelled before the trip is in transit or delivered, subject to in-app rules.',
            'When a booked delivery is cancelled, the escrow principal is refunded to the Sender.',
            'Platform fees are refunded to the paying parties when cancellation happens more than 24 hours before travel.',
            'Platform fees are generally non-refundable when cancellation happens within 24 hours of travel.',
          ],
        },
        {
          heading: '3. Automatic Cancellations',
          paragraphs: [],
          list: [
            'Bookings may automatically cancel when applicable payment windows or acceptance timers expire.',
            'In such cases, escrow principal is refunded according to the applicable in-app rules.',
          ],
        },
        {
          heading: '4. Top-Ups and Completed Payouts',
          paragraphs: [
            'Wallet top-ups and completed payouts are not reversed except where required by law or through a formal dispute outcome.',
          ],
        },
        {
          heading: '5. Disputes and Refund Decisions',
          paragraphs: ['If a parcel is missing, damaged or not as described:'],
          list: [
            'Open a dispute through the WWNGO mobile app.',
            'Filing a dispute freezes escrow while WWNGO reviews the case.',
            'WWNGO may review delivery records, parcel photos, chat messages, NFC checkpoint records and identity information.',
            'Following the review, escrow may be released, refunded or split according to the dispute decision.',
            'Do not complete NFC Checkpoint 2 if you intend to dispute receipt of the parcel.',
          ],
        },
        {
          heading: '6. Need Help?',
          paragraphs: [
            'For support or questions regarding cancellations and refunds, contact support@wwngo.com.',
          ],
        },
      ],
    },
  },
};
