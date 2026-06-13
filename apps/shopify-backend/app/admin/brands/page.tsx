import React from 'react';
import { Card } from '@stylique/ui';
import { Shield, MoreVertical, Search, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export default function BrandsCRM() {
  const mockBrands = [
    { id: 'b1', domain: 'fentybeauty.myshopify.com', plan: 'ULTIMATE', status: 'ACTIVE', mrr: '$999', tokens: '8.4M / 10M' },
    { id: 'b2', domain: 'glowrecipe.myshopify.com', plan: 'GROWTH', status: 'ACTIVE', mrr: '$299', tokens: '1.2M / 2.5M' },
    { id: 'b3', domain: 'charlottetilbury.myshopify.com', plan: 'STARTER', status: 'WARNING', mrr: '$99', tokens: '990K / 1M' },
    { id: 'b4', domain: 'rarebeauty.myshopify.com', plan: 'GROWTH', status: 'SUSPENDED', mrr: '$0', tokens: '0 / 2.5M' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Brand CRM</h1>
          <p className="text-slate-400">Manage onboarded stores, API tiers, and billing statuses.</p>
        </div>
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search domains..." 
            className="pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </div>

      <Card className="bg-slate-900 border-slate-800 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/50">
              <th className="p-4 font-semibold text-slate-400 text-sm">Shopify Domain</th>
              <th className="p-4 font-semibold text-slate-400 text-sm">Status</th>
              <th className="p-4 font-semibold text-slate-400 text-sm">Plan Tier</th>
              <th className="p-4 font-semibold text-slate-400 text-sm">Usage (30d)</th>
              <th className="p-4 font-semibold text-slate-400 text-sm">MRR</th>
              <th className="p-4 font-semibold text-slate-400 text-sm text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {mockBrands.map(brand => (
              <tr key={brand.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-4 font-medium text-white">{brand.domain}</td>
                <td className="p-4">
                  {brand.status === 'ACTIVE' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"><CheckCircle2 className="w-3.5 h-3.5" /> Active</span>}
                  {brand.status === 'WARNING' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20"><AlertCircle className="w-3.5 h-3.5" /> Over Limit</span>}
                  {brand.status === 'SUSPENDED' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20"><XCircle className="w-3.5 h-3.5" /> Suspended</span>}
                </td>
                <td className="p-4">
                  <span className="inline-flex px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs font-semibold tracking-wider">
                    {brand.plan}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-slate-300">{brand.tokens}</span>
                    <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${brand.status === 'WARNING' ? 'bg-amber-500' : 'bg-indigo-500'}`} 
                        style={{ width: brand.status === 'WARNING' ? '95%' : brand.status === 'SUSPENDED' ? '0%' : '60%' }} 
                      />
                    </div>
                  </div>
                </td>
                <td className="p-4 text-slate-300">{brand.mrr}</td>
                <td className="p-4 text-right">
                  <button className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
