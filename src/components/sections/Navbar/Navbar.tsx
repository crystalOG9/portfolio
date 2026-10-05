"use client";

import React, { useState, useEffect } from "react";
import { getNavigation, getPersonalInfo } from "@/data";

const SECTION_TO_NAV: Record<string, string> = {
  hero: "home",
  home: "home",
  about: "about",
  service: "service",
  services: "service",
  capabilities: "service",
  skills: "service",
  work: "work",
  projects: "work",
  experience: "work",
  contact: "contact",
};

/**
 * Navbar Component
 * Phase 04 & 14 - Global Layout, Navigation & Responsive Mobile Drawer
 *
 * Sticky, glassmorphic navigation bar with brand monogram, desktop navigation,
 * section-wise active highlight on scroll, and a fully accessible mobile drawer.
 */
export function Navbar() {
  const navItems = getNavigation();
  const personal = getPersonalInfo();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Top of page is always "home"
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      // 2. Near bottom of document is always "contact"
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 70
      ) {
        setActiveSection("contact");
        return;
      }

      // 3. Check section elements in order
      const sections = [
        "contact",
        "experience",
        "work",
        "skills",
        "service",
        "about",
        "hero",
      ];
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (const secId of sections) {
        const el = document.getElementById(secId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            const mappedNav = SECTION_TO_NAV[secId] || secId;
            setActiveSection(mappedNav);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="portfolio-navbar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: "var(--z-sticky, 200)",
        backgroundColor: "rgba(8, 8, 10, 0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border-subtle)",
        padding: "var(--space-4, 1rem) 0",
        width: "100%",
      }}
    >
      <div
        className="navbar-inner"
        style={{
          width: "100%",
          padding: "0 clamp(1.25rem, 3.5vw, 3rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Hard Left: Brand Wordmark "P I Y U S H" with increased size */}
        <div style={{ display: "flex", alignItems: "center", zIndex: 2 }}>
          <a
            href="#hero"
            aria-label="Home"
            className="brand-logo"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              letterSpacing: "0.24em",
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)",
              color: "#ffffff",
              fontFamily: "var(--font-display, var(--font-sans))",
              textTransform: "uppercase",
              userSelect: "none",
            }}
          >
            P I Y U S H
          </a>
        </div>

        {/* Mid of Header Section: Centered Navigation */}
        <nav
          aria-label="Main Navigation"
          className="desktop-nav"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <ul
            style={{
              display: "flex",
              gap: "var(--space-6, 1.5rem)",
              alignItems: "center",
              listStyle: "none",
              margin: 0,
              padding: "0.4rem 1.35rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} style={{ position: "relative" }}>
                  <a
                    href={item.href}
                    className="nav-link"
                    style={{
                      position: "relative",
                      color: isActive ? "#ffffff" : "var(--text-secondary)",
                      fontWeight: isActive ? 600 : 450,
                      fontSize: "var(--text-sm, 0.875rem)",
                      letterSpacing: "-0.01em",
                      transition: "color var(--transition-fast)",
                      display: "inline-block",
                      padding: "0.25rem 0.25rem",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-2px",
                          left: 0,
                          right: 0,
                          height: "2px",
                          borderRadius: "2px",
                          background: "var(--accent-gradient)",
                          boxShadow: "0 0 10px var(--accent-primary)",
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hard Right: Action CTA & Mobile Menu Toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3, 0.75rem)",
            zIndex: 2,
          }}
        >
          <a
            href="#contact"
            className="header-cta-button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 1.15rem",
              borderRadius: "9999px",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#ffffff",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              textDecoration: "none",
              transition: "all 0.2s ease",
              backdropFilter: "blur(8px)",
            }}
          >
            <span>Let&apos;s Talk</span>
            <span style={{ color: "#38bdf8" }}>→</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              color: "var(--text-primary)",
              padding: "0.5rem",
              fontSize: "1.25rem",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="mobile-nav-drawer"
          style={{
            padding: "var(--space-4, 1rem) clamp(1.25rem, 3.5vw, 3rem)",
            borderTop: "1px solid var(--border-subtle)",
            marginTop: "var(--space-4, 1rem)",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4, 1rem)",
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="nav-link"
                    style={{
                      fontSize: "var(--text-base, 1rem)",
                      color: isActive ? "#ffffff" : "var(--text-secondary)",
                      fontWeight: isActive ? 600 : 400,
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "var(--accent-primary)",
                          boxShadow: "0 0 8px var(--accent-primary)",
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
