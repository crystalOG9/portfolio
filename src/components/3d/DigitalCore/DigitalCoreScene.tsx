"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { digitalCoreConfig } from "./digitalCoreConfig";
import { createGmailMorphSystem } from "./gmailEnvelope";

export interface DigitalCoreSceneProps {
  prefersReducedMotion?: boolean;
}

/**
 * DigitalCoreScene Component
 * 
 * Signature 3D Digital Core WebGL Scene:
 * - Liquid-crystalline refractive glass shell with dynamic breathing deformation
 * - Inner faceted luminous purple core with metallic specular reflections
 * - 2 ultra-thin glowing orbital light trails revolving slowly
 * - Constellation of localized floating dust particles
 * - Studio lighting: crisp white key light, soft fill, and deep violet rim light
 * - Section-aware smoothstep interpolation across the entire page
 * - Dynamic scroll momentum & desktop cursor parallax
 */
export function DigitalCoreScene({ prefersReducedMotion = false }: DigitalCoreSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId: number;
    let isRunning = true;

    // 1. Scene, Camera & High-Performance Renderer
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
    renderer.toneMappingExposure = 1.15;

    // 2. Persistent 3D Object Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Group for the original 3D sphere (glass shell + inner core + glow)
    const sphereGroup = new THREE.Group();
    coreGroup.add(sphereGroup);

    // 3. Outer Glass Shell (Liquid-Crystalline Organic Deformation)
    const glassGeometry = new THREE.IcosahedronGeometry(0.76, 18);
    const basePositions = glassGeometry.attributes.position.clone();

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: digitalCoreConfig.glassColor,
      roughness: digitalCoreConfig.glassRoughness,
      metalness: 0.1,
      transmission: digitalCoreConfig.glassTransmission,
      thickness: digitalCoreConfig.glassThickness,
      ior: digitalCoreConfig.glassIor,
      opacity: digitalCoreConfig.glassOpacity,
      transparent: true,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      specularIntensity: 1.0,
      specularColor: 0xffffff,
    });
    const glassMesh = new THREE.Mesh(glassGeometry, glassMaterial);
    sphereGroup.add(glassMesh);

    // 4. Inner Luminous Purple Core
    const innerGeometry = new THREE.OctahedronGeometry(0.35, 1);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: digitalCoreConfig.coreColor,
      emissive: digitalCoreConfig.coreEmissive,
      emissiveIntensity: 1.0,
      metalness: digitalCoreConfig.coreMetalness,
      roughness: digitalCoreConfig.coreRoughness,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    sphereGroup.add(innerMesh);

    // Internal Core Glow Point Light
    const corePointLight = new THREE.PointLight(0xa855f7, 2.0, 4.5);
    sphereGroup.add(corePointLight);

    // 5. 3D Gmail Morph & Explosion System (Logo formed of exploded dots)
    const gmailSystem = createGmailMorphSystem();
    coreGroup.add(gmailSystem.group);

    // 6. Studio Cinematic Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const violetRimLight = new THREE.DirectionalLight(0x9333ea, 2.6);
    violetRimLight.position.set(-5, -3, -2);
    scene.add(violetRimLight);

    // 8. Section Bounds & Scroll Tracking
    interface SectionBounds {
      id: string;
      centerScrollY: number;
      target: typeof digitalCoreConfig.sections[0];
    }

    let sectionBounds: SectionBounds[] = [];

    const calculateSectionBounds = () => {
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
      const scaleMultiplier = isMobile
        ? digitalCoreConfig.mobileScale
        : isTablet
        ? digitalCoreConfig.tabletScale
        : digitalCoreConfig.desktopScale;

      const winHeight = window.innerHeight;
      const pageHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        winHeight
      );

      sectionBounds = digitalCoreConfig.sections.map((target, idx) => {
        const el = document.getElementById(target.id);
        let center = 0;

        if (el) {
          const rect = el.getBoundingClientRect();
          const elTop = rect.top + window.scrollY;
          if (target.id === "contact") {
            center = Math.min(elTop + rect.height * 0.35, pageHeight - winHeight * 0.5);
          } else {
            center = elTop + rect.height * 0.45;
          }
        } else {
          center = (pageHeight / digitalCoreConfig.sections.length) * (idx + 0.5);
        }

        let pos = target.position;
        if (isMobile && digitalCoreConfig.mobilePositions[target.id]) {
          pos = digitalCoreConfig.mobilePositions[target.id];
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

      sectionBounds.sort((a, b) => a.centerScrollY - b.centerScrollY);
    };

    calculateSectionBounds();
    const layoutTimer1 = setTimeout(calculateSectionBounds, 350);
    const layoutTimer2 = setTimeout(calculateSectionBounds, 1200);

    const handleResize = () => {
      const { width, height } = getViewportSize();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      calculateSectionBounds();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Scroll Velocity Tracking
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScrollY;
      scrollVelocity += delta * digitalCoreConfig.scrollVelocityInfluence;
      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Visibility Management
    const handleVisibilityChange = () => {
      isRunning = !document.hidden;
      if (isRunning) {
        lastTime = performance.now();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial Physics State
    const currentPos = new THREE.Vector3(...(sectionBounds[0]?.target.position || [-2.6, -3.2, 0]));
    let currentScale = sectionBounds[0]?.target.scale ?? 0.0;
    let currentSpeedMult = 0.5;
    let currentGlow = 0.0;
    let currentDistortion = 0.0;
    let currentContactMorph = 0.0;

    coreGroup.position.copy(currentPos);
    coreGroup.scale.setScalar(currentScale);
    coreGroup.visible = currentScale > 0.005;

    // 9. Animation Render Loop
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
      const viewY = scrollY + window.innerHeight * 0.45;

      // Section Target Calculation based on viewport center
      let targetX = currentPos.x;
      let targetY = currentPos.y;
      let targetZ = currentPos.z;
      let targetScale = currentScale;
      let targetSpeedMult = currentSpeedMult;
      let targetGlow = currentGlow;
      let targetDistortion = currentDistortion;

      if (sectionBounds.length > 0) {
        // At the top / hero section (scrollY < 80), completely hidden off-screen bottom-left
        if (scrollY < 80) {
          const t0 = sectionBounds[0].target;
          targetX = t0.position[0];
          targetY = t0.position[1];
          targetZ = t0.position[2];
          targetScale = 0;
          targetSpeedMult = 0.5;
          targetGlow = 0;
          targetDistortion = 0;
        } else {
          const contactEl = document.getElementById("contact");
          const isNearBottom =
            window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight - 70;
          const isAtContact =
            isNearBottom ||
            (contactEl !== null &&
              contactEl.getBoundingClientRect().top <= window.innerHeight * 0.45);

          if (isAtContact || viewY >= sectionBounds[sectionBounds.length - 1].centerScrollY) {
            const tLast = sectionBounds[sectionBounds.length - 1].target;
            targetX = tLast.position[0];
            targetY = tLast.position[1];
            targetZ = tLast.position[2];
            targetScale = tLast.scale;
            targetSpeedMult = tLast.rotationSpeedMultiplier;
            targetGlow = tLast.emissiveIntensity;
            targetDistortion = tLast.distortion;
          } else if (viewY <= sectionBounds[0].centerScrollY) {
            const t0 = sectionBounds[0].target;
            targetX = t0.position[0];
            targetY = t0.position[1];
            targetZ = t0.position[2];
            targetScale = t0.scale;
            targetSpeedMult = t0.rotationSpeedMultiplier;
            targetGlow = t0.emissiveIntensity;
            targetDistortion = t0.distortion;
          } else {
            for (let i = 0; i < sectionBounds.length - 1; i++) {
              const bA = sectionBounds[i];
              const bB = sectionBounds[i + 1];

              if (viewY >= bA.centerScrollY && viewY <= bB.centerScrollY) {
                const span = bB.centerScrollY - bA.centerScrollY;
                const rawT = span > 0 ? (viewY - bA.centerScrollY) / span : 0;
                const smoothT = rawT * rawT * (3 - 2 * rawT); // Smoothstep curve

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
                targetDistortion = THREE.MathUtils.lerp(
                  bA.target.distortion,
                  bB.target.distortion,
                  smoothT
                );
                break;
              }
            }
          }
        }
      }

      // Smooth physical damping
      const damping = prefersReducedMotion ? 0.2 : digitalCoreConfig.scrollDamping;
      currentPos.x += (targetX - currentPos.x) * damping;
      currentPos.y += (targetY - currentPos.y) * damping;
      currentPos.z += (targetZ - currentPos.z) * damping;
      currentScale += (targetScale - currentScale) * damping;
      currentSpeedMult += (targetSpeedMult - currentSpeedMult) * damping;
      currentGlow += (targetGlow - currentGlow) * damping;
      currentDistortion += (targetDistortion - currentDistortion) * damping;

      scrollVelocity *= digitalCoreConfig.velocityDamping;

      // Position update (purely scroll-driven, unlinked from mouse)
      coreGroup.position.set(
        currentPos.x,
        currentPos.y,
        currentPos.z
      );
      coreGroup.scale.setScalar(currentScale);
      coreGroup.visible = currentScale > 0.005;

      // Contact Section Explosion & Gmail Morph Progress Calculation
      let targetContactMorph = 0.0;
      const contactEl = document.getElementById("contact");
      const winH = window.innerHeight;
      const isNearBottom =
        window.scrollY + winH >=
        document.documentElement.scrollHeight - 70;

      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        // Morph triggers as contact section approaches viewport
        // Starts when top of contact section enters the bottom 85% of viewport
        // Completes when contact heading settles into top 35% of viewport, or near bottom of page
        const startY = winH * 0.85;
        const endY = winH * 0.35;

        if (isNearBottom) {
          targetContactMorph = 1.0;
        } else if (rect.top <= startY) {
          const rawP = (startY - rect.top) / (startY - endY);
          targetContactMorph = Math.max(0, Math.min(1, rawP));
        }
      }

      const morphDamping = prefersReducedMotion ? 0.25 : 0.08;
      currentContactMorph += (targetContactMorph - currentContactMorph) * morphDamping;

      // Explode and collapse the original sphere
      if (currentContactMorph < 0.01) {
        sphereGroup.visible = true;
        sphereGroup.scale.setScalar(1.0);
        glassMaterial.opacity = digitalCoreConfig.glassOpacity;
      } else if (currentContactMorph < 0.42) {
        sphereGroup.visible = true;
        const fadeT = currentContactMorph / 0.42;
        sphereGroup.scale.setScalar(Math.max(0.001, 1 - fadeT));
        glassMaterial.opacity = Math.max(0, (1 - fadeT) * digitalCoreConfig.glassOpacity);
        currentDistortion = Math.max(currentDistortion, fadeT * 0.35);
      } else {
        sphereGroup.visible = false;
        sphereGroup.scale.setScalar(0.001);
        glassMaterial.opacity = 0;
      }

      // Animate the 3D Gmail envelope and crystalline shards
      gmailSystem.update(currentContactMorph, totalTime);

      // Liquid-Crystalline Organic Deformation
      if (!prefersReducedMotion && sphereGroup.visible) {
        const posAttr = glassGeometry.attributes.position;
        const count = posAttr.count;
        const d = currentDistortion;

        for (let i = 0; i < count; i++) {
          const bx = basePositions.getX(i);
          const by = basePositions.getY(i);
          const bz = basePositions.getZ(i);

          const noise =
            Math.sin(bx * 3.5 + totalTime * 1.2) *
            Math.cos(by * 3.5 + totalTime * 1.5) +
            Math.sin(bz * 2.8 - totalTime * 0.9);

          const factor = 1 + noise * d;
          posAttr.setXYZ(i, bx * factor, by * factor, bz * factor);
        }
        posAttr.needsUpdate = true;
        glassGeometry.computeVertexNormals();
      }

      // Material updates
      innerMaterial.emissiveIntensity = currentGlow;
      corePointLight.intensity = currentGlow * 1.6;

      // Rotational Dynamics (Core & Shell)
      if (!prefersReducedMotion) {
        const speed = currentSpeedMult;
        const velRot = scrollVelocity * 0.45;

        // Glass Shell rotation
        glassMesh.rotation.x =
          totalTime * digitalCoreConfig.baseRotationSpeed.x * speed +
          velRot;
        glassMesh.rotation.y =
          totalTime * digitalCoreConfig.baseRotationSpeed.y * speed +
          velRot * 1.3;
        glassMesh.rotation.z = Math.sin(totalTime * 0.4) * 0.08;

        // Inner Faceted Core counter-rotation
        innerMesh.rotation.x = -totalTime * 0.35 * speed;
        innerMesh.rotation.y = -totalTime * 0.55 * speed;
        innerMesh.rotation.z = totalTime * 0.18;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 10. Clean Resource Disposal
    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(layoutTimer1);
      clearTimeout(layoutTimer2);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);

      gmailSystem.dispose();
      glassGeometry.dispose();
      basePositions.array = new Float32Array(0);
      glassMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
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
