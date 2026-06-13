import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, glass, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-white/10 shadow-lg overflow-hidden",
        glass ? "bg-white/5 backdrop-blur-xl" : "bg-white dark:bg-zinc-900",
        className
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";
