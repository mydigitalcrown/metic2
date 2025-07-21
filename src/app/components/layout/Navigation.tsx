"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  const serviceItems = [
    { title: "AI Integration & Deployment", href: "/ai-integration-and-deployment" },
    { title: "Generative AI Services", href: "/generative-ai-services" },
    { title: "Custom AI Development", href: "/custom-ai-development" },
    { title: "Machine Learning", href: "/machine-learning" },
    { title: "Data Insights", href: "/data-insights" },
    { title: "Data Engineering", href: "/data-engineering" },
  ];

  return (
    <nav className={cn("hidden md:flex items-center gap-6", className)}>
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "font-medium transition-colors hover:text-primary-orange",
            pathname === item.href ? "text-primary-orange" : "text-gray-700"
          )}
        >
          {item.title}
        </Link>
      ))}
      
      {/* Services Dropdown */}
      <div 
        className="relative"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <button
          className={cn(
            "flex items-center gap-1 font-medium transition-colors hover:text-primary-orange",
            pathname.startsWith('/services') || serviceItems.some(item => pathname === item.href) 
              ? "text-primary-orange" 
              : "text-gray-700"
          )}
        >
          Services
          <ChevronDown className="w-4 h-4" />
        </button>
        
        {isServicesOpen && (
          <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            {serviceItems.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className={cn(
                  "block px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-primary-orange",
                  pathname === service.href ? "text-primary-orange bg-orange-50" : "text-gray-700"
                )}
              >
                {service.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
