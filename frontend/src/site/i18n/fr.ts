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
    supportEmailPlaceholder: 'support@wwngo.com',
    businessEmailPlaceholder: 'info@wwngo.com',
    addressPlaceholder: 'info@wwngo.com',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
    cookies: 'Politique des cookies',
    safetyRules: 'Règles de sécurité',
    prohibited: 'Articles interdits',
    refund: 'Politique de remboursement',
    deleteAccount: 'Supprimer le compte',
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
  deleteAccount: {
    title: 'Supprimer le compte',
    lead:
      'Demandez la suppression définitive de votre compte WWNGO et des données personnelles associées. Cette page explique le processus et vous permet d’envoyer une demande en ligne.',
    formTitle: 'Demande de suppression de compte',
    formLead:
      'Utilisez l’adresse e-mail liée à votre compte WWNGO. Nous pourrons vous contacter pour vérifier que vous êtes bien le titulaire du compte avant de finaliser la suppression.',
    stepsTitle: 'Comment fonctionne la suppression',
    steps: [
      {
        title: 'Envoyer une demande',
        body: 'Remplissez le formulaire de cette page avec l’e-mail de votre compte WWNGO. Vous pouvez aussi écrire à support@wwngo.com avec l’objet « Supprimer mon compte ».',
      },
      {
        title: 'Vérification d’identité',
        body: 'Nous vérifions que la demande vient du titulaire du compte. Les livraisons en cours, litiges ouverts ou soldes non réglés peuvent devoir être traités d’abord.',
      },
      {
        title: 'Suppression définitive',
        body: 'Après vérification, nous supprimons ou anonymisons définitivement les données personnelles du compte. Vous perdrez l’accès à l’app avec ce compte.',
      },
    ],
    dataTitle: 'Que deviennent vos données',
    dataDeletedIntro: 'Lorsque la suppression est terminée, nous supprimons ou anonymisons :',
    dataDeleted: [
      'Les détails du profil (nom, e-mail, téléphone, préférences)',
      'Les identifiants de connexion et jetons d’authentification',
      'L’historique de chat in-app lié à votre compte, dans la mesure du possible',
      'Les jetons d’appareil utilisés pour les notifications push',
    ],
    dataRetainedIntro: 'Nous pouvons conserver des enregistrements limités lorsque la loi l’exige ou pour prévenir la fraude, par exemple :',
    dataRetained: [
      'Les enregistrements de transaction, séquestre et versements nécessaires à la comptabilité ou aux litiges',
      'Les journaux KYC ou de sécurité exigés par des obligations légales ou de conformité',
      'Les enregistrements nécessaires pour prévenir les abus après suppression',
    ],
    processingNote:
      'Les demandes de suppression sont généralement traitées sous 30 jours après vérification d’identité. Les demandes incomplètes peuvent prendre plus de temps le temps de vous contacter.',
    emailLabel: 'E-mail du compte',
    emailHint: 'Doit correspondre à l’e-mail de votre compte WWNGO',
    nameLabel: 'Nom complet',
    phoneLabel: 'Numéro de téléphone',
    phoneOptional: 'Facultatif',
    reasonLabel: 'Motif (facultatif)',
    reasonPlaceholder: 'Indiquez brièvement pourquoi vous partez (facultatif)',
    confirmLabel:
      'Je comprends que la suppression de mon compte WWNGO est définitive et que je perdrai l’accès à mon profil, à la gestion du portefeuille et à l’historique de livraison lié à ce compte.',
    submit: 'Demander la suppression du compte',
    success:
      'Votre demande de suppression a été envoyée. Nous vous répondrons à l’e-mail fourni après vérification de votre compte.',
    error: 'Une erreur s’est produite. Réessayez ou écrivez à support@wwngo.com.',
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
      lead:
        'Comment WWNGO collecte, utilise, stocke et protège les données personnelles sur notre site et notre place de marché mobile pour Expéditeurs, Voyageurs et Destinataires.',
      draftNotice: '',
      lastUpdatedLabel: 'Dernière mise à jour',
      lastUpdatedValue: '',
      sections: [
        {
          heading: '1. Qui nous sommes',
          paragraphs: [
            'WWNGO est une place de marché internationale de livraison de colis peer-to-peer. Nous mettons en relation les Expéditeurs qui ont besoin d’envoyer un colis, les Voyageurs qui disposent d’une capacité sur un trajet qu’ils effectuent déjà, et les Destinataires qui récupèrent le colis à l’arrivée.',
            'Dans cette politique, « WWNGO », « nous » et « notre » désignent la plateforme WWNGO et ses opérateurs. Pour les demandes de confidentialité, contactez support@wwngo.com. Pour les demandes générales, contactez info@wwngo.com.',
          ],
        },
        {
          heading: '2. Champ d’application',
          paragraphs: [
            'Cette Politique de confidentialité couvre les données personnelles traitées via :',
          ],
          list: [
            'Le site vitrine WWNGO, y compris la préférence de langue, les formulaires de contact et les demandes de suppression de compte',
            'L’application mobile WWNGO utilisée pour les comptes, le matching, le chat, les paiements en séquestre, le KYC, le suivi, les notes, le portefeuille et la confirmation NFC ou in-app',
            'Les systèmes backend qui assurent l’authentification, les notifications, les litiges et le fonctionnement de la place de marché',
          ],
        },
        {
          heading: '3. Données que nous collectons',
          paragraphs: [
            'Nous collectons uniquement ce qui est nécessaire pour faire fonctionner une place de marché de livraison digne de confiance. Les données exactes dépendent de votre rôle et de votre usage de WWNGO.',
          ],
          list: [
            'Compte et profil : nom, e-mail, numéro de téléphone, mot de passe ou jetons d’auth, langue préférée, rôle choisi (Expéditeur, Voyageur, Destinataire) et informations de profil que vous ajoutez',
            'Vérification d’identité (KYC) : documents d’identité, selfie ou contrôles biométriques, nationalité, date de naissance et résultat de vérification traités par Sumsub',
            'Données de livraison et de trajet : descriptions de colis, photos, dimensions et poids, détails de prise en charge et de dépôt, itinéraires et dates, offres ou matching, coordination de rendez-vous, confirmations NFC et statut de livraison',
            'Communications : chat in-app entre utilisateurs mis en relation, messages de support, preuves de litige, et demandes de contact ou de suppression sur le site',
            'Paiements et portefeuille : métadonnées de paiement et de versement via Stripe, statut du séquestre, frais, remboursements et activité du portefeuille. Les numéros de carte complets sont traités par Stripe et ne sont pas stockés sur les serveurs WWNGO',
            'Appareil et usage : type d’appareil, version du système et de l’app, adresse IP, localisation approximative si nécessaire aux rendez-vous ou à la sécurité, diagnostics de plantage et journaux de sécurité',
          ],
        },
        {
          heading: '4. Comment nous utilisons vos données',
          paragraphs: ['Nous utilisons les données personnelles pour faire fonctionner et protéger la place de marché WWNGO, notamment pour :'],
          list: [
            'Créer des comptes, authentifier les utilisateurs et prendre en charge les parcours Expéditeur, Voyageur et Destinataire',
            'Associer les demandes de colis à la capacité des voyageurs et afficher les informations de trajet ou de livraison pertinentes',
            'Activer le chat in-app, les notifications, le suivi et la confirmation de livraison NFC ou in-app',
            'Réaliser les contrôles KYC, réduire la fraude et faire respecter les Règles de sécurité et la politique d’Articles interdits',
            'Traiter les paiements en séquestre, les versements Voyageur, les remboursements et les litiges via Stripe et le portefeuille WWNGO',
            'Répondre aux demandes de support, de confidentialité et de suppression de compte',
            'Améliorer la fiabilité, diagnostiquer les problèmes et sécuriser le site et l’app',
            'Respecter les obligations légales, comptables et réglementaires applicables',
          ],
        },
        {
          heading: '5. Stockage et protection des données',
          paragraphs: [
            'WWNGO stocke les enregistrements de compte, de livraison, de chat et de transaction dans des systèmes backend sécurisés utilisés pour faire fonctionner le service. L’accès est limité aux systèmes et personnes autorisés qui en ont besoin pour le support, la conformité ou l’ingénierie.',
            'Nous appliquons des mesures telles que le chiffrement HTTPS en transit, des contrôles d’accès, une surveillance, et les pratiques de sécurité de nos partenaires pour les paiements (Stripe) et la vérification d’identité (Sumsub). Aucun service en ligne n’est parfaitement sûr. Protégez vos identifiants et contactez support@wwngo.com en cas d’accès non autorisé suspect.',
          ],
        },
        {
          heading: '6. Bases légales',
          paragraphs: [
            'Lorsque le droit de la confidentialité l’exige, nous traitons les données pour exécuter notre contrat avec vous, pour des intérêts légitimes tels que la sécurité de la plateforme et la prévention de la fraude, pour respecter des obligations légales et, le cas échéant, sur la base de votre consentement (par exemple cookies ou communications optionnels).',
          ],
        },
        {
          heading: '7. Partage des données',
          paragraphs: [
            'Nous ne vendons pas les données personnelles. Nous partageons des informations uniquement lorsque cela est nécessaire au fonctionnement de la place de marché ou lorsque la loi l’exige :',
          ],
          list: [
            'Autres utilisateurs : profil limité, statut de vérification, détails de colis ou de trajet, et chat nécessaire pour réaliser une livraison mise en relation',
            'Stripe : traitement des paiements, flux liés au séquestre, remboursements et versements',
            'Sumsub : vérification d’identité et traitements KYC associés',
            'Prestataires : hébergement, e-mail ou SMS, notifications push, analytique et outils de support sous garanties contractuelles',
            'Autorités ou partenaires de sécurité : lorsque la loi l’exige ou pour enquêter sur la fraude, les articles interdits ou des violations graves de nos politiques',
          ],
        },
        {
          heading: '8. Transferts internationaux',
          paragraphs: [
            'Comme WWNGO prend en charge des livraisons transfrontalières, les données personnelles peuvent être traitées dans des pays autres que celui où vous résidez, notamment par Stripe, Sumsub et des prestataires d’infrastructure. Lorsque cela est requis, nous utilisons des garanties de transfert appropriées.',
          ],
        },
        {
          heading: '9. Conservation',
          paragraphs: [
            'Nous conservons les données personnelles uniquement aussi longtemps que nécessaire aux opérations de la place de marché, au support, au traitement des litiges, à la prévention de la fraude, à la comptabilité et à la conformité légale.',
            'Les enregistrements de livraison, de séquestre, de versement et liés au KYC peuvent être conservés plus longtemps lorsque la loi l’exige ou pour résoudre des litiges. Lorsque les données ne sont plus nécessaires, nous les supprimons ou les anonymisons dans la mesure du possible.',
          ],
        },
        {
          heading: '10. Vos droits',
          paragraphs: [
            'Selon votre lieu de résidence, vous pouvez avoir le droit d’accéder à vos données, de les rectifier, de les supprimer, d’en limiter le traitement, de vous opposer à certains traitements, d’en demander la portabilité et de retirer votre consentement lorsque le traitement est fondé sur le consentement.',
            'Vous pouvez demander la suppression de votre compte via la page Supprimer le compte de ce site ou en écrivant à support@wwngo.com. Nous pouvons vérifier votre identité avant d’agir, et certains enregistrements peuvent être conservés lorsque la loi ou la prévention de la fraude l’exige.',
          ],
        },
        {
          heading: '11. Mineurs',
          paragraphs: [
            'WWNGO est destiné aux utilisateurs âgés de 18 ans et plus. Nous ne collectons pas sciemment de données personnelles auprès de mineurs de moins de 18 ans. Si vous pensez qu’un mineur a créé un compte ou fourni des données, contactez support@wwngo.com afin que nous puissions les supprimer.',
          ],
        },
        {
          heading: '12. Cookies et technologies similaires',
          paragraphs: [
            'Le site vitrine peut utiliser des cookies essentiels tels que la préférence de langue et, lorsqu’ils sont configurés, des cookies d’analytique pour comprendre l’usage du site. Voir notre Politique de cookies pour plus de détails.',
            'L’application mobile peut stocker l’état de connexion, des jetons de notification et des identifiants d’appareil nécessaires à l’authentification, à la messagerie et à la sécurité.',
          ],
        },
        {
          heading: '13. Modifications de cette politique',
          paragraphs: [
            'Nous pouvons mettre à jour cette Politique de confidentialité pour refléter des évolutions produit, juridiques ou opérationnelles. Les mises à jour importantes peuvent être présentées dans l’app, sur le site ou par e-mail le cas échéant. Continuer à utiliser WWNGO après une mise à jour signifie que vous prenez acte de la politique révisée.',
          ],
        },
        {
          heading: '14. Contact',
          paragraphs: [
            'Demandes de confidentialité et de données : support@wwngo.com',
            'Demandes générales : info@wwngo.com',
            'Les demandes de suppression de compte peuvent aussi être envoyées via /delete-account sur ce site.',
          ],
        },
      ],
    },
    terms: {
      title: 'Conditions d’utilisation',
      lead:
        'Les présentes Conditions d’utilisation régissent votre accès et votre utilisation du site web WWNGO, de l’application mobile et de la place de marché qui met en relation Expéditeurs, Voyageurs et Destinataires pour la livraison internationale peer-to-peer de colis.',
      draftNotice: '',
      lastUpdatedLabel: 'Dernière mise à jour',
      lastUpdatedValue: '',
      sections: [
        {
          heading: '1. Acceptation des conditions',
          paragraphs: [
            'En créant un compte, en téléchargeant l’app, en utilisant le site ou en participant à une livraison organisée via WWNGO, vous acceptez ces Conditions, ainsi que notre Politique de confidentialité, nos Règles de sécurité, la politique d’Articles interdits, la Politique de cookies et la Politique de remboursement.',
            'Si vous n’êtes pas d’accord, n’utilisez pas WWNGO. Nous pouvons mettre à jour ces Conditions de temps à autre. Les mises à jour importantes peuvent être présentées dans l’app ou sur le site. Continuer à utiliser le service après une mise à jour signifie que vous acceptez les Conditions révisées.',
          ],
        },
        {
          heading: '2. À propos de WWNGO',
          paragraphs: [
            'WWNGO est une place de marché peer-to-peer. Nous aidons les utilisateurs à trouver des correspondances, communiquer in-app, vérifier leur identité, conserver les paiements en séquestre, suivre les livraisons et confirmer les remises (y compris les checkpoints NFC lorsqu’ils sont disponibles).',
            'WWNGO n’est pas un transporteur classique, une compagnie aérienne, un transitaire ou un courtier en douane. Nous ne prenons pas possession physique des colis en tant que transporteur. Les Voyageurs sont des utilisateurs indépendants, et non des employés, agents ou partenaires de WWNGO au sens d’une relation d’emploi.',
          ],
        },
        {
          heading: '3. Éligibilité et comptes',
          paragraphs: [],
          list: [
            'Vous devez avoir au moins 18 ans et être en mesure de conclure un contrat.',
            'Vous devez fournir des informations d’inscription exactes et les maintenir à jour.',
            'Vous êtes responsable de la protection de vos identifiants et de l’activité réalisée via votre compte.',
            'Nous pouvons exiger une vérification e-mail, téléphone et d’identité (KYC via Sumsub) avant que vous puissiez envoyer, transporter ou recevoir des colis.',
            'Une personne doit en principe conserver un seul compte, sauf autorisation expresse. Les comptes fictifs, en double ou partagés sont interdits.',
          ],
        },
        {
          heading: '4. Rôles des utilisateurs',
          paragraphs: [
            'Les utilisateurs peuvent agir en tant qu’Expéditeurs, Voyageurs, Destinataires, ou cumuler plusieurs rôles selon la transaction :',
          ],
          list: [
            'Les Expéditeurs demandent la livraison d’un colis, fournissent des détails exacts, alimentent le séquestre lorsque requis et confirment la prise en charge.',
            'Les Voyageurs proposent une capacité de voyage, n’acceptent que des colis qu’ils peuvent transporter légalement et en sécurité, les gardent protégés et confirment la prise en charge et la livraison.',
            'Les Destinataires examinent les détails de livraison, se présentent au lieu convenu, inspectent le colis et confirment la réception ou ouvrent un litige si nécessaire.',
          ],
        },
        {
          heading: '5. Règles de la place de marché',
          paragraphs: [
            'Toutes les livraisons doivent être organisées et finalisées via les workflows WWNGO. Ne déplacez pas les paiements, négociations ou confirmations de remise en dehors de la plateforme.',
            'Vous devez respecter nos Règles de sécurité et la politique d’Articles interdits, ainsi que les lois des compagnies aériennes, douanes, frontières et pays de destination. Les fausses descriptions de colis, articles interdits ou fausses confirmations de remise peuvent entraîner une suspension immédiate.',
            'Les rendez-vous doivent être organisés avec soin. Privilégiez des lieux publics lorsque c’est possible, utilisez le chat in-app, et ne confirmez jamais un checkpoint NFC ou in-app pour une remise qui n’a pas eu lieu.',
          ],
        },
        {
          heading: '6. Paiements, séquestre et frais',
          paragraphs: [
            'Les paiements sont traités via Stripe. Les fonds de l’Expéditeur peuvent être conservés en séquestre jusqu’à confirmation de la livraison selon les règles du marché, après quoi les versements au Voyageur peuvent être libérés sous réserve de frais, de retenues, de litiges ou de contrôles de conformité.',
            'WWNGO peut facturer des frais de service, de plateforme ou de traitement des paiements. Les frais applicables sont indiqués dans l’app avant confirmation d’une transaction. La disponibilité des devises et des options de versement peut varier selon la région.',
            'Vous autorisez WWNGO et Stripe à traiter les prélèvements, remboursements, rétrofacturations et ajustements liés à votre usage du service. Vous êtes responsable des taxes applicables à votre activité lorsque la loi l’exige.',
          ],
        },
        {
          heading: '7. Annulations, litiges et remboursements',
          paragraphs: [
            'Les annulations, remises échouées, colis endommagés ou manquants et situations similaires doivent être signalés dès que possible via le processus de litige in-app. Les décisions dépendent du statut de confirmation, des preuves, des Règles de sécurité et de notre Politique de remboursement.',
            'WWNGO peut suspendre la libération du séquestre, annuler ou retenir des versements, demander des informations supplémentaires ou faciliter un échange entre les parties. Ouvrir un litige ne garantit pas un remboursement. Voir la Politique de remboursement pour plus de détails.',
          ],
        },
        {
          heading: '8. Usage acceptable',
          paragraphs: ['Vous vous engagez à ne pas :'],
          list: [
            'Envoyer, transporter ou demander des articles illégaux, dangereux, volés, contrefaits ou autrement interdits.',
            'Falsifier votre identité, les détails de trajet, le contenu du colis, les photos, le poids, la valeur ou le statut de livraison.',
            'Harceler, menacer ou tromper d’autres utilisateurs, ou tenter de contourner le KYC, le séquestre, le chat ou les fonctions de confirmation.',
            'Extraire, désassembler, perturber ou surcharger le service, ou accéder à des comptes ou données sans autorisation.',
            'Utiliser WWNGO pour le blanchiment d’argent, le contournement de sanctions ou toute finalité illégale.',
          ],
        },
        {
          heading: '9. Vérification et confiance',
          paragraphs: [
            'La vérification d’identité via Sumsub et d’autres contrôles aide à réduire la fraude, mais aucun système n’est parfait. Les utilisateurs restent responsables de leur prudence lors des rencontres et des remises de colis.',
            'Les notes, avis et badges de vérification sont informatifs. WWNGO ne garantit pas la conduite, la ponctualité ou la conformité douanière d’un utilisateur.',
          ],
        },
        {
          heading: '10. Propriété intellectuelle',
          paragraphs: [
            'Le nom, le logo, l’app, le site et les contenus associés de WWNGO appartiennent à WWNGO ou à ses concédants. Vous recevez une licence limitée, non exclusive et non transférable pour utiliser le service conformément à sa finalité.',
            'Vous conservez les droits sur les contenus que vous soumettez (photos de colis, messages de chat, etc.) et accordez à WWNGO une licence pour héberger, traiter et afficher ces contenus autant que nécessaire pour faire fonctionner la place de marché et faire respecter ces Conditions.',
          ],
        },
        {
          heading: '11. Services tiers',
          paragraphs: [
            'Le service s’appuie sur des tiers, notamment Stripe pour les paiements et Sumsub pour le KYC. Leurs conditions et pratiques de confidentialité s’appliquent aussi aux traitements qu’ils réalisent. Les stores d’applications (Google Play, Apple App Store) peuvent imposer des conditions supplémentaires pour le téléchargement de l’app.',
          ],
        },
        {
          heading: '12. Avertissements',
          paragraphs: [
            'WWNGO est fourni « en l’état » et « selon disponibilité ». Dans toute la mesure permise par la loi, nous déclinons les garanties de qualité marchande, d’adéquation à un usage particulier et d’absence de contrefaçon.',
            'Nous ne garantissons pas une disponibilité ininterrompue, un matching sans erreur, un dédouanement réussi, ni que chaque utilisateur terminera une livraison comme prévu. Les voyages transfrontaliers et le transport de colis comportent des risques hors de notre contrôle.',
          ],
        },
        {
          heading: '13. Limitation de responsabilité',
          paragraphs: [
            'Dans toute la mesure permise par la loi, WWNGO et ses opérateurs ne sont pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ni des pertes de profits, de données ou de colis résultant de l’usage de la place de marché, de la conduite des utilisateurs, de perturbations de voyage, d’actions douanières ou d’un cas de force majeure.',
            'Lorsque la responsabilité ne peut être exclue, notre responsabilité globale liée à votre usage de WWNGO est limitée au plus élevé entre (a) les frais que vous avez payés à WWNGO pour la transaction concernée au cours des trois mois précédant la réclamation, ou (b) 100 USD, sauf disposition contraire du droit applicable.',
          ],
        },
        {
          heading: '14. Indemnisation',
          paragraphs: [
            'Vous acceptez d’indemniser et de dégager WWNGO de toute responsabilité au titre des réclamations, pertes et frais (y compris les honoraires d’avocat raisonnables) résultant de votre mauvaise utilisation du service, de vos colis ou voyages, de votre violation de ces Conditions ou de la loi, ou de litiges entre vous et d’autres utilisateurs, compagnies aériennes ou autorités.',
          ],
        },
        {
          heading: '15. Suspension et résiliation',
          paragraphs: [
            'Vous pouvez cesser d’utiliser WWNGO à tout moment. Nous pouvons suspendre ou résilier l’accès, retenir des versements le temps d’une enquête, ou retirer du contenu en cas de violation de ces Conditions, de risque pour d’autres utilisateurs, d’échec de vérification, ou si la loi l’exige.',
            'Les dispositions qui, par nature, doivent survivre (notamment les sommes dues, avertissements, limites de responsabilité, indemnisation et clauses de litige) demeurent après la résiliation.',
          ],
        },
        {
          heading: '16. Droit applicable',
          paragraphs: [
            'Ces Conditions sont régies par les lois applicables au lieu d’exploitation de WWNGO, sans égard aux règles de conflit de lois, sauf lorsque des protections impératives des consommateurs de votre pays s’appliquent. Les tribunaux de cette juridiction peuvent avoir compétence exclusive pour les litiges non résolus à l’amiable, sauf exigence contraire du droit applicable.',
          ],
        },
        {
          heading: '17. Contact',
          paragraphs: [
            'Questions sur ces Conditions : support@wwngo.com',
            'Demandes générales : info@wwngo.com',
          ],
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
      lead: 'WWNGO est une place de marché de livraison de colis entre particuliers qui connecte Expéditeurs, Voyageurs et Destinataires. Tous les participants doivent respecter ces règles de sécurité.',
      draftNotice: '',
      lastUpdatedLabel: 'Dernière mise à jour',
      lastUpdatedValue: '5 novembre 2026',
      sections: [
        {
          heading: '1. Vérification du compte',
          paragraphs: [],
          list: [
            'Les utilisateurs doivent avoir au moins 18 ans.',
            'Fournir des informations personnelles et de contact exactes.',
            'Compléter la vérification e-mail, téléphone et identité avant de participer aux livraisons.',
            'Ne jamais partager vos identifiants de connexion.',
          ],
        },
        {
          heading: '2. Responsabilités de l’expéditeur',
          paragraphs: [],
          list: [
            'Fournir des descriptions, photos, poids et dimensions exacts du colis.',
            'Ne demander la livraison que d’articles légaux.',
            'Respecter les réglementations des compagnies aériennes, des douanes et du pays de destination.',
            'Rencontrer le Voyageur au lieu convenu et confirmer la remise via le Point de contrôle NFC 1.',
          ],
        },
        {
          heading: '3. Responsabilités du voyageur',
          paragraphs: [],
          list: [
            'Fournir des détails de trajet et une capacité de livraison exacts.',
            'N’accepter que des colis pouvant être transportés légalement et en toute sécurité.',
            'Garder les colis en sécurité pendant tout le trajet.',
            'Ne jamais ouvrir, utiliser, échanger ou abandonner un colis.',
            'Compléter le Point de contrôle NFC 1 à l’enlèvement et le Point de contrôle NFC 2 à la livraison.',
          ],
        },
        {
          heading: '4. Responsabilités du destinataire',
          paragraphs: [],
          list: [
            'Examiner les détails du colis avant d’accepter une livraison.',
            'Être disponible au rendez-vous de destination convenu.',
            'Vérifier le colis avant de confirmer la réception.',
            'Ne pas compléter le Point de contrôle NFC 2 si le colis est manquant, endommagé ou non conforme à la description. Ouvrez plutôt un litige dans l’app.',
          ],
        },
        {
          heading: '5. Rencontres sûres et communication',
          paragraphs: [],
          list: [
            'Choisir des lieux de rendez-vous publics appropriés.',
            'Coordonner les livraisons via le chat in-app WWNGO.',
            'Ne pas déplacer paiements ou arrangements de livraison hors de la plateforme.',
            'Ne jamais confirmer une remise qui n’a pas réellement eu lieu.',
          ],
        },
        {
          heading: '6. Signalements et litiges',
          paragraphs: [
            'Signalez toute activité suspecte, problème de livraison ou préoccupation de sécurité via le processus de litige in-app. Pour l’assistance, contactez support@wwngo.com.',
          ],
        },
      ],
    },
    prohibited: {
      title: 'Articles interdits',
      lead: 'WWNGO n’autorise pas les utilisateurs à envoyer, transporter ou demander des articles illégaux, dangereux ou restreints via la plateforme.',
      draftNotice: '',
      lastUpdatedLabel: 'Dernière mise à jour',
      lastUpdatedValue: '5 novembre 2026',
      sections: [
        {
          heading: 'Articles non autorisés',
          paragraphs: ['Les articles suivants sont interdits :'],
          list: [
            'Drogues et substances illégales.',
            'Armes et explosifs.',
            'Matières dangereuses.',
            'Biens volés.',
            'Articles de contrefaçon.',
            'Espèces ou instruments au porteur au-delà de ce que permet la loi locale.',
            'Animaux vivants.',
            'Restes humains.',
            'Tout article interdit par le transporteur, la compagnie aérienne ou le pays de destination.',
          ],
        },
        {
          heading: 'Exigences légales importantes',
          paragraphs: [],
          list: [
            'Tous les colis doivent respecter les lois et réglementations de transport applicables.',
            'Les expéditeurs doivent fournir des descriptions véridiques du contenu des colis.',
            'Les voyageurs doivent s’assurer que les articles transportés respectent les exigences aériennes, frontalières et douanières.',
            'Les utilisateurs ne doivent pas demander la livraison d’articles illégaux ou dangereux à transporter.',
          ],
        },
        {
          heading: 'Conduite à tolérance zéro',
          paragraphs: ['Les activités suivantes sont également interdites :'],
          list: [
            'Fausses identités ou photos de colis trompeuses.',
            'Activité frauduleuse.',
            'Harcèlement d’autres utilisateurs.',
            'Manipulation des notes et avis.',
            'Tentatives de contourner le séquestre ou les processus de paiement WWNGO.',
          ],
        },
        {
          heading: 'Droit de refus du voyageur',
          paragraphs: [
            'Les voyageurs ne doivent accepter que des colis qu’ils peuvent transporter légalement et en toute sécurité. Ils peuvent refuser des demandes qui semblent dangereuses ou non conformes.',
            'Les violations peuvent entraîner la suspension du compte, le gel du séquestre ou un signalement aux autorités compétentes.',
            'Pour toute assistance, contactez support@wwngo.com.',
          ],
        },
      ],
    },
    refund: {
      title: 'Politique de remboursement',
      lead: 'WWNGO utilise un système de séquestre pour gérer les paiements entre Expéditeurs et Voyageurs. L’éligibilité au remboursement dépend du statut de livraison, du moment de l’annulation et des règles in-app applicables.',
      draftNotice: '',
      lastUpdatedLabel: 'Dernière mise à jour',
      lastUpdatedValue: '5 novembre 2026',
      sections: [
        {
          heading: '1. Séquestre et paiements',
          paragraphs: [],
          list: [
            'Lorsqu’un Expéditeur accepte l’offre d’un Voyageur, le paiement convenu du Voyageur est placé en séquestre.',
            'Les fonds restent en séquestre jusqu’à confirmation de livraison, remboursement ou résolution d’un litige.',
            'La confirmation réussie du Point de contrôle NFC 2 marque l’envoi comme Livré et libère le séquestre au Voyageur, sauf si un litige a gelé les fonds.',
          ],
        },
        {
          heading: '2. Annulation et remboursements',
          paragraphs: [],
          list: [
            'Les livraisons réservées peuvent être annulées avant que le trajet ne soit en transit ou livré, sous réserve des règles in-app.',
            'Lorsqu’une livraison réservée est annulée, le principal du séquestre est remboursé à l’Expéditeur.',
            'Les frais de plateforme sont remboursés aux parties payantes lorsque l’annulation a lieu plus de 24 heures avant le trajet.',
            'Les frais de plateforme sont généralement non remboursables lorsque l’annulation a lieu dans les 24 heures précédant le trajet.',
          ],
        },
        {
          heading: '3. Annulations automatiques',
          paragraphs: [],
          list: [
            'Les réservations peuvent s’annuler automatiquement lorsque les fenêtres de paiement ou les délais d’acceptation expirent.',
            'Dans ces cas, le principal du séquestre est remboursé selon les règles in-app applicables.',
          ],
        },
        {
          heading: '4. Recharges et paiements effectués',
          paragraphs: [
            'Les recharges de portefeuille et les paiements déjà effectués ne sont pas annulés, sauf obligation légale ou issue formelle d’un litige.',
          ],
        },
        {
          heading: '5. Litiges et décisions de remboursement',
          paragraphs: ['Si un colis est manquant, endommagé ou non conforme à la description :'],
          list: [
            'Ouvrez un litige via l’application mobile WWNGO.',
            'Le dépôt d’un litige gèle le séquestre pendant l’examen du dossier par WWNGO.',
            'WWNGO peut examiner les dossiers de livraison, photos de colis, messages de chat, enregistrements NFC et informations d’identité.',
            'Après examen, le séquestre peut être libéré, remboursé ou partagé selon la décision du litige.',
            'Ne complétez pas le Point de contrôle NFC 2 si vous avez l’intention de contester la réception du colis.',
          ],
        },
        {
          heading: '6. Besoin d’aide ?',
          paragraphs: [
            'Pour toute assistance ou question concernant les annulations et remboursements, contactez support@wwngo.com.',
          ],
        },
      ],
    },
  },
};
