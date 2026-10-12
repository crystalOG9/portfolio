/**
 * Portfolio Data & Content Type Definitions
 * Phase 02 - Personal Information, Visual Identity & Initial Motion
 *
 * Defines the complete structure for centralized portfolio configuration,
 * ensuring all content is strictly decoupled from presentation components.
 */

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  email?: string;
  [key: string]: string | undefined;
}

export interface PersonalInfo {
  name: string;
  displayName: string;
  role: string;
  currentRole: string;
  primaryIdentity: string;
  tagline: string;
  bio: string[];
  interests: string[];
  statusTag?: string;
  heroBadge?: string;
  heroGreeting?: string;
  heroName?: string;
  heroRole?: string;
  heroActionWord?: string;
  heroRotatingWords?: string[];
  heroEndingText?: string;
  heroStatement?: string;
  location: string;
  email: string;
  availableForWork: boolean;
  resumeUrl?: string;
  socials: SocialLinks;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export type SkillCategoryType =
  | "programming"
  | "frontend"
  | "backend"
  | "creative"
  | "tools"
  | "languages"
  | "creative-3d"
  | "tools-devops"
  | "other";

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategoryType;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
}

export interface SkillCategoryGroup {
  id: SkillCategoryType;
  title: string;
  skills: SkillItem[];
}

export type ProjectCategory =
  | "full-stack"
  | "frontend"
  | "creative-3d"
  | "mobile"
  | "experiment"
  | "AI Automation Platform"
  | "Carpooling & Mobility"
  | "Healthcare & Social Platform"
  | "Creative Lab & 3D"
  | string;

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  year?: number | string;
  technologies: string[];
  featured: boolean;
  image?: string;
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  role?: string;
  status?: "Prototype" | "In Development" | "Functional" | "Functional Prototype" | "Active Lab";
  implementedFeatures?: string[];
  plannedFeatures?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  highlights: string[];
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  highlights?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description?: string;
  url?: string;
}

export interface LabExperimentItem {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  date?: string;
  highlight?: boolean;
}

export interface FeatureFlags {
  ENABLE_3D: boolean;
  ENABLE_CUSTOM_CURSOR: boolean;
  ENABLE_SMOOTH_SCROLL: boolean;
  ENABLE_PAGE_TRANSITIONS: boolean;
  ENABLE_BACKGROUND_EFFECTS: boolean;
  REDUCED_MOTION_MODE: boolean;
}

export interface SeoConfig {
  title: string;
  description: string;
  url: string;
  siteName: string;
  ogImage?: string;
  twitterHandle?: string;
  locale: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  navigation: NavItem[];
  skills: SkillCategoryGroup[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  achievements: AchievementItem[];
  experiments: LabExperimentItem[];
  features: FeatureFlags;
  seo: SeoConfig;
}
