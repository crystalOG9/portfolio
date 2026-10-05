export type CardIconType =
  | "react"
  | "3d"
  | "ai"
  | "uiux"
  | "lab"
  | "mobile"
  | "backend";

export interface CapabilityCTA {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface CardColorTheme {
  gradientBg: string; // Rich plain attractive gradient background
  cardBorder: string; // Subtle matching border
  accentColor: string; // Accent color for tag and highlights
  badgeBg: string; // Technology tag pill background
  badgeBorder: string; // Technology tag border
  badgeText: string; // Technology tag text
  numberColor: string; // Large background number color
  iconColor: string; // Color of the icon inside the glass badge
}

export interface CapabilityCardData {
  id: string;
  number: string; // e.g. "01 / 05"
  rawNumber: string; // e.g. "01"
  category: string; // e.g. "CAPABILITY 01 / 05"
  title: string;
  description: string;
  technologies: string[];
  included: string[]; // "What I Build" / "What's Included" list
  cta: CapabilityCTA;
  iconType: CardIconType;
  theme: CardColorTheme;
}
