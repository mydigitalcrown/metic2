"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center gap-2 font-bold text-2xl tracking-tight transition-colors",
        variant === "light" ? "text-white hover:text-light-orange" : "text-primary-orange hover:text-dark-orange",
        className
      )}
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-md bg-primary-orange text-white font-bold">
        M
      </span>
      <span>Metic AI</span>
    </Link>
  );
}
