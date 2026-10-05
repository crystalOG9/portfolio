# Animation Architecture Guidelines

All animation modules in this directory must adhere to the following principles:

1. **Isolation**: Every animation module (e.g., `TextReveal`, `MagneticButton`, `CursorEffect`) must live in its own directory with its own component, types, and styles.
2. **Removability**: Any animation module must be removable without causing build errors in other parts of the site.
3. **Accessibility**: All animations must respect `prefers-reduced-motion` and support the `AnimationBoundary` wrapper.
4. **Performance**: Heavy client-side animation logic must be isolated behind `'use client'` boundaries and lazy-loaded when appropriate.
