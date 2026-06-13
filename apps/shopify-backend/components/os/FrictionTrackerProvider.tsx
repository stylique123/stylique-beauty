"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { useStyliqueOS } from "./StyliqueOSProvider";

export type FrictionType = 'none' | 'shade_confusion' | 'ingredient_hesitation' | 'cart_abandonment';

interface FrictionState {
  currentFriction: FrictionType;
  lastFrictionTimestamp: number | null;
  shadeSwitchCount: number;
  timeInIngredientsMs: number;
}

interface FrictionContextType {
  state: FrictionState;
  reportShadeSwitch: () => void;
  reportIngredientsViewStart: () => void;
  reportIngredientsViewEnd: () => void;
  resetFriction: () => void;
}

const FrictionContext = createContext<FrictionContextType | undefined>(undefined);

export function FrictionTrackerProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FrictionState>({
    currentFriction: 'none',
    lastFrictionTimestamp: null,
    shadeSwitchCount: 0,
    timeInIngredientsMs: 0,
  });

  const { isAdvisorOpen, setIsAdvisorOpen, setMessages, messages, profile } = useStyliqueOS();

  // Logic to interpret friction and trigger Stella aggressively
  useEffect(() => {
    if (isAdvisorOpen) return;

    if (state.currentFriction === 'shade_confusion' || state.currentFriction === 'ingredient_hesitation') {
      // Log to Prisma DB
      fetch('/api/analytics/friction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          frictionType: state.currentFriction,
          shopDomain: 'stylique-test.myshopify.com', // In real app, pull from context
          sessionId: profile.id || 'guest',
        })
      }).catch(err => console.error('Failed to log friction:', err));
    }

    if (state.currentFriction === 'shade_confusion') {
      setMessages(prev => [...prev, {
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: "I notice you're comparing shades. Based on your profile, I can calculate the exact mathematical match. Would you like me to find your perfect shade and apply it in AR?",
        timestamp: new Date()
      }]);
      setIsAdvisorOpen(true);
      resetFriction();
    } else if (state.currentFriction === 'ingredient_hesitation') {
      setMessages(prev => [...prev, {
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: "I see you're checking the ingredients. This formula is 100% non-comedogenic and vegan. Do you have any specific sensitivities I should double-check for you?",
        timestamp: new Date()
      }]);
      setIsAdvisorOpen(true);
      resetFriction();
    }
  }, [state.currentFriction, isAdvisorOpen, setMessages, setIsAdvisorOpen]);

  const reportShadeSwitch = useCallback(() => {
    setState(prev => {
      const newCount = prev.shadeSwitchCount + 1;
      // If switched more than 3 times rapidly, trigger shade confusion
      if (newCount >= 3) {
        return { ...prev, currentFriction: 'shade_confusion', lastFrictionTimestamp: Date.now(), shadeSwitchCount: 0 };
      }
      return { ...prev, shadeSwitchCount: newCount };
    });
  }, []);

  const [ingredientsStartTime, setIngredientsStartTime] = useState<number | null>(null);

  const reportIngredientsViewStart = useCallback(() => {
    setIngredientsStartTime(Date.now());
  }, []);

  const reportIngredientsViewEnd = useCallback(() => {
    if (ingredientsStartTime) {
      const duration = Date.now() - ingredientsStartTime;
      setState(prev => {
        const total = prev.timeInIngredientsMs + duration;
        // If stared at ingredients for more than 8 seconds, trigger hesitation
        if (total > 8000) {
          return { ...prev, currentFriction: 'ingredient_hesitation', lastFrictionTimestamp: Date.now(), timeInIngredientsMs: 0 };
        }
        return { ...prev, timeInIngredientsMs: total };
      });
      setIngredientsStartTime(null);
    }
  }, [ingredientsStartTime]);

  const resetFriction = useCallback(() => {
    setState({
      currentFriction: 'none',
      lastFrictionTimestamp: null,
      shadeSwitchCount: 0,
      timeInIngredientsMs: 0,
    });
  }, []);

  return (
    <FrictionContext.Provider value={{ state, reportShadeSwitch, reportIngredientsViewStart, reportIngredientsViewEnd, resetFriction }}>
      {children}
    </FrictionContext.Provider>
  );
}

export function useFrictionTracker() {
  const context = useContext(FrictionContext);
  if (context === undefined) {
    throw new Error("useFrictionTracker must be used within a FrictionTrackerProvider");
  }
  return context;
}
