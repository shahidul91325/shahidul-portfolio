export const projectsData = [
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    subtitle: "Commodity Price Tracker for Bangladesh",
    tagline: "Explore daily essential prices, market trends, and price changes across Bangladesh.",
    description: "A Bangladesh-focused product price information platform for exploring essential products, comparing market prices, and understanding price changes.",
    image: "/images/bazar-dor.jpg",
    liveUrl: "https://bazar-dor-web.vercel.app/",
    githubUrl: "https://github.com/shahidul91325/Bazar-Dor-Web",
    featured: true,
    category: "Full-Stack Web App",
    techStack: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Turbopack", "Vercel"],
    overview: "Bazar Dor was conceived to address daily pricing unpredictability in local markets across Bangladesh. It provides consumers and households with instant visibility into fluctuating commodity rates—such as rice, lentils, edible oil, vegetables, fish, meat, dairy, and spices.",
    problemStatement: "Commodity prices in local bazaars fluctuate frequently due to supply dynamics, seasonal shifts, and distribution bottlenecks. Everyday shoppers lack a transparent, centralized, and easy-to-read web platform to monitor market averages, identify sudden price surges, or spot price drops before stepping out to market.",
    keyFeatures: [
      "Real-time price trend ticker displaying percentage increases (▲) and decreases (▼) with intuitive color badges.",
      "Categorized product browsing including Chal (Rice), Dal (Lentils), Tel (Oil), Sobji (Vegetables), Mach (Fish), Mangsho (Meat), and Dim-Dudh (Dairy/Eggs).",
      "Dynamic product detail routing displaying average market prices, units (kg, litre, piece), and historical context.",
      "Responsive navigation optimized for both mobile users on slow connections and desktop market researchers.",
      "Lightweight, clean UI with high visual readability and instant search/filtering."
    ],
    roleAndContributions: "Architected the frontend application structure using Next.js App Router and Tailwind CSS. Implemented the responsive layout, dynamic category filters, animated price change ticker, and product detail views.",
    challengesAndSolutions: [
      {
        challenge: "Handling dynamic price change indicators (positive, negative, unchanged) gracefully across dozens of items without visual jitter.",
        solution: "Built reusable badge components with conditional styling, calculating percentage deltas cleanly and applying smooth transitions."
      },
      {
        challenge: "Ensuring instant mobile readability for users checking prices on low-bandwidth connections in local markets.",
        solution: "Leveraged Next.js image optimization, modular components, and lightweight SVG icons to ensure near-instant page rendering."
      }
    ],
    lessonsLearned: [
      "Importance of localization: designing UI tailored to local user language (Bangla typography and localized commodity naming) dramatically increases accessibility.",
      "Clean component decoupling makes adding new grocery categories and data attributes effortless."
    ],
    futureImprovements: [
      "Crowdsourced price reporting where community members in different districts can report spot prices.",
      "SMS or push notifications for essential commodity price drop alerts.",
      "Interactive 30-day historical price comparison charts using Chart.js or Recharts."
    ]
  },
  {
    slug: "fitlog",
    title: "FitLog",
    subtitle: "Workout Library & Training Planner",
    tagline: "Train with intent. Log honest. A dark, no-nonsense gym companion.",
    description: "A fitness and workout application for exploring workouts, tracking exercises, and organizing customized daily workout plans.",
    image: "/images/fitlog.jpg",
    liveUrl: "https://fit-log-web-3piv.vercel.app/",
    githubUrl: "https://github.com/shahidul91325/Fit-Log-Web",
    featured: true,
    category: "Health & Fitness App",
    techStack: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Vercel"],
    overview: "FitLog is built for dedicated fitness enthusiasts who need a sleek, high-contrast, distraction-free companion in the gym. It offers a structured workout library spanning all major muscle groups and allows users to build and save custom workout routines.",
    problemStatement: "Generic fitness apps are often cluttered with excessive social feeds, bloatware, and complicated onboarding. Gym goers frequently need an immediate, fast-loading, dark-mode library to inspect proper lifts, target muscle activations, estimated calorie burns, and assemble a quick workout schedule for the day.",
    keyFeatures: [
      "Curated exercise library covering 12+ foundational compound and isolation movements (Bench Press, Squats, Deadlifts, Pull-ups, Kettlebell Swings, etc.).",
      "Muscle group categorization targeting Chest, Back, Arms, Shoulders, Legs, and Core with high-visibility tags.",
      "Workout metadata tracking including estimated duration (minutes), calorie expenditure (kcal), and difficulty rating.",
      "Interactive 'My Plan' system allowing lifters to lock lifts into today's training regimen and keep track of saved exercises.",
      "High-contrast dark-mode theme featuring neon lime-green (#CCFF00) accents designed specifically for gym lighting environments."
    ],
    roleAndContributions: "Designed and developed the entire application workflow. Created the dark UI theme, exercise cards, responsive header with plan counter badges, and the stateful routine builder.",
    challengesAndSolutions: [
      {
        challenge: "Balancing high-contrast neon accents without causing eye strain during extended workouts.",
        solution: "Established a balanced dark palette (#0C0D0F / #14151C) where neon green is reserved strictly for focal points, CTA buttons, and active status indicators."
      },
      {
        challenge: "Managing user's active workout plan state smoothly across multiple route transitions.",
        solution: "Implemented persistent client-side state handling so lifters don't lose their selected exercises while switching between exercise details and their plan."
      }
    ],
    lessonsLearned: [
      "The value of UX affordance: providing immediate visual counters on navigation bars (e.g., Plan: 0, Saved: 0) keeps users engaged and aware of their selections.",
      "Optimizing mobile viewport heights and touch targets ensures lifters can log lifts one-handed."
    ],
    futureImprovements: [
      "Rest timer with audio chimes between exercise sets.",
      "Personal records (1RM) calculator and progressive overload progress tracker.",
      "Offline support using Service Workers for gyms with spotty cell reception."
    ]
  },
  {
    slug: "dev-stack",
    title: "Dev Stack",
    subtitle: "Interactive Tech Stack Builder & Explorer",
    tagline: "Curated tools, technologies, and resources for developers building modern software.",
    description: "An interactive developer-focused web application where developers explore technologies across categories and assemble their ideal tech stack in real time.",
    image: "/images/dev-stack.jpg",
    liveUrl: "https://my-firsht-dev-stack-project.netlify.app/",
    githubUrl: "https://github.com/shahidul91325/dev-stack-web",
    featured: true,
    category: "Developer Tool & Explorer",
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript", "React Toastify", "Netlify"],
    overview: "Dev Stack is an interactive utility for programmers, students, and engineering leads. It provides an intuitive catalog of languages, libraries, frameworks, and databases, enabling users to curate, compare, and assemble their project technology stack with instant feedback.",
    problemStatement: "The modern software ecosystem has thousands of tools, frameworks, and libraries. Developers frequently struggle to conceptualize which complementary tools fit together smoothly for a new project, needing a visual sandbox to test architectural combinations.",
    keyFeatures: [
      "Categorized technology cards featuring official icons, difficulty levels, ratings, and colored badges.",
      "Real-time 'Add To Stack' interactive builder with immediate state sync and toast notifications.",
      "Persistent 'Your Stack' drawer displaying selected tech count, category badges, and quick-remove controls.",
      "Bulk management option with a dedicated 'Remove All' action and confirmation feedback.",
      "Modern aesthetic with subtle gradients, soft card elevation, and responsive flex/grid layouts."
    ],
    roleAndContributions: "Developed the frontend architecture with React and Vite. Built the centralized JSON data pipeline (`Skill-Data.json`), created the interactive stack accumulator, and implemented animated toast alerts.",
    challengesAndSolutions: [
      {
        challenge: "Managing interactive selections across separate grid cards and a sticky sidebar without redundant re-renders.",
        solution: "Implemented efficient state derivation and immutable array transformations, ensuring clean single-source-of-truth state for the user's stack."
      },
      {
        challenge: "Preventing duplicate additions while providing clear visual feedback on already selected tools.",
        solution: "Added an active state check that dynamically alters the card border to an active red accent and updates the button label to '✓ Added To Stack'."
      }
    ],
    lessonsLearned: [
      "Micro-feedback such as toast notifications and badge counter updates makes an interactive builder feel tactile and satisfying to use.",
      "Building for Vite requires careful asset bundling and modular CSS scoping."
    ],
    futureImprovements: [
      "Export Stack functionality (generate package.json boilerplate or Dockerfile templates directly from the selected stack).",
      "Compatibility matrix warning users if two conflicting libraries are added together.",
      "Shareable public links to send custom tech stacks to teammates or on Twitter/GitHub."
    ]
  }
];
