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
  nextStep?: string
  review?: string
  method?: string
  takeaway?: string
  features: string[]
  stack: string[]
  mlNote: string | null
  githubUrl: string
  liveUrl: string
  caseStudyUrl: string
}

export const projects: Project[] = [
  {
    title: "A wallet backend where the balance has to be right",
    subtitle: "Senior project · MUBS",
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
      "My senior project at MUBS. The platform lets people register, hold a balance, deposit, withdraw, send money to each other, and exchange cryptocurrency at current prices, while administrators verify accounts and monitor activity. I owned the server side.",
    solution:
      "A PHP REST API covering authentication and deposits, withdrawals, and transfers, supported by MySQL data models, live exchange rates, and an admin dashboard.",
    contribution:
      "Built 35 PHP REST endpoints behind JWT authentication and Google sign-in, including deposits, withdrawals, transfers, and QR payments. Integrated live crypto prices through a Python Flask service with caching and retries.",
    decisions: [
      "Validate transaction requests and handle errors on the server.",
      "Keep transaction history in its own tables so balances can be checked against recorded activity.",
      "Use an admin dashboard for account verification and analytics.",
    ],
    nextStep:
      "Containerize the API and database, then ship them to EC2 through a GitHub Actions pipeline to demonstrate the full delivery path.",
    features: [
      "Secure authentication",
      "Deposits, withdrawals, transfers, and QR payments",
      "Real-time cryptocurrency exchange",
      "7 MySQL tables for wallet, transaction, account, and verification data",
      "Admin verification and analytics",
      "Feedback sentiment analysis",
    ],
    stack: ["PHP", "MySQL", "REST APIs", "JWT", "Python Flask", "React"],
    mlNote:
      "Implemented Logistic Regression and Random Forest models to classify user feedback after deployment, enabling automated sentiment analysis and data-driven improvement insights.",
    githubUrl: "https://github.com/Amir-Baddour/senior-dweb3",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    title: "A school management system, built from the schema up",
    subtitle: ".NET Developer · Oqunet Software",
    image: "/images/project-backend-apps.png",
    imageAlt: "School management application interface with data tables and CRUD actions",
    problem:
      "The brief was a School Management System prototype: students, their courses, and the screens staff need to manage both. The work was built at Oqunet with senior developer review.",
    solution:
      "A School Management System prototype built with ASP.NET MVC and SQL Server, organized into controllers, models, and views.",
    contribution:
      "Built student and course features, implemented all four CRUD operations with ADO.NET and LINQ, and refined validation and queries through senior developer review.",
    decisions: [
      "Define the Student and Courses relational model before building the screens.",
      "Use database foreign keys to enforce relationships between records.",
      "Separate controllers, models, and views so responsibilities stay clear.",
    ],
    review:
      "Debugged and refined the backend with senior developers through Git, then reworked data validation and query structure based on their feedback.",
    features: [
      "Student and course records",
      "Create, read, update, and delete",
      "SQL Server relationships",
      "Razor views and forms",
    ],
    stack: ["ASP.NET MVC", "C#", "SQL Server", "ADO.NET", "LINQ"],
    mlNote: null,
    githubUrl: "#",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    title: "Security research: what happens between a phone and the network",
    subtitle: "Researcher · MUBS",
    image: "",
    imageAlt: "",
    diagram: ["Controlled lab", "IoT vehicle", "Solidity wallet"],
    problem:
      "The research explored how security assumptions affect mobile network traffic, connected devices, and decentralized systems.",
    solution:
      "Three university research projects covering a controlled mobile-network demonstration, an Arduino vehicle connected over wireless, and a Web3 wallet in Solidity.",
    contribution:
      "Investigated each system and documented the methodology, findings, and security implications in a written report.",
    decisions: [
      "Run the network demonstration in a controlled lab environment.",
      "Document security implications alongside findings.",
      "Apply lessons about authentication, authorization, and validation to backend design.",
    ],
    method:
      "Each project ended in a written report covering methodology, findings, and security implications.",
    takeaway:
      "The research shaped how I build APIs: authentication, authorization, and input validation belong in the design from the start.",
    features: [
      "Network security research",
      "Arduino and IoT systems",
      "Solidity and Web3",
      "Three written reports",
    ],
    stack: ["Network Security", "Arduino", "Solidity", "Web3"],
    mlNote: null,
    githubUrl: "#",
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    title: "AirDropX: multi-tenant airdrop platform with CI/CD",
    subtitle: "Live platform · DigitalOcean",
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
      "Four GitHub Actions workflows",
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
  location?: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    title: "Cloud Computing (AWS Services)",
    company: "Park Innovation",
    period: "Jun 2025 – Aug 2025",
    location: "Samqaniyeh, Mount Lebanon Governorate, Lebanon · Hybrid",
    bullets: [
      "Provisioned Linux EC2 instances and administered users, permissions, and processes through the AWS Console, SSH, and CLI.",
      "Configured EC2, S3, IAM, and RDS end to end from the CLI.",
      "Worked through guided labs and simulated production scenarios with scalability, fault tolerance, and security in mind.",
    ],
  },
  {
    title: ".NET Developer (ASP.NET MVC)",
    company: "Oqunet Software",
    period: "Apr 2025 – Jun 2025",
    location: "Zouk Mosbeh, Keserwan-Jbeil Governorate, Lebanon · Hybrid",
    bullets: [
      "Built a School Management System prototype in three months, with reviews from senior developers.",
      "Designed Student and Courses schemas in SQL Server and linked them with foreign keys.",
      "Implemented all four CRUD operations from Razor forms to database tables using ADO.NET and LINQ.",
      "Kept controllers, models, and views separate, and refined validation and queries through Git-based code review.",
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
  {
    title: "Researcher",
    company: "Modern University for Business and Science",
    period: "Oct 2022 – Jul 2025",
    location: "Aley, Mount Lebanon Governorate, Lebanon · On-site",
    bullets: [
      "Completed three security and systems research projects over two years and ten months, each documented in a written report.",
      "Ran a controlled lab demonstration examining mobile password interception in transit.",
      "Built an Arduino vehicle connected over wireless and studied its exposure as an IoT device.",
      "Wrote a Web3 wallet in Solidity to explore decentralized authentication and trust.",
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

export interface Capability {
  area: string
  evidence: string
  where: string
}

export const capabilities: Capability[] = [
  {
    area: "AWS EC2, Linux",
    evidence:
      "Provisioned instances and managed users, permissions, and processes over SSH and the CLI.",
    where: "Park Innovation",
  },
  {
    area: "AWS S3, IAM, RDS",
    evidence:
      "Configured storage, access control, and managed databases end to end from the CLI.",
    where: "Park Innovation",
  },
  {
    area: "Docker, GitHub Actions",
    evidence:
      "Containerized deployments and automated build and delivery workflows.",
    where: "Own projects",
  },
  {
    area: "ASP.NET MVC, C#",
    evidence:
      "Layered CRUD application on SQL Server with ADO.NET and LINQ.",
    where: "Oqunet Software",
  },
  {
    area: "PHP, Node.js, Express",
    evidence:
      "REST APIs with authentication and authorization, tested in Postman before release.",
    where: "Wallet platform, own projects",
  },
  {
    area: "SQL Server, MySQL, PostgreSQL",
    evidence:
      "Relational schema design, foreign keys, and query work across three engines.",
    where: "Oqunet, wallet platform",
  },
  {
    area: "Security",
    evidence:
      "Network interception research, IoT exposure analysis, and smart contracts in Solidity.",
    where: "MUBS",
  },
  {
    area: "Python, data",
    evidence:
      "Clustering and supervised models with Pandas and NumPy, evaluated with F1-score and cross-validation.",
    where: "Own projects",
  },
  {
    area: "Also",
    evidence:
      "Java, JavaScript, React, Razor, Tailwind CSS, Git, Microsoft Dynamics CRM.",
    where: "",
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
