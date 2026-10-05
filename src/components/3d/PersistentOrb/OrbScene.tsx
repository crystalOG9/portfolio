"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { orbConfig } from "./orbConfig";

export interface OrbSceneProps {
  prefersReducedMotion?: boolean;
}

/**
 * OrbScene Component
 * 
 * Implements the persistent Three.js digital core:
 * - Outer refractive glass shell with specular highlights and clearcoat
 * - Inner luminous violet/indigo technical core
 * - Precision concentric orbital ring
 * - Internal warm micro-glow point light
 * - Section-aware smooth physical interpolation across the entire page
 * - Scroll velocity momentum & mouse tilt
 * - 60+ FPS zero-overhead render loop independent of React component re-renders
 */
export function OrbScene({ prefersReducedMotion = false }: OrbSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId: number;
    let isRunning = true;

    // 1. Scene, Camera & Renderer
    const scene = new THREE.Scene();

    const getViewportSize = () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const initialSize = getViewportSize();
    const camera = new THREE.PerspectiveCamera(
      45,
      initialSize.width / initialSize.height,
      0.1,
      100
    );
    camera.position.set(0, 0, 5.0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(initialSize.width, initialSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // 2. Persistent 3D Object Group
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    // Geometry: Outer Glass Shell
    const glassGeometry = new THREE.SphereGeometry(0.72, 48, 36);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: orbConfig.glassColor,
      roughness: orbConfig.glassRoughness,
      metalness: 0.12,
      transmission: orbConfig.glassTransmission,
      thickness: orbConfig.glassThickness,
      ior: orbConfig.glassIor,
      opacity: orbConfig.glassOpacity,
      transparent: true,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      specularIntensity: 1.0,
      specularColor: 0xffffff,
    });
    const glassMesh = new THREE.Mesh(glassGeometry, glassMaterial);
    orbGroup.add(glassMesh);

    // Geometry: Inner Luminous Faceted Core
    const coreGeometry = new THREE.IcosahedronGeometry(0.34, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: orbConfig.coreColor,
      emissive: orbConfig.coreEmissive,
      emissiveIntensity: 0.85,
      metalness: orbConfig.coreMetalness,
      roughness: 0.22,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    orbGroup.add(coreMesh);

    // Geometry: Precision Thin Concentric Orbital Ring
    const ringGeometry = new THREE.TorusGeometry(0.52, 0.009, 16, 80);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: orbConfig.ringColor,
      metalness: 0.9,
      roughness: 0.18,
      transparent: true,
      opacity: orbConfig.ringOpacity,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI * 0.35;
    ringMesh.rotation.y = Math.PI * 0.15;
    orbGroup.add(ringMesh);

    // Subtle Internal Core Point Light (Illuminates glass from inside)
    const coreInternalLight = new THREE.PointLight(0xa78bfa, 1.4, 4.0);
    orbGroup.add(coreInternalLight);

    // 3. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x8b5cf6, 2.0);
    rimLight.position.set(-5, -3, -2);
    scene.add(rimLight);

    // 4. Section Position & Scroll Tracking State
    interface SectionBounds {
      id: string;
      centerScrollY: number;
      target: typeof orbConfig.sections[0];
    }

    let sectionBounds: SectionBounds[] = [];

    const calculateSectionBounds = () => {
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
      const scaleMultiplier = isMobile
        ? orbConfig.mobileScale
        : isTablet
        ? orbConfig.tabletScale
        : orbConfig.desktopScale;

      const pageHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight
      );

      sectionBounds = orbConfig.sections.map((target, idx) => {
        const el = document.getElementById(target.id);
        let center = 0;

        if (el) {
          const rect = el.getBoundingClientRect();
          const elTop = rect.top + window.scrollY;
          const elHeight = rect.height;
          center = elTop + elHeight * 0.45;
        } else {
          // Fallback distribution along page height
          center = (pageHeight / orbConfig.sections.length) * (idx + 0.5);
        }

        // Apply mobile position overrides if on mobile
        let pos = target.position;
        if (isMobile && orbConfig.mobilePositions[target.id]) {
          pos = orbConfig.mobilePositions[target.id];
        }

        return {
          id: target.id,
          centerScrollY: center,
          target: {
            ...target,
            position: pos,
            scale: target.scale * scaleMultiplier,
          },
        };
      });

      // Sort by centerScrollY
      sectionBounds.sort((a, b) => a.centerScrollY - b.centerScrollY);
    };

    calculateSectionBounds();

    // Recompute bounds on resize or content shifts
    const handleResize = () => {
      const { width, height } = getViewportSize();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      calculateSectionBounds();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Track scroll velocity & momentum
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScrollY;
      scrollVelocity += delta * orbConfig.scrollVelocityInfluence;
      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Mouse Tracking (Desktop only)
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 768) return;
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Page Visibility Optimization
    const handleVisibilityChange = () => {
      isRunning = !document.hidden;
      if (isRunning) {
        lastTime = performance.now();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 5. Physics State
    const currentPos = new THREE.Vector3(...sectionBounds[0]?.target.position || [1.6, 0.4, 0]);
    let currentScale = sectionBounds[0]?.target.scale || 1.0;
    let currentSpeedMult = 1.0;
    let currentGlow = 0.85;

    orbGroup.position.copy(currentPos);
    orbGroup.scale.setScalar(currentScale);

    // 6. Animation Render Loop
    let lastTime = performance.now();
    let totalTime = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isRunning) return;

      const now = performance.now();
      const deltaSeconds = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      totalTime += deltaSeconds;

      const scrollY = window.scrollY;
      const isMobile = window.innerWidth <= 768;

      // Determine target properties based on scroll position between sections
      let targetX = currentPos.x;
      let targetY = currentPos.y;
      let targetZ = currentPos.z;
      let targetScale = currentScale;
      let targetSpeedMult = currentSpeedMult;
      let targetGlow = currentGlow;

      if (sectionBounds.length > 0) {
        const viewY = scrollY + window.innerHeight * 0.45;

        if (viewY <= sectionBounds[0].centerScrollY) {
          // Before first section
          const t0 = sectionBounds[0].target;
          targetX = t0.position[0];
          targetY = t0.position[1];
          targetZ = t0.position[2];
          targetScale = t0.scale;
          targetSpeedMult = t0.rotationSpeedMultiplier;
          targetGlow = t0.emissiveIntensity;
        } else if (viewY >= sectionBounds[sectionBounds.length - 1].centerScrollY) {
          // After last section
          const tLast = sectionBounds[sectionBounds.length - 1].target;
          targetX = tLast.position[0];
          targetY = tLast.position[1];
          targetZ = tLast.position[2];
          targetScale = tLast.scale;
          targetSpeedMult = tLast.rotationSpeedMultiplier;
          targetGlow = tLast.emissiveIntensity;
        } else {
          // Interpolate between adjacent section bounds
          for (let i = 0; i < sectionBounds.length - 1; i++) {
            const bA = sectionBounds[i];
            const bB = sectionBounds[i + 1];

            if (viewY >= bA.centerScrollY && viewY <= bB.centerScrollY) {
              const span = bB.centerScrollY - bA.centerScrollY;
              const rawT = span > 0 ? (viewY - bA.centerScrollY) / span : 0;
              // Smoothstep easing for physical, non-robotic curve
              const smoothT = rawT * rawT * (3 - 2 * rawT);

              const pA = bA.target.position;
              const pB = bB.target.position;

              targetX = THREE.MathUtils.lerp(pA[0], pB[0], smoothT);
              targetY = THREE.MathUtils.lerp(pA[1], pB[1], smoothT);
              targetZ = THREE.MathUtils.lerp(pA[2], pB[2], smoothT);
              targetScale = THREE.MathUtils.lerp(bA.target.scale, bB.target.scale, smoothT);
              targetSpeedMult = THREE.MathUtils.lerp(
                bA.target.rotationSpeedMultiplier,
                bB.target.rotationSpeedMultiplier,
                smoothT
              );
              targetGlow = THREE.MathUtils.lerp(
                bA.target.emissiveIntensity,
                bB.target.emissiveIntensity,
                smoothT
              );
              break;
            }
          }
        }
      }

      // Smooth interpolation / physical damping
      const damping = prefersReducedMotion ? 0.2 : orbConfig.scrollDamping;
      currentPos.x += (targetX - currentPos.x) * damping;
      currentPos.y += (targetY - currentPos.y) * damping;
      currentPos.z += (targetZ - currentPos.z) * damping;
      currentScale += (targetScale - currentScale) * damping;
      currentSpeedMult += (targetSpeedMult - currentSpeedMult) * damping;
      currentGlow += (targetGlow - currentGlow) * damping;

      // Mouse smoothing
      if (!isMobile && !prefersReducedMotion) {
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;
      } else {
        mouse.x = 0;
        mouse.y = 0;
      }

      // Decay scroll velocity
      scrollVelocity *= orbConfig.velocityDamping;

      // Position orb: base position + subtle mouse parallax
      const mouseOffsetX = mouse.x * orbConfig.mouseMoveFactor;
      const mouseOffsetY = mouse.y * orbConfig.mouseMoveFactor;

      orbGroup.position.set(
        currentPos.x + mouseOffsetX,
        currentPos.y + mouseOffsetY,
        currentPos.z
      );
      orbGroup.scale.setScalar(currentScale);

      // Core glow update
      coreMaterial.emissiveIntensity = currentGlow;
      coreInternalLight.intensity = currentGlow * 1.5;

      // Rotation choreography:
      // Continuous calm rotation + scroll velocity kick + subtle mouse tilt
      if (!prefersReducedMotion) {
        const speed = currentSpeedMult;
        const velRot = scrollVelocity * 0.4;

        glassMesh.rotation.x =
          totalTime * orbConfig.baseRotationSpeed.x * speed + velRot + mouse.y * orbConfig.mouseTiltFactor;
        glassMesh.rotation.y =
          totalTime * orbConfig.baseRotationSpeed.y * speed + velRot * 1.4 + mouse.x * orbConfig.mouseTiltFactor;
        glassMesh.rotation.z = Math.sin(totalTime * 0.4) * 0.08;

        // Inner core rotates counter-clockwise with subtle tumble
        coreMesh.rotation.x = -totalTime * 0.32 * speed + mouse.y * 0.2;
        coreMesh.rotation.y = -totalTime * 0.48 * speed + mouse.x * 0.2;
        coreMesh.rotation.z = totalTime * 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup & Resource Disposal
    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);

      glassGeometry.dispose();
      glassMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      renderer.dispose();
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: "var(--z-orb, 15)",
        display: "block",
      }}
    />
  );
}
