export const SITE = {
  name: "Amir Baddour",
  fullName: "Amir Sami Baddour",
  role: "Backend-Focused Full-Stack Developer",
  email: "amirsbaddour@gmail.com",
  location: "Lebanon",
  linkedin: "https://www.linkedin.com/in/amir-baddour",
  github: "https://github.com/Amir-Baddour",
  calendar: "https://calendar.app.google/tPZsGRuaDZC2Qnf19",
  cv: "/Amir_Sami_Baddour_CV.pdf",
  url: "https://amirbaddour.dev",
  subtitle:
    "I build secure web applications, REST APIs, fintech platforms, and machine-learning-enabled features using PHP, ASP.NET, JavaScript, Python, and relational databases.",
  education: "Bachelor of Science in Computer Science — Graduated 2026",
  university: "Modern University for Business and Science (MUBS), Lebanon",
} as const

export interface Project {
  title: string
  subtitle: string
  image: string
  imageAlt: string
  imageGallery?: string[]
  problem: string
  solution: string
  contribution: string
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
    title: "Backend Web Applications",
    subtitle: "ASP.NET MVC",
    image: "/images/project-backend-apps.png",
    imageAlt:
      "ASP.NET MVC internal web application with a data table, CRUD actions, and an authentication form",
    problem:
      "Internal business processes required structured web applications with reliable data handling and access control.",
    solution:
      "Backend-driven ASP.NET MVC applications with authentication, validation, and a clean controller-service structure backed by SQL Server.",
    contribution:
      "Developed controllers, validation logic, reusable backend services, and SQL-backed CRUD functionality, and implemented role-based access.",
    features: [
      "Authentication systems",
      "Form and input validation",
      "Controller-service structure",
      "SQL-backed CRUD operations",
      "Role-based access",
    ],
    stack: ["ASP.NET MVC", ".NET Framework", "C#", "SQL Server"],
    mlNote: null,
    githubUrl: "#",
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
    title: "International Computer Driving License (ICDL)",
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
