/**
 * Digital Core Central Configuration
 * 
 * Defines all visual parameters, section targets, lighting, particles,
 * orbital trails, and physics damping for the signature 3D Digital Core.
 * Modifiable from this single file.
 */

export interface SectionCoreTarget {
  id: string;
  position: [number, number, number]; // [x, y, z] in Three.js world units
  scale: number; // Scale multiplier (1.0 = baseline)
  rotationSpeedMultiplier: number; // Multiplier on continuous idle rotation
  emissiveIntensity: number; // Inner purple core glow
  distortion: number; // Organic/crystalline displacement intensity
  trailOpacityMultiplier?: number; // Orbital trail visibility
}

export interface DigitalCoreConfig {
  // Aesthetics & Palette
  glassColor: number;
  glassRoughness: number;
  glassTransmission: number;
  glassThickness: number;
  glassIor: number;
  glassOpacity: number;

  coreColor: number;
  coreEmissive: number;
  coreMetalness: number;
  coreRoughness: number;

  trailColor: number;
  trailThickness: number;
  trailBaseOpacity: number;

  particleColor: number;
  particleCount: number;
  particleSize: number;
  particleOpacity: number;

  // Responsive Scaling
  desktopScale: number;
  tabletScale: number;
  mobileScale: number;

  // Motion & Physics
  scrollDamping: number; // Lerp factor for natural physical settling (0.05 - 0.1)
  baseRotationSpeed: { x: number; y: number; z: number };
  scrollVelocityInfluence: number;
  velocityDamping: number;

  // Mouse Parallax (Desktop)
  mouseTiltFactor: number;
  mouseMoveFactor: number;

  // Section Targets across the page scroll journey
  sections: SectionCoreTarget[];

  // Mobile Safe Zone Coordinates
  mobilePositions: Record<string, [number, number, number]>;
}

export const digitalCoreConfig: DigitalCoreConfig = {
  // Outer Refractive Glass Shell
  glassColor: 0xf8f6ff, // Pure crystalline tint
  glassRoughness: 0.06, // Polished liquid surface
  glassTransmission: 0.92, // High optical transmission
  glassThickness: 1.35,
  glassIor: 1.54, // Optical glass refractive index
  glassOpacity: 0.95,

  // Inner Luminous Purple Core
  coreColor: 0x150b28, // Deep obsidian violet
  coreEmissive: 0x7c3aed, // Vivid violet glow
  coreMetalness: 0.92, // Metallic faceted reflection
  coreRoughness: 0.16,

  // 1–2 Ultra-Thin Orbital Light Trails
  trailColor: 0xc084fc, // Soft violet luminous curve
  trailThickness: 0.007, // Ultra thin curve
  trailBaseOpacity: 0.65,

  // Localized Floating Dust Particles (Disabled)
  particleColor: 0xddd6fe,
  particleCount: 0,
  particleSize: 0.038,
  particleOpacity: 0.0,

  // Responsive Scaling
  desktopScale: 1.0,
  tabletScale: 0.82,
  mobileScale: 0.58,

  // Physics & Animation
  scrollDamping: 0.06, // Smooth physical easing
  baseRotationSpeed: {
    x: 0.16,
    y: 0.28,
    z: 0.09,
  },
  scrollVelocityInfluence: 0.00045,
  velocityDamping: 0.93,

  // Mouse Parallax (Disabled - ball purely scroll-driven)
  mouseTiltFactor: 0.0,
  mouseMoveFactor: 0.0,

  // Section Targets: Continuous, intentional travel through the portfolio
  sections: [
    {
      id: "hero",
      position: [1.75, 0.22, 0.0], // Right side of the hero, non-blocking
      scale: 0.95,
      rotationSpeedMultiplier: 0.85,
      emissiveIntensity: 0.95,
      distortion: 0.04,
    },
    {
      id: "about",
      position: [-1.8, -0.15, 0.0], // Settled on left side for About section
      scale: 0.95,
      rotationSpeedMultiplier: 0.9,
      emissiveIntensity: 1.15,
      distortion: 0.08, // Slight organic deformation
    },
    {
      id: "service",
      position: [1.85, 0.05, 0.0], // Moves toward right side alongside capability deck
      scale: 0.92,
      rotationSpeedMultiplier: 1.3,
      emissiveIntensity: 1.1,
      distortion: 0.06,
      trailOpacityMultiplier: 1.25, // Orbital trails become slightly more visible
    },
    {
      id: "skills",
      position: [-1.75, 0.22, 0.0], // Left side, balancing the skills matrix
      scale: 0.88,
      rotationSpeedMultiplier: 1.0,
      emissiveIntensity: 1.0,
      distortion: 0.05,
    },
    {
      id: "work",
      position: [1.8, -0.22, 0.0], // Right side for featured projects
      scale: 0.92,
      rotationSpeedMultiplier: 1.15,
      emissiveIntensity: 1.2,
      distortion: 0.1, // Core becomes slightly more crystalline
    },
    {
      id: "experience",
      position: [-1.7, 0.12, 0.0], // Left side of chronological timeline
      scale: 0.86,
      rotationSpeedMultiplier: 0.95,
      emissiveIntensity: 1.0,
      distortion: 0.06,
    },
    {
      id: "contact",
      position: [1.65, -0.05, 0.1], // Right side, balancing the left-aligned message form
      scale: 1.05,
      rotationSpeedMultiplier: 0.75,
      emissiveIntensity: 0.9,
      distortion: 0.03, // Returns to calm glass state
    },
  ],

  // Mobile Safe Zone Coordinates
  mobilePositions: {
    hero: [-1.4, -3.2, -0.3], // Off-screen down-left, hidden on mobile hero too
    about: [-0.85, 1.2, -0.3],
    service: [0.95, 1.1, -0.3],
    skills: [-0.95, 1.1, -0.3],
    work: [0.95, 1.2, -0.3],
    experience: [-0.95, 1.1, -0.3],
    contact: [0.0, -1.2, 0.0],
  },
};
