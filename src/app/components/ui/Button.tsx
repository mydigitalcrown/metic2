"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "primary" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary-orange text-white hover:bg-dark-orange": variant === "primary",
            "bg-secondary-orange text-white hover:bg-[#F97E2A]": variant === "secondary",
            "bg-gray-900 text-white hover:bg-gray-800": variant === "default",
            "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100": variant === "outline",
            "bg-transparent text-gray-800 hover:bg-gray-100": variant === "ghost",
            "bg-transparent text-primary-orange underline-offset-4 hover:underline": variant === "link",
            "px-4 py-2 text-sm": size === "sm",
            "px-5 py-2.5 text-base": size === "default",
            "px-6 py-3 text-lg": size === "lg",
            "size-9": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
