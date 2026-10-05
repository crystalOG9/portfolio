"use client";

import React from "react";
import { CursorEffect } from "../CursorEffect";
import { InteractiveBackground } from "../InteractiveBackground";
import { defaultFeatureFlags } from "@/config";

/**
 * AmbientAtmosphere Client Component
 * Phase 13 - Animation System
 *
 * Client container managing ambient pointer physics and canvas particles.
 */
export function AmbientAtmosphere() {
  return (
    <>
      {defaultFeatureFlags.ENABLE_CUSTOM_CURSOR && <CursorEffect />}
      {defaultFeatureFlags.ENABLE_BACKGROUND_EFFECTS && (
        <InteractiveBackground />
      )}
    </>
  );
}
