"use client";

import React, { useState } from "react";
import { getPersonalInfo } from "@/data";
import { Container, SectionHeader, Button } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import styles from "./contact.module.css";

/**
 * Contact Section Component
 * High-visibility styling with clear input visibility & direct channels
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
    <section id="contact" className={`portfolio-section ${styles.contactSection}`}>
      <Container>
        <FadeIn delay={100}>
          <SectionHeader
            tag="Get In Touch"
            title="Initiate a Collaboration"
            subtitle="Interested in building innovative web experiences, exploring AI automation workflows, or discussing full-stack engineering?"
          />
        </FadeIn>

        <div className={styles.contentRow}>
          {/* Message Form aligned to left corner */}
          <FadeIn delay={200} className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.formPanel}>
              <div>
                <h3 className={styles.formTitle}>Send a Message</h3>
                <p className={styles.formSubtitle}>
                  Have an idea, project, or question? Send a message and I&apos;ll get back to you promptly.
                </p>
              </div>

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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className={styles.inputField}
                />
              </div>

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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email address"
                  className={styles.inputField}
                />
              </div>

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
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Type your message here..."
                  className={styles.textareaField}
                />
              </div>

              <div className={styles.formActions}>
                <Button type="submit" size="md">
                  {submitted ? "Launching Mail Client..." : "Send Message ↗"}
                </Button>

                <div className={styles.directChannels}>
                  <a
                    href={`mailto:${personal.email}`}
                    className={styles.directEmailPill}
                    title="Send email directly"
                  >
                    <span>✉</span>
                    <span>{personal.email}</span>
                  </a>
                </div>
              </div>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
