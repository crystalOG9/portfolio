"use client";

import React, { useState } from "react";
import { getPersonalInfo } from "@/data";
import { Container, SectionHeader, Button } from "@/components/ui";
import { FadeIn } from "@/components/animations";

/**
 * Contact Section Component
 * Phase 11 - Contact & Communication
 *
 * Provides direct communication channels, one-click email copying,
 * and quick social access with instant feedback.
 */
export function Contact() {
  const personal = getPersonalInfo();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Generate mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="portfolio-section contact-section">
      <Container>
        <FadeIn delay={100}>
          <SectionHeader
            tag="Get In Touch"
            title="Initiate a Collaboration"
            subtitle="Interested in building innovative web experiences, exploring AI automation workflows, or discussing full-stack engineering?"
          />
        </FadeIn>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Message Form aligned to left corner */}
          <FadeIn delay={200} style={{ width: "100%", maxWidth: "620px" }}>
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-2xl)",
                padding: "var(--space-8, 2rem)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-4, 1rem)",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <h3
                style={{
                  fontSize: "var(--text-xl, 1.25rem)",
                  fontWeight: "var(--font-bold, 700)",
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-2, 0.5rem)",
                }}
              >
                Send a Message
              </h3>

              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: "block",
                    fontSize: "var(--text-xs, 0.75rem)",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    marginBottom: "var(--space-1, 0.25rem)",
                    textTransform: "uppercase",
                  }}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Alex Morgan"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontSize: "var(--text-sm, 0.875rem)",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: "block",
                    fontSize: "var(--text-xs, 0.75rem)",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    marginBottom: "var(--space-1, 0.25rem)",
                    textTransform: "uppercase",
                  }}
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="alex@example.com"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontSize: "var(--text-sm, 0.875rem)",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: "block",
                    fontSize: "var(--text-xs, 0.75rem)",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    marginBottom: "var(--space-1, 0.25rem)",
                    textTransform: "uppercase",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Hi Piyush, I would like to discuss a project..."
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontSize: "var(--text-sm, 0.875rem)",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <div style={{ marginTop: "var(--space-2, 0.5rem)" }}>
                <Button type="submit" size="md">
                  {submitted ? "Launching Mail Client..." : "Send Message ↗"}
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
