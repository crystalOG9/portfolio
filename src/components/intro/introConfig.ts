/**
 * Intro Opening Sequence Configuration
 * 
 * Centralized configuration controlling the initial opening sequence.
 * Easily customize, enable, or disable the entire sequence from this file.
 */

export interface IntroAnimationConfig {
  /** Master toggle to enable/disable the intro animation */
  enabled: boolean;
  /** Target duration in seconds (recommended: 1.5s - 2.2s) */
  duration: number;
  /** Primary accent color for the horizontal line and frame */
  accentColor: string;
  /** Wordmark logo text displayed in the center */
  logoText: string;
  /** Whether to play the animation only once per browser session */
  playOncePerSession: boolean;
  /** Display the thin horizontal line expanding from center */
  showLine: boolean;
  /** Display the rectangular frame expansion */
  showFrame: boolean;
  /** Display the subtle light sheen pass across the text */
  showLightPass: boolean;
  /** Seamlessly dock and blend the top frame edge with the header navbar */
  blendWithHeader: boolean;
}

export const defaultIntroConfig: IntroAnimationConfig = {
  enabled: true,
  duration: 2.0,
  accentColor: "var(--accent-primary, #6366f1)",
  logoText: "PIYUSH",
  playOncePerSession: true,
  showLine: true,
  showFrame: true,
  showLightPass: true,
  blendWithHeader: true,
};
