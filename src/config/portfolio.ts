/**
 * Central Portfolio Configuration
 * Complete Architecture - Phases 03 through 18
 *
 * All personal data and portfolio content resides in this file.
 * UI components must NEVER hard-code personal data.
 */

import type { PortfolioConfig } from "@/types";
import { defaultFeatureFlags } from "./features";
import { siteConfig } from "./site";

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Piyush Pawar",
    displayName: "Piyush Pawar",
    role: "Frontend Developer · Creative Developer · AI & Automation",
    currentRole: "B.Tech Computer Science Student",
    primaryIdentity:
      "Frontend Developer + Creative Developer + AI / Automation Builder",
    tagline:
      "Engineering immersive digital experiences through the convergence of modern frontend architecture, 3D graphics, motion choreography, and intelligent AI automation.",
    bio: [
      "I'm Piyush, a Computer Science student and developer who enjoys building things that combine technology, creativity, and interaction. I started with web development and gradually became interested in 3D experiences, AI, automation, and the small details that make digital products feel different.",
      "I don't want to build websites that simply work. I want to build experiences that feel intentional — clean interfaces, meaningful interactions, smooth animations, and products that people actually enjoy using.",
      "Right now, I'm exploring modern web development, 3D on the web, AI-powered systems, and automation. I'm constantly experimenting with new technologies and turning ideas into real projects.",
    ],
    interests: [
      "Web Development",
      "UI/UX",
      "3D Web Experiences",
      "Creative Development",
      "Web Animations",
      "AI & Automation",
      "Interactive Experiences",
      "Modern Frontend",
    ],
    statusTag: "Available for new projects",
    heroBadge: "Available for new projects",
    heroGreeting: "Hi, I'm",
    heroName: "Piyush Pawar",
    heroRole: "Frontend & Creative Developer",
    heroActionWord: "crafting",
    heroRotatingWords: ["Scalable", "Modern", "Reliable", "Interactive"],
    heroEndingText: "web & mobile products.",
    heroStatement: "Frontend & Creative Developer crafting scalable web & mobile products.",
    location: "India · Open to Remote",
    email: "pawarpiyush172@gmail.com",
    availableForWork: true,
    resumeUrl: "#",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://www.instagram.com/piyuxh.3xe/",
    },
  },

  navigation: [
    { id: "home", label: "Home", href: "#hero" },
    { id: "about", label: "About", href: "#about" },
    { id: "service", label: "Service", href: "#service" },
    { id: "work", label: "Work", href: "#work" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],

  skills: [
    {
      id: "programming",
      title: "Programming Languages",
      skills: [
        { id: "c", name: "C", category: "programming" },
        { id: "cpp", name: "C++", category: "programming" },
        { id: "java", name: "Java", category: "programming" },
        { id: "python", name: "Python", category: "programming" },
        { id: "javascript-lang", name: "JavaScript", category: "programming" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      skills: [
        { id: "html", name: "HTML5", category: "frontend" },
        { id: "css", name: "CSS3", category: "frontend" },
        { id: "javascript-fe", name: "JavaScript (ES6+)", category: "frontend" },
        { id: "react", name: "React", category: "frontend" },
        { id: "nextjs", name: "Next.js", category: "frontend" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Databases",
      skills: [
        { id: "php", name: "PHP", category: "backend" },
        { id: "sql", name: "SQL", category: "backend" },
        { id: "mysql", name: "MySQL", category: "backend" },
        { id: "mongodb", name: "MongoDB", category: "backend" },
      ],
    },
    {
      id: "creative",
      title: "Creative Development & 3D",
      skills: [
        { id: "threejs", name: "Three.js", category: "creative" },
        { id: "r3f", name: "React Three Fiber", category: "creative" },
        { id: "gsap", name: "GSAP", category: "creative" },
        { id: "webgl", name: "WebGL", category: "creative" },
        { id: "3d-interactions", name: "3D Interactions", category: "creative" },
        { id: "scroll-animation", name: "Scroll-Based Motion", category: "creative" },
        { id: "interactive-ui", name: "Interactive UI Systems", category: "creative" },
      ],
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      skills: [
        { id: "git", name: "Git", category: "tools" },
        { id: "github", name: "GitHub", category: "tools" },
        { id: "vscode", name: "VS Code", category: "tools" },
        { id: "vercel", name: "Vercel", category: "tools" },
        { id: "supabase", name: "Supabase", category: "tools" },
        { id: "n8n", name: "n8n Automation", category: "tools" },
        { id: "powerbi", name: "Power BI", category: "tools" },
        { id: "tableau", name: "Tableau", category: "tools" },
      ],
    },
  ],

  projects: [
    {
      id: "spartan",
      slug: "spartan-ai-automation",
      title: "SPARTAN",
      summary:
        "Flagship AI automation platform designed to orchestrate complex business workflows, autonomous task pipelines, and intelligent system operations.",
      description:
        "An enterprise-grade exploration into autonomous business logic and intelligent workflows, combining modern reactive web interfaces, n8n orchestration, and Supabase for real-time data persistence.",
      category: "AI Automation Platform",
      technologies: ["Next.js", "React", "TypeScript", "n8n", "Supabase", "AI Automation", "REST APIs", "Tailwind CSS"],
      featured: true,
    },
    {
      id: "ridebridge",
      slug: "ridebridge",
      title: "RideBridge",
      summary:
        "Carpooling and ride-sharing platform concept focusing on accessible shared transit and modern product UI.",
      description:
        "A product-driven interface designed for communal mobility, emphasizing clean user flows, route coordination, and responsive layouts across all viewports.",
      category: "Carpooling & Mobility",
      technologies: ["React", "TypeScript", "UI/UX", "Responsive Design"],
      featured: true,
    },
    {
      id: "creative-web-experiments",
      slug: "creative-web-experiments",
      title: "Creative Web Experiments",
      summary:
        "Ongoing experimental playground showcasing real-time 3D, WebGL shaders, and interactive animations.",
      description:
        "A specialized laboratory for testing bleeding-edge web techniques, from particle simulations and Three.js scenes to physics-based UI micro-interactions.",
      category: "Creative Lab & 3D",
      technologies: ["Three.js", "WebGL", "GSAP", "React", "Interactive Canvas"],
      featured: true,
    },
  ],

  experience: [
    {
      id: "spartan-platform",
      role: "Lead Architect & Developer · SPARTAN",
      company: "AI Automation & Autonomous Workflow Platform",
      period: "Main Project",
      current: true,
      highlights: [
        "Architecting and deploying SPARTAN, an AI automation platform engineered to streamline end-to-end business workflows and autonomous task pipelines.",
        "Building high-performance reactive web interfaces using Next.js, React, and TypeScript with real-time data synchronization via Supabase.",
        "Designing intelligent multi-step automation workflows and webhooks integration utilizing n8n and REST APIs.",
        "Crafting intuitive, dark-mode-first user experiences with tactile micro-interactions and responsive layouts.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "n8n", "Supabase", "AI Automation", "REST APIs", "Tailwind CSS"],
    },
    {
      id: "academic-cs",
      role: "B.Tech in Computer Science",
      company: "Undergraduate Degree · Computer Science & Engineering",
      period: "Academic Foundation",
      current: true,
      highlights: [
        "Pursuing Bachelor of Technology in Computer Science, building deep computational and algorithmic problem-solving rigor.",
        "Strengthening core foundations across Data Structures & Algorithms, Database Management Systems (DBMS), and Operating Systems.",
        "Implementing problem-solving architectures and algorithmic logic in C, C++, Java, and Python.",
        "Translating foundational computer science theory directly into production-quality software and modern web architectures.",
      ],
      technologies: ["C", "C++", "Java", "Python", "Data Structures", "Algorithms", "SQL", "DBMS"],
    },
    {
      id: "creative-interactive",
      role: "Creative Developer & 3D Interactive Web",
      company: "Independent Projects & Creative Systems",
      period: "Creative Engineering",
      current: false,
      highlights: [
        "Engineering real-time 3D web graphics, procedural particle physics, and WebGL shader experiences using Three.js.",
        "Choreographing dynamic scroll-driven motions and fluid micro-animations using GSAP and modern CSS architecture.",
        "Exploring cross-platform application patterns and mobile interface design with React Native.",
        "Employing modern Git version control, collaborative workflows, and automated deployment pipelines.",
      ],
      technologies: ["Three.js", "WebGL", "GSAP", "React", "React Native", "Git"],
    },
  ],

  education: [
    {
      id: "btech-cs",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Undergraduate Engineering Degree",
      period: "Undergraduate Program",
      highlights: [
        "Core coursework in Operating Systems, Algorithms, Computer Networks, and Object-Oriented Programming.",
        "Continuous personal R&D in web technologies, UI/UX interaction design, and creative coding.",
      ],
    },
  ],

  achievements: [
    {
      id: "creative-tech-initiative",
      title: "Full-Stack & Creative Engineering Showcase",
      issuer: "Independent R&D",
      description:
        "Recognized for innovative synthesis of modern frontend engineering, real-time 3D web technologies, and automated workflow design.",
    },
  ],

  experiments: [
    {
      id: "particles-mesh",
      title: "Ambient Gravity Particle Simulation",
      summary:
        "Lightweight 2D canvas particle field with subtle pointer inertia and gravitational attraction.",
      technologies: ["HTML5 Canvas", "TypeScript", "Physics Math"],
      highlight: true,
    },
    {
      id: "three-wireframe-polyhedron",
      title: "Interactive 3D Geometric Core",
      summary:
        "Real-time Three.js rotating icosahedron with point vertices, responsive lighting, and mouse parallax.",
      technologies: ["Three.js", "WebGL", "Vectors"],
      highlight: true,
    },
    {
      id: "staggered-kinetic-type",
      title: "Kinetic Typography & Text Revealer",
      summary:
        "Physics-inspired text reveal splitting sentences into staggered floating typography modules.",
      technologies: ["CSS3 Keyframes", "React 19", "DOM"],
      highlight: true,
    },
    {
      id: "magnetic-cursor-follower",
      title: "Dual-Layer Spring Physics Cursor",
      summary:
        "Subtle pointer with outer lerped spring follower and magnetic element expansion.",
      technologies: ["RequestAnimationFrame", "Custom Hooks", "CSS Tokens"],
      highlight: true,
    },
  ],

  features: defaultFeatureFlags,
  seo: siteConfig,
};
