import React from 'react';
import { cn } from "@/lib/utils";

interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function HeroButton({ children, className, ...props }: HeroButtonProps) {
  const gradient = 'linear-gradient(135deg, #665DCD 0%, #5FA4E6 44.76%, #D2AB67 100%)';

  return (
    <button
      className={cn(
 
        "relative inline-flex justify-center items-center",
        "mt-8 px-8 py-3 font-bold text-white tracking-widest uppercase",
        "bg-transparent  overflow-hidden group",
        className
      )}
      {...props}
    >
      <span
        className="absolute inset-0 border-2 border-solid"
        style={{ borderImageSlice: 1, borderImageSource: gradient }}
      ></span>
      <span
        className="
          absolute inset-0
          transition-transform duration-300 ease-in-out
          group-hover:translate-x-full 
        "
        style={{ backgroundImage: gradient }}
      ></span>

      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}
