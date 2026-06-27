const projects = [
  {
    id: "lumina-app",
    name: "Lumina App",
    type: "mobile-app",
    tagline: "A Local-First, Distraction-Free Bible Study App",
    description: "A premium, minimalist Bible study companion built for readers who value total notes ownership. Write your thoughts in clean, standard Markdown, select local directories on your phone, and explore text details with context-aware word definition chips.",
    tags: ["React Native", "Expo", "Local-First", "Markdown", "TypeScript"],
    icon: "apps/lumina/favicon.ico",
    embedUrl: "apps/lumina/",
    features: [
      "Distraction-free scripture reader with clean Outfit typography and adjustable themes.",
      "Local-first markdown integration: automatically writes notes as individual .md files (fully compatible with Obsidian/Logseq).",
      "Interactive 'My Studies' word chips: tap terms directly within the scripture view to define and link them.",
      "Zero-cloud dependency: complete privacy, local-first backups, and full control over your folder directories."
    ],
    screenshots: [],
    links: {
      github: "https://github.com/johnpaulodymoscofreelance-jpg/lumina-app"
    }
  },
  {
    id: "zia-branding",
    name: "Zia Branding",
    type: "graphic-design",
    tagline: "Clothing Brand Visual Identity System",
    description: "A comprehensive brand identity design for Zia Clothing, featuring clean logo typography, custom apparel tags, minimalist product cards, and a sophisticated earth-toned color palette that matches the brand's sustainable fashion line.",
    tags: ["Branding", "Visual Identity", "Logo Design", "Packaging"],
    icon: "assets/zia_cover.png",
    coverImage: "assets/zia_cover.png",
    features: [
      "Custom minimalist logo design with geometric typography.",
      "Sustainable product hang-tag designs with earth-toned palettes.",
      "Branded paper packaging and sticker design systems.",
      "Complete brand style guidelines including typography hierarchy and logo clear space."
    ],
    links: {
      behance: "https://www.behance.net/gallery/164265141/Zia-Apparel-Collections"
    }
  },
  {
    id: "alpha-sports",
    name: "ALPHA Sports",
    type: "graphic-design",
    tagline: "Dynamic Athletic Brand Identity & Packaging",
    description: "A bold, energetic branding design system created for ALPHA Sports. This project includes custom logo styling, high-performance shoe packaging, premium athletic boxes, and key sports equipment visual concepts.",
    tags: ["Branding", "Visual Identity", "Packaging", "Art Direction"],
    icon: "assets/alpha_sports_cover.png",
    coverImage: "assets/alpha_sports_cover.png",
    features: [
      "Dynamic typography and energetic athletic logo.",
      "Shoebox packaging designed for premium materials and textures.",
      "Sports bag and athletic accessories graphic patterns.",
      "Cohesive brand color scheme suitable for retail and digital storefronts."
    ],
    links: {
      behance: "https://www.behance.net/gallery/117679739/Alpha-Sports-Branding"
    }
  },
  {
    id: "alien-war",
    name: "Alien War",
    type: "graphic-design",
    tagline: "Futuristic Gaming & Esports Brand Design",
    description: "A highly stylized visual identity package tailored for an esports and gaming brand. Key highlights include controller artwork mockups, neon game posters, and dynamic emblem shapes.",
    tags: ["Branding", "Logo Design", "Illustration", "Gaming"],
    icon: "assets/alien_war_cover.png",
    coverImage: "assets/alien_war_cover.png",
    features: [
      "Neon cybernetic aesthetic theme and custom shapes.",
      "Gaming controller graphic overlays and logo decals.",
      "Dynamic typography that conveys speed and technical precision.",
      "Esports team emblem layouts and social media assets."
    ],
    links: {
      behance: "https://www.behance.net/gallery/163921089/Alien-War-Branding"
    }
  },
  {
    id: "velocity-sports",
    name: "Velocity",
    type: "graphic-design",
    tagline: "Modern Tennis Equipment Branding",
    description: "Visual branding and packaging identity for Velocity, a high-end tennis gear brand. Key design collaterals include tennis racquet frame wraps, ball canister labels, and matching court visual concepts.",
    tags: ["Branding", "Visual Identity", "Packaging", "Sports"],
    icon: "assets/velocity_cover.png",
    coverImage: "assets/velocity_cover.png",
    features: [
      "Sleek racquet grip wraps and color patterns.",
      "Minimalist ball canister container layouts.",
      "High-contrast color scheme for premium retail presence.",
      "Cohesive logo styling suitable for stitching, print, and digital mediums."
    ],
    links: {
      behance: "https://www.behance.net/gallery/164073299/Velocity-Companies-Tennis-Club-Branding"
    }
  },
  {
    id: "milky-way",
    name: "Milky Way Strawberry",
    type: "graphic-design",
    tagline: "Playful Packaging Design for Ice Cream Cups",
    description: "A vibrant and inviting packaging design layout for Milky Way Strawberry Ice Cream. Features cute custom cloud illustrations, custom font layouts, and eye-catching product packaging wrappers.",
    tags: ["Packaging", "Brand Identity", "Illustration", "Logo Design"],
    icon: "assets/milky_way_cover.png",
    coverImage: "assets/milky_way_cover.png",
    features: [
      "Playful typography and bubble-styled mascot concepts.",
      "Vibrant strawberry red and creamy white color pairings.",
      "Seamless wrapper illustrations for circular ice cream pints and cups.",
      "High-contrast nutrition label layouts and barcode mockups."
    ],
    links: {
      behance: "https://www.behance.net/gallery/117679893/Milky-Way-Branding"
    }
  },
  {
    id: "novel-arts",
    name: "Novel Arts",
    type: "graphic-design",
    tagline: "Creative Gallery Visual Identity",
    description: "An elegant, clean branding system designed for Novel Arts, a modern creative gallery. The layout centers around professional corporate stationery, letterheads, business cards, and display boards.",
    tags: ["Branding", "Visual Identity", "Print Design", "Gallery"],
    icon: "assets/novel_arts_cover.png",
    coverImage: "assets/novel_arts_cover.png",
    features: [
      "Minimalist visual lines and editorial-style type pairings.",
      "Sophisticated corporate business cards and presentation mockups.",
      "Letterhead templates and folder sleeve layouts.",
      "Indoor exhibition board graphics and directions tags."
    ],
    links: {
      behance: "https://www.behance.net/gallery/99633455/Novel-Arts-Branding"
    }
  },
  {
    id: "mr-bean",
    name: "Mr. Bean Coffee",
    type: "graphic-design",
    tagline: "Charming Cafe Branding & Stationery Mockups",
    description: "A warm and inviting visual identity for Mr. Bean, a specialty coffeehouse. Featuring a playful mustache-themed logo, custom coffee cups, paper carry bags, and rustic cafe business cards.",
    tags: ["Branding", "Visual Identity", "Packaging", "Stationery"],
    icon: "assets/mr_bean_cover.png",
    coverImage: "assets/mr_bean_cover.png",
    features: [
      "Memorable mustache and coffee bean fusion logo icon.",
      "Earthy brown, black, and white brand color palette.",
      "Custom print mockups for hot/cold drink cups and sleeve wraps.",
      "Minimalist take-away bag and sticker labels."
    ],
    links: {
      behance: "https://www.behance.net/gallery/99632333/Mr-Bean-Branding"
    }
  },
  {
    id: "primal-affliction",
    name: "Primal Affliction",
    type: "graphic-design",
    tagline: "Edgy Apparel Graphics & Custom Skull Design",
    description: "A raw, high-contrast illustration and apparel branding package designed for streetwear label Primal Affliction. Focuses on custom vector skull shapes, custom type treatments, and t-shirt prints.",
    tags: ["Illustration", "Apparel Design", "Logo Design", "Streetwear"],
    icon: "assets/primal_affliction_cover.png",
    coverImage: "assets/primal_affliction_cover.png",
    features: [
      "Handcrafted vector skull illustration and crest badge.",
      "Distressed typography suitable for heavy fabric prints.",
      "T-shirt product layout mockups for front and back prints.",
      "Monochromatic theme designed for high-contrast apparel production."
    ],
    links: {
      behance: "https://www.behance.net/gallery/147412269/Primal-Affliction-Branding"
    }
  },
  {
    id: "lumina-ux-case",
    name: "Lumina App UX Case Study",
    type: "case-study",
    tagline: "Design System & Product Experience for a Local-First Bible Reader",
    description: "A professional UX design analysis of the Lumina App ecosystem. This case study details the visual styling, cognitive design choices, accessibility adjustments, and local-first data architecture aimed at creating a completely distraction-free, ownership-centered scripture workspace.",
    tags: ["UX Research", "UI Design", "Design System", "Case Study", "Product Design"],
    icon: "apps/lumina/favicon.ico",
    coverImage: "assets/lumina_cover.png",
    features: [
      "Local-First Architecture: Engineered folder-level Markdown data ownership to guarantee absolute note privacy, zero latency, and zero-cloud dependence.",
      "Cognitive Load Relief: Developed a high-readability dual-typeface typography scale using Outfit for functional UI and premium Georgia serif for scripture reading.",
      "Context-Aware Dictionary: Introduced interactive word chips inside scriptural text, displaying contextual modal details on tap to eliminate page switching.",
      "Theme Harmonization & Accessibility: Calibrated custom slate-blue dark themes and amber/sepia paper tones complying with WCAG AA accessibility contrast ratios.",
      "Micro-Animations & Feedback: Crafted smooth interactive slide drawers, glowing interactive focus metrics, and organic scroll cues that ease reading navigation."
    ],
    links: {
      github: "https://github.com/johnpaulodymoscofreelance-jpg/lumina-app"
    },
    caseStudy: {
      sections: [
        {
          title: "1. Executive Summary & Concept",
          content: "Lumina App is designed as a sanctuary for readers who seek a deep, distraction-free environment for scripture study. Traditional reading apps suffer from notification overload, cluttered visual interfaces, and invasive cloud backups that strip users of data ownership. Lumina changes this paradigm by placing the reader in complete control of their files, theme preferences, and research logs."
        },
        {
          title: "2. The Design Challenge",
          content: "How do we create an digital experience that balances cognitive ease with functional utility? Reading ancient, dense texts requires deep focus, but researchers also need toolings (commentaries, definitions, cross-references). Visual design must guide without interrupting, and technical design must guarantee privacy."
        },
        {
          title: "3. User Research & Pain Points",
          content: "Through interviews with daily readers, we extracted three main friction points: (1) Eye strain during prolonged night studies on bright or poorly calibrated dark screens, (2) The distraction of switching tabs or apps to look up biblical greek/hebrew terms, and (3) Concern about losing personal notes if cloud-hosted services change pricing structures or suffer downtime."
        }
      ],
      solutions: [
        {
          icon: "📂",
          title: "Local-First Markdown",
          desc: "Notes are written directly as standard text files in custom-selected local directories. Works offline and is fully compatible with desktop apps like Obsidian."
        },
        {
          icon: "👁️",
          title: "Readability Focus Scale",
          desc: "Outfit sans-serif for responsive interface controls paired with high-legibility Georgia serif for scripture body text to reduce visual strain."
        },
        {
          icon: "💡",
          title: "In-Context Term Definitions",
          desc: "Selected vocabulary words are converted into interactive chips. Tapping them slides open definitions in place without breaking focus."
        },
        {
          icon: "🎨",
          title: "Calibrated Sepia & Slate",
          desc: "Tailored daytime sepia tones resembling paper texture, and deep navy dark mode that complies with WCAG AA accessibility rules."
        }
      ],
      metrics: [
        { num: "0 ms", label: "Sync Latency (Local)" },
        { num: "100%", label: "Notes Ownership" },
        { num: "WCAG AA", label: "Contrast Compliance" }
      ]
    }
  }
];
