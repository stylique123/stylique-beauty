export interface TryOnLayer {
  id: string;
  category: 'base' | 'lips' | 'eyes' | 'cheeks';
  hexColor: string;
  intensity: number; // 0.0 to 1.0
  productName: string;
}

// Converts HEX to RGB
export function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : [255, 255, 255];
}

// Converts RGB back to HEX
export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

// Blends the product hex color with the user's specific undertone
export function adjustColorForUndertone(productHex: string, undertone: 'warm' | 'cool' | 'neutral' | 'olive', depth: string): string {
  const [r, g, b] = hexToRgb(productHex);
  
  let rAdj = r;
  let gAdj = g;
  let bAdj = b;

  // Extremely basic mathematical approximation of how cosmetics shift on skin tones
  switch(undertone) {
    case 'warm':
      // Warm skin pulls yellow/gold, adding warmth to the product
      rAdj = Math.min(255, r + 15);
      gAdj = Math.min(255, g + 10);
      bAdj = Math.max(0, b - 15);
      break;
    case 'cool':
      // Cool skin pulls pink/blue
      rAdj = Math.max(0, r - 10);
      bAdj = Math.min(255, b + 20);
      break;
    case 'olive':
      // Olive skin pulls green, which can muddy certain pinks and reds
      gAdj = Math.min(255, g + 15);
      rAdj = Math.max(0, r - 5);
      bAdj = Math.max(0, b - 10);
      break;
    case 'neutral':
      // Neutral mostly stays true to pan, but depth matters
      break;
  }

  if (depth === 'deep' || depth === 'rich') {
     // Deep skin often requires more pigment saturation to show up
     rAdj = Math.min(255, rAdj * 1.1);
     gAdj = Math.min(255, gAdj * 1.1);
     bAdj = Math.min(255, bAdj * 1.1);
  } else if (depth === 'fair' || depth === 'light') {
     // Light skin can make colors appear much darker
     rAdj = Math.max(0, rAdj * 0.9);
     gAdj = Math.max(0, gAdj * 0.9);
     bAdj = Math.max(0, bAdj * 0.9);
  }

  return rgbToHex(Math.round(rAdj), Math.round(gAdj), Math.round(bAdj));
}
