"use client";

import React, { useState } from 'react';
import { Card, Button } from '@stylique/ui';
import { Wand2, Store, Loader2, Sparkles, AlertCircle } from 'lucide-react';

export default function PersonaConfig() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [persona, setPersona] = useState<any>(null);

  const handleExtract = async () => {
    if (!url) return;
    setIsLoading(true);
    
    try {
      // In a real app, this would use a proper API route with fetch.
      // We simulate the API call delay here for the MVP UI demo.
      await new Promise(r => setTimeout(r, 2000));
      
      setPersona({
        toneOfVoice: "Warm, clinical, expert, and deeply encouraging.",
        coreEthos: "Science-backed formulas with clean ingredients. Always vegan and cruelty-free.",
        uniqueSellingPropositions: [
          "Dermatologist tested and approved",
          "100% Vegan & Leaping Bunny Certified",
          "Customizable routines for sensitive skin"
        ],
        blacklistedIngredients: ["parabens", "sulfates", "phthalates", "synthetic fragrance"]
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl">
      <div>
        <h1 className="text-4xl font-black tracking-tight mb-2">Brand Persona</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">Teach Stella how to speak and sell exactly like your best employee.</p>
      </div>

      <Card className="p-8 border-violet-500/20 bg-violet-50/50 dark:bg-violet-900/10">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-violet-500" />
              Auto-Extract Intelligence
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Let Stella scrape your website. She will automatically read your About page, product descriptions, and policies to learn your exact tone of voice and brand ethos.
            </p>
            <div className="flex gap-3 w-full">
              <div className="relative flex-1">
                <Store className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input 
                  type="url" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://yourstore.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-violet-500 outline-none transition-all"
                />
              </div>
              <Button onClick={handleExtract} disabled={!url || isLoading} className="gap-2 shrink-0">
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                Extract Persona
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {persona && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
          <Card className="p-6 space-y-4">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50">Tone of Voice</h3>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
              <p className="text-sm font-medium">{persona.toneOfVoice}</p>
            </div>
            <p className="text-xs text-zinc-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> Stella will use this tone in all chat interactions.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50">Core Ethos</h3>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
              <p className="text-sm font-medium">{persona.coreEthos}</p>
            </div>
          </Card>

          <Card className="p-6 space-y-4 md:col-span-2">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50">Unique Selling Propositions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {persona.uniqueSellingPropositions.map((usp: string, i: number) => (
                <div key={i} className="p-4 rounded-xl bg-violet-50 dark:bg-violet-500/10 border border-violet-100 dark:border-violet-500/20">
                  <p className="text-sm font-semibold text-violet-900 dark:text-violet-200">{usp}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-500 mt-2">Stella will actively weave these USPs into her product recommendations to increase conversion.</p>
          </Card>

          <Card className="p-6 space-y-4 md:col-span-2">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50">Brand Aesthetics</h3>
              <Button variant="outline" size="sm">Edit Assets</Button>
            </div>
            <div className="flex gap-8 items-center p-6 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Primary Color</span>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7c3aed] shadow-inner shadow-black/20" />
                  <span className="font-mono text-sm">#7C3AED</span>
                </div>
              </div>
              <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800" />
              <div className="space-y-2">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Widget Logo</span>
                <div className="w-10 h-10 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center">
                  <span className="text-white dark:text-zinc-900 font-bold">L</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="md:col-span-2 flex justify-end">
            <Button size="lg" className="px-10">Save Persona to Stella</Button>
          </div>
        </div>
      )}
    </div>
  );
}
