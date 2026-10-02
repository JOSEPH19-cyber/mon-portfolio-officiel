// ============================================
// DONNÉES CENTRALISÉES DU PORTFOLIO
// Modifie ce fichier pour mettre à jour le site
// ============================================

export const portfolio = {
  // --------------------------------------------
  // IDENTITÉ
  // --------------------------------------------
  identity: {
    firstName: 'Joseph',
    lastName: 'MBIKI',
    fullName: 'Joseph MBIKI',
    title: 'Développeur Full-Stack & Future Data Scientist',
    tagline: 'Je construis des applications web modernes et j\'explore la puissance des données.',
    typewriter: [
      'Développeur Full-Stack',
      'Data Enthusiast',
      'Étudiant en Informatique',
      'Problem Solver',
    ],
    availability: 'Ouvert aux opportunités',
    location: 'Kinshasa, RDC',
    languages: ['Français', 'Lingala', 'Anglais'],
    email: 'josephmbiki06@gmail.com',
    whatsapp: '+243839973401',
  },

  // --------------------------------------------
  // BIO (À PROPOS)
  // --------------------------------------------
  bio: {
    short: 'Étudiant en sciences informatiques à l\'Université Protestante au Congo, passionné par le développement web et le monde de la data.',
    long: `Étudiant en sciences informatiques à l'Université Protestante au Congo, je suis passionné par le développement web et le monde de la data. En tant que développeur full-stack, je conçois des applications modernes et performantes, tout en explorant comment les données peuvent transformer les décisions.`,
    quote: 'Curieux et rigoureux, j\'aime autant coder une interface qu\'analyser un jeu de données. Mon objectif : créer des solutions qui allient technologie et intelligence des données.',
  },

  // --------------------------------------------
  // RÉSEAUX SOCIAUX
  // --------------------------------------------
  socials: {
    linkedin: 'https://www.linkedin.com/in/joseph-mbiki-5346a5374',
    github: 'https://github.com/JOSEPH19-cyber',
    whatsapp: 'https://wa.me/243839973401',
    email: 'mailto:josephmbiki06@gmail.com',
  },

  // --------------------------------------------
  // SERVICES
  // --------------------------------------------
  services: [
    {
      icon: 'code',
      title: 'Développement Web Full-Stack',
      description: 'Conception et développement d\'applications web complètes, du front-end au back-end, avec des technologies modernes.',
    },
    {
      icon: 'palette',
      title: 'Intégration UI Moderne',
      description: 'Création d\'interfaces responsives et élégantes avec Vue.js et Tailwind CSS, centrées sur l\'expérience utilisateur.',
    },
    {
      icon: 'chart',
      title: 'Analyse de Données',
      description: 'Traitement, visualisation et interprétation de données avec Excel avancé et Python pour éclairer les décisions.',
    },
    {
      icon: 'database',
      title: 'Conception de Bases de Données',
      description: 'Modélisation avec Merise et implémentation de bases de données SQL (MySQL) optimisées et évolutives.',
    },
  ],

  // --------------------------------------------
  // COMPÉTENCES (groupées par catégorie)
  // --------------------------------------------
  skills: [
    {
      category: 'Langages',
      icon: 'code',
      items: [
        { name: 'HTML', icon: 'html5' },
        { name: 'CSS', icon: 'css3' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'Python', icon: 'python' },
        { name: 'PHP', icon: 'php' },
      ],
    },
    {
      category: 'Frameworks & Librairies',
      icon: 'layers',
      items: [
        { name: 'Vue.js', icon: 'vuejs' },
        { name: 'Laravel', icon: 'laravel' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
      ],
    },
    {
      category: 'Bases de données',
      icon: 'database',
      items: [
        { name: 'MySQL', icon: 'mysql' },
        { name: 'SQL', icon: 'mysql' },
      ],
    },
    {
      category: 'Data & Modélisation',
      icon: 'chart',
      items: [
        { name: 'Excel Avancé', icon: 'excel' },
        { name: 'Merise', icon: 'merise' },
      ],
    },
    {
      category: 'Outils & Collaboration',
      icon: 'wrench',
      items: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
      ],
    },
  ],

  // --------------------------------------------
  // PARCOURS (Timeline structurée par catégories)
  // --------------------------------------------
  timeline: {
    formation: {
      title: 'Formation',
      institution: 'Université Protestante au Congo',
      icon: 'academic',
      color: 'primary',
      items: [
        {
          title: 'Licence en Informatique',
          period: '2024 — en cours',
          description: 'Spécialisation en développement web et data science.',
        },
        // Ajoute ici ton futur Master, Doctorat, etc.
      ],
    },
    certifications: {
      title: 'Certifications',
      institution: 'Certifications obtenues',
      icon: 'badge',
      color: 'accent',
      items: [
        {
          title: 'Excel Avancé',
          period: '2026',
          description: 'DisasterReady — maîtrise avancée d\'Excel (formules, tableaux croisés, analyse).',
          pdfLink: '/certifications/excel-avance-disasterready.pdf',
        },
        // Ajoute ici tes futures certifications
      ],
    },
    experiences: {
      title: 'Expériences',
      institution: 'Expériences professionnelles',
      icon: 'briefcase',
      color: 'green',
      items: [
        {
          title: 'Stage professionnel',
          period: 'À venir',
          description: 'Emplacement réservé — stage prévu cette année.',
          upcoming: true,
        },
        // Ajoute ici tes futurs stages/jobs
      ],
    },
  },

  // --------------------------------------------
  // PROJETS
  // --------------------------------------------
  projects: [
    {
      title: 'TravelGO',
      description: 'Site vitrine moderne pour une agence de voyage. Présentation immersive des destinations, interface responsive et navigation fluide pour inspirer les voyageurs.',
      stack: ['Vue.js', 'Tailwind CSS', 'HTML'],
      image: '/images/projects/travelgo.png',
      link: 'https://travel-go-olive.vercel.app/',
    },
    {
      title: 'SquidGame',
      description: 'Plateforme complète de réservation d\'activités pour un parc de loisirs. Système de réservation en ligne, gestion des menus et interface dynamique connectée à une base de données.',
      stack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      image: '/images/projects/squidgame.png',
      link: 'https://squidgame.rf.gd/',
    },
  ],

  // --------------------------------------------
  // STATS DYNAMIQUES (auto-calculées)
  // --------------------------------------------
  getStats() {
    return [
      {
        icon: 'rocket',
        value: this.projects.length,
        label: 'Projets réalisés',
        target: '#projects',
      },
      {
        icon: 'star',
        value: this.services.length,
        label: 'Services proposés',
        target: '#services',
      },
      {
        icon: 'badge',
        value: this.timeline.certifications.items.length,
        label: 'Certificats obtenus',
        target: '#timeline',
      },
      {
        icon: 'wrench',
        value: this.skills.reduce((total, cat) => total + cat.items.length, 0),
        label: 'Stacks maîtrisées',
        target: '#skills',
      },
    ]
  },

  // --------------------------------------------
  // NAVIGATION
  // --------------------------------------------
  navLinks: [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Parcours', href: '#timeline' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],

  // --------------------------------------------
  // MÉTADONNÉES
  // --------------------------------------------
  meta: {
    cvLink: '/cv-joseph-mbiki.pdf',
    photo: '/photo-joseph.jpg',
  },
}

export default portfolio