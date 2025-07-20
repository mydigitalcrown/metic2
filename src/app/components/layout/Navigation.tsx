"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
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
    </nav>
  );
}
