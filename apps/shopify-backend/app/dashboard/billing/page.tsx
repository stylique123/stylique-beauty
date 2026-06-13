"use client";

import React, { useState } from 'react';
import { Card, Button } from '@stylique/ui';
import { Check, Zap, Crown, Rocket } from 'lucide-react';
import { cn } from '@stylique/ui';

const plans = [
  {
    id: 'STARTER',
    name: 'Starter',
    icon: Rocket,
    price: '$49',
    description: 'Perfect for emerging brands starting their AI journey.',
    features: [
      'Basic Sales Agent (Stella)',
      '1,000 AI Sessions / month',
      'Standard UI Widget',
      'Daily Catalog Sync',
      'Basic Analytics'
    ],
    recommended: false,
    color: 'bg-zinc-100 dark:bg-zinc-800'
  },
  {
    id: 'GROWTH',
    name: 'Growth',
    icon: Zap,
    price: '$199',
    description: 'Scale your revenue with deep AI insights and AR Try-On.',
    features: [
      'Advanced Sales Agent (Stella)',
      '10,000 AI Sessions / month',
      'Full AR Try-On Support',
      'Real-time Catalog Sync',
      '10x Revenue Analytics Loop',
      'Custom Brand Persona'
    ],
    recommended: true,
    color: 'bg-gradient-to-br from-violet-500 to-indigo-600'
  },
  {
    id: 'ULTIMATE',
    name: 'Ultimate',
    icon: Crown,
    price: '$899',
    description: 'Unlimited power for high-volume enterprise brands.',
    features: [
      'Everything in Growth',
      'Unlimited AI Sessions',
      'Dedicated Account Manager',
      'Custom Deep AI Models',
      'API Access',
      'SLA Guarantee'
    ],
    recommended: false,
    color: 'bg-zinc-900 dark:bg-black border border-zinc-200 dark:border-zinc-800'
  }
];

export default function BillingPage() {
  const [currentPlan, setCurrentPlan] = useState('GROWTH');
  const [isUpgrading, setIsUpgrading] = useState(false);

  const handleUpgrade = async (planId: string) => {
    if (planId === currentPlan) return;
    setIsUpgrading(true);
    // Simulate API call to Shopify Billing API
    await new Promise(r => setTimeout(r, 1500));
    setCurrentPlan(planId);
    setIsUpgrading(false);
  };

  return (
    <div className="space-y-12 animate-fade-in max-w-6xl mx-auto">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-black tracking-tight">Supercharge Your Revenue</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Choose the plan that fits your brand's scale. Upgrade anytime to unlock more AI sessions and deeper analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => {
          const isCurrent = currentPlan === plan.id;
          return (
            <div key={plan.id} className="relative">
              {plan.recommended && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <span className="bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-violet-500/30">
                    Most Popular
                  </span>
                </div>
              )}
              <Card 
                className={cn(
                  "p-8 h-full flex flex-col relative overflow-hidden transition-all duration-300",
                  plan.recommended ? "border-2 border-violet-500 shadow-xl shadow-violet-500/10" : "border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700",
                  plan.id === 'ULTIMATE' && "bg-zinc-900 text-white dark:bg-black"
                )}
              >
                {/* Background Decor */}
                {plan.recommended && (
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-violet-500/10 blur-2xl rounded-full" />
                )}

                <div className="mb-6">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", plan.color, plan.id === 'STARTER' && 'text-zinc-900 dark:text-white', plan.id === 'ULTIMATE' && 'bg-white/10')}>
                    <plan.icon className={cn("w-6 h-6", plan.id === 'GROWTH' ? 'text-white' : '')} />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className={cn("text-sm", plan.id === 'ULTIMATE' ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400 h-10')}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className={cn("font-medium", plan.id === 'ULTIMATE' ? 'text-zinc-400' : 'text-zinc-500')}>/mo</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className={cn("w-5 h-5 shrink-0", plan.id === 'GROWTH' ? 'text-violet-500' : plan.id === 'ULTIMATE' ? 'text-zinc-300' : 'text-zinc-400')} />
                      <span className={plan.id === 'ULTIMATE' ? 'text-zinc-300' : 'text-zinc-700 dark:text-zinc-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handleUpgrade(plan.id)}
                  disabled={isCurrent || isUpgrading}
                  variant={isCurrent ? 'secondary' : plan.recommended ? 'primary' : 'outline'} 
                  size="lg" 
                  className={cn("w-full", plan.id === 'ULTIMATE' && !isCurrent ? 'bg-white text-black hover:bg-zinc-200 border-0' : '')}
                >
                  {isCurrent ? 'Current Plan' : isUpgrading ? 'Updating...' : `Upgrade to ${plan.name}`}
                </Button>
              </Card>
            </div>
          );
        })}
      </div>

      <Card className="p-8 mt-12 bg-zinc-50 dark:bg-zinc-900 border-dashed border-2 border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Usage Limits & Overages</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xl">
              You are currently on the <strong className="text-violet-500">{currentPlan}</strong> plan. You have used <strong className="text-zinc-900 dark:text-white">4,250</strong> of your <strong className="text-zinc-900 dark:text-white">10,000</strong> included AI sessions this month. Additional sessions will be billed at $0.02/session.
            </p>
          </div>
          <div className="w-full md:w-64">
            <div className="flex justify-between text-xs font-semibold mb-2">
              <span>Usage</span>
              <span>42%</span>
            </div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-violet-500 rounded-full" style={{ width: '42%' }} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
