export const profile = {
  name: "Hadi Khoder",
  location: "Lebanon",
  title: "Software Engineer | Full-Stack Developer | Development Team Leader",
  summary: "Building secure, scalable, and user-focused digital solutions through modern software engineering, AI-assisted development, and technical leadership.",
  linkedin: "https://www.linkedin.com/in/hadi-khoder-90b07837b/",
  github: "https://github.com/hadi-khoder",
  whatsapp: "https://wa.me/96171608790",
  phone: "+961 71 608 790",
  phoneHref: "tel:+96171608790",
  email: "khoderhadi90@gmail.com",
};

export const experience = {
  company: "Digi Web",
  role: "Software Development Team Leader",
  period: "October 2026 – Present",
  responsibilities: [
    "Coordinate and supervise software development teams.",
    "Assign development tasks and monitor project progress.",
    "Contribute to software architecture and technical decisions.",
    "Support website development, maintenance, and troubleshooting.",
    "Work with WordPress, WooCommerce, hosting environments, and API integrations.",
    "Use AI-powered development tools to improve development efficiency.",
    "Coordinate frontend, backend, mobile, and UI/UX development activities.",
  ],
};

export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  technologies?: string[];
  technologyNote?: string;
  responsibilities?: string[];
  features?: string[];
  challenge?: string;
  approach?: string;
  status: "In development" | "Completed" | "Status unconfirmed";
  githubUrl?: string;
  demoUrl?: string;
  icon: "layers" | "store" | "sparkles" | "utensils" | "book";
};

export const education = [
  { title: "MSc Computing, Cyber Security", university: "Arab Open University", status: "In progress", description: "Current academic focus: networking fundamentals, network security, cryptography, and secure development principles." },
  { title: "BSc Computer Science", university: "Lebanese International University", status: "Graduate", description: "Computer Science graduate with a graduation project focused on an AI-powered lost and found platform." },
];

export const certifications: { title: string; issuer: string; credentialUrl?: string }[] = [
  { title: "Introduction to Networks", issuer: "Cisco Networking Academy" },
  { title: "Network Security", issuer: "Cisco Networking Academy" },
];

export const projects: Project[] = [
  {
    id: "kidsmug", number: "01", name: "KidsMug", category: "Software Architecture & Team Leadership",
    description: "A nursery management platform designed to connect nurseries, parents, administrators, and suppliers through web and mobile applications.",
    technologies: ["Laravel", "PostgreSQL", "Flutter", "Riverpod", "REST APIs", "Cloudflare"],
    technologyNote: "Team technologies planned or used",
    responsibilities: ["Development team leadership", "Architecture planning and requirements analysis", "Task distribution", "Coordination between developers and designers"],
    challenge: "Coordinate requirements and delivery across multiple user roles and web and mobile surfaces.",
    approach: "Plan the architecture, distribute development tasks, and coordinate the team across design and implementation.",
    status: "In development", icon: "layers",
  },
  {
    id: "potlok", number: "02", name: "The Potlok", category: "E-Commerce & Web Development",
    description: "An e-commerce platform involving website customization, performance improvements, troubleshooting, and integration planning.",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "MySQL", "cPanel", "REST APIs"],
    responsibilities: ["Website maintenance and customization", "Hosting and deployment troubleshooting", "Responsive design improvements", "E-commerce functionality optimization", "Third-party API integration planning"],
    challenge: "Maintain and improve an e-commerce experience across the website, hosting environment, and planned integrations.",
    approach: "Troubleshoot deployment issues, refine responsive behavior, optimize store functionality, and plan API integrations.",
    status: "Status unconfirmed", icon: "store",
  },
  {
    id: "lost-found", number: "03", name: "AI-Powered Lost & Found", category: "Full-Stack Development & AI",
    description: "A graduation project designed to help users report and recover lost items through intelligent matching and AI-assisted suggestions.",
    technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    features: ["User authentication", "Lost and found item management", "Search and filtering", "AI-assisted matching suggestions", "Database management and responsive interface"],
    challenge: "Help users discover relevant lost-item reports among user-submitted listings.",
    approach: "Bring together item reporting, search and filtering, and AI-assisted matching suggestions.",
    status: "Status unconfirmed", icon: "sparkles",
  },
  {
    id: "restaurant", number: "04", name: "Restaurant Management System", category: "Full-Stack Development",
    description: "A management system covering digital menus, order tracking, authenticated access, and administrative workflows.",
    features: ["Digital menu management", "Order tracking", "User authentication", "Role-based access control", "Administrative functionality"],
    status: "Status unconfirmed", icon: "utensils",
  },
  {
    id: "library", number: "05", name: "Library Management System", category: "Database & Web Development",
    description: "A library system focused on book inventory, discovery, and the circulation process.",
    features: ["Book inventory management", "Search and filtering", "Book issuance and return management", "Database operations"],
    status: "Status unconfirmed", icon: "book",
  },
];

export const skillGroups = [
  { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "PHP", "REST APIs"] },
  { title: "Databases", skills: ["MySQL", "PostgreSQL"] },
  { title: "Mobile", skills: ["Flutter"] },
  { title: "Infrastructure & Tools", skills: ["Git", "GitHub", "Linux", "cPanel", "VS Code", "Postman", "Cloudflare"] },
  { title: "AI-Assisted Development", skills: ["ChatGPT", "Cursor", "Code generation", "Debugging", "Architecture planning"] },
];

export const securityFocus = ["Networking fundamentals", "Network security", "Cryptography", "Secure development principles"];
