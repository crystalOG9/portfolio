import React from "react";
import {
  Navbar,
  Hero,
  About,
  CapabilitiesSection,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
} from "@/components/sections";
import { AmbientAtmosphere } from "@/components/animations";
import { DigitalCore } from "@/components/3d";
import { IntroAnimation } from "@/components/intro";

/**
 * Portfolio Home Page
 * Complete Master Architecture
 *
 * Full integration of Piyush Pawar's personal portfolio:
 * - Persistent scroll-driven 3D Digital Core
 * - 3D geometric core and interactive canvas background
 * - Dual-layer physics cursor and motion choreography
 * - Interactive 5-card Capabilities showcase
 * - Categorized skills matrix with interactive filters
 * - Featured project gallery with detail modal
 * - Chronological milestones and education timeline
 * - Accessible contact channels with email copy utility
 */
export default function Home() {
  return (
    <>
      <IntroAnimation />
      <AmbientAtmosphere />
      <DigitalCore />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <CapabilitiesSection />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
