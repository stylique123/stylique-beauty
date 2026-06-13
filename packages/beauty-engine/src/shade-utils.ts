import type { SkinToneDepth, Undertone, ProductShade } from '@stylique/types';

// Skin tone depth to lightness value (0-100)
const DEPTH_LIGHTNESS: Record<SkinToneDepth, number> = {
  fair: 92,
  light: 80,
  medium: 65,
  tan: 50,
  deep: 35,
  rich: 20,
};

// Undertone to hue adjustment
const UNDERTONE_HUE: Record<Undertone, number> = {
  warm: 30, // golden/orange
  cool: 340, // pink/rose
  neutral: 20, // beige
  olive: 50, // yellow-green
};

/**
 * Generate a representative hex color for a skin tone
 */
export function skinToneToHex(depth: SkinToneDepth, undertone: Undertone): string {
  const baseColors: Record<SkinToneDepth, Record<Undertone, string>> = {
    fair: { warm: '#FDECD3', cool: '#F8E8E4', neutral: '#FAE8D8', olive: '#F0E6C8' },
    light: { warm: '#F5D5A8', cool: '#F0C8C0', neutral: '#F2CCAA', olive: '#EAD49A' },
    medium: { warm: '#D4956A', cool: '#C8847A', neutral: '#CC8E72', olive: '#C4956A' },
    tan: { warm: '#A0622A', cool: '#966075', neutral: '#A06840', olive: '#98703A' },
    deep: { warm: '#6B3A18', cool: '#5A2E3A', neutral: '#663820', olive: '#5E3E1A' },
    rich: { warm: '#3C1E0A', cool: '#2E1520', neutral: '#381C0C', olive: '#32200A' },
  };
  return baseColors[depth]?.[undertone] ?? '#C68642';
}

/**
 * Score a shade against a beauty profile (0-1)
 */
export function scoreShadeMatch(
  shade: ProductShade,
  skinToneDepth: SkinToneDepth,
  undertone: Undertone
): number {
  let score = 0;

  // Check undertone match
  if (shade.undertone === undertone) {
    score += 0.5;
  } else if (
    (shade.undertone === 'neutral') ||
    (undertone === 'neutral')
  ) {
    score += 0.3;
  } else {
    score += 0.1;
  }

  // Check skin tone depth match
  if (shade.skinToneDepth.includes(skinToneDepth)) {
    score += 0.5;
  } else {
    // Partial credit for adjacent depths
    const depths: SkinToneDepth[] = ['fair', 'light', 'medium', 'tan', 'deep', 'rich'];
    const shaderDepthIndex = depths.indexOf(skinToneDepth);
    const hasAdjacent = shade.skinToneDepth.some(d => {
      const idx = depths.indexOf(d);
      return Math.abs(idx - shaderDepthIndex) === 1;
    });
    score += hasAdjacent ? 0.3 : 0.1;
  }

  return Math.min(score, 1);
}

/**
 * Sort shades by best match for a profile
 */
export function rankShades(
  shades: ProductShade[],
  skinToneDepth: SkinToneDepth,
  undertone: Undertone
): ProductShade[] {
  return [...shades].sort((a, b) => {
    const scoreA = scoreShadeMatch(a, skinToneDepth, undertone);
    const scoreB = scoreShadeMatch(b, skinToneDepth, undertone);
    return scoreB - scoreA;
  });
}
