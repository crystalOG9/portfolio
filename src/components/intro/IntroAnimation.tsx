"use client";

import React, { useState, useEffect } from "react";
import { useReducedMotion, useMounted } from "@/hooks";
import { defaultIntroConfig, type IntroAnimationConfig } from "./introConfig";
import styles from "./introAnimation.module.css";

export interface IntroAnimationProps {
  config?: Partial<IntroAnimationConfig>;
}

type IntroStage =
  | "initial"    // 0.00s: Black screen + subtle grain
  | "line"       // 0.20s: Horizontal line draws outward from center
  | "text"       // 0.45s: PIYUSH wordmark appears and settles
  | "lightpass"  // 0.95s: Subtle sheen sweeps across text
  | "frame"      // 1.20s: Rectangular frame surrounds wordmark
  | "reveal"     // 1.45s: Frame expands, docks with header navbar, hero reveals
  | "done";      // 1.95s+: Cleanly unmounted from DOM

/**
 * Premium Portfolio Opening Sequence
 * 
 * Cinematic opening sequence inspired by high-end creative developer studios:
 * - 0.00s: Near-black atmospheric screen
 * - 0.20s: Thin accent line draws from center
 * - 0.45s: "PIYUSH" wordmark settles with tracked typography
 * - 0.95s: Subtle diagonal light sheen pass
 * - 1.20s: Horizontal line expands into a minimal frame
 * - 1.45s: Frame expands outward and top edge blends into the header navbar
 * - 1.95s: Overlay cleanly unmounts from DOM with zero layout shift
 */
export function IntroAnimation({ config: userConfig }: IntroAnimationProps) {
  const config = { ...defaultIntroConfig, ...userConfig };
  const prefersReduced = useReducedMotion();
  const mounted = useMounted();
  const [stage, setStage] = useState<IntroStage>("initial");

  useEffect(() => {
    // 1. If disabled, do not render
    if (!config.enabled) {
      return;
    }

    // 2. Check session storage if playOncePerSession is true
    if (config.playOncePerSession && typeof window !== "undefined") {
      try {
        const hasPlayed = sessionStorage.getItem("portfolio_intro_played");
        if (hasPlayed) {
          return;
        }
      } catch {
        // Fallback for private browsing restrictions
      }
    }

    // 3. Fast path for prefers-reduced-motion
    if (prefersReduced) {
      const quickTimer = setTimeout(() => {
        setStage("done");
        try {
          sessionStorage.setItem("portfolio_intro_played", "true");
        } catch {}
      }, 350);
      return () => clearTimeout(quickTimer);
    }

    // 4. Time-sequenced choreography (Target total duration ~2.0s)
    const timers: NodeJS.Timeout[] = [];

    // 0.20s: Horizontal line begins drawing outward
    timers.push(
      setTimeout(() => {
        setStage("line");
      }, 200)
    );

    // 0.45s: PIYUSH wordmark appears
    timers.push(
      setTimeout(() => {
        setStage("text");
      }, 450)
    );

    // 0.95s: Light sheen pass sweeps across text
    if (config.showLightPass) {
      timers.push(
        setTimeout(() => {
          setStage("lightpass");
        }, 950)
      );
    }

    // 1.20s: Minimal rectangular frame forms
    if (config.showFrame) {
      timers.push(
        setTimeout(() => {
          setStage("frame");
        }, 1200)
      );
    }

    // 1.48s: Frame expands outward and blends with the header section
    timers.push(
      setTimeout(() => {
        setStage("reveal");
      }, 1480)
    );

    // 1.98s: Animation complete, unmount cleanly from DOM
    timers.push(
      setTimeout(() => {
        setStage("done");
        try {
          sessionStorage.setItem("portfolio_intro_played", "true");
        } catch {}
      }, 1980)
    );

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [config.enabled, config.playOncePerSession, config.showFrame, config.showLightPass, prefersReduced]);

  if (!mounted || stage === "done") {
    return null;
  }

  const isLineActive = stage !== "initial";
  const isTextVisible = stage === "text" || stage === "lightpass" || stage === "frame";
  const isTextDocking = stage === "reveal";
  const isLightPassActive = stage === "lightpass" || stage === "frame";
  const isFrameFormed = stage === "frame";
  const isFrameExpanding = stage === "reveal";
  const isHeaderDocking = config.blendWithHeader && stage === "reveal";
  const isExiting = stage === "reveal";

  return (
    <div
      className={`${styles.overlay} ${isExiting ? styles.overlayExiting : ""}`}
      aria-hidden="true"
    >
      {/* Subtle atmospheric vignette and fine grain */}
      <div className={styles.vignette} />
      <div className={styles.grain} />

      <div className={styles.centerStage}>
        {/* State 2: Thin Horizontal Accent Line */}
        {config.showLine && (
          <div
            className={`${styles.horizontalLine} ${
              isLineActive ? styles.horizontalLineActive : ""
            }`}
          />
        )}

        {/* State 5: Minimal Rectangular Frame */}
        {config.showFrame && (
          <div
            className={`${styles.frame} ${
              isFrameFormed ? styles.frameFormed : ""
            } ${isFrameExpanding ? styles.frameExpanding : ""}`}
          />
        )}

        {/* State 3 & 4: PIYUSH Wordmark with Light Sheen */}
        <div className={styles.wordmarkWrapper}>
          <span
            className={`${styles.wordmark} ${
              isTextVisible ? styles.wordmarkVisible : ""
            } ${isTextDocking ? styles.wordmarkDocking : ""}`}
          >
            {config.logoText}
          </span>

          {config.showLightPass && (
            <div
              className={`${styles.lightPass} ${
                isLightPassActive ? styles.lightPassActive : ""
              }`}
            />
          )}
        </div>

        {/* State 6: Blend with Header Navbar ("It looks sik") */}
        {config.blendWithHeader && (
          <div
            className={`${styles.headerDockLine} ${
              isHeaderDocking ? styles.headerDockLineActive : ""
            }`}
          />
        )}
      </div>
    </div>
  );
}
