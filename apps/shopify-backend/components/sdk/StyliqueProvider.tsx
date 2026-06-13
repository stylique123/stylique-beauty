"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { BeautyProfile, ChatMessage } from "@stylique/types";

interface StyliqueContextType {
  profile: BeautyProfile | null;
  setProfile: (profile: BeautyProfile | null) => void;
  updateProfile: (updates: Partial<BeautyProfile>) => void;
  messages: ChatMessage[];
  setMessages: (messages: ChatMessage[]) => void;
  activeProductId: string | null;
  setActiveProductId: (id: string | null) => void;
  isAdvisorOpen: boolean;
  setIsAdvisorOpen: (open: boolean) => void;
  isTryOnOpen: boolean;
  setIsTryOnOpen: (open: boolean) => void;
  tryOnShadeId: string | null;
  setTryOnShadeId: (id: string | null) => void;
}

const StyliqueContext = createContext<StyliqueContextType | undefined>(undefined);

export function StyliqueProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<BeautyProfile | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [isTryOnOpen, setIsTryOnOpen] = useState(false);
  const [tryOnShadeId, setTryOnShadeId] = useState<string | null>(null);

  const updateProfile = (updates: Partial<BeautyProfile>) => {
    setProfile(prev => {
      if (!prev) {
        // Provide a default empty profile if none exists
        return {
          id: `prof-${Date.now()}`,
          shopperId: "guest",
          brandId: "demo",
          skinType: null,
          undertone: null,
          skinToneDepth: null,
          concerns: [],
          faceShape: null,
          eyeShape: null,
          coveragePreference: null,
          finishPreference: null,
          makeupStyle: null,
          budget: null,
          fragranceFree: false,
          veganOnly: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          ...updates,
        };
      }
      return { ...prev, ...updates };
    });
  };

  return (
    <StyliqueContext.Provider
      value={{
        profile,
        setProfile,
        updateProfile,
        messages,
        setMessages,
        activeProductId,
        setActiveProductId,
        isAdvisorOpen,
        setIsAdvisorOpen,
        isTryOnOpen,
        setIsTryOnOpen,
        tryOnShadeId,
        setTryOnShadeId,
      }}
    >
      {children}
    </StyliqueContext.Provider>
  );
}

export function useStylique() {
  const context = useContext(StyliqueContext);
  if (context === undefined) {
    throw new Error("useStylique must be used within a StyliqueProvider");
  }
  return context;
}
