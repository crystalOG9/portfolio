import type { CapabilityCardData } from "./types";

/**
 * Capability Cards Configuration Data
 *
 * 3 Prioritized Capability Groups:
 * A. Frontend Development - Modern websites, responsive interfaces, reusable components, interactive web apps
 * B. Creative Development - 3D web experiences, animation, motion design, interactive visual experiments
 * C. AI & Automation - Workflow automation, API integrations, AI-assisted solutions for repetitive processes
 *
 * All claims are grounded and backed by genuine projects.
 */
export const capabilityCardsData: CapabilityCardData[] = [
  {
    id: "capability-01",
    number: "01 / 03",
    rawNumber: "01",
    category: "CAPABILITY 01 / 03",
    title: "Frontend Development",
    description:
      "Modern websites, responsive interfaces, reusable components, and interactive web applications.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    included: [
      "Modern websites & responsive web interfaces",
      "Reusable component-driven UI architecture",
      "Interactive web applications & clean state flows",
      "Performant, accessible frontend engineering",
    ],
    cta: {
      label: "View Projects",
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
    number: "02 / 03",
    rawNumber: "02",
    category: "CAPABILITY 02 / 03",
    title: "Creative Development",
    description:
      "3D web experiences, animation, motion design, and interactive visual experiments.",
    technologies: [
      "Three.js",
      "React Three Fiber",
      "WebGL",
      "GSAP",
      "CSS Animations",
      "Canvas 2D",
    ],
    included: [
      "Interactive 3D scenes & web graphics",
      "Fluid scroll-driven animations & micro-interactions",
      "WebGL experiments & canvas particle systems",
      "Creative visual interfaces & transitions",
    ],
    cta: {
      label: "Explore Work",
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
      iconColor: "#34d399",
    },
  },
  {
    id: "capability-03",
    number: "03 / 03",
    rawNumber: "03",
    category: "CAPABILITY 03 / 03",
    title: "AI & Automation",
    description:
      "Workflow automation, API integrations, and AI-assisted solutions for repetitive business processes.",
    technologies: [
      "n8n",
      "REST APIs",
      "Python",
      "Supabase",
      "JavaScript",
      "Webhooks",
    ],
    included: [
      "Multi-step automated workflows with n8n",
      "REST API connectivity & webhook event triggers",
      "AI-assisted tools to streamline repetitive tasks",
      "Structured data integration & practical pipelines",
    ],
    cta: {
      label: "Get In Touch",
      href: "#contact",
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
      iconColor: "#c084fc",
    },
  },
];
