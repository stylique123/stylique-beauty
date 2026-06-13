"use client";

import React from 'react';
import { Card, Metric, Button } from '@stylique/ui';
import { TrendingUp, DollarSign, Users, ShoppingBag, Sparkles, ArrowRight, Zap, Target, MessageSquare } from 'lucide-react';

export default function AnalyticsHub() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">Value Realization</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">Stella's impact on your revenue and actionable intelligence.</p>
        </div>
        <Button size="md" className="gap-2">
          <Sparkles className="w-4 h-4" />
          Generate Action Plan
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Metric 
          title="AI-Driven Revenue (30d)" 
          value="$24,500" 
          trend={{ value: "+18.2%", isPositive: true }} 
          icon={<DollarSign className="w-5 h-5" />} 
        />
        <Metric 
          title="Average Order Value" 
          value="$85.20" 
          trend={{ value: "+$12.50 vs base", isPositive: true }} 
          icon={<TrendingUp className="w-5 h-5" />} 
        />
        <Metric 
          title="Active AI Sessions" 
          value="1,240" 
          trend={{ value: "+5.4%", isPositive: true }} 
          icon={<Users className="w-5 h-5" />} 
        />
        <Metric 
          title="Conversion Rate (AI)" 
          value="8.4%" 
          trend={{ value: "3.2x vs store avg", isPositive: true }} 
          icon={<ShoppingBag className="w-5 h-5" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">The Intelligence Loop</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Real-time learnings and recommendations extracted by Stella.</p>
          
          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-l-violet-500 hover:shadow-xl transition-all">
              <div className="flex gap-4">
                <div className="bg-violet-100 dark:bg-violet-500/20 p-3 rounded-full h-fit">
                  <Target className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Catalog Gap Detected: Cool Undertones</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    50 shoppers with cool undertones abandoned cart this week because your "Luminous Concealer" line lacks a medium-cool shade.
                  </p>
                  <Button variant="outline" size="sm">View Shopper Profiles <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-emerald-500 hover:shadow-xl transition-all">
              <div className="flex gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-500/20 p-3 rounded-full h-fit">
                  <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Winning Bundle Identified</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    Stella successfully bundled "Hydrating Primer" with "Luminous Foundation" 45 times this week, resulting in a 22% conversion bump for dry-skin profiles.
                  </p>
                  <Button variant="outline" size="sm">Create Permanent Bundle <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-amber-500 hover:shadow-xl transition-all">
              <div className="flex gap-4">
                <div className="bg-amber-100 dark:bg-amber-500/20 p-3 rounded-full h-fit">
                  <MessageSquare className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Ingredient Hesitation: "Fragrance"</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    12 shoppers hesitated at checkout asking if the "Night Repair Serum" contains synthetic fragrance. Stella saved 8 sales by explaining your natural essential oil blend.
                  </p>
                  <Button variant="outline" size="sm">Update Product Description <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">10x Revenue Checklist</h2>
          <Card className="p-6 bg-gradient-to-br from-violet-600 to-indigo-800 text-white border-0">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-violet-300" /> Action Required
            </h3>
            <p className="text-violet-100 mb-6 text-sm">
              Complete these AI-driven directives to unlock an estimated $4,200 in monthly recurring revenue.
            </p>
            
            <div className="space-y-3">
              <label className="flex items-start gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <input type="checkbox" className="mt-1 rounded border-white/30 text-violet-500 focus:ring-violet-500" />
                <span className="text-sm font-medium">Restock "Rich Warm" Foundation</span>
              </label>
              <label className="flex items-start gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <input type="checkbox" className="mt-1 rounded border-white/30 text-violet-500 focus:ring-violet-500" />
                <span className="text-sm font-medium">Activate Post-Purchase Routine Upsell</span>
              </label>
              <label className="flex items-start gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <input type="checkbox" className="mt-1 rounded border-white/30 text-violet-500 focus:ring-violet-500" />
                <span className="text-sm font-medium">Update Persona: Emphasize "Vegan"</span>
              </label>
            </div>
            
            <Button className="w-full mt-6 bg-white text-indigo-900 hover:bg-zinc-100">Review All Tasks</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
