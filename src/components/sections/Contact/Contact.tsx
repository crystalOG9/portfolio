"use client";

import React, { useState } from "react";
import { getPersonalInfo } from "@/data";
import { Container, SectionHeader, Button } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import styles from "./contact.module.css";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

/**
 * Contact Section Component
 * 
 * Includes:
 * - Client-side validation (name, email format, minimum message length)
 * - Transparent email routing (no faked server submission)
 * - Copy-to-clipboard email utility with feedback
 * - Direct social channels (Email, GitHub, Instagram)
 */
export function Contact() {
  const personal = getPersonalInfo();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "launching" | "opened">("idle");
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please include a message (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("launching");

    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Hi Piyush,\n\n${formData.message.trim()}\n\n---\nSender: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setStatus("opened");
    }, 300);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2800);
    });
  };

  return (
    <section id="contact" className={`portfolio-section ${styles.contactSection}`} aria-label="Contact Section">
      <Container>
        <FadeIn delay={100}>
          <SectionHeader
            tag="Get In Touch"
            title="Let's Build Something Together"
            subtitle="Interested in collaborating on modern web experiences, 3D interaction, or workflow automation? Let's connect."
          />
        </FadeIn>

        <div className={styles.contentRow}>
          {/* Message Form */}
          <FadeIn delay={200} className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.formPanel} noValidate>
              <div>
                <h3 className={styles.formTitle}>Send a Message</h3>
                <p className={styles.formSubtitle}>
                  Fill in your details below to compose a direct inquiry to{" "}
                  <strong style={{ color: "#ffffff" }}>{personal.email}</strong>.
                </p>
              </div>

              {/* Status Alert if Opened */}
              {status === "opened" && (
                <div
                  style={{
                    backgroundColor: "rgba(52, 211, 153, 0.1)",
                    border: "1px solid rgba(52, 211, 153, 0.3)",
                    borderRadius: "var(--radius-md, 0.5rem)",
                    padding: "0.85rem 1rem",
                    fontSize: "0.8125rem",
                    color: "#a7f3d0",
                    lineHeight: 1.5,
                  }}
                >
                  <strong style={{ display: "block", marginBottom: "0.25rem", color: "#34d399" }}>
                    ✓ Email Application Launched
                  </strong>
                  Your pre-filled message has been prepared for your mail client. If it did not launch automatically, you can copy the address below to send directly.
                </div>
              )}

              {/* Name Field */}
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.fieldLabel}>
                  <span>Your Name</span>
                  <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="Enter your name"
                  className={styles.inputField}
                  style={errors.name ? { borderColor: "#f87171" } : undefined}
                />
                {errors.name && (
                  <span style={{ fontSize: "0.75rem", color: "#f87171", marginTop: "0.35rem" }}>
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.fieldLabel}>
                  <span>Your Email</span>
                  <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="Enter your email address"
                  className={styles.inputField}
                  style={errors.email ? { borderColor: "#f87171" } : undefined}
                />
                {errors.email && (
                  <span style={{ fontSize: "0.75rem", color: "#f87171", marginTop: "0.35rem" }}>
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.fieldLabel}>
                  <span>Message</span>
                  <span className={styles.requiredStar}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Tell me about your project, idea, or questions..."
                  className={styles.textareaField}
                  style={errors.message ? { borderColor: "#f87171" } : undefined}
                />
                {errors.message && (
                  <span style={{ fontSize: "0.75rem", color: "#f87171", marginTop: "0.35rem" }}>
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Actions & Direct Options */}
              <div className={styles.formActions}>
                <Button type="submit" size="md">
                  {status === "launching" ? "Preparing Email..." : "Send Message ↗"}
                </Button>

                <div className={styles.directChannels}>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={styles.directEmailPill}
                    title="Click to copy email address"
                    style={{ cursor: "pointer", background: "none" }}
                  >
                    <span>✉</span>
                    <span>{copied ? "✓ Copied!" : personal.email}</span>
                  </button>
                </div>
              </div>

              {/* Social Channels Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.8125rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  flexWrap: "wrap",
                }}
              >
                <span>Direct Links:</span>
                {personal.socials.github && (
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    GitHub ↗
                  </a>
                )}
                {personal.socials.instagram && (
                  <a
                    href={personal.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    style={{ color: "var(--accent-cyan)" }}
                  >
                    Instagram ↗
                  </a>
                )}
                <span>•</span>
                <span>{personal.location}</span>
              </div>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
