import { useEffect, useRef, useState } from 'react';

export type HesitationType = 'shade_confusion' | 'ingredient_hesitation' | null;

export function useFrictionTracker(shopDomain: string, brandId: string) {
  const [hesitation, setHesitation] = useState<HesitationType>(null);
  
  // Trackers
  const clicksOnVariantSelectors = useRef(0);
  const ingredientDwellTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 1. Shade Confusion Tracker
    // Most Shopify themes use inputs with name="id" or classes like .variant-selector, .swatch
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Heuristic: If they click a label containing shade names, or standard Shopify swatch classes
      if (
        target.closest('.swatch') || 
        target.closest('[name="id"]') ||
        target.textContent?.toLowerCase().includes('shade')
      ) {
        clicksOnVariantSelectors.current += 1;
        
        // If they click more than 3 times rapidly, they are confused
        if (clicksOnVariantSelectors.current >= 3) {
          setHesitation('shade_confusion');
          clicksOnVariantSelectors.current = 0; // reset
        }
      }
    };

    // 2. Ingredient Hesitation Tracker (Scroll & Dwell)
    const handleScroll = () => {
      // Find elements that look like an ingredients section
      const headers = Array.from(document.querySelectorAll('h2, h3, h4, span, div.accordion-title'));
      const ingredientElement = headers.find(el => el.textContent?.toLowerCase().includes('ingredient'));

      if (ingredientElement) {
        const rect = ingredientElement.getBoundingClientRect();
        const isInView = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (isInView) {
          if (!ingredientDwellTimer.current) {
            // Start timer: 8 seconds of looking at ingredients = hesitation
            ingredientDwellTimer.current = setTimeout(() => {
              setHesitation('ingredient_hesitation');
            }, 8000);
          }
        } else {
          // Scrolled away, clear timer
          if (ingredientDwellTimer.current) {
            clearTimeout(ingredientDwellTimer.current);
            ingredientDwellTimer.current = null;
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      document.removeEventListener('scroll', handleScroll);
      if (ingredientDwellTimer.current) clearTimeout(ingredientDwellTimer.current);
    };
  }, []);

  return { hesitation, setHesitation };
}
