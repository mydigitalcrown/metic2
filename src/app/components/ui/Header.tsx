"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "../layout/Logo";
import { Navigation } from "../layout/Navigation";
import { MobileMenu } from "./MobileMenu";
import { Button } from "./Button";

export function Header() {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "AI Integration & Deployment", href: "/ai-integration-and-deployment" },
    { title: "Generative AI Services", href: "/generative-ai-services" },
    { title: "Custom AI Development", href: "/custom-ai-development" },
    { title: "Machine Learning", href: "/machine-learning" },
    { title: "Data Insights", href: "/data-insights" },
    { title: "Data Engineering", href: "/data-engineering" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        
        <Navigation />
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <Link href="/contact">
              <Button variant="primary">Contact Us</Button>
            </Link>
          </div>
          
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
