"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * useMounted Hook
 * Phase 02 - Personal Information, Visual Identity & Initial Motion
 *
 * Uses useSyncExternalStore to reliably detect client mount status
 * without hydration mismatches or synchronous setState cascading renders.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
