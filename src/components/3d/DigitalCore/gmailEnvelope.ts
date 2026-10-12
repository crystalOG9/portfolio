import * as THREE from "three";

export interface GmailMorphSystem {
  group: THREE.Group;
  update: (progress: number, time: number) => void;
  dispose: () => void;
}

interface DotBatch {
  pointsMesh: THREE.Points;
  geometry: THREE.BufferGeometry;
  material: THREE.PointsMaterial;
  startPositions: Float32Array;
  explodePositions: Float32Array;
  targetPositions: Float32Array;
  currentPositions: Float32Array;
  count: number;
}

/**
 * Creates a high-fidelity spherical glowing pearl dot texture.
 * Contains both a soft diffuse bloom aura and a glossy specular pearl highlight.
 */
function createSphericalPearlTexture(): THREE.CanvasTexture | null {
  if (typeof document === "undefined") return null;

  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // Base soft radial bloom
  const glowGrad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  glowGrad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
  glowGrad.addColorStop(0.28, "rgba(255, 255, 255, 0.92)");
  glowGrad.addColorStop(0.6, "rgba(240, 245, 255, 0.35)");
  glowGrad.addColorStop(0.85, "rgba(240, 245, 255, 0.08)");
  glowGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

  ctx.fillStyle = glowGrad;
  ctx.fillRect(0, 0, 128, 128);

  // 3D spherical specular highlight (giving beads a glossy pearl gleam)
  const specGrad = ctx.createRadialGradient(50, 50, 0, 50, 50, 30);
  specGrad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
  specGrad.addColorStop(0.45, "rgba(255, 255, 255, 0.7)");
  specGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

  ctx.fillStyle = specGrad;
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

/**
 * Helper to sample a 3D point inside a volumetric cylinder/capsule.
 */
function sampleCapsulePoint(
  p0: THREE.Vector3,
  p1: THREE.Vector3,
  radius: number,
  surfaceWeight = 0.5
): THREE.Vector3 {
  const t = Math.random();
  const center = new THREE.Vector3().lerpVectors(p0, p1, t);

  // Normal and binormal vectors perpendicular to the segment
  const dir = new THREE.Vector3().subVectors(p1, p0).normalize();
  let up = new THREE.Vector3(0, 1, 0);
  if (Math.abs(dir.y) > 0.9) up = new THREE.Vector3(1, 0, 0);
  const u = new THREE.Vector3().crossVectors(dir, up).normalize();
  const v = new THREE.Vector3().crossVectors(dir, u).normalize();

  const angle = Math.random() * Math.PI * 2;
  // Blend between surface density and interior volume
  const rFactor = Math.random() < surfaceWeight
    ? (0.75 + Math.random() * 0.25) * radius // surface beads
    : Math.sqrt(Math.random()) * radius;    // interior dots

  const normalOffset = new THREE.Vector3()
    .addScaledVector(u, Math.cos(angle) * rFactor)
    .addScaledVector(v, Math.sin(angle) * rFactor);

  return center.add(normalOffset);
}

/**
 * Generates the target coordinate for the 3D Gmail 'M' shape
 * directly referenced from the user's provided visual reference.
 *
 * Structure:
 * - Left rounded vertical pillar (capsule)
 * - Right rounded vertical pillar (capsule)
 * - Left diagonal V fold arm
 * - Right diagonal V fold arm
 * - Rear receding bottom envelope creases (for 3D depth)
 * - Ambient sparkle halo surrounding the entire 'M' symbol
 */
function sampleGmailMTarget(isAmbientHalo: boolean): THREE.Vector3 {
  // Primary 'M' geometry landmarks
  const colX = 1.05;
  const colBottom = -0.7;
  const colTop = 0.68;
  const tubeRadius = 0.23;

  const leftBottom = new THREE.Vector3(-colX, colBottom, 0.0);
  const leftTop = new THREE.Vector3(-colX, colTop, 0.0);

  const rightBottom = new THREE.Vector3(colX, colBottom, 0.0);
  const rightTop = new THREE.Vector3(colX, colTop, 0.0);

  const vApex = new THREE.Vector3(0.0, -0.28, 0.05); // Central V bottom crease
  const rearCrease = new THREE.Vector3(0.0, -0.05, -0.26); // Rear envelope bottom

  if (isAmbientHalo) {
    // Ambient floating sparks loosely dispersed around the 'M'
    const base = sampleGmailMTarget(false);
    const auraDist = 0.15 + Math.random() * 0.65;
    const phi = Math.random() * Math.PI * 2;
    const theta = Math.acos(2 * Math.random() - 1);
    return base.add(new THREE.Vector3(
      auraDist * Math.sin(theta) * Math.cos(phi),
      auraDist * Math.sin(theta) * Math.sin(phi),
      auraDist * Math.cos(theta) * 0.6
    ));
  }

  const part = Math.random();

  if (part < 0.25) {
    // 1. Left Vertical Pillar
    return sampleCapsulePoint(leftBottom, leftTop, tubeRadius, 0.6);
  } else if (part < 0.50) {
    // 2. Right Vertical Pillar
    return sampleCapsulePoint(rightBottom, rightTop, tubeRadius, 0.6);
  } else if (part < 0.72) {
    // 3. Left Diagonal V-Arm (from top-left to central V apex)
    return sampleCapsulePoint(leftTop, vApex, tubeRadius * 0.95, 0.55);
  } else if (part < 0.94) {
    // 4. Right Diagonal V-Arm (from top-right to central V apex)
    return sampleCapsulePoint(rightTop, vApex, tubeRadius * 0.95, 0.55);
  } else {
    // 5. Rear Receding Envelope Folds (giving 3D depth as seen in reference image)
    const foldChoice = Math.random();
    if (foldChoice < 0.5) {
      return sampleCapsulePoint(leftBottom, rearCrease, tubeRadius * 0.45, 0.3);
    } else {
      return sampleCapsulePoint(rightBottom, rearCrease, tubeRadius * 0.45, 0.3);
    }
  }
}

/**
 * Creates the 3D Gmail 'M' shape composed purely of glowing white dots,
 * modeled after the reference image:
 *
 * - 3 distinct dot size scales (prominent beads, dense body fill, and ambient halo sparks).
 * - All dots are pure, crystalline white (#ffffff) with additive luminescence.
 * - Smooth bi-directional explosion from the ball into the exact 3D Gmail 'M' logo.
 */
export function createGmailMorphSystem(): GmailMorphSystem {
  const group = new THREE.Group();
  group.visible = false;

  const dotTexture = createSphericalPearlTexture();

  // 3 Batches with different point sizes to replicate the visual reference:
  // - Large beads: the bold, spherical glossy beads on the tubes
  // - Medium dots: the dense volumetric envelope body
  // - Fine sparks: the floating ambient aura sparks around the symbol
  const batchConfigs = [
    { count: 700, size: 0.115, haloRatio: 0.05, opacity: 0.95 },  // Large beads
    { count: 1800, size: 0.065, haloRatio: 0.12, opacity: 0.9 },  // Medium body fill
    { count: 900, size: 0.032, haloRatio: 0.65, opacity: 0.8 },   // Fine halo embers
  ];

  const batches: DotBatch[] = [];

  let globalPointIdx = 0;
  const totalCount = batchConfigs.reduce((acc, c) => acc + c.count, 0);

  batchConfigs.forEach((cfg) => {
    const { count, size, haloRatio, opacity } = cfg;

    const startPositions = new Float32Array(count * 3);
    const explodePositions = new Float32Array(count * 3);
    const targetPositions = new Float32Array(count * 3);
    const currentPositions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const gIdx = globalPointIdx++;
      const i3 = i * 3;

      // 1. Initial Position on the 3D ball (Fibonacci uniform sphere)
      const phi = Math.acos(1 - (2 * (gIdx + 0.5)) / totalCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * gIdx;
      const sr = 0.76 * (0.92 + Math.random() * 0.16);

      const sx = sr * Math.sin(phi) * Math.cos(theta);
      const sy = sr * Math.sin(phi) * Math.sin(theta);
      const sz = sr * Math.cos(phi);

      startPositions[i3] = sx;
      startPositions[i3 + 1] = sy;
      startPositions[i3 + 2] = sz;

      currentPositions[i3] = sx;
      currentPositions[i3 + 1] = sy;
      currentPositions[i3 + 2] = sz;

      // 2. Explosion Trajectory (Radial shockwave blast)
      const dir = new THREE.Vector3(sx, sy, sz).normalize();
      const blastDist = 1.6 + Math.random() * 2.2;
      explodePositions[i3] = sx + dir.x * blastDist + (Math.random() - 0.5) * 0.9;
      explodePositions[i3 + 1] = sy + dir.y * blastDist + (Math.random() - 0.5) * 0.9;
      explodePositions[i3 + 2] = sz + dir.z * blastDist + (Math.random() - 0.5) * 0.9;

      // 3. Target Position forming the Gmail 'M' symbol from reference image
      const isHalo = Math.random() < haloRatio;
      const targetPos = sampleGmailMTarget(isHalo);

      targetPositions[i3] = targetPos.x;
      targetPositions[i3 + 1] = targetPos.y;
      targetPositions[i3 + 2] = targetPos.z;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(currentPositions, 3));

    const material = new THREE.PointsMaterial({
      size,
      map: dotTexture || undefined,
      color: 0xffffff, // Pure white dots as requested
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointsMesh = new THREE.Points(geometry, material);
    group.add(pointsMesh);

    batches.push({
      pointsMesh,
      geometry,
      material,
      startPositions,
      explodePositions,
      targetPositions,
      currentPositions,
      count,
    });
  });

  // Luminous white core point light (giving intense additive gleam like the reference)
  const coreLight = new THREE.PointLight(0xffffff, 3.2, 5.0);
  coreLight.position.set(0, 0, 0.4);
  group.add(coreLight);

  // -------------------------------------------------------------
  // Animation Render Loop Update
  // -------------------------------------------------------------
  const update = (progress: number, time: number) => {
    const p = Math.max(0, Math.min(1, progress));

    if (p < 0.01) {
      group.visible = false;
      return;
    }

    group.visible = true;

    if (p < 0.38) {
      // --- PHASE 1: BALL SHATTERS & EXPLODES (0.01 -> 0.38) ---
      const t = p / 0.38;
      const explodeT = Math.sin(t * Math.PI * 0.5);

      batches.forEach((b) => {
        const { currentPositions, startPositions, explodePositions, count, geometry, material } = b;

        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          const sx = startPositions[i3];
          const sy = startPositions[i3 + 1];
          const sz = startPositions[i3 + 2];

          const ex = explodePositions[i3];
          const ey = explodePositions[i3 + 1];
          const ez = explodePositions[i3 + 2];

          currentPositions[i3] = sx + (ex - sx) * explodeT;
          currentPositions[i3 + 1] = sy + (ey - sy) * explodeT;
          currentPositions[i3 + 2] = sz + (ez - sz) * explodeT;
        }

        geometry.attributes.position.needsUpdate = true;
        material.opacity = Math.min(1, p * 4.0);
      });

      group.position.set(0, 0, 0);
      group.rotation.set(0, 0, 0);
    } else {
      // --- PHASE 2: CONVERGE & ASSEMBLE GMAIL 'M' (0.38 -> 1.0) ---
      const t = (p - 0.38) / 0.62;
      const smoothT = t * t * (3 - 2 * t);
      const wave = p > 0.85 ? (p - 0.85) / 0.15 : 0;

      batches.forEach((b) => {
        const { currentPositions, explodePositions, targetPositions, count, geometry, material } = b;

        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          const ex = explodePositions[i3];
          const ey = explodePositions[i3 + 1];
          const ez = explodePositions[i3 + 2];

          const tx = targetPositions[i3];
          const ty = targetPositions[i3 + 1];
          const tz = targetPositions[i3 + 2];

          const posX = ex + (tx - ex) * smoothT;
          let posY = ey + (ty - ey) * smoothT;
          let posZ = ez + (tz - ez) * smoothT;

          // Subtle organic floating shimmer once assembled in Contact
          if (wave > 0) {
            const shimmer = Math.sin(time * 2.6 + tx * 3.0 + ty * 2.2) * (0.016 * wave);
            posY += shimmer;
            posZ += Math.cos(time * 1.8 + tx * 2.0) * (0.012 * wave);
          }

          currentPositions[i3] = posX;
          currentPositions[i3 + 1] = posY;
          currentPositions[i3 + 2] = posZ;
        }

        geometry.attributes.position.needsUpdate = true;
        material.opacity = 1.0;
      });

      // Active hovering in Contact section (smooth 3D floating yaw/pitch)
      if (wave > 0) {
        group.position.y = Math.sin(time * 1.4) * (0.055 * wave);
        group.position.x = Math.cos(time * 0.9) * (0.028 * wave);
        group.rotation.y = Math.sin(time * 0.65) * (0.16 * wave);
        group.rotation.x = Math.cos(time * 0.85) * (0.07 * wave);
        coreLight.intensity = 3.2 + Math.sin(time * 2.4) * 0.7;
      } else {
        group.position.set(0, 0, 0);
        group.rotation.set(0, 0, 0);
      }
    }
  };

  const dispose = () => {
    batches.forEach((b) => {
      b.geometry.dispose();
      b.material.dispose();
    });
    if (dotTexture) dotTexture.dispose();
  };

  return {
    group,
    update,
    dispose,
  };
}
