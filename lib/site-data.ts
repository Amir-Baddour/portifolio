export const SITE = {
  name: "Amir Baddour",
  fullName: "Amir Sami Baddour",
  role: "Software Engineer, Backend and DevOps",
  email: "amirsbaddour@gmail.com",
  location: "Lebanon",
  linkedin: "https://www.linkedin.com/in/amir-baddour",
  github: "https://github.com/Amir-Baddour",
  calendar: "https://calendar.app.google/tPZsGRuaDZC2Qnf19",
  cv: "/Amir_Sami_Baddour_CV.pdf",
  url: "https://amirbaddour.dev",
  subtitle:
    "I build backend APIs and data models, then take responsibility for the Linux servers, containers, and delivery pipelines that run them.",
  education: "Bachelor of Science in Computer Science — Graduated 2026",
  university: "Modern University for Business and Science (MUBS), Lebanon",
} as const

export interface Project {
  title: string
  subtitle: string
  image: string
  imageAlt: string
  diagram?: string[]
  imageGallery?: string[]
  problem: string
  solution: string
  contribution: string
  decisions: string[]
  features: string[]
  stack: string[]
  mlNote: string | null
  githubUrl: string
  liveUrl: string
  caseStudyUrl: string
}

export const projects: Project[] = [
  {
    title: "Digital Wallet Platform",
    subtitle: "Senior Project",
    image: "/images/Picture2.jpg",
    imageAlt:
      "Digital wallet dashboard showing account balance, transfers, QR payments, and transaction history",
    imageGallery: [
      "/images/Picture3.png",
      "/images/Picture4.png",
      "/images/Picture5.png",
      "/images/Picture8.png",
    ],
    problem:
      "Users need a secure and simple way to transfer money, manage transactions, and make digital payments.",
    solution:
      "A full-stack digital wallet platform supporting authentication, peer-to-peer transfers, QR payments, transaction history, notifications, analytics, and feedback sentiment classification.",
    contribution:
      "Designed the database structure, developed backend transaction logic, implemented authentication and validation, created REST API functionality, and integrated the frontend with the backend.",
    decisions: [
      "Validate transaction requests on the server before processing them.",
      "Use relational data structures to keep account and transaction records organized.",
      "Hash passwords instead of storing them as plain text.",
    ],
    features: [
      "Secure authentication",
      "Password hashing",
      "Transaction validation",
      "Relational database design",
      "QR-based payments",
      "Notifications",
      "Transaction history",
      "Analytics dashboard",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    mlNote:
      "Implemented Logistic Regression and Random Forest models to classify user feedback after deployment, enabling automated sentiment analysis and data-driven improvement insights.",
    githubUrl: "https://github.com/Amir-Baddour/senior-dweb3",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    title: "Air Quality Data Analysis",
    subtitle: "Data Science Project",
    image: "/images/project-air-quality.png",
    imageAlt:
      "Air quality data analysis dashboard with pollution trend charts and a correlation heatmap",
    problem:
      "Raw air quality datasets are noisy and hard to interpret, making pollution trends difficult to identify.",
    solution:
      "An exploratory data analysis workflow that cleans, processes, and visualizes air quality data to surface pollution trends and environmental patterns.",
    contribution:
      "Cleaned and preprocessed the datasets, engineered features, ran statistical analysis, and built visualizations to communicate the findings.",
    decisions: [
      "Clean and prepare records before analyzing trends.",
      "Use visualizations to make patterns and relationships easier to inspect.",
    ],
    features: [
      "Data cleaning & preprocessing",
      "Feature exploration",
      "Statistical summaries",
      "Visualization dashboards",
      "Pattern detection",
    ],
    stack: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
    mlNote: null,
    githubUrl: "#",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    title: "School Management System",
    subtitle: ".NET Developer · Oqunet Software",
    image: "/images/project-backend-apps.png",
    imageAlt:
      "School management application interface with data tables and CRUD actions",
    problem:
      "School staff needed a structured way to manage student and course records with reliable data handling.",
    solution:
      "A School Management System prototype built with ASP.NET MVC and SQL Server, organized into controllers, models, and views.",
    contribution:
      "Built student and course data features, implemented CRUD operations through ADO.NET and LINQ, and refined validation and queries with senior developer feedback.",
    decisions: [
      "Define the Student and Courses relational model before building the screens.",
      "Use database foreign keys to enforce relationships between records.",
      "Separate controllers, models, and views so responsibilities stay clear.",
    ],
    features: [
      "Student and course records",
      "Create, read, update, and delete",
      "SQL Server relationships",
      "Razor views and forms",
    ],
    stack: ["ASP.NET MVC", ".NET Framework", "C#", "SQL Server"],
    mlNote: null,
    githubUrl: "#",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    title: "AirDropX",
    subtitle: "Multi-tenant airdrop platform · CI/CD",
    image: "",
    imageAlt: "",
    diagram: [
      "React 19 · TypeScript · Vite",
      "Java 17 · Spark REST API",
      "15 PostgreSQL tables",
      "GHCR → SSH → Caddy",
    ],
    problem:
      "Companies need a way to create airdrop campaigns and publish public claim pages from a single multi-tenant platform.",
    solution:
      "A live multi-tenant platform with a Java REST backend, React frontend, PostgreSQL data layer, and automated delivery to a DigitalOcean server behind HTTPS.",
    contribution:
      "Built the backend and frontend, then automated pull-request checks and container-based deployment, including health-check rollback and one-click rollback to earlier images.",
    decisions: [
      "Use JWT authentication for Google OAuth and email logins, with role-based access and rate limiting.",
      "Run CI checks on every pull request, including tests, linting, type checks, secret scanning, dependency scanning, and Docker checks.",
      "Tag container images by commit and require manual approval before deployment.",
      "Deploy behind Caddy and use health checks to trigger automatic rollback.",
    ],
    features: [
      "38 REST endpoints",
      "Google OAuth and email login",
      "15 PostgreSQL tables",
      "Automated deploy and rollback",
    ],
    stack: [
      "Java 17",
      "Spark Java",
      "JDBC",
      "PostgreSQL",
      "React 19",
      "TypeScript",
      "GitHub Actions",
      "Docker",
      "DigitalOcean",
      "Caddy",
    ],
    mlNote: null,
    githubUrl: "https://github.com/Amir-Baddour/AirDropX",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
]

export interface Experience {
  title: string
  company: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    title: ".NET Developer",
    company: "Oqunet",
    period: "Apr 2025 – Jun 2025",
    bullets: [
      "Developed ASP.NET MVC controllers, validation logic, and reusable backend services for internal web applications.",

      "Implemented backend business logic, form validation, database operations, error handling, and role-based functionality.",
      "Built SQL Server-backed CRUD functionality and data-access operations for core application features.",
      "Used ADO.NET to connect the app to SQL Server and manage data operations.",
      "Debugged and tested backend features alongside senior developers.",
      "Structured the app using MVC architecture (controllers, models, views).",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "SimLine",
    period: "Jun 2024 – Nov 2024",
    bullets: [
      "Built RESTful API endpoints for data exchange between the frontend and a MySQL database.",
      "Modeled MySQL schemas, wrote SQL queries, and implemented CRUD operations for core features.",
      "Integrated frontend interfaces with backend APIs, handling request validation, JSON responses, and error handling.",
      "Cleaned and prepared datasets for website import and ensured data could be consumed reliably by the app.",
      "Created QR code functionality that allowed users to view the menu by scanning the code.",
    ],
  },
]

export interface SkillGroup {
  tier: string
  description: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    tier: "Primary Skills",
    description: "Technologies I use most and know in depth.",
    skills: [
      "PHP",
      "C#",
      "ASP.NET MVC",
      "ASP.NET Core",
      "MySQL",
      "SQL Server",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },
  {
    tier: "Working Knowledge",
    description: "Technologies I use comfortably on projects.",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Scikit-learn",
      "Pandas",
    ],
  },
  {
    tier: "Familiar With",
    description: "Technologies I have hands-on exposure to.",
    skills: [
      "AWS EC2",
      "AWS Lambda",
      "AWS RDS",
      "AWS IAM",
      "Docker",
      "CI/CD",
      "Node.js",
      "Express.js",
      "ML model evaluation",
    ],
  },
]

export interface Certification {
  title: string
  issuer: string
  date: string
  highlights: string[]
  credentialUrl: string
}

export const certifications: Certification[] = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "Jan 2026",
    highlights: ["Machine Learning basics", "Deep Learning fundamentals"],
    credentialUrl:
      "https://www.credly.com/badges/64a0e3cf-ef8f-4e60-b1de-90bd20917bf5/linked_in_profile",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "LinkedIn",
    date: "Dec 2025",
    highlights: ["Generative AI tools", "Responsible AI usage"],
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/a75876deed98c5529ef11036652f6895c5e16620e222e6f23bf131a1ab68c2b0?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Be3Cns6CDQROVqsc5rylhMQ%3D%3D",
  },
  {
    title: "International Certification of Digital Literacy (ICDL)",
    issuer: "Microsoft",
    date: "Jan 2026",
    highlights: [],
    credentialUrl: "#",
  },
  {
    title: "AWS re/Start Cloud Computing Program",
    issuer: "AWS",
    date: "2025",
    highlights: [],
    credentialUrl:
      "https://www.credly.com/badges/ec4fe25c-ed3f-41d3-a502-6670a0438373/linked_in_profile",
  },
  {
    title: "Foundations of Computer Science",
    issuer: "SE Factory",
    date: "July 11, 2024",
    highlights: [],
    credentialUrl: "/images/se.png",
  },
  {
    title: "Advanced Full-Stack Software Engineering",
    issuer: "SE Factory",
    date: "July 11, 2024",
    highlights: [],
    credentialUrl: "/images/Amir Full stack.png",
  },
]
