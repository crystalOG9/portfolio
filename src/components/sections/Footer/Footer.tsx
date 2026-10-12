import React from "react";
import { getPersonalInfo } from "@/data";
import { Container } from "@/components/ui";

/**
 * Footer Component
 * 
 * Minimalist, dark-cinematic footer with copyright and verified social links.
 */
export function Footer() {
  const personal = getPersonalInfo();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="portfolio-footer"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "var(--space-10, 2.5rem) 0",
        marginTop: "var(--space-20, 5rem)",
        color: "var(--text-muted)",
        fontSize: "var(--text-xs, 0.75rem)",
        fontFamily: "var(--font-mono)",
        position: "relative",
        zIndex: "var(--z-content)",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--space-4, 1rem)",
          }}
        >
          <div>
            <p>
              © {currentYear} {personal.name} · Frontend &amp; Creative Developer
            </p>
          </div>

          <ul
            style={{
              display: "flex",
              gap: "var(--space-6, 1.5rem)",
              listStyle: "none",
              margin: 0,
              padding: 0,
              flexWrap: "wrap",
            }}
          >
            {personal.socials.github && (
              <li>
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub ↗
                </a>
              </li>
            )}
            {personal.socials.instagram && (
              <li>
                <a
                  href={personal.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Instagram ↗
                </a>
              </li>
            )}
            <li>
              <a href={`mailto:${personal.email}`} className="footer-link">
                Email ↗
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
