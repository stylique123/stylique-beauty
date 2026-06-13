"use client";

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import type { BeautyProfile, ChatMessage } from "@stylique/types";
import { BeautyProfileEngine } from "@stylique/beauty-engine";

export type OSDialogState = 'none' | 'try_on' | 'routine_builder';

interface StyliqueOSContextType {
  profile: BeautyProfile;
  updateProfile: (updates: Partial<BeautyProfile>) => void;
  messages: ChatMessage[];
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  
  // OS Routing State
  activeDialog: OSDialogState;
  setActiveDialog: (dialog: OSDialogState) => void;
  
  // Try-On Context
  tryOnProductId: string | null;
  setTryOnProductId: (id: string | null) => void;
  tryOnShadeId: string | null;
  setTryOnShadeId: (id: string | null) => void;
  
  // Advisor Context
  isAdvisorOpen: boolean;
  setIsAdvisorOpen: (open: boolean) => void;
}

const StyliqueOSContext = createContext<StyliqueOSContextType | undefined>(undefined);

import { FrictionTrackerProvider } from "./FrictionTrackerProvider";

export function StyliqueOSProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<BeautyProfile>(BeautyProfileEngine.createDefault('guest-session'));
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  
  const [activeDialog, setActiveDialog] = useState<OSDialogState>('none');
  const [tryOnProductId, setTryOnProductId] = useState<string | null>(null);
  const [tryOnShadeId, setTryOnShadeId] = useState<string | null>(null);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);

  const updateProfile = (updates: Partial<BeautyProfile>) => {
    setProfile(prev => BeautyProfileEngine.updateProfile(prev, updates));
  };

  return (
    <StyliqueOSContext.Provider
      value={{
        profile,
        updateProfile,
        messages,
        setMessages,
        activeDialog,
        setActiveDialog,
        tryOnProductId,
        setTryOnProductId,
        tryOnShadeId,
        setTryOnShadeId,
        isAdvisorOpen,
        setIsAdvisorOpen,
      }}
    >
      <FrictionTrackerProvider>
        {children}
      </FrictionTrackerProvider>
    </StyliqueOSContext.Provider>
  );
}

export function useStyliqueOS() {
  const context = useContext(StyliqueOSContext);
  if (context === undefined) {
    throw new Error("useStyliqueOS must be used within a StyliqueOSProvider");
  }
  return context;
}
