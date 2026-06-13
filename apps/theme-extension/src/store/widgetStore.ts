import { useState, useCallback, useEffect } from 'react';
import type { Routine } from '@stylique/types';

export interface WidgetMessage {
  role: 'user' | 'assistant';
  text: string;
  metadata?: {
    products?: Array<{
      id: string;
      name: string;
      price: number;
      image: string;
      handle?: string; // Added for product navigation
    }>;
  };
}

const DEFAULT_MESSAGES: WidgetMessage[] = [
  { role: 'assistant', text: "Welcome to Stylique. I'm Stella, your personal beauty executive. I noticed you're browsing our Luminous Foundation line. Are you looking to achieve a flawless matte finish today, or something more dewy?" },
  { role: 'user', text: "I want a matte finish, but I'm not sure what shade I am. I have olive skin." },
  { 
    role: 'assistant', 
    text: "I can absolutely help with that. Based on your olive undertone, Shade #342 is your exact mathematical match. However, to guarantee that flawless matte finish that lasts 12 hours, you cannot just use the foundation alone. You need the full 3-step 'Matte Perfection Bundle'. I've built it for you below. Let's add this to your cart now so you can secure your shade before it sells out.",
    metadata: {
      products: [
        { id: 'prm-1', name: 'Step 1: Shine-Control Primer', price: 38, image: '/assets/primer.png', handle: 'shine-control-primer' },
        { id: 'fnd-1', name: 'Step 2: Luminous Matte Foundation - #342', price: 45, image: '/assets/foundation.png', handle: 'luminous-matte-foundation' },
        { id: 'pwd-1', name: 'Step 3: Translucent Setting Powder', price: 32, image: '/assets/powder.png', handle: 'translucent-setting-powder' }
      ]
    }
  }
];

export function useWidgetState() {
  const [isOpen, setIsOpenState] = useState(false);
  const [activeView, setActiveView] = useState<'chat' | 'routine'>('chat');
  const [messages, setMessagesState] = useState<WidgetMessage[]>(DEFAULT_MESSAGES);
  const [currentRoutine, setCurrentRoutineState] = useState<Routine | null>(null);

  // Load from sessionStorage on mount
  useEffect(() => {
    try {
      const storedIsOpen = window.sessionStorage.getItem('stylique_isOpen');
      if (storedIsOpen !== null) setIsOpenState(storedIsOpen === 'true');

      const storedMessages = window.sessionStorage.getItem('stylique_messages');
      if (storedMessages) setMessagesState(JSON.parse(storedMessages));

      const storedRoutine = window.sessionStorage.getItem('stylique_routine');
      if (storedRoutine) setCurrentRoutineState(JSON.parse(storedRoutine));
    } catch (e) {
      console.error("Failed to load Stylique state from session", e);
    }
  }, []);

  // Setters with persistence
  const setIsOpen = useCallback((open: boolean | ((prev: boolean) => boolean)) => {
    setIsOpenState(prev => {
      const nextOpen = typeof open === 'function' ? open(prev) : open;
      window.sessionStorage.setItem('stylique_isOpen', String(nextOpen));
      return nextOpen;
    });
  }, []);

  const toggleOpen = useCallback(() => setIsOpen(prev => !prev), [setIsOpen]);

  const setMessages = useCallback((msgs: WidgetMessage[] | ((prev: WidgetMessage[]) => WidgetMessage[])) => {
    setMessagesState(prev => {
      const nextMsgs = typeof msgs === 'function' ? msgs(prev) : msgs;
      window.sessionStorage.setItem('stylique_messages', JSON.stringify(nextMsgs));
      return nextMsgs;
    });
  }, []);

  const addMessage = useCallback((role: 'user' | 'assistant', text: string, metadata?: WidgetMessage['metadata']) => {
    setMessages(prev => [...prev, { role, text, metadata }]);
  }, [setMessages]);

  const setCurrentRoutine = useCallback((routine: Routine | null) => {
    setCurrentRoutineState(routine);
    if (routine) {
      window.sessionStorage.setItem('stylique_routine', JSON.stringify(routine));
    } else {
      window.sessionStorage.removeItem('stylique_routine');
    }
  }, []);

  return {
    isOpen,
    setIsOpen,
    toggleOpen,
    activeView,
    setActiveView,
    messages,
    addMessage,
    currentRoutine,
    setCurrentRoutine
  };
}
