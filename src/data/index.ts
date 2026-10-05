/**
 * Data Access Layer
 * Phase 01 - Foundation & Architecture
 *
 * Provides a decoupled access interface for all portfolio data.
 * Sections and components query this layer instead of tightly coupling to static files.
 */

import { portfolioConfig } from "@/config";
import type {
  PersonalInfo,
  NavItem,
  SkillCategoryGroup,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  AchievementItem,
  LabExperimentItem,
  FeatureFlags,
} from "@/types";

export const getPersonalInfo = (): PersonalInfo => portfolioConfig.personal;

export const getNavigation = (): NavItem[] => portfolioConfig.navigation;

export const getSkills = (): SkillCategoryGroup[] => portfolioConfig.skills;

export const getProjects = (): ProjectItem[] => portfolioConfig.projects;

export const getFeaturedProjects = (): ProjectItem[] =>
  portfolioConfig.projects.filter((p) => p.featured);

export const getExperience = (): ExperienceItem[] => portfolioConfig.experience;

export const getEducation = (): EducationItem[] => portfolioConfig.education;

export const getAchievements = (): AchievementItem[] =>
  portfolioConfig.achievements;

export const getExperiments = (): LabExperimentItem[] =>
  portfolioConfig.experiments;

export const getFeatureFlags = (): FeatureFlags => portfolioConfig.features;
