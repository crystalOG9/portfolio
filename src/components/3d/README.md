# 3D Architecture Guidelines

All 3D components (Three.js, WebGL, React Three Fiber, shaders) must follow these strict rules:

1. **Isolation**: 3D logic must stay inside `src/components/3d/`. Do not mix canvas management or WebGL rendering directly into page sections.
2. **Resilience**: Every 3D scene must be wrapped in `SceneBoundary` with a graceful fallback. The main website UI must function completely even if 3D fails to load or is disabled.
3. **No Heavy Dependencies Yet**: 3D packages (Three.js / R3F) are only added in Phase 12 when the 3D system is actively implemented.
4. **Performance**: Must support lazy loading, lower pixel ratios on mobile, and cleanup on unmount.
