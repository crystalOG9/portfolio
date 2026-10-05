/**
 * Theme & Design Token Type Definitions
 * Phase 01 - Foundation & Architecture
 */

export type BreakpointKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type Breakpoints = Record<BreakpointKey, string>;

export interface ColorTokens {
  bgPrimary: string;
  bgSecondary: string;
  bgSurface: string;
  bgElevated: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  accentMuted: string;
  borderSubtle: string;
  borderDefault: string;
  borderStrong: string;
  statusSuccess: string;
  statusWarning: string;
  statusError: string;
}

export interface TypographyTokens {
  fontSans: string;
  fontMono: string;
  fontDisplay: string;
}

export interface MotionTokens {
  durationFast: string;
  durationNormal: string;
  durationSlow: string;
  durationDeliberate: string;
  easeOut: string;
  easeInOut: string;
  easeSpring: string;
}

export interface DesignTokens {
  breakpoints: Breakpoints;
  colors: ColorTokens;
  typography: TypographyTokens;
  motion: MotionTokens;
}
