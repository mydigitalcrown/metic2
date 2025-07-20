"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
}

interface MobileMenuProps {
  items: NavItem[];
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  
  // Close menu when path changes (user navigates)
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden">
      <button 
        className="size-10 flex items-center justify-center text-gray-700 hover:text-primary-orange"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                className="size-10 flex items-center justify-center text-gray-700 hover:text-primary-orange"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex-1 px-8 py-8">
              <ul className="flex flex-col gap-6 text-xl">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2 font-medium transition-colors hover:text-primary-orange",
                        pathname === item.href ? "text-primary-orange" : "text-gray-800"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="p-8">
              <Link 
                href="/contact"
                className="block w-full py-3 text-center font-medium bg-primary-orange text-white rounded-md hover:bg-dark-orange transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
