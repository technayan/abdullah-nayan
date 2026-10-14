/**
 * ──────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
 *  Every piece of text, link, project and skill on the site is
 *  read from here. Search for "TODO" to find placeholders.
 * ──────────────────────────────────────────────────────────────
 */
import type { IconType } from "react-icons";
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

/* ───────────── Site & personal info ───────────── */
export const site = {
  name: "Abdullah Al Mamun Nayan",
  shortName: "Abdullah Nayan",
  role: "Full-Stack Web Developer",
  // Used for the page <title> and search results
  title: "Abdullah Al Mamun Nayan | Full-Stack Web Developer",
  description:
    "Portfolio of Abdullah Al Mamun Nayan, a fresher full-stack web developer building fast, accessible web apps with Next.js, TypeScript and Node.js.",
  url: "https://your-domain.com", // TODO: deployed URL
  email: "md.nayan8494@gmail.com",
  phone: "+8801944516122",
  location: "Tongi, Gazipur, Dhaka-1710, Bangladesh", // TODO
  availability: "Open to full-time and internship roles",
  resumeUrl: "/resume.pdf", // TODO: drop the PDF into /public/resume.pdf
  socials: {
    github: "https://github.com/technayan",
    linkedin: "https://www.linkedin.com/in/md-abdullah-nayan/",
    facebook: "https://www.facebook.com/dev.nayan20",
    twitter: "", // leave empty to hide
  },
};

/* ───────────── Navigation ───────────── */
export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Certificates", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

/* ───────────── Hero ───────────── */
export const hero = {
  greeting: "Hi, I'm",
  // The typing effect cycles through these. Add, remove or reword freely.
  roles: [
    "Full-Stack Web Developer",
    "React & Next.js Developer",
    "Node.js API Developer",
  ],
  intro:
    "I build modern web applications that combine thoughtful design, seamless user experiences, and reliable backend engineering. I love solving real-world problems through clean, scalable code.",
  // Replace with your photo: save it as /public/profile.jpg and set image: "/profile.jpg"
  image: "/abdullah-al-mamun-nayan.jpg", // TODO
  imageAlt: "Portrait of Abdullah Al Mamun Nayan",
  // Small floating badges around the photo
  chips: [
    { label: "React", icon: SiReact },
    { label: "Next.js", icon: SiNextdotjs },
    { label: "Node.js", icon: SiNodedotjs },
  ],
};

/* ───────────── About ───────────── */
export const about = {
  paragraphs: [
    "I started programming out of curiosity about how the websites I used every day actually worked. That curiosity grew into a passion for building web applications through continuous learning, hands-on projects, and exploring how other developers solve problems.",
    "I work primarily with the JavaScript ecosystem, including React, Next.js, and Node.js. I value clean, maintainable code, thoughtful UI design, and the details that make applications reliable and accessible, from loading states and error handling to keyboard navigation.",
    "As an aspiring Full-Stack Developer, I'm looking to join a collaborative team where I can contribute to real-world projects, learn from experienced engineers, and grow into a developer people can rely on.",
  ],
  facts: [
    {
      label: "Education",
      value: "BA (Hons) and MA in English, National University",
    },
    { label: "Focus", value: "Frontend with Next.js, backend with Node.js" },
    { label: "Location", value: site.location },
    { label: "Status", value: site.availability },
  ],
  learning: ["System design basics", "VPS", "Docker", "NGINX"],
};

/* ───────────── Skills ───────────── */
export type Skill = { name: string; icon: IconType };

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
    ],
  },
  {
    title: "Backend and database",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

/* ───────────── Education ───────────── */
export type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

// Newest first. TODO: add your real years and, if you like, your results.
export const education: Education[] = [
  {
    degree: "Master of Arts (MA) in English",
    institution: "National University",
    period: "2022 – 2023",
    description:
      "Advanced study of literature, language and critical theory. It sharpened how I research, structure an argument and explain complex ideas clearly, skills I now use when writing documentation and interface copy.", // TODO: make this your own
  },
  {
    degree: "Bachelor of Arts (Honours) in English",
    institution: "National University",
    period: "2018 – 2022", // TODO
    description:
      "Four years of reading, writing and analysis across literature and linguistics. This is where I built strong communication habits and attention to detail.", // TODO: make this your own
  },
];

/* ───────────── Certifications ───────────── */
export type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string; // link to verify the certificate (optional)
  image?: string; // e.g. "/certificates/programming-hero.jpg" (optional)
};

export const certifications: Certification[] = [
  {
    title: "Complete Web Development Course",
    issuer: "Programming Hero",
    date: "2022",
    description:
      "A project-based web development program covering front-end and back-end fundamentals, from HTML, CSS and JavaScript to React, Node.js and databases.", // TODO: adjust to match your syllabus
    credentialUrl:
      "https://drive.google.com/file/d/1JqQeSSSBNhAWC9nuYoebkM4DZotx36CS/view?usp=sharing", // TODO: paste your certificate link to show a "View certificate" button
  },
];

/* ───────────── Projects ─────────────
 * Each project powers a card on the home page AND its own
 * page at /projects/<slug>. To add a project, copy one block.
 * `image` is optional: put a file in /public/projects and use
 * "/projects/your-image.png". Without it a clean cover is generated.
 */
export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
  year: string;
  role: string;
  duration: string;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    features: string[];
    challenges: { title: string; text: string }[];
    outcome: string;
    learnings: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "parcelix",
    title: "Parcelix",
    tagline: "A smarter way to manage deliveries, from pickup to doorstep.",
    description:
      "A full-stack courier and logistics management platform that streamlines shipment creation, pickup scheduling, courier assignment, parcel tracking, and delivery management. Built with role-based access control, OTP-based email verification, payment processing, and a responsive interface.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Tanstack Form",
      "Zod",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
    ],
    liveUrl: "https://parcelix.vercel.app/",
    githubUrl: "https://github.com/technayan/parcelix",
    image: "/projects/parcelix.png",
    year: "2026",
    role: "Full-Stack Developer (frontend, backend, API integration)",
    duration: "3 weeks",
    caseStudy: {
      overview:
        "Parcelix is a full-stack courier and logistics management platform designed to simplify parcel delivery operations. It connects customers, couriers, and administrators through a centralized system for managing shipments, coordinating deliveries, tracking parcel progress, and handling payments.",
      problem:
        "Managing courier operations involves multiple interconnected steps, from shipment creation and pickup scheduling to courier assignment, hub transfers, and final delivery. Without a centralized platform, tracking parcel progress, coordinating delivery operations, and maintaining visibility across the shipment lifecycle can become difficult.",
      solution:
        "I built Parcelix as a role-based logistics platform with a dedicated frontend and REST API backend. Customers can create shipments and follow their progress, couriers can participate in delivery operations, and administrators can manage courier applications and operational workflows. PostgreSQL handles relational data, Prisma manages database access, and Redis supports temporary data storage and OTP verification.",
      features: [
        "Role-based authentication and authorization",
        "Email verification using OTP",
        "Shipment creation and tracking",
        "Pickup request and courier assignment workflows",
        "Courier application and approval management",
        "Hub, delivery zone, and pricing management",
        "Shipment status updates throughout the delivery lifecycle",
        "Payment processing and invoice generation",
        "Email notifications using EJS templates",
        "Redis-backed OTP storage",
        "Responsive dashboards and interfaces",
        "Shipment cancellation, failed delivery, and return-to-sender workflows",
      ],
      challenges: [
        {
          title: "Managing shipment lifecycle transitions",
          text: "A shipment passes through multiple stages, including pickup, hub processing, transit, out-for-delivery, and final delivery. Designing the backend around explicit status transitions helps maintain consistent shipment state and makes the delivery workflow easier to manage.",
        },
        {
          title: "Implementing secure authentication and verification",
          text: "Email verification requires temporary OTP storage, expiration handling, and email delivery. I integrated Redis for OTP-related data and implemented email verification as part of the authentication workflow.",
        },
        {
          title: "Coordinating frontend authentication with token refresh",
          text: "The Next.js frontend uses a centralized API client to coordinate API requests and token refresh behavior. Keeping authentication logic centralized helps avoid duplicating refresh logic across individual API functions and React Query hooks.",
        },
        {
          title: "Modeling connected logistics data",
          text: "Shipments depend on related entities such as customers, couriers, delivery zones, and hubs. Prisma and PostgreSQL provide a relational foundation for these relationships and support structured queries for shipment and operational data.",
        },
      ],
      outcome:
        "Parcelix is an ongoing full-stack portfolio project that brings together frontend engineering, REST API development, relational database design, authentication, caching, and delivery workflow management in one practical application. The project is designed to demonstrate my ability to build and integrate a complete web application.",
      learnings: [
        "Designing and implementing a full-stack application with Next.js and Express.js",
        "Modeling relational data with Prisma and PostgreSQL",
        "Implementing authentication, OTP verification, and role-based authorization",
        "Using Redis for temporary data storage",
        "Building REST APIs and integrating them with a frontend",
        "Designing shipment workflows and status transitions",
        "Managing frontend API requests and token refresh centrally",
        "Building transactional payment and email notification workflows",
      ],
    },
  },
  {
    slug: "rentnest",
    title: "RentNest",
    tagline: "Find your next home. Manage rentals with confidence.",
    description:
      "A full-stack rental property management platform that streamlines property discovery, listing management, rental requests, and tenant-landlord coordination. Built with role-based access control, property search and filtering, Stripe payment processing, and a responsive interface.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Stripe",
    ],
    liveUrl: "https://rent-nest-frontend-six.vercel.app/",
    githubUrl: "https://github.com/technayan/RentNest-frontend",
    image: "/projects/rentnest.png",
    year: "2026",
    role: "Full-Stack Developer (frontend, backend, API integration)",
    duration: "3 weeks",
    caseStudy: {
      overview:
        "RentNest is a full-stack rental property marketplace built to simplify the process of finding, listing, and renting properties. It provides dedicated experiences for tenants, landlords, and administrators, connecting property discovery, rental request management, and online payments through a centralized platform. The frontend is built with Next.js and TypeScript, while a separate Express.js REST API handles backend operations and PostgreSQL data persistence.",
      problem:
        "Finding a suitable rental property and coordinating the rental process can involve scattered listings, manual communication, unclear request statuses, and complicated payment arrangements. Landlords also need an organized way to manage property listings and review incoming requests, while administrators need visibility into platform activity.",
      solution:
        "I developed RentNest as a role-based rental marketplace with separate dashboards and workflows for tenants, landlords, and administrators. Tenants can search and filter properties, inspect listing details, and submit rental requests. Landlords can manage listings and approve or reject requests. Once a request is approved, tenants can complete payment through Stripe Checkout. The backend uses a separate REST API, Prisma, and PostgreSQL to manage application data and business workflows.",
      features: [
        "Role-based authentication for tenants, landlords, and administrators",
        "User profile management",
        "Property listing creation, editing, and availability management",
        "Property search and filtering by search term, location, category, and price",
        "Detailed property information pages",
        "Rental request submission and status tracking",
        "Landlord approval and rejection workflows",
        "Optimistic UI updates for responsive request management",
        "Stripe Checkout integration for rental payments",
        "Stripe webhook handling for payment confirmation",
        "Payment status tracking",
        "Property reviews and ratings after rental payment",
        "Admin dashboard for managing users, properties, and rental requests",
        "Responsive layouts for desktop, tablet, and mobile",
        "Form validation, loading skeletons, toast notifications, and error handling",
      ],
      challenges: [
        {
          title: "Coordinating rental requests and payment workflows",
          text: "A rental request must move through the appropriate approval and payment stages before the property is considered rented. I structured the application around these connected workflows so tenants, landlords, and administrators can see and manage the relevant rental statuses.",
        },
        {
          title: "Handling reliable payment confirmation",
          text: "A successful redirect from a payment provider should not be the only source of truth for a transaction. I integrated Stripe Checkout with backend webhook handling so payment events can be verified server-side and the corresponding payment, rental request, and property records can be updated.",
        },
        {
          title: "Building role-specific experiences",
          text: "Tenants, landlords, and administrators have different permissions and responsibilities. I implemented role-aware application flows and protected dashboard access, with backend authorization helping ensure that sensitive operations are restricted to permitted users.",
        },
        {
          title: "Keeping property discovery and rental actions responsive",
          text: "Property browsing, filtering, and request management need to feel responsive without compromising data consistency. I implemented URL-synchronized search filters and optimistic UI updates for selected actions, while retaining backend API responses as the source of truth.",
        },
      ],
      outcome:
        "RentNest brings property discovery, landlord listing management, rental approvals, online payments, reviews, and administrative oversight into one deployed full-stack application. The project demonstrates practical experience with frontend and backend integration, role-based access control, relational data modeling, payment workflows, and responsive UI development.",
      learnings: [
        "Designing and integrating a separate frontend and backend architecture",
        "Building REST APIs with Node.js and Express.js",
        "Modeling relational data with Prisma and PostgreSQL",
        "Implementing role-based authentication and authorization",
        "Integrating Stripe Checkout and server-side webhook verification",
        "Managing rental request and payment state transitions",
        "Implementing search, filtering, and URL-synchronized state",
        "Using optimistic UI updates with error handling",
        "Building validated forms with React Hook Form and Zod",
        "Designing responsive dashboards and reusable UI components",
      ],
    },
  },
  {
    slug: "devpulse",
    title: "DevPulse",
    tagline: "A streamlined backend for collaborative issue tracking.",
    description:
      "A backend API for collaborative issue and feature tracking that streamlines user authentication, issue reporting, and resolution management. Built with role-based access control, JWT authentication, password hashing, and PostgreSQL-powered data persistence.",
    tech: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Raw SQL",
      "JSON Web Tokens",
      "bcrypt",
    ],
    liveUrl: "https://devpulse-two-pi.vercel.app/",
    githubUrl: "https://github.com/technayan/devpulse",
    year: "2026",
    role: "Backend Developer",
    duration: "Portfolio project",
    caseStudy: {
      overview:
        "DevPulse is a backend-focused issue and feature tracking system designed to help software teams report technical problems, propose improvements, and manage issue resolution through a structured API. Built with Node.js, Express.js, TypeScript, and PostgreSQL, it separates routing, controller logic, and database services to keep the codebase organized and maintainable.",
      problem:
        "Software teams need a consistent way to report bugs, suggest features, and track technical issues without losing ownership or control over changes. Without clear permissions and defined issue management rules, contributors may modify issues they do not own, and maintainers may struggle to manage the resolution process consistently.",
      solution:
        "I developed DevPulse as a RESTful backend API with user authentication, role-based authorization, and structured issue management. Users can register and log in, while authorized maintainers and contributors can create issues. Maintainers have broader issue management permissions, whereas contributors can update their own issues while those issues remain open. PostgreSQL stores users and issues, raw SQL handles database queries, bcrypt protects stored passwords, and JSON Web Tokens support authenticated access.",
      features: [
        "User registration and login endpoints",
        "Password hashing with bcrypt",
        "JWT-based authentication",
        "Role-based access control for maintainers and contributors",
        "Issue creation for authorized users",
        "Retrieve all users",
        "Retrieve individual issues",
        "Issue updates with role and ownership restrictions",
        "Issue deletion restricted to maintainers",
        "Issue status-based update permissions",
        "PostgreSQL relational data storage",
        "Raw SQL database queries",
        "Separated routes, controllers, and service-layer logic",
        "TypeScript for improved type safety",
        "Deployed API endpoints",
      ],
      challenges: [
        {
          title: "Enforcing role-based issue permissions",
          text: "Different users need different levels of control over technical issues. I implemented permission rules that distinguish maintainers from contributors, allowing maintainers to update issues while limiting contributors to updating their own issues when the status is open.",
        },
        {
          title: "Securing authentication and stored credentials",
          text: "Authentication requires both secure password storage and a mechanism for identifying authenticated users across API requests. I used bcrypt for password hashing and JSON Web Tokens to support authenticated access to protected endpoints.",
        },
        {
          title: "Organizing database access and API logic",
          text: "Keeping database queries, HTTP request handling, and business rules in one place makes backend code harder to maintain. I separated route definitions, controller responsibilities, and service-layer database operations to improve organization and make the API easier to extend.",
        },
        {
          title: "Maintaining consistent issue management rules",
          text: "Issue updates and deletions must respect both user permissions and the current issue status. I implemented conditional access rules so issue management follows the application's ownership and lifecycle requirements.",
        },
      ],
      outcome:
        "DevPulse delivers a deployed REST API for user management and collaborative issue tracking. It demonstrates practical backend development skills, including authentication, authorization, password security, PostgreSQL integration, raw SQL queries, and layered API architecture.",
      learnings: [
        "Building RESTful APIs with Node.js and Express.js",
        "Structuring backend applications with routes, controllers, and services",
        "Implementing JWT-based authentication",
        "Hashing passwords securely with bcrypt",
        "Enforcing role-based and ownership-based authorization",
        "Working with PostgreSQL and raw SQL",
        "Designing user and issue database tables",
        "Implementing status-dependent business rules",
        "Using TypeScript to improve backend type safety",
        "Deploying and documenting API endpoints",
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/* ───────────── Contact ───────────── */
export const contact = {
  heading: "Let's work together",
  text: "I'm currently looking for my first full-time or internship role. If you have an opportunity, or just want to say hello, send me a message. I usually reply within a day.",
};
