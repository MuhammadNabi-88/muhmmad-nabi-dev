export const profile = {
  name: "Muhammad Nabi",
  email: "muhmdnabi.dev@yahoo.com",
  github: "https://github.com/MuhammadNabi-88",
  // TODO: paste  LinkedIn profile URL here.
  linkedin: ""
};

const github = profile.github;

// One entry per technology section, in display order.
export const categories = [
  {
    id: "java",
    title: "Java Development",
    stack: "Java, Spring Boot",
    blurb: "Back-end applications with REST APIs, security and persistence.",
    accent: "#2F5BFF",
    tint: "#E3EAFF"
  },
   {
    id: "react",
    title: "React & TypeScript",
    stack: "React, TypeScript",
    blurb: "Component-based interfaces, API integrations and responsive layouts.",
    accent: "#0A97B8",
    tint: "#D9F2F8"
  },
  {
    id: "javascript",
    title: "JavaScript Applications",
    stack: "JavaScript",
    blurb: "Interactive apps that talk to real APIs.",
    accent: "#D69500",
    tint: "#FFF0C7"
  },
  {
    id: "web",
    title: "Web Development",
    stack: "HTML, CSS, JavaScript",
    blurb: "Responsive websites and interactive interfaces built from scratch.",
    accent: "#E0502B",
    tint: "#FFE4DB"
  },
  {
    id: "php",
    title: "PHP & Database Systems",
    stack: "PHP, MySQL",
    blurb: "Database-driven applications with CRUD and authentication.",
    accent: "#6552E0",
    tint: "#E9E5FF"
  }
];

// art: which sketch the generated preview uses until you add a real screenshot.
// image: optional. Put a PNG/JPG in /public/projects and set e.g. "/projects/moneta.png".
export const projects = [
  {
    id: "moneta",
    title: "Moneta – Expense Manager",
    categories: ["java"],
    art: "chart",
    description:
      "Full-stack expense tracker with a Spring Boot REST API, JPA persistence and a responsive dashboard with charts.",
    technologies: ["Java 21", "Spring Boot", "REST API", "JPA", "PostgreSQL", "Docker"],
    demo: "#",
    github // TODO: link the Moneta repository, e.g. `${github}/moneta-expense-manager`
  },
  {
    id: "worksnetz",
    title: "Worksnetz – Job Board",
    categories: ["java"],
    art: "list",
    image: "/projects/worksnetz.png",
    description:
      "Job and freelance network with registration, job search and applications. Built with Spring Boot, Spring Security, Thymeleaf and JPA.",
    technologies: ["Spring Boot", "Spring Security", "JPA", "Thymeleaf"],
    demo: "https://worksnetz.onrender.com/",
    github
  },
  {
    id: "expense-desktop",
    title: "Expense Manager – Desktop",
    categories: ["java"],
    art: "grid",
    description:
      "Desktop expense manager using Java OOP, file handling and financial calculations.",
    technologies: ["Java", "Swing", "OOP"],
    demo: "#",
    github
  },
  {
    id: "finora",
    title: "Finance Tracker Dashboard",
    categories: ["javascript"],
    art: "chart",
    description:
      "Personal finance dashboard for income, expenses, charts and financial statistics.",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js"],
    demo: "https://muhammadnabi-88.github.io/Finora-Finance-Tracker/",
    github
  },
  {
    id: "weatherpro",
    title: "WeatherPro – Weather App",
    categories: ["javascript", "react"],
    art: "grid",
    description:
      "Weather dashboard with city search, live conditions, an hourly chart and a 7-day forecast from the Open-Meteo API.",
    technologies: ["React", "Vite", "Open-Meteo API", "CSS3"],
    demo: "https://weatherpro-react-rho.vercel.app/",
    github
  },
  {
    id: "flymetzingen",
    title: "FlyMetzingen – Flight Booking",
    categories: ["javascript"],
    art: "list",
    description:
      "Flight booking application with flight search, booking flow and PDF ticket generation.",
    technologies: ["JavaScript", "Amadeus API", "jsPDF", "HTML"],
    demo: "https://muhammadnabi-88.github.io/-FlyMetzingen-/",
    github
  },
   {
    id: "dashboard",
    title: "FinancePro Dashboard",
    categories: ["Java", "Spring Boot", "react"],
    art: "grid",
    description:
      "Full-stack finance dashboard for income, expenses, budgets and savings.Track transactions, see balance and savings rate in real time.Frontend in React + TypeScript, Backend in Java Spring Boot with REST API.",
    technologies: ["React", "Java", "Spring Boot"],
    demo: "https://financepro-frontend.vercel.app/",
    github
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    categories: ["web", "react"],
    art: "site",
    description:
      "The site you are looking at: a responsive portfolio built with React and Vite to present projects and skills.",
    technologies: ["React", "Vite", "CSS3", "JavaScript"],
    demo: "https://web-app-entwickler.vercel.app/",
    github
  },
  {
    id: "business-site",
    title: "Business Website – Metzingen",
    categories: ["web"],
    art: "site",
    description:
      "Responsive business website with SEO, contact form and a modern user interface.",
    technologies: ["HTML5", "CSS3", "JavaScript", "SEO"],
    demo: "https://muhammadnabi-88.github.io/metzingen-business-solutions/",
    github
  },
  {
    id: "maison-shop",
    title: "Maison & Co. – Shop System",
    categories: ["php"],
    art: "grid",
    description:
      "E-commerce system with product management, shopping cart, user login and an admin panel.",
    technologies: ["PHP", "MySQL", "JavaScript", "CRUD", "Authentication"],
    demo: "https://maison-co-shop.freehosting.dev/",
    github
  },
    {
  id: "nexdesk",
  title: "Nexdesk – IT Helpdesk",
  categories: ["php"],
  art: "list",
  description:
    "Ticket system with customer, agent and admin roles, SLA deadlines, internal notes and a dashboard. PHP 8, PDO, MySQL.",
  technologies: ["PHP 8", "MySQL", "PDO", "Authentication", "SLA"],
  demo: "https://nexdesk.rf.gd/login",
  github // later: `${github}/nexdesk`
},
];

// Not shown in the new layout (there is no Python section). Add a category above to bring them back.
export const archived = [
  {
    id: "data-analyzer",
    title: "Data Analyzer – Python",
    description: "Python script for automated data analysis, CSV processing and report generation.",
    technologies: ["Python", "Pandas", "Automation"]
  },
  {
    id: "lastpass-api",
    title: "LastPass API Project",
    description: "Python-based API integration project.",
    technologies: ["Python", "API", "Integration"]
  }
];
