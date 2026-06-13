"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Package, Users, MessageSquare, CreditCard } from "lucide-react";
import { cn } from "@stylique/ui";

const navItems = [
  { name: "Analytics Hub", href: "/dashboard", icon: BarChart3 },
  { name: "Catalog Sync", href: "/dashboard/catalog", icon: Package },
  { name: "Brand Persona", href: "/dashboard/persona", icon: Users },
  { name: "Widget Config", href: "/dashboard/widget", icon: MessageSquare },
  { name: "SaaS Billing", href: "/dashboard/billing", icon: CreditCard },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl border-r border-zinc-200 dark:border-zinc-800 flex flex-col p-6 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <span className="text-white font-black text-lg tracking-tighter">S</span>
          </div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
            Stylique Admin
          </span>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-white"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-violet-600 dark:text-violet-400" : "text-zinc-400")} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">
              LG
            </div>
            <div>
              <div className="text-sm font-semibold">LumiGlow Store</div>
              <div className="text-xs text-zinc-500">Ultimate Plan</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-10">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
