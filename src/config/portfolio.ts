/**
 * Central Portfolio Configuration
 *
 * All personal data, projects, and portfolio content resides in this file.
 * Grounded in authentic achievements as a Computer Science student and developer.
 */

import type { PortfolioConfig } from "@/types";
import { defaultFeatureFlags } from "./features";
import { siteConfig } from "./site";

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Piyush Pawar",
    displayName: "Piyush Pawar",
    role: "Frontend & Creative Developer",
    currentRole: "Computer Science Student & Developer",
    primaryIdentity: "Frontend & Creative Developer · 3D Experiences · AI & Automation",
    tagline:
      "Building modern web experiences with interactive 3D, thoughtful UI, and AI-powered automation.",
    bio: [
      "I'm a Computer Science student and developer interested in building web experiences that combine technology, creativity, and interaction.",
      "I enjoy working with modern frontend technologies, experimenting with 3D and web animation, and exploring how AI and automation can simplify repetitive tasks.",
      "Through personal projects and experiments, I'm continuously improving my development skills and turning ideas into practical digital experiences.",
    ],
    interests: [
      "Web Development",
      "UI/UX Design",
      "3D Web Experiences",
      "Creative Development",
      "Web Animations",
      "AI & Automation",
      "Interactive Systems",
      "Modern Frontend",
    ],
    statusTag: "Available for new projects",
    heroBadge: "Available for new projects",
    heroGreeting: "Hi, I'm",
    heroName: "Piyush Pawar",
    heroRole: "Frontend & Creative Developer",
    heroActionWord: "crafting",
    heroRotatingWords: ["Interactive", "Modern", "Creative", "Thoughtful"],
    heroEndingText: "web experiences with 3D and AI automation.",
    heroStatement:
      "Building modern web experiences with interactive 3D, thoughtful UI, and AI-powered automation.",
    location: "India · Open to Remote",
    email: "pawarpiyush172@gmail.com",
    availableForWork: true,
    resumeUrl: "#",
    socials: {
      github: "https://github.com/crystalOG9",
      instagram: "https://www.instagram.com/piyuxh.3xe/",
      email: "pawarpiyush172@gmail.com",
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
      id: "frontend",
      title: "Frontend Engineering",
      skills: [
        { id: "html", name: "HTML5", category: "frontend" },
        { id: "css", name: "CSS3", category: "frontend" },
        { id: "javascript-fe", name: "JavaScript (ES6+)", category: "frontend" },
        { id: "typescript", name: "TypeScript", category: "frontend" },
        { id: "react", name: "React", category: "frontend" },
        { id: "nextjs", name: "Next.js", category: "frontend" },
        { id: "tailwind", name: "Tailwind CSS", category: "frontend" },
      ],
    },
    {
      id: "creative",
      title: "Creative Development & 3D",
      skills: [
        { id: "threejs", name: "Three.js", category: "creative" },
        { id: "r3f", name: "React Three Fiber", category: "creative" },
        { id: "webgl", name: "WebGL", category: "creative" },
        { id: "gsap", name: "GSAP", category: "creative" },
        { id: "canvas", name: "Canvas 2D", category: "creative" },
        { id: "scroll-motion", name: "Scroll Motion", category: "creative" },
        { id: "interactive-ui", name: "Interactive UI", category: "creative" },
      ],
    },
    {
      id: "tools",
      title: "AI, Automation & Tools",
      skills: [
        { id: "n8n", name: "n8n Automation", category: "tools" },
        { id: "rest-apis", name: "REST APIs", category: "tools" },
        { id: "supabase", name: "Supabase", category: "tools" },
        { id: "git", name: "Git", category: "tools" },
        { id: "github", name: "GitHub", category: "tools" },
        { id: "vscode", name: "VS Code", category: "tools" },
        { id: "vercel", name: "Vercel", category: "tools" },
      ],
    },
    {
      id: "programming",
      title: "Core Languages",
      skills: [
        { id: "c", name: "C", category: "programming" },
        { id: "cpp", name: "C++", category: "programming" },
        { id: "java", name: "Java", category: "programming" },
        { id: "python", name: "Python", category: "programming" },
        { id: "javascript-lang", name: "JavaScript", category: "programming" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Databases",
      skills: [
        { id: "nodejs", name: "Node.js", category: "backend" },
        { id: "sql", name: "SQL", category: "backend" },
        { id: "mysql", name: "MySQL", category: "backend" },
        { id: "mongodb", name: "MongoDB", category: "backend" },
      ],
    },
  ],

  projects: [
    {
      id: "spartan",
      slug: "spartan-ai-automation",
      title: "SPARTAN",
      role: "Project Creator & Developer",
      status: "In Development",
      summary:
        "An AI automation project designed to explore multi-step task execution, webhooks, and modern control interfaces.",
      description:
        "An independent exploration into automated task orchestration and intelligent workflows. SPARTAN connects modern reactive web interfaces with n8n execution pipelines and Supabase for structured data management.",
      category: "AI Automation Platform",
      technologies: ["Next.js", "React", "TypeScript", "n8n", "Supabase", "REST APIs"],
      featured: true,
      implementedFeatures: [
        "Next.js & TypeScript control interface",
        "n8n webhook triggers and workflow endpoints",
        "Supabase database schema & persistence",
        "Responsive dark-mode interface design",
      ],
      plannedFeatures: [
        "Multi-agent task orchestration",
        "Autonomous error-recovery logic",
        "Dynamic third-party API connector library",
      ],
    },
    {
      id: "ridebridge",
      slug: "ridebridge",
      title: "RideBridge",
      role: "Frontend & UI Developer",
      status: "Prototype",
      summary:
        "A carpooling and shared mobility interface concept designed for accessible route coordination and commuter sharing.",
      description:
        "A product interface prototype designed to test clean user flows for shared transportation, focusing on responsive trip exploration, route coordination cards, and mobile-friendly booking steps.",
      category: "Carpooling & Mobility",
      technologies: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design"],
      featured: true,
      implementedFeatures: [
        "Responsive vehicle & route search UI",
        "Card-based trip listings and route cards",
        "Interactive booking preview flows",
        "Mobile-optimized layout and accessibility",
      ],
      plannedFeatures: [
        "Live GPS driver tracking",
        "Backend authentication & user profiles",
        "Real-time matching engine",
        "Secure payment processing",
      ],
    },
    {
      id: "medi-4-u",
      slug: "medi-4-u",
      title: "Medi-4-U",
      role: "Developer & UI Designer",
      status: "Functional Prototype",
      summary:
        "A medicine donation and redistribution platform connecting individuals with unused supplies to non-profit organizations.",
      description:
        "A social-good web prototype created to facilitate unused medicine donations. Provides structured forms for donors, browsable medicine categories for recipients, and direct contact coordination for non-profits.",
      category: "Healthcare & Donation Platform",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs"],
      featured: true,
      implementedFeatures: [
        "Donation submission and medicine listing form",
        "Categorized medicine search & browsing UI",
        "Non-profit request directory",
        "Direct contact coordination channels",
      ],
      plannedFeatures: [
        "Prescription verification workflow",
        "Expiry-date tracking alerts",
        "Geolocation-based NGO matching",
      ],
    },
    {
      id: "creative-web-experiments",
      slug: "creative-web-experiments",
      title: "Creative Web Experiments",
      role: "Creative Developer",
      status: "Active Lab",
      summary:
        "An ongoing playground of real-time 3D scenes, WebGL shaders, particle physics, and motion experiments.",
      description:
        "A creative development sandbox dedicated to exploring modern browser capabilities, from Three.js crystalline models and interactive particle simulations to custom spring-based cursor followers.",
      category: "Creative Lab & 3D",
      technologies: ["Three.js", "WebGL", "HTML5 Canvas", "GSAP", "TypeScript"],
      featured: true,
      implementedFeatures: [
        "Interactive 3D crystalline core with mouse parallax",
        "2D canvas particle gravity simulation",
        "Dual-layer physics spring cursor follower",
        "Smooth kinetic typography animations",
      ],
      plannedFeatures: [
        "Custom GLSL vertex & fragment shaders",
        "Audio-reactive visualizer sandbox",
        "Physics-based collision playground",
      ],
    },
  ],

  experience: [
    {
      id: "academic-cs",
      role: "Computer Science Student",
      company: "B.Tech in Computer Science & Engineering",
      period: "Academic Foundation",
      current: true,
      highlights: [
        "Pursuing Bachelor of Technology in Computer Science, building deep computational and algorithmic problem-solving rigor.",
        "Strengthening core foundations across Data Structures & Algorithms, Database Management Systems (DBMS), and Operating Systems.",
        "Implementing problem-solving architectures and algorithmic logic in C, C++, Java, and Python.",
        "Translating foundational computer science theory directly into software and modern web architectures.",
      ],
      technologies: ["C", "C++", "Java", "Python", "Data Structures", "Algorithms", "SQL", "DBMS"],
    },
    {
      id: "project-builder",
      role: "Project Creator & Developer",
      company: "Independent Software & Automation Projects",
      period: "Project Development",
      current: true,
      highlights: [
        "Building practical prototypes including SPARTAN (AI workflow platform) and RideBridge (carpooling UI concept).",
        "Developing responsive, type-safe web interfaces in Next.js, React, and TypeScript with Supabase database integrations.",
        "Designing multi-step automation flows and webhook integrations using n8n and external REST APIs.",
        "Focusing on clean component structure, accessibility, and intuitive user experiences.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "n8n", "Supabase", "REST APIs", "Tailwind CSS"],
    },
    {
      id: "creative-frontend",
      role: "Creative Frontend Developer",
      company: "Interactive Web & 3D Experiments",
      period: "Creative Exploration",
      current: false,
      highlights: [
        "Exploring real-time 3D web graphics, procedural geometry, and WebGL rendering with Three.js.",
        "Choreographing fluid scroll-driven motions and interactive micro-interactions using GSAP and CSS animations.",
        "Building responsive layouts tested across mobile, tablet, and desktop viewports with dark-mode aesthetic.",
        "Practicing version control with Git and modern deployment on Vercel.",
      ],
      technologies: ["Three.js", "WebGL", "GSAP", "React", "TypeScript", "Git", "Vercel"],
    },
  ],

  education: [
    {
      id: "btech-cs",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Undergraduate Engineering Program",
      period: "Undergraduate Program",
      highlights: [
        "Core coursework in Operating Systems, Algorithms, Computer Networks, and Object-Oriented Programming.",
        "Continuous personal R&D in web technologies, UI/UX interaction design, and creative coding.",
      ],
    },
  ],

  achievements: [
    {
      id: "academic-projects",
      title: "Independent Development & Prototype Showcase",
      issuer: "Independent Projects",
      description:
        "Developed functional prototypes exploring modern frontend engineering, 3D web visuals, and AI workflow automation.",
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
