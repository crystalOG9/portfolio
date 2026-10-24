import type { CapabilityCardData } from "./types";

/**
 * Capability Cards Configuration Data
 *
 * 5 Plain and Attractive capability cards matching the reference screenshot design:
 * - Widescreen spacious layout
 * - Distinct, rich, plain attractive gradient backgrounds
 * - Top-left pill tag and horizontal accent line
 * - Top-right large translucent number with glassmorphic technology icon badge
 * - Prominent title, readable description, and technology skill badges
 * - Bottom row with white circular arrow button and "WHAT I BUILD" / "WHAT'S INCLUDED"
 */
export const capabilityCardsData: CapabilityCardData[] = [
  {
    id: "capability-01",
    number: "01 / 05",
    rawNumber: "01",
    category: "CAPABILITY 01 / 05",
    title: "Web Applications",
    description:
      "Production-grade Next.js & React apps that are fast, accessible, SEO-friendly and built to scale.",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
    included: [
      "Modern web applications",
      "Responsive websites and interfaces",
      "Interactive dashboards and platforms",
      "Scalable React / Next.js experiences",
    ],
    cta: {
      label: "Start this project",
      href: "#projects",
    },
    iconType: "react",
    theme: {
      gradientBg: "linear-gradient(135deg, #250e2c 0%, #15061b 100%)",
      cardBorder: "rgba(236, 72, 153, 0.18)",
      accentColor: "#e879f9",
      badgeBg: "rgba(255, 255, 255, 0.06)",
      badgeBorder: "rgba(255, 255, 255, 0.12)",
      badgeText: "rgba(255, 255, 255, 0.85)",
      numberColor: "rgba(255, 255, 255, 0.085)",
      iconColor: "#38bdf8",
    },
  },
  {
    id: "capability-02",
    number: "02 / 05",
    rawNumber: "02",
    category: "CAPABILITY 02 / 05",
    title: "3D & Creative Development",
    description:
      "Interactive 3D spaces, WebGL shaders, and scroll-driven motion turning ordinary interfaces into immersive digital experiences.",
    technologies: [
      "Three.js",
      "React Three Fiber",
      "WebGL",
      "GSAP",
      "JavaScript",
    ],
    included: [
      "Interactive 3D experiences",
      "WebGL experiments",
      "Scroll-driven visual experiences",
      "Interactive motion systems",
    ],
    cta: {
      label: "Start this project",
      href: "#projects",
    },
    iconType: "3d",
    theme: {
      gradientBg: "linear-gradient(135deg, #0d2822 0%, #051714 100%)",
      cardBorder: "rgba(16, 185, 129, 0.18)",
      accentColor: "#34d399",
      badgeBg: "rgba(255, 255, 255, 0.06)",
      badgeBorder: "rgba(255, 255, 255, 0.12)",
      badgeText: "rgba(255, 255, 255, 0.85)",
      numberColor: "rgba(255, 255, 255, 0.085)",
      iconColor: "#38bdf8",
    },
  },
  {
    id: "capability-03",
    number: "03 / 05",
    rawNumber: "03",
    category: "CAPABILITY 03 / 05",
    title: "AI & Automation",
    description:
      "AI-powered pipelines and autonomous workflow concepts that connect software, data and repetitive business processes.",
    technologies: [
      "AI",
      "n8n",
      "APIs",
      "Supabase",
      "JavaScript",
      "Automation workflows",
    ],
    included: [
      "AI-powered workflows",
      "Business process automation",
      "API-connected systems",
      "Data and task automation",
    ],
    cta: {
      label: "Start this project",
      href: "#projects",
    },
    iconType: "ai",
    theme: {
      gradientBg: "linear-gradient(135deg, #1d0f2f 0%, #0f061d 100%)",
      cardBorder: "rgba(168, 85, 247, 0.18)",
      accentColor: "#c084fc",
      badgeBg: "rgba(255, 255, 255, 0.06)",
      badgeBorder: "rgba(255, 255, 255, 0.12)",
      badgeText: "rgba(255, 255, 255, 0.85)",
      numberColor: "rgba(255, 255, 255, 0.085)",
      iconColor: "#38bdf8",
    },
  },
  {
    id: "capability-04",
    number: "04 / 05",
    rawNumber: "04",
    category: "CAPABILITY 04 / 05",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile apps with React Native + Expo, polished UI and native-grade performance.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Mobile UI",
      "iOS & Android",
      "State Management",
    ],
    included: [
      "iOS & Android from one codebase",
      "Push notifications & deep links",
      "Offline-first patterns",
      "Native device APIs & gestures",
    ],
    cta: {
      label: "Start this project",
      href: "#projects",
    },
    iconType: "mobile",
    theme: {
      gradientBg: "linear-gradient(135deg, #2a0e20 0%, #170612 100%)",
      cardBorder: "rgba(244, 63, 94, 0.18)",
      accentColor: "#fb7185",
      badgeBg: "rgba(255, 255, 255, 0.06)",
      badgeBorder: "rgba(255, 255, 255, 0.12)",
      badgeText: "rgba(255, 255, 255, 0.85)",
      numberColor: "rgba(255, 255, 255, 0.085)",
      iconColor: "#38bdf8",
    },
  },
  {
    id: "capability-05",
    number: "05 / 05",
    rawNumber: "05",
    category: "CAPABILITY 05 / 05",
    title: "APIs & Backends",
    description:
      "Robust Node.js / Express APIs with SQL or MongoDB, cron jobs, and clean integration patterns.",
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
    included: [
      "REST API design & docs",
      "Database modelling (SQL & NoSQL)",
      "Background jobs & webhooks",
      "Authentication, roles & security",
    ],
    cta: {
      label: "Start this project",
      href: "#contact",
    },
    iconType: "backend",
    theme: {
      gradientBg: "linear-gradient(135deg, #241408 0%, #130a04 100%)",
      cardBorder: "rgba(245, 158, 11, 0.18)",
      accentColor: "#f59e0b",
      badgeBg: "rgba(255, 255, 255, 0.06)",
      badgeBorder: "rgba(255, 255, 255, 0.12)",
      badgeText: "rgba(255, 255, 255, 0.85)",
      numberColor: "rgba(255, 255, 255, 0.085)",
      iconColor: "#f7df1e",
    },
  },
];
