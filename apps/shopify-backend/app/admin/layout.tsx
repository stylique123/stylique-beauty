import React from 'react';
import Link from 'next/link';
import { Database, Users, Settings, Activity, ShieldAlert } from 'lucide-react';

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-900 text-slate-100">
      {/* Super Admin Sidebar */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-xl font-bold">HQ</span>
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight">Stylique Admin</h1>
            <p className="text-xs text-slate-400">Master Control Plane</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2 mt-8">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-indigo-500/10 text-indigo-400 rounded-xl font-medium">
            <Activity className="w-5 h-5" />
            Global Overview
          </Link>
          <Link href="/admin/brands" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-colors">
            <Users className="w-5 h-5" />
            Brand CRM
          </Link>
          <Link href="/admin/database" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-colors">
            <Database className="w-5 h-5" />
            Database Health
          </Link>
          <Link href="/admin/security" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-colors">
            <ShieldAlert className="w-5 h-5" />
            API & Security
          </Link>
        </nav>

        <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium">Systems Nominal</span>
          </div>
          <p className="text-xs text-slate-500">v1.0.0-beta</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-900 p-8">
        {children}
      </main>
    </div>
  );
}
