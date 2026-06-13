import React from 'react';
import { Card } from './Card';
import { cn } from '../utils';

export interface MetricProps {
  title: string;
  value: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
}

export function Metric({ title, value, trend, icon, className }: MetricProps) {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{title}</h3>
        {icon && <div className="text-violet-500 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 p-2 rounded-lg">{icon}</div>}
      </div>
      <div className="flex items-baseline gap-4">
        <span className="text-3xl font-black tracking-tight text-zinc-900 dark:text-white">{value}</span>
        {trend && (
          <span className={cn(
            "text-sm font-semibold flex items-center gap-1",
            trend.isPositive ? "text-emerald-500" : "text-red-500"
          )}>
            {trend.isPositive ? '↑' : '↓'} {trend.value}
          </span>
        )}
      </div>
    </Card>
  );
}
