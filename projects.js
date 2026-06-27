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
    description: "Lumina is a modern, feature-rich Bible study application designed to illuminate your daily scripture reading and deepen your spiritual study. By combining classic scripture access with interactive study guides and modern technology, Lumina acts as a personal companion for deeper biblical engagement.",
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
      overview: "Lumina was conceived, architected, and coded fully utilizing AI technologies — including LLMs, advanced code assistants, and automated workflows. This project serves as a showcase of how modern artificial intelligence can accelerate full-stack application development from ideation to production.",
      metrics: [
        { num: "0 ms", label: "Sync Latency (Local)" },
        { num: "100%", label: "Notes Ownership" },
        { num: "WCAG AA", label: "Contrast Compliance" }
      ],
      techStack: {
        core: [
          { icon: "📱", label: "Framework", value: "React Native + Expo" },
          { icon: "🟦", label: "Language", value: "TypeScript" },
          { icon: "🗂️", label: "State", value: "Zustand + Local State" }
        ],
        backend: [
          { icon: "🗄️", label: "Database", value: "SQLite (expo-sqlite)" },
          { icon: "🌐", label: "API", value: "Bolls.life REST API" },
          { icon: "📦", label: "Storage", value: "Expo FileSystem + pdf-lib" }
        ],
        ai: [
          { icon: "🤖", label: "Code Gen", value: "Claude + GitHub Copilot" },
          { icon: "🏗️", label: "Architecture", value: "AI-guided DB & schema design" },
          { icon: "🧪", label: "Debugging", value: "Conversational AI coding" }
        ]
      },
      featureSections: [
        {
          emoji: "📖",
          title: "Multi-Translation Bible Reader & Comparison Engine",
          subtitle: "Offline-first, gesture-powered reading with scholarly annotations",
          items: [
            "Parallel Multiversion Comparison: Study passages in up to three translations simultaneously with side-by-side or stacked column layouts.",
            "Offline-First Architecture: Dynamically pulls from the Bolls API and falls back to a locally indexed SQLite database (expo-sqlite) when offline.",
            "Scholarly Annotation System: Highlight verses with 10 curated colors, bookmark passages, and attach detailed personal notes to any verse.",
            "Premium Custom Typography: Adjust font size, margin width, line spacing, text alignment, and paper-matched color themes (White, Sepia, Parchment, Dark).",
            "Intuitive Gesture Controls: Navigate between chapters using natural swipe gestures powered by FlingGestureHandler."
          ]
        },
        {
          emoji: "🔍",
          title: "Word Study — Hebrew & Greek Concordance",
          subtitle: "Original language exploration with lexicons and phonetic vocalization",
          items: [
            "Interactive Inline Strong's Numbers: Toggle H/G concordance codes directly in KJV text to inspect Hebrew and Greek lemmas instantly.",
            "Full Lexicon Support: Brown-Driver-Briggs (BDB) for Hebrew and Thayer's Lexicon for Greek with fully hyperlinked derivations.",
            "Phonetic Speech Vocalization: Authentic pronunciation of original words using native TTS with he-IL and el-GR language parameters.",
            "Translation Distribution Charts: Interactive SVG Donut Charts showing how a Hebrew/Greek word is translated, with tappable segment filters.",
            "Key Word in Context (KWIC): Scan every biblical occurrence with a context grid showing surrounding words and book-level filtering."
          ]
        },
        {
          emoji: "📜",
          title: "Ancient Manuscripts & Historical Library",
          subtitle: "Explore texts beyond the canon — scrolls, codices, and historical records",
          items: [
            "Historic Manuscript Profiles: Browse profiles of foundational records including Dead Sea Scrolls, Septuagint LXX, 1 Enoch, and the Apostolic Fathers.",
            "Canonicity & Rejection Studies: Objective academic analyses of why texts were accepted or excluded from Hebrew, Protestant, and Catholic canons.",
            "Academic Citation Generator: Auto-format bibliographical citations in APA, MLA, and Chicago styles for academic research and essays.",
            "Interactive Glossary System: Key terms (Codex, Septuagint, Apocrypha) are underlined and launch informative bottom-sheet definitions on tap."
          ]
        },
        {
          emoji: "🛠️",
          title: "Flexcil-Style PDF Reader & Document Annotator",
          subtitle: "Theological papers and manuscripts, side-by-side with scripture",
          items: [
            "Freehand Sketching Canvas: Draw directly on PDF pages with adjustable ink colors, stroke thickness, and precise erasing tools.",
            "Markdown Quote Extractor: Highlight PDF text and insert it as formatted blockquotes with page numbers into your Study Notebook.",
            "Scripture Split-Screen Panel: View the Bible side-by-side with your active PDF and insert verse citations directly into notes.",
            "On-Device PDF Compiler: Reorganize, duplicate, delete, and reorder pages using pdf-lib to write updated PDFs back to local storage.",
            "Interactive Outline Tree: Access embedded table of contents, custom bookmarks, and highlight history from a unified sidebar drawer."
          ]
        },
        {
          emoji: "🏛️",
          title: "Church History & Biographical Registry",
          subtitle: "Early controversies, councils, and the figures who shaped theology",
          items: [
            "Theological Controversies Registry: Explore early church debates (Arian Controversy, Nestorianism) with timelines, biblical defense guides, and historical references.",
            "Pauline Associates Registry: Biographical database of Paul's co-workers categorized by chronology, roles, and biblical significance.",
            "Interactive Historical Guides: Detailed guides on Ecumenical Councils, divisions of the Mosaic Law, Pauline journeys, and patriarch lifespans."
          ]
        },
        {
          emoji: "📈",
          title: "Smart Timeline & Progress Tracker",
          subtitle: "Gamified streaks, heatmaps, and canonical timeline navigation",
          items: [
            "Interactive Biblical Timeline: Scroll through when each book was written, by whom, and to whom, with direct chapter links to read.",
            "Engagement-Based Auto-Read Tracking: Marks chapters as read when 15+ seconds are spent and 80% of text is scrolled through.",
            "Streaks & Analytics Dashboard: Daily and yearly consistency tracking with heatmaps, streaks, and Flame/Shield/Trophy milestone badges."
          ]
        },
        {
          emoji: "📓",
          title: "Daily Reflection Journal & WYSIWYG Notebook",
          subtitle: "Mood-based journaling, rich text editing, and scripture-linked reflections",
          items: [
            "Daily Mood-Based Journaling: Log reflections with weather and mood presets (Joyful, Peaceful, Anxious, Weary) auto-matched to encouraging scriptures.",
            "WYSIWYG Notes Editor: Full-featured Rich Text Editor (Quill-based) supporting headings, bullet lists, blockquotes, and inline links.",
            "Personalization Engine: Seamless highlighting, bookmarking, personal journaling, and verse-of-the-day tracking across all sessions."
          ]
        }
      ],
      sections: [
        {
          title: "🤖 AI Prompt Engineering & Architecture",
          content: "Development started by feeding detailed system prompts into AI models to generate highly optimized schemas for complex Bible datasets (verses, chapters, translations). AI guided the entire database modeling and component structure from the ground up."
        },
        {
          title: "🎨 Rapid UI/UX Prototyping",
          content: "AI assistants generated clean component layouts with heavy focus on typography and spacing to minimize eye strain during long-form reading sessions, enabling rapid design iteration cycles."
        },
        {
          title: "🔧 Iterative Feature Integration & Debugging",
          content: "Utilized conversational AI coding to iteratively implement state-heavy features like offline storage, highlighting systems, and the interactive study guide engine — using AI to rapidly debug complex console errors and logic issues."
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
      lessons: [
        "The Power of AI-Driven Development: Learned to effectively act as a 'Software Architect,' using AI to skip tedious boilerplate coding and focus on logic, application flow, and user experience.",
        "Optimizing Large Datasets: Working with the extensive text database of the Bible taught the importance of local caching, efficient indexing, and pagination to prevent memory leaks on mobile and web clients."
      ],
      roadmap: [
        "Advanced AI-Powered Search: Implement vector embeddings to allow semantic, concept-based searching (e.g., searching for 'peace in hard times' without needing exact keyword matches).",
        "Audio Bible Integration: Add text-to-speech or streaming audio tracks for hands-free listening during commutes or rest.",
        "Social Study Groups: Implement shared reading plans where communities or friends can sync progress and share notes in real time."
      ]
    }
  }
];
