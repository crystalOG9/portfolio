/**
 * Persistent 3D Digital Core Configuration
 * 
 * Central configuration for the signature scroll-driven 3D object.
 * All positions, scales, rotation speeds, damping factors, and section-specific
 * behaviors are defined here for easy tuning.
 */

export interface SectionOrbTarget {
  id: string;
  position: [number, number, number]; // [x, y, z] in Three.js units (Desktop)
  scale: number; // Scale multiplier (1.0 = baseline)
  rotationSpeedMultiplier: number; // Multiplier on continuous idle rotation
  emissiveIntensity: number; // Core glow intensity
  coreRoughness?: number; // Core surface roughness
}

export interface OrbConfig {
  // Global Aesthetics
  glassColor: number;
  glassRoughness: number;
  glassTransmission: number;
  glassThickness: number;
  glassIor: number;
  glassOpacity: number;

  coreColor: number;
  coreEmissive: number;
  coreMetalness: number;

  ringColor: number;
  ringOpacity: number;

  // Responsive Scaling
  desktopScale: number;
  tabletScale: number;
  mobileScale: number;

  // Physics & Animation
  scrollDamping: number; // Damping lerp factor (0.05 - 0.12)
  baseRotationSpeed: { x: number; y: number; z: number };
  scrollVelocityInfluence: number; // Rotational kick on scroll
  velocityDamping: number; // Decay friction per frame

  // Mouse Interaction (Desktop)
  mouseTiltFactor: number;
  mouseMoveFactor: number;

  // Section Targets (Desktop world coordinates: visible area is approx x: [-2.4, 2.4], y: [-2.0, 2.0] at z=0)
  sections: SectionOrbTarget[];

  // Mobile Positions (Safe zones so it never covers mobile text/buttons)
  mobilePositions: Record<string, [number, number, number]>;
}

export const orbConfig: OrbConfig = {
  // Global Aesthetics: Elegant Digital Core (Glass + Chrome + Subtle Violet Core)
  glassColor: 0xf5f3ff,
  glassRoughness: 0.08,
  glassTransmission: 0.88,
  glassThickness: 1.25,
  glassIor: 1.52,
  glassOpacity: 0.92,

  coreColor: 0x8b5cf6, // Violet
  coreEmissive: 0x581c87, // Deep violet glow
  coreMetalness: 0.88,

  ringColor: 0xc4b5fd, // Light lavender
  ringOpacity: 0.55,

  // Responsive Scaling
  desktopScale: 1.0,
  tabletScale: 0.82,
  mobileScale: 0.62,

  // Physics & Animation
  scrollDamping: 0.065, // Silky smooth physical interpolation
  baseRotationSpeed: {
    x: 0.15,
    y: 0.28,
    z: 0.08,
  },
  scrollVelocityInfluence: 0.00045,
  velocityDamping: 0.93,

  // Mouse Interaction (Desktop only)
  mouseTiltFactor: 0.35,
  mouseMoveFactor: 0.18,

  // Section Targets (Ordered chronologically along page scroll)
  sections: [
    {
      id: "hero",
      position: [1.65, 0.35, 0.0], // Upper right area, alongside hero headline
      scale: 1.0,
      rotationSpeedMultiplier: 1.0,
      emissiveIntensity: 0.85,
    },
    {
      id: "about",
      position: [-1.75, -0.15, 0.0], // Left side, balancing the narrative card
      scale: 0.95,
      rotationSpeedMultiplier: 0.9,
      emissiveIntensity: 1.05, // Slightly brighter internal glow
    },
    {
      id: "service",
      position: [1.8, 0.1, 0.0], // Right side, hovering alongside the capability cards stack
      scale: 0.9,
      rotationSpeedMultiplier: 1.35, // Faster, energetic rotation
      emissiveIntensity: 0.95,
    },
    {
      id: "skills",
      position: [-1.7, 0.25, 0.0], // Left side, complementing skills filter matrix
      scale: 0.88,
      rotationSpeedMultiplier: 1.0,
      emissiveIntensity: 0.9,
    },
    {
      id: "work",
      position: [1.75, -0.25, 0.0], // Right side, alongside project showcase
      scale: 0.92,
      rotationSpeedMultiplier: 1.15,
      emissiveIntensity: 1.1,
    },
    {
      id: "experience",
      position: [-1.65, 0.15, 0.0], // Left side of chronological timeline
      scale: 0.86,
      rotationSpeedMultiplier: 0.9,
      emissiveIntensity: 0.85,
    },
    {
      id: "contact",
      position: [0.0, -0.65, 0.3], // Centered, resting gracefully above contact/footer
      scale: 1.05,
      rotationSpeedMultiplier: 0.75, // Calm resting state
      emissiveIntensity: 0.8,
    },
  ],

  // Mobile Safe Zone Coordinates (Kept in top/bottom right corners to avoid blocking text)
  mobilePositions: {
    hero: [0.95, 1.3, -0.4],
    about: [-0.95, 1.2, -0.4],
    service: [0.95, 1.1, -0.4],
    skills: [-0.95, 1.1, -0.4],
    work: [0.95, 1.2, -0.4],
    experience: [-0.95, 1.1, -0.4],
    contact: [0.0, -1.2, 0.0],
  },
};
