import type { TranslationTree } from './types';

export const fr: TranslationTree = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    howItWorks: 'Comment ça marche',
    forCustomers: 'Pour les expéditeurs',
    forTravelers: 'Pour les voyageurs',
    forReceivers: 'Pour les destinataires',
    features: 'Fonctionnalités',
    safety: 'Sécurité',
    faq: 'FAQ',
    contact: 'Contact',
    downloadApp: 'Télécharger l’app',
    solutions: 'Solutions',
    language: 'Langue',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
  },
  common: {
    brand: 'WWNGO',
    getOnGooglePlay: 'Disponible sur Google Play',
    downloadOnAppStore: 'Télécharger dans l’App Store',
    storeLinkPlaceholder: 'Le lien du store sera ajouté lors de la publication de l’application.',
    appLabel: 'Application mobile',
    downloadTitle: 'Les réservations et livraisons se font dans l’app',
    downloadLead:
      'WWNGO met en relation expéditeurs, voyageurs et destinataires dans le monde entier. Téléchargez l’app pour créer des trajets, envoyer des colis et finaliser des remises en toute sécurité.',
    learnMore: 'En savoir plus',
    learnHow: 'Voir comment ça marche',
    viewAllFaq: 'Voir toute la FAQ',
    sendMessage: 'Envoyer le message',
    required: 'Obligatoire',
    minChars: 'Veuillez saisir au moins {n} caractères.',
    successContact: 'Merci, votre message a été envoyé. Nous vous répondrons dès que possible.',
    errorContact: 'Une erreur s’est produite. Réessayez ou écrivez-nous directement par e-mail.',
    name: 'Nom complet',
    email: 'E-mail',
    subject: 'Objet',
    message: 'Message',
    inquiryType: 'Type de demande',
    inquiryGeneral: 'Question générale',
    inquirySender: 'Assistance expéditeur',
    inquiryTraveler: 'Assistance voyageur',
    inquiryReceiver: 'Assistance destinataire',
    inquiryPartnership: 'Partenariats',
    placeholderName: 'Votre nom',
    placeholderEmail: 'vous@exemple.com',
    placeholderSubject: 'Comment pouvons-nous vous aider ?',
    placeholderMessage: 'Décrivez votre demande…',
    backToHome: 'Retour à l’accueil',
    readMore: 'Lire la suite',
    stepLabel: 'Étape',
  },
  footer: {
    tagline: 'Livraison internationale de colis entre particuliers, via des voyageurs vérifiés.',
    quickLinks: 'Liens rapides',
    customerLinks: 'Pour les expéditeurs',
    travelerLinks: 'Pour les voyageurs',
    receiverLinks: 'Pour les destinataires',
    contactInfo: 'Contact',
    legal: 'Mentions légales',
    social: 'Réseaux sociaux',
    rights: 'Tous droits réservés.',
    supportEmail: 'Assistance',
    businessEmail: 'Entreprises',
    address: 'Bureau',
    supportEmailPlaceholder: 'info@wwngo.com',
    businessEmailPlaceholder: 'info@wwngo.com',
    addressPlaceholder: 'info@wwngo.com',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
    cookies: 'Politique des cookies',
    safetyRules: 'Règles de sécurité',
    prohibited: 'Articles interdits',
    refund: 'Politique de remboursement',
    socialPlaceholder: 'Les liens sociaux seront publiés ici.',
  },
  home: {
    heroBrand: 'WWNGO',
    heroBadge: 'Place de marché de colis entre particuliers',
    heroBadgeAccent: 'International',
    heroHeadline: 'Envoyez des colis à l’international avec des voyageurs de confiance',
    heroLead:
      'Une place de marché pair à pair qui connecte expéditeurs, voyageurs vérifiés et destinataires, avec séquestre, vérification d’identité et remise NFC dans l’application mobile.',
    heroCtaDownload: 'Télécharger l’app',
    heroCtaHow: 'Comment ça marche',
    whatIsEyebrow: 'Qu’est-ce que WWNGO',
    whatIsTitle: 'La livraison internationale via de vrais trajets',
    whatIsLead: 'Pas une franchise de messagerie, une place de marché construite autour des personnes déjà en voyage.',
    whatIsBody:
      'WWNGO permet aux expéditeurs de publier des demandes de colis sur des itinéraires internationaux. Les voyageurs qui prennent déjà l’avion ou la route peuvent transporter des articles dans les limites convenues, être rémunérés et remettre le colis en toute sécurité au destinataire. Les paiements sont conservés en séquestre jusqu’à confirmation de la livraison dans l’app.',
    howWorksEyebrow: 'Aperçu',
    howWorksTitle: 'Trois rôles, un flux connecté',
    howWorksLead: 'Chaque livraison suit le même parcours transparent, de la demande à la libération des fonds.',
    flowRoleSender: 'Expéditeur',
    flowRoleTraveler: 'Voyageur',
    flowRoleReceiver: 'Destinataire',
    howWorksSteps: [
      {
        title: 'L’expéditeur publie une demande',
        body: 'Décrivez le colis, l’itinéraire et le calendrier. WWNGO vous aide à trouver un voyageur vérifié sur votre route.',
      },
      {
        title: 'Le voyageur accepte et transporte',
        body: 'Les fonds passent en séquestre via Stripe. Le voyageur récupère l’article, met à jour le suivi et voyage avec votre colis.',
      },
      {
        title: 'Le destinataire confirme la remise',
        body: 'La confirmation NFC ou in-app finalise la livraison. Le séquestre libère le paiement au voyageur après remise réussie.',
      },
    ],
    rolesEyebrow: 'Pour qui',
    rolesTitle: 'Conçu pour chaque acteur du trajet',
    rolesLead: 'Choisissez votre rôle pour voir le parcours complet dans l’app.',
    roleCustomerTitle: 'Pour les expéditeurs',
    roleCustomerLead: 'Expédiez à moindre coût avec des voyageurs sur votre route. Le séquestre protège votre paiement jusqu’à la livraison.',
    roleTravelerTitle: 'Voyageurs',
    roleTravelerLead: 'Monétisez l’espace bagage disponible sur vos trajets, avec vérification KYC et règles claires.',
    roleReceiverTitle: 'Destinataires',
    roleReceiverLead: 'Soyez informé lorsqu’un colis est en route et confirmez la réception via une remise sécurisée in-app.',
    featuresEyebrow: 'Plateforme',
    featuresTitle: 'Des outils pensés pour la confiance transfrontalière',
    featuresLead: 'Identité, paiements, messagerie et remise, intégrés dans une seule place de marché.',
    featuresItems: [
      {
        title: 'Vérification d’identité (KYC)',
        body: 'Des contrôles via Sumsub aident à vérifier voyageurs et participants avant toute transaction.',
      },
      {
        title: 'Séquestre et paiements Stripe',
        body: 'Les fonds de l’expéditeur sont sécurisés jusqu’à ce que les conditions de livraison soient remplies.',
      },
      {
        title: 'Remise NFC',
        body: 'Confirmez l’échange physique avec une confirmation NFC lorsque l’appareil le permet.',
      },
      {
        title: 'Chat et suivi in-app',
        body: 'Coordonnez les créneaux de remise et suivez l’avancement sans quitter WWNGO.',
      },
    ],
    safetyEyebrow: 'Sécurité',
    safetyTitle: 'La sécurité est intégrée à la place de marché',
    safetyLead: 'Règles claires, vérification et voies de recours, pas de remises anonymes.',
    safetyPoints: [
      'Identités vérifiées via KYC avant que les voyageurs transportent des colis',
      'Séquestre jusqu’à confirmation de livraison',
      'Politique d’articles interdits et règles de sécurité communautaires',
      'Notes et signalements pour maintenir la qualité du marché',
    ],
    whyEyebrow: 'Pourquoi WWNGO',
    whyTitle: 'Pourquoi choisir la livraison pair à pair',
    whyItems: [
      {
        title: 'Itinéraires flexibles',
        body: 'Associez les colis à de vrais trajets plutôt qu’à des réseaux de hubs fixes.',
      },
      {
        title: 'Tarification transparente',
        body: 'Convenez des conditions dans l’app avant l’engagement des fonds en séquestre.',
      },
      {
        title: 'Portée internationale',
        body: 'Reliez expéditeurs et destinataires entre pays grâce aux trajets des voyageurs.',
      },
      {
        title: 'Expérience mobile d’abord',
        body: 'Réservation, chat, portefeuille et remise dans l’app, ce site vous guide.',
      },
    ],
    faqEyebrow: 'FAQ',
    faqTitle: 'Questions fréquentes',
    faqPreview: [
      {
        q: 'Puis-je réserver une livraison sur ce site ?',
        a: 'Non. Les réservations, paiements et remises WWNGO se font dans l’application mobile. Ce site explique le fonctionnement de la place de marché.',
      },
      {
        q: 'Comment mon paiement est-il protégé ?',
        a: 'Les paiements des expéditeurs passent par Stripe et sont conservés en séquestre jusqu’à confirmation de livraison selon les règles du marché.',
      },
      {
        q: 'Qui peut devenir voyageur ?',
        a: 'Les adultes qui complètent la vérification d’identité (KYC) et acceptent les directives voyageur peuvent proposer de la capacité sur les routes éligibles.',
      },
    ],
    testimonialsNote:
      'Les témoignages de la communauté apparaîtront ici lorsque des avis vérifiés seront disponibles.',
  },
  about: {
    eyebrow: 'À propos',
    title: 'À propos de WWNGO',
    lead: 'Nous connectons expéditeurs, voyageurs et destinataires sur une place de marché internationale de colis entre particuliers.',
    ctaDownload: 'Télécharger l’app',
    ctaHow: 'Comment ça marche',
    missionEyebrow: 'Mission',
    missionTitle: 'Notre mission',
    missionBody:
      'WWNGO rend la livraison transfrontalière plus accessible en alignant les envois sur les trajets que les gens effectuent déjà. Nous misons sur la confiance, la transparence et des outils qui informent chaque participant de la collecte à la remise.',
    visionEyebrow: 'Vision',
    visionTitle: 'Notre vision',
    visionBody:
      'Un monde où envoyer un colis à l’étranger est aussi naturel que partager un trajet, avec des garanties solides, des identités vérifiées et une rémunération équitable pour les voyageurs.',
    marketplaceEyebrow: 'Modèle',
    marketplaceTitle: 'Une place de marché, pas un coursier traditionnel',
    marketplaceBody:
      'WWNGO est une plateforme technologique. Les voyageurs sont des participants indépendants qui choisissent les demandes à accepter. Expéditeurs et destinataires conviennent des conditions dans l’app. Nous fournissons l’appariement, l’infrastructure de paiement, la messagerie et les politiques de sécurité, l’exécution passe par la communauté.',
    marketplaceOutLabel: 'Pas ceci',
    marketplaceOutItems: ['Franchise de messagerie', 'Réseau de hubs fixes', 'Exécution centralisée'],
    marketplaceInLabel: 'WWNGO',
    marketplaceInItems: ['Place de marché', 'Trajets déjà prévus', 'Communauté vérifiée'],
    valuesEyebrow: 'Valeurs',
    valuesTitle: 'Nos valeurs',
    values: [
      { title: 'Confiance by design', body: 'Vérification, séquestre et règles claires avant tout mouvement de fonds.' },
      { title: 'Respect des voyageurs', body: 'Rémunération équitable et limites explicites sur ce qui peut être transporté.' },
      { title: 'Clarté pour les destinataires', body: 'Notifications et étapes de remise qui réduisent l’incertitude.' },
      { title: 'Sécurité avant la vitesse', body: 'Articles interdits et signalements pour protéger la communauté.' },
    ],
    appOnlyEyebrow: 'App first',
    appOnlyTitle: 'Application mobile pour les transactions',
    appOnlyBody:
      'Ce site vitrine ne traite ni réservations ni paiements. Téléchargez l’app WWNGO pour créer des demandes, accepter des trajets, alimenter le séquestre et finaliser la confirmation NFC ou in-app.',
  },
  howItWorks: {
    title: 'Comment fonctionne WWNGO',
    lead: 'De la demande expéditeur à la libération du paiement, le parcours de la place de marché étape par étape.',
    flowTitle: 'Expéditeur → voyageur → destinataire',
    flowLead: 'Chaque rôle a ses écrans dans l’app ; voici le cycle de livraison commun.',
    steps: [
      {
        title: 'L’expéditeur crée une demande de colis',
        body: 'Indiquez l’itinéraire, les dates, les détails du colis et la rémunération. WWNGO propose des voyageurs correspondants.',
      },
      {
        title: 'Le voyageur examine et accepte',
        body: 'Les voyageurs voient les demandes sur leur route, confirment la capacité et acceptent les conditions.',
      },
      {
        title: 'Paiement en séquestre',
        body: 'L’expéditeur paie via Stripe. Les fonds sont en séquestre, pas encore versés au voyageur.',
      },
      {
        title: 'Collecte et transport',
        body: 'Le voyageur récupère le colis, utilise le chat in-app et met à jour le statut pendant le trajet.',
      },
      {
        title: 'Remise au destinataire',
        body: 'Le destinataire rencontre le voyageur. La confirmation NFC ou in-app enregistre la livraison.',
      },
      {
        title: 'Libération du séquestre',
        body: 'Après confirmation réussie, le séquestre libère le paiement au voyageur selon les règles du marché.',
      },
    ],
    escrowTitle: 'Le séquestre protège les deux parties',
    escrowBody:
      'Le séquestre signifie que le paiement de l’expéditeur est sécurisé jusqu’à ce que les critères de livraison soient remplis. Si un trajet ne peut pas être mené à terme selon la politique, des processus de remboursement et de litige s’appliquent, voir notre page de politique de remboursement (placeholder).',
    nfcTitle: 'Confirmation avec NFC',
    nfcBody:
      'Lorsque l’appareil le permet, le NFC aide à vérifier que la remise physique a bien eu lieu entre les bonnes parties, en complément du statut in-app.',
    paymentTitle: 'Paiements via Stripe',
    paymentBody:
      'WWNGO utilise Stripe pour le traitement des paiements. Portefeuille et versements voyageur sont gérés in-app selon la disponibilité régionale.',
  },
  customers: {
    title: 'Pour les expéditeurs',
    lead: 'Publiez une demande, alimentez le séquestre et suivez l’envoi jusqu’à confirmation par le destinataire.',
    stepsLabel: 'Étapes',
    journeyTitle: 'Votre parcours en tant qu’expéditeur',
    steps: [
      {
        title: 'Inscription et vérification par OTP',
        body: 'Créez votre compte dans l’app WWNGO et confirmez votre téléphone ou e-mail avec un code à usage unique.',
      },
      {
        title: 'Compléter la vérification d’identité',
        body: 'Finalisez le KYC via Sumsub lorsque requis pour que voyageurs et destinataires puissent faire confiance à votre profil.',
      },
      {
        title: 'Construire votre profil expéditeur',
        body: 'Ajoutez les informations de profil qui facilitent l’appariement et une meilleure coordination.',
      },
      {
        title: 'Ajouter les coordonnées du destinataire',
        body: 'Désignez qui recevra le colis et comment il sera informé pour la remise.',
      },
      {
        title: 'Créer une demande de colis',
        body: 'Indiquez origine, destination, calendrier, description du colis, taille/poids et rémunération proposée.',
      },
      {
        title: 'Téléverser des photos du colis',
        body: 'Joignez des photos claires pour que les voyageurs puissent évaluer l’article avant d’accepter.',
      },
      {
        title: 'Trouver des voyageurs correspondants',
        body: 'Consultez les voyageurs déjà sur votre route, y compris leurs notes et les détails du trajet.',
      },
      {
        title: 'Envoyer une demande de livraison',
        body: 'Invitez un voyageur à transporter votre colis et convenez de la logistique de rencontre en lieu public.',
      },
      {
        title: 'Payer en séquestre (Stripe)',
        body: 'Financez le trajet en toute sécurité. L’argent est retenu en séquestre, pas libéré avant livraison confirmée.',
      },
      {
        title: 'Remise et vérification NFC',
        body: 'Rencontrez-vous à un lieu public convenu. Confirmez la collecte par NFC ou vérification in-app.',
      },
      {
        title: 'Suivre et discuter',
        body: 'Suivez les mises à jour de statut et coordonnez-vous avec le voyageur et le destinataire via le chat en temps réel.',
      },
      {
        title: 'Confirmation destinataire et libération',
        body: 'Lorsque le destinataire confirme la remise, le séquestre libère le paiement et le trajet est terminé.',
      },
    ],
    benefitsTitle: 'Pourquoi expédier avec WWNGO',
    benefits: [
      { title: 'Appariement par route', body: 'Trouvez des voyageurs déjà sur votre chemin.' },
      { title: 'Paiements avec séquestre', body: 'Payez en confiance jusqu’à livraison confirmée.' },
      { title: 'Règles claires sur les colis', body: 'Politiques d’articles interdits et de sécurité dès le départ.' },
      { title: 'Voie d’assistance', body: 'Contactez l’assistance via l’app ou notre formulaire de contact.' },
    ],
    faqTitle: 'FAQ expéditeur',
    faqs: [
      {
        q: 'Que puis-je envoyer ?',
        a: 'Uniquement les articles autorisés par les règles WWNGO sur les articles interdits et la sécurité. Marchandises dangereuses, illégales ou restreintes sont interdites.',
      },
      {
        q: 'Quand ma carte est-elle débitée ?',
        a: 'Lorsque vous alimentez le séquestre pour un trajet accepté. Le versement au voyageur intervient après livraison confirmée.',
      },
      {
        q: 'Et si mon voyageur annule ?',
        a: 'Les politiques du marché et de remboursement définissent la suite. Voir la page politique de remboursement (placeholder).',
      },
    ],
  },
  travelers: {
    title: 'Pour les voyageurs',
    lead: 'Gagnez en transportant des colis sur vos trajets prévus, avec vérification, séquestre et consignes claires.',
    stepsLabel: 'Étapes',
    journeyTitle: 'Votre parcours en tant que voyageur',
    steps: [
      {
        title: 'Inscription et vérification',
        body: 'Créez votre compte voyageur et confirmez l’accès avec une vérification OTP.',
      },
      {
        title: 'Compléter le KYC Sumsub',
        body: 'Vérifiez votre identité pour que les expéditeurs sachent qui transporte leur colis.',
      },
      {
        title: 'Créer votre profil voyageur',
        body: 'Ajoutez les informations qui aident les expéditeurs à évaluer votre fiabilité et l’adéquation du trajet.',
      },
      {
        title: 'Ajouter les détails du voyage',
        body: 'Publiez origine, destination et dates de voyage pour les routes que vous prévoyez déjà.',
      },
      {
        title: 'Déclarer la capacité bagage',
        body: 'Indiquez l’espace/poids disponible pour n’apparier que des colis adaptés.',
      },
      {
        title: 'Découvrir les demandes correspondantes',
        body: 'Parcourez les demandes de colis alignées avec votre route et votre calendrier.',
      },
      {
        title: 'Soumettre des offres de livraison',
        body: 'Proposez de transporter un colis et proposez ou acceptez une rémunération selon les règles du marché.',
      },
      {
        title: 'Accepter et convenir du rendez-vous',
        body: 'Confirmez le trajet et convenez d’un lieu de rencontre public avec l’expéditeur.',
      },
      {
        title: 'Inspecter et collecter avec NFC',
        body: 'Inspectez le colis par rapport à l’annonce, puis confirmez la collecte par NFC ou preuve in-app.',
      },
      {
        title: 'Livrer et confirmer la remise',
        body: 'Rencontrez le destinataire, finalisez la confirmation NFC/in-app, puis recevez le versement du séquestre.',
      },
    ],
    benefitsTitle: 'Pourquoi voyager avec WWNGO',
    benefits: [
      { title: 'Monétisez votre capacité', body: 'Utilisez l’espace bagage autorisé sur vos trajets existants.' },
      { title: 'Gains transparents', body: 'Voyez la rémunération avant d’accepter une demande.' },
      { title: 'Portefeuille et versements', body: 'Gérez vos gains in-app là où les versements sont disponibles.' },
      { title: 'Notes', body: 'Construisez votre réputation avec des livraisons réussies et des avis.' },
    ],
    faqTitle: 'FAQ voyageur',
    faqs: [
      {
        q: 'Dois-je être coursier professionnel ?',
        a: 'Non. Vous êtes un voyageur indépendant qui accepte les demandes de votre choix, sous réserve de vérification et des règles du marché.',
      },
      {
        q: 'Quelle vérification est requise ?',
        a: 'KYC via Sumsub et acceptation des politiques de sécurité et d’articles interdits.',
      },
      {
        q: 'Quand suis-je payé ?',
        a: 'Après confirmation de livraison et libération du séquestre selon les règles du marché.',
      },
    ],
  },
  receivers: {
    title: 'Pour les destinataires',
    lead: 'Préparez-vous à la remise, notifications, chat et confirmation sécurisée à l’arrivée du colis.',
    journeyTitle: 'Votre parcours en tant que destinataire',
    steps: [
      {
        title: 'Recevoir une invitation',
        body: 'L’expéditeur vous associe comme destinataire d’une demande de colis précise dans l’app.',
      },
      {
        title: 'Inscription et vérification par OTP',
        body: 'Créez votre compte destinataire et confirmez-le avec un code de vérification à usage unique.',
      },
      {
        title: 'Configurer votre profil destinataire',
        body: 'Complétez les informations de base pour que les remises et l’assistance puissent vous identifier correctement.',
      },
      {
        title: 'Consulter les détails du colis',
        body: 'Examinez photos, description, informations sur le voyageur et calendrier prévu avant la collecte.',
      },
      {
        title: 'Suivre l’avancement de la livraison',
        body: 'Suivez les mises à jour de statut pendant que le voyageur progresse de la collecte vers votre localisation.',
      },
      {
        title: 'Discuter avec l’expéditeur et le voyageur',
        body: 'Coordonnez le créneau et un point de rencontre public sans quitter l’app.',
      },
      {
        title: 'Accepter ou signaler un problème',
        body: 'Confirmez que vous pouvez recevoir la livraison, ou signalez un problème avant la confirmation finale.',
      },
      {
        title: 'Rencontrer, inspecter et confirmer par NFC',
        body: 'Inspectez le colis, puis finalisez la confirmation NFC ou in-app pour valider la réception.',
      },
    ],
    flowVisualLabel: 'Flux de remise destinataire',
    benefitsTitle: 'Pourquoi les destinataires utilisent WWNGO',
    benefits: [
      { title: 'Visibilité', body: 'Sachez quand un colis est en transit et qui le transporte.' },
      { title: 'Confirmation sécurisée', body: 'Des étapes de remise liées au séquestre limitent les litiges.' },
      { title: 'Coordination directe', body: 'Discutez avec voyageur et expéditeur sans intermédiaire opaque.' },
      { title: 'Pas de réservation web', body: 'Tout se passe in-app une fois que l’expéditeur vous ajoute.' },
    ],
    faqTitle: 'FAQ destinataire',
    faqs: [
      {
        q: 'Ai-je besoin d’un compte ?',
        a: 'Oui, les destinataires participent in-app pour confirmer la livraison et recevoir les notifications.',
      },
      {
        q: 'Qu’est-ce que la confirmation NFC ?',
        a: 'Un moyen, lorsque l’appareil le permet, d’enregistrer que la remise a eu lieu entre les bonnes parties.',
      },
      {
        q: 'Et si je ne peux pas rencontrer le voyageur ?',
        a: 'Coordonnez des alternatives dans le chat. Les problèmes non résolus suivent les politiques d’assistance et de remboursement.',
      },
    ],
  },
  features: {
    title: 'Fonctionnalités de la plateforme',
    lead: 'Tout ce qui alimente confiance, appariement et livraison dans l’app mobile WWNGO.',
    eyebrow: 'Fonctionnalités',
    groups: [
      {
        title: 'Confiance et conformité',
        items: [
          {
            title: 'KYC Sumsub',
            body: 'Vérification d’identité pour voyageurs et participants selon la politique du marché.',
          },
          {
            title: 'Notes et avis',
            body: 'Les retours après livraison aident la communauté à choisir des partenaires fiables.',
          },
          {
            title: 'Règles de sécurité et articles interdits',
            body: 'Des politiques publiées définissent ce qui ne peut pas être transporté ou envoyé.',
          },
        ],
      },
      {
        title: 'Paiements et portefeuille',
        items: [
          {
            title: 'Paiement Stripe',
            body: 'Paiements par carte pour les expéditeurs alimentant le séquestre.',
          },
          {
            title: 'Détention en séquestre',
            body: 'Fonds retenus jusqu’à ce que la confirmation de livraison déclenche la libération.',
          },
          {
            title: 'Portefeuille voyageur',
            body: 'Suivez gains et versements selon la disponibilité dans votre région.',
          },
        ],
      },
      {
        title: 'Expérience de livraison',
        items: [
          {
            title: 'Appariement d’itinéraires',
            body: 'Relie les demandes de colis aux voyageurs sur des trajets compatibles.',
          },
          {
            title: 'Suivi et statuts',
            body: 'Mises à jour de la collecte à la remise.',
          },
          {
            title: 'Remise NFC',
            body: 'Confirmation NFC optionnelle à la livraison si l’appareil le supporte.',
          },
          {
            title: 'Chat in-app',
            body: 'Coordonnez collecte et livraison sans partager inutilement vos coordonnées personnelles.',
          },
          {
            title: 'Notifications push',
            body: 'Alertes pour correspondances, messages et rappels de remise.',
          },
        ],
      },
    ],
  },
  safety: {
    title: 'Sécurité',
    lead: 'Comment WWNGO aborde vérification, paiements, articles acceptables et conduite communautaire.',
    sections: [
      {
        title: 'Vérification d’identité',
        body: 'Les voyageurs complètent le KYC via Sumsub avant de transporter des colis. Cela réduit la fraude et rassure les expéditeurs.',
      },
      {
        title: 'Séquestre et paiements',
        body: 'Les paiements passent par Stripe et restent en séquestre jusqu’à confirmation de livraison. Les incitations sont alignées pour tous les acteurs.',
        bullets: [
          'Les expéditeurs alimentent le séquestre lorsqu’un trajet est accepté',
          'Les voyageurs sont payés après remise confirmée',
          'Les litiges suivent les politiques du marché et de remboursement',
        ],
      },
      {
        title: 'Articles interdits et restreints',
        body: 'WWNGO maintient une politique d’articles interdits. Marchandises illégales, dangereuses ou restreintes ne doivent pas être envoyées. Les violations peuvent entraîner des mesures sur le compte.',
      },
      {
        title: 'Communication in-app',
        body: 'Utilisez le chat WWNGO pour la coordination. Signalez tout comportement suspect via l’app ou l’assistance.',
      },
      {
        title: 'Bonnes pratiques de remise',
        body: 'Privilégiez les lieux publics sûrs, vérifiez les détails du colis et finalisez la confirmation NFC ou in-app à la remise.',
        bullets: [
          'Confirmez l’identité du voyageur in-app',
          'Inspectez le colis avant de confirmer',
          'Ne confirmez que lorsque vous avez reçu le bon article',
        ],
      },
      {
        title: 'Standards communautaires',
        body: 'Notes, signalements et application des règles de sécurité maintiennent la qualité du marché. Le texte juridique complet figure sur la page règles de sécurité (placeholder).',
      },
    ],
  },
  faq: {
    title: 'Foire aux questions',
    lead: 'Réponses sur WWNGO, l’app, les paiements et chaque rôle sur la place de marché.',
    topicsLabel: 'Sujets',
    searchPlaceholder: 'Rechercher des questions',
    categories: [
      {
        id: 'general',
        title: 'Général',
        items: [
          {
            q: 'Qu’est-ce que WWNGO ?',
            a: 'WWNGO est une place de marché internationale de livraison de colis entre particuliers, reliant expéditeurs, voyageurs et destinataires via une application mobile.',
          },
          {
            q: 'Est-ce sur ce site que je réserve ?',
            a: 'Non. Ce site est informatif. Réservations, séquestre, chat et remise sont dans l’application mobile.',
          },
          {
            q: 'Quelles langues sont prises en charge ?',
            a: 'Ce site vitrine est disponible en anglais et en français. Le support in-app peut varier selon les versions.',
          },
        ],
      },
      {
        id: 'customers',
        title: 'Expéditeurs',
        items: [
          {
            q: 'Comment créer une demande de colis ?',
            a: 'Téléchargez l’app, connectez-vous et suivez le parcours expéditeur pour publier route et détails du colis.',
          },
          {
            q: 'Mes articles sont-ils assurés ?',
            a: 'Les conditions d’assurance dépendent de la politique du marché et des règles locales. Voir les conditions d’utilisation (placeholder).',
          },
        ],
      },
      {
        id: 'travelers',
        title: 'Voyageurs',
        items: [
          {
            q: 'Comment être vérifié ?',
            a: 'Complétez le KYC Sumsub in-app et acceptez les directives voyageur.',
          },
          {
            q: 'Puis-je refuser un colis ?',
            a: 'Vous choisissez les demandes à accepter. N’acceptez pas d’articles contraires aux règles sur les articles interdits.',
          },
        ],
      },
      {
        id: 'receivers',
        title: 'Destinataires',
        items: [
          {
            q: 'Comment suis-je informé ?',
            a: 'Notifications push et mises à jour in-app jusqu’à la remise.',
          },
        ],
      },
      {
        id: 'payments',
        title: 'Paiements et séquestre',
        items: [
          {
            q: 'Qu’est-ce que le séquestre ?',
            a: 'Les fonds sont sécurisés jusqu’à confirmation de livraison, puis libérés au voyageur selon la politique.',
          },
          {
            q: 'Quels moyens de paiement ?',
            a: 'Stripe gère les paiements par carte in-app. Les moyens disponibles peuvent varier selon le pays.',
          },
        ],
      },
      {
        id: 'safety',
        title: 'Sécurité et vérification',
        items: [
          {
            q: 'Où voir les articles interdits ?',
            a: 'Consultez la page Articles interdits sous Mentions légales (placeholder).',
          },
          {
            q: 'Comment signaler un problème ?',
            a: 'Utilisez le signalement in-app ou contactez l’assistance via la page Contact.',
          },
          {
            q: 'À quoi sert Sumsub ?',
            a: 'Sumsub assure la vérification d’identité (KYC) afin que les participants soient contrôlés avant d’envoyer ou de transporter un colis.',
          },
        ],
      },
      {
        id: 'delivery',
        title: 'Livraison du colis',
        items: [
          {
            q: 'Comment la remise est-elle confirmée ?',
            a: 'Le destinataire confirme la livraison via NFC ou vérification in-app pour libérer l’escrow.',
          },
          {
            q: 'Où devons-nous nous rencontrer ?',
            a: 'WWNGO recommande des lieux publics convenus dans le chat entre les parties.',
          },
        ],
      },
      {
        id: 'app',
        title: 'Application mobile',
        items: [
          {
            q: 'Où télécharger l’application ?',
            a: 'Utilisez la page Télécharger. Les liens des stores restent des placeholders jusqu’aux URLs officielles Google Play et App Store.',
          },
          {
            q: 'Puis-je réserver une livraison sur ce site ?',
            a: 'Non. Réservation, matching, escrow, chat et confirmation NFC se font uniquement dans l’application mobile WWNGO.',
          },
        ],
      },
    ],
  },
  contact: {
    title: 'Nous contacter',
    lead: 'Questions sur WWNGO, partenariats ou assistance, envoyez-nous un message.',
    formTitle: 'Envoyer un message',
    formLead: 'Nous répondons généralement sous quelques jours ouvrés. Les champs marqués * sont obligatoires.',
    officeTitle: 'Autres moyens de contact',
    phoneLabel: 'Téléphone',
    phonePlaceholder: '[Numéro de téléphone placeholder]',
  },
  download: {
    title: 'Télécharger WWNGO',
    lead: 'Obtenez l’app pour envoyer des colis, transporter lors de vos trajets et confirmer les remises.',
    introTitle: 'La place de marché dans votre poche',
    introBody:
      'Créez des demandes, acceptez des trajets, alimentez le séquestre, discutez, suivez et finalisez la confirmation NFC ou in-app, le tout dans l’app WWNGO.',
    benefitsTitle: 'Ce que vous pouvez faire in-app',
    benefits: [
      { title: 'Envoyer et recevoir', body: 'Parcours expéditeur et destinataire complets avec notifications.' },
      { title: 'Voyager et gagner', body: 'Proposez de la capacité sur vos trajets existants.' },
      { title: 'Payer en sécurité', body: 'Stripe et séquestre intégrés à chaque trajet.' },
      { title: 'Rester connecté', body: 'Chat, notes et portefeuille au même endroit.' },
    ],
    qrTitle: 'Scanner pour télécharger',
    qrNote: '[Placeholder code QR, ajouter les URLs des stores et le visuel QR à la publication des apps.]',
    webNote: 'Les badges mènent vers Google Play et l’App Store lorsque les URLs sont configurées dans les variables d’environnement.',
  },
  legal: {
    privacy: {
      title: 'Politique de confidentialité',
      lead: 'Brouillon placeholder, remplacer par une politique validée par un conseil juridique avant lancement.',
      draftNotice: 'Ce document est un texte placeholder pour le site vitrine WWNGO et ne constitue pas un avis juridique.',
      lastUpdatedLabel: 'Dernière mise à jour',
      lastUpdatedValue: '[Date placeholder]',
      sections: [
        {
          heading: 'Aperçu',
          paragraphs: [
            'WWNGO respecte votre vie privée. Ce placeholder décrit les catégories de données que l’app et le site pourront traiter une fois les politiques finales publiées.',
          ],
        },
        {
          heading: 'Données que nous pouvons collecter',
          paragraphs: ['Exemples : compte, vérification, métadonnées de transaction et communications d’assistance.'],
          list: [
            'Informations d’identité et KYC via des partenaires de vérification',
            'Informations de paiement traitées via Stripe',
            'Données d’appareil et d’usage pour le fonctionnement de l’app',
          ],
        },
        {
          heading: 'Vos droits',
          paragraphs: ['Les droits dépendent de la loi applicable. Contactez info@wwngo.com pour les demandes confidentialité une fois le service en ligne.'],
        },
      ],
    },
    terms: {
      title: 'Conditions d’utilisation',
      lead: 'Brouillon placeholder, remplacer par des conditions validées par un conseil juridique avant lancement.',
      draftNotice: 'Ce document est un texte placeholder pour le site vitrine WWNGO et ne constitue pas un avis juridique.',
      lastUpdatedLabel: 'Dernière mise à jour',
      lastUpdatedValue: '[Date placeholder]',
      sections: [
        {
          heading: 'Accord',
          paragraphs: [
            'En utilisant WWNGO, vous acceptez les règles du marché pour expéditeurs, voyageurs et destinataires. Les conditions finales seront présentées in-app à l’inscription.',
          ],
        },
        {
          heading: 'Rôle de la plateforme',
          paragraphs: [
            'WWNGO fournit une plateforme d’appariement et de paiement. Les voyageurs sont des participants indépendants, pas des employés de WWNGO.',
          ],
        },
        {
          heading: 'Usage acceptable',
          paragraphs: ['Les utilisateurs doivent respecter les politiques d’articles interdits, de sécurité et de conduite.'],
        },
      ],
    },
    cookies: {
      title: 'Politique des cookies',
      lead: 'Brouillon placeholder, décrire les cookies utilisés sur ce site vitrine.',
      draftNotice: 'Ce document est un texte placeholder pour le site vitrine WWNGO et ne constitue pas un avis juridique.',
      lastUpdatedLabel: 'Dernière mise à jour',
      lastUpdatedValue: '[Date placeholder]',
      sections: [
        {
          heading: 'Qu’est-ce qu’un cookie',
          paragraphs: ['Les cookies sont de petits fichiers stockés sur votre appareil pour mémoriser des préférences et mesurer les performances du site.'],
        },
        {
          heading: 'Comment nous utilisons les cookies',
          paragraphs: [
            'Ce site peut utiliser des cookies essentiels pour la langue et des cookies analytiques une fois configurés. Les détails seront mis à jour avant le lancement.',
          ],
        },
      ],
    },
    safetyRules: {
      title: 'Règles de sécurité',
      lead: 'Brouillon placeholder, attentes de sécurité communautaire pour tous les participants WWNGO.',
      draftNotice: 'Ce document est un texte placeholder pour le site vitrine WWNGO et ne constitue pas un avis juridique.',
      lastUpdatedLabel: 'Dernière mise à jour',
      lastUpdatedValue: '[Date placeholder]',
      sections: [
        {
          heading: 'Conduite générale',
          paragraphs: ['Traitez les autres participants avec respect. Ne déformez pas les colis ni votre identité.'],
        },
        {
          heading: 'Rencontres et remises',
          paragraphs: ['Choisissez des lieux sûrs, vérifiez les profils in-app et ne confirmez que les bons colis.'],
        },
        {
          heading: 'Signalement',
          paragraphs: ['Signalez les violations via l’app ou contactez l’assistance.'],
        },
      ],
    },
    prohibited: {
      title: 'Articles interdits',
      lead: 'Brouillon placeholder, articles qui ne doivent pas transiter via WWNGO.',
      draftNotice: 'Ce document est un texte placeholder pour le site vitrine WWNGO et ne constitue pas un avis juridique.',
      lastUpdatedLabel: 'Dernière mise à jour',
      lastUpdatedValue: '[Date placeholder]',
      sections: [
        {
          heading: 'Non autorisé',
          paragraphs: ['Les catégories suivantes sont des exemples d’articles interdits. La liste finale sera publiée in-app.'],
          list: [
            'Marchandises ou substances illégales',
            'Armes, explosifs ou matières dangereuses',
            'Articles restreints par compagnies aériennes ou douanes',
            'Contrefaçons ou biens volés',
          ],
        },
        {
          heading: 'Discrétion du voyageur',
          paragraphs: ['Les voyageurs peuvent refuser toute demande jugée dangereuse ou non conforme.'],
        },
      ],
    },
    refund: {
      title: 'Politique de remboursement',
      lead: 'Brouillon placeholder, séquestre, annulation et scénarios de remboursement.',
      draftNotice: 'Ce document est un texte placeholder pour le site vitrine WWNGO et ne constitue pas un avis juridique.',
      lastUpdatedLabel: 'Dernière mise à jour',
      lastUpdatedValue: '[Date placeholder]',
      sections: [
        {
          heading: 'Bases du séquestre',
          paragraphs: ['Les remboursements dépendent du statut du trajet, du motif d’annulation et des règles du marché au moment de la transaction.'],
        },
        {
          heading: 'Litiges',
          paragraphs: ['Ouvrez un litige in-app ou contactez info@wwngo.com. Les délais seront définis dans les conditions finales.'],
        },
      ],
    },
  },
};
