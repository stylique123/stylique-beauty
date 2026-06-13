import React from 'react';
import { Card, Metric } from '@stylique/ui';
import { Activity, DollarSign, Store, BrainCircuit } from 'lucide-react';

export default function SuperAdminOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Global Overview</h1>
        <p className="text-slate-400">Master telemetry for all Stylique Beauty operations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <Metric 
            title="Total Active Brands" 
            value="142" 
            trend={{ value: "12 this week", isPositive: true }}
            icon={<Store className="w-5 h-5" />} 
          />
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <Metric 
            title="Network Gross Sales" 
            value="$1.2M" 
            trend={{ value: "18% vs last month", isPositive: true }}
            icon={<DollarSign className="w-5 h-5" />} 
          />
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <Metric 
            title="AI Inferences (30d)" 
            value="8.4M" 
            trend={{ value: "High capacity warning", isPositive: false }}
            icon={<BrainCircuit className="w-5 h-5 text-amber-500" />} 
          />
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <Metric 
            title="System Latency" 
            value="42ms" 
            trend={{ value: "5ms improved", isPositive: true }}
            icon={<Activity className="w-5 h-5" />} 
          />
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Feed */}
        <Card className="lg:col-span-2 bg-slate-900 border-slate-800 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Recent Network Activity</h2>
          <div className="space-y-4">
            {[
              { id: 1, action: 'Auto-onboarded new store', target: 'glowrecipe.myshopify.com', time: '2 mins ago' },
              { id: 2, action: 'Usage limit warning triggered', target: 'fentybeauty.myshopify.com', time: '14 mins ago' },
              { id: 3, action: 'Global prompt patch deployed', target: 'v1.4.2 (Anti-hallucination)', time: '1 hour ago' },
              { id: 4, action: 'Payment received (SaaS)', target: 'charlottetilbury.myshopify.com', time: '3 hours ago' },
            ].map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div>
                  <p className="font-medium text-white">{activity.action}</p>
                  <p className="text-sm text-slate-400">{activity.target}</p>
                </div>
                <span className="text-xs font-medium text-slate-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* System Health */}
        <Card className="bg-slate-900 border-slate-800 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Infrastructure Status</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">PostgreSQL (Primary)</span>
                <span className="text-emerald-400 font-medium">99.9% Uptime</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[45%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Redis Cache (Tokens)</span>
                <span className="text-amber-400 font-medium">85% Load</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[85%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Gemini LLM Quota</span>
                <span className="text-emerald-400 font-medium">Healthy</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[30%]" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
