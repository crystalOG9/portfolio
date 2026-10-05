"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks";

type SandboxMode = "particles" | "waves" | "geometry";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

const SANDBOX_COLORS = ["#6366f1", "#06b6d4", "#a5b4fc", "#38bdf8", "#818cf8"] as const;

/**
 * InteractiveLabSandbox Component
 * Phase 10 - Experiments & Creative Lab
 *
 * Live interactive creative coding sandbox allowing visitors to test
 * real-time particle gravity, kinetic waves, and procedural geometric morphing.
 */
export function InteractiveLabSandbox() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();
  const [mode, setMode] = useState<SandboxMode>("particles");
  const particleCount = 60;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = 320);

    const mouse = {
      x: width * 0.5,
      y: height * 0.5,
      isHovering: false,
    };

    // Initialize particles
    const particles: Particle[] = [];
    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 2.5 + 1.5,
          color: SANDBOX_COLORS[Math.floor(Math.random() * SANDBOX_COLORS.length)],
        });
      }
    };
    createParticles();

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
      mouse.x = width * 0.5;
      mouse.y = height * 0.5;
    };

    const handleResize = () => {
      if (!container) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = 320;
      createParticles();
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    let time = 0;

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      time += 0.02;

      // Dark background trail
      ctx.fillStyle = "rgba(10, 10, 14, 0.25)";
      ctx.fillRect(0, 0, width, height);

      if (mode === "particles") {
        // Mode 1: Gravitational Particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          if (mouse.isHovering) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180 && dist > 10) {
              const force = (180 - dist) / 180;
              p.vx += (dx / dist) * force * 0.6;
              p.vy += (dy / dist) * force * 0.6;
            }
          }

          p.vx *= 0.96;
          p.vy *= 0.96;
          p.x += p.vx;
          p.y += p.vy;

          // Wrap edges
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Connect nearby particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 65) {
              ctx.strokeStyle = p.color;
              ctx.globalAlpha = (65 - dist) / 65 * 0.25;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
      } else if (mode === "waves") {
        // Mode 2: Kinetic Wave Simulation
        const lines = 7;
        for (let l = 0; l < lines; l++) {
          ctx.strokeStyle = SANDBOX_COLORS[l % SANDBOX_COLORS.length];
          ctx.lineWidth = 1.6;
          ctx.beginPath();

          for (let x = 0; x < width; x += 10) {
            const distFromMouse = Math.abs(x - mouse.x);
            const mouseEffect =
              mouse.isHovering && distFromMouse < 150
                ? ((150 - distFromMouse) / 150) * 35
                : 0;

            const y =
              height * 0.5 +
              Math.sin(x * 0.012 + time + l * 0.6) * (30 + l * 5) +
              Math.cos(x * 0.02 - time) * 15 -
              mouseEffect;

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else if (mode === "geometry") {
        // Mode 3: Procedural Geometry Morphing
        ctx.save();
        ctx.translate(width * 0.5, height * 0.5);

        const rings = 4;
        for (let r = 1; r <= rings; r++) {
          const radius = r * 30 + Math.sin(time + r) * 10;
          const sides = 6 + r;
          const rot = time * (r % 2 === 0 ? 0.5 : -0.5) + (mouse.x / width) * 2;

          ctx.strokeStyle = SANDBOX_COLORS[r % SANDBOX_COLORS.length];
          ctx.lineWidth = 1.4;
          ctx.beginPath();

          for (let i = 0; i <= sides; i++) {
            const angle = rot + (i * Math.PI * 2) / sides;
            const px = Math.cos(angle) * radius;
            const py = Math.sin(angle) * radius;

            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
        }
        ctx.restore();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [mode, particleCount, prefersReduced]);

  if (prefersReduced) {
    return (
      <div
        style={{
          padding: "var(--space-6, 1.5rem)",
          backgroundColor: "var(--bg-secondary)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-subtle)",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: "var(--text-sm, 0.875rem)",
        }}
      >
        Live animation paused (Reduced motion active).
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-2xl)",
        padding: "var(--space-6, 1.5rem)",
        marginBottom: "var(--space-8, 2rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "var(--space-3, 0.75rem)",
          marginBottom: "var(--space-4, 1rem)",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "var(--text-xs, 0.75rem)",
              fontFamily: "var(--font-mono)",
              color: "var(--accent-cyan)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Interactive Sandbox
          </span>
          <h4
            style={{
              fontSize: "var(--text-lg, 1.125rem)",
              fontWeight: "var(--font-bold, 700)",
              color: "var(--text-primary)",
            }}
          >
            Real-Time Graphics & Physics Canvas
          </h4>
        </div>

        {/* Mode Selector Buttons */}
        <div style={{ display: "flex", gap: "var(--space-2, 0.5rem)" }}>
          {(["particles", "waves", "geometry"] as SandboxMode[]).map((m) => {
            const isActive = mode === m;
            return (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                style={{
                  padding: "0.35rem 0.8rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "var(--text-xs, 0.75rem)",
                  fontFamily: "var(--font-mono)",
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: isActive
                    ? "var(--accent-primary)"
                    : "var(--border-subtle)",
                  backgroundColor: isActive
                    ? "var(--accent-muted)"
                    : "var(--bg-surface)",
                  color: isActive
                    ? "#ffffff"
                    : "var(--text-secondary)",
                  textTransform: "capitalize",
                  transition: "all var(--duration-fast)",
                }}
              >
                {m}
              </button>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "320px",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          border: "1px solid var(--border-subtle)",
          backgroundColor: "#0a0a0e",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            cursor: "crosshair",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "var(--space-3, 0.75rem)",
            right: "var(--space-3, 0.75rem)",
            fontSize: "var(--text-xs, 0.75rem)",
            fontFamily: "var(--font-mono)",
            color: "var(--text-muted)",
            pointerEvents: "none",
            backgroundColor: "rgba(10, 10, 14, 0.75)",
            padding: "0.2rem 0.6rem",
            borderRadius: "var(--radius-full)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          Hover & move cursor to influence physics
        </div>
      </div>
    </div>
  );
}
