import React from "react";
import type { CardIconType } from "./types";

interface CardIconBadgeProps {
  iconType: CardIconType;
  iconColor: string;
}

/**
 * Glassmorphic Icon Badge
 *
 * Floating glassmorphic rounded-square badge positioned over the large number,
 * matching the visual reference provided by the user.
 */
export function CardIconBadge({ iconType, iconColor }: CardIconBadgeProps) {
  const renderIcon = () => {
    switch (iconType) {
      case "react":
        return (
          // React Atom Icon
          <svg
            width="28"
            height="28"
            viewBox="0 0 115 102"
            fill="none"
            aria-hidden="true"
          >
            <ellipse
              cx="57.5"
              cy="51"
              rx="11"
              ry="11"
              fill={iconColor}
            />
            <ellipse
              cx="57.5"
              cy="51"
              rx="48"
              ry="18.5"
              stroke={iconColor}
              strokeWidth="5"
              fill="none"
            />
            <ellipse
              cx="57.5"
              cy="51"
              rx="48"
              ry="18.5"
              transform="rotate(60 57.5 51)"
              stroke={iconColor}
              strokeWidth="5"
              fill="none"
            />
            <ellipse
              cx="57.5"
              cy="51"
              rx="48"
              ry="18.5"
              transform="rotate(120 57.5 51)"
              stroke={iconColor}
              strokeWidth="5"
              fill="none"
            />
          </svg>
        );

      case "3d":
        return (
          // 3D Isometric Cube
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        );

      case "ai":
        return (
          // Automation / Workflow Nodes
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="12" r="3" />
            <line x1="8.5" y1="7.5" x2="15.5" y2="10.5" />
            <line x1="8.5" y1="16.5" x2="15.5" y2="13.5" />
          </svg>
        );

      case "uiux":
        return (
          // Interface Layers
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        );

      case "lab":
        return (
          // Creative Lab Flask / Sparkle
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M10 2v7.31L4.62 17.5A2 2 0 0 0 6.34 21h11.32a2 2 0 0 0 1.72-3.5L14 9.31V2" />
            <line x1="8.5" y1="2" x2="15.5" y2="2" />
            <line x1="7" y1="15" x2="17" y2="15" />
          </svg>
        );

      case "mobile":
        return (
          // Mobile Smartphone
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        );

      case "backend":
        return (
          // JavaScript JS Badge as shown in reference screenshot
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "6px",
              backgroundColor: "#f7df1e",
              color: "#000000",
              fontWeight: 800,
              fontSize: "14px",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-mono, monospace)",
              letterSpacing: "-0.5px",
            }}
          >
            JS
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        width: "64px",
        height: "64px",
        borderRadius: "18px",
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.14)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      {renderIcon()}
    </div>
  );
}
