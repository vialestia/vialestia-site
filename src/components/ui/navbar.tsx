"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, Menu } from 'lucide-react';
import { cn } from "@/lib/utils";

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="group relative inline-block overflow-hidden h-5 flex items-center text-sm font-medium">
    <div className="flex flex-col transition-transform duration-500 ease-out transform group-hover:-translate-y-1/2">
      <span className="text-gray-300">{children}</span>
      <span className="text-white">{children}</span>
    </div>
  </a>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
    if (isOpen) {
      setHeaderShapeClass('rounded-2xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => setHeaderShapeClass('rounded-full'), 300);
    }
    return () => { if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current); };
  }, [isOpen]);


  const navLinks = [
    { label: 'Çalışmalar', href: '#work' },
    { label: 'Kariyer', href: '#career' },
    { label: 'Hakkımda', href: '#about' },
  ];

  return (
    <nav className={cn(
      "mx-auto flex flex-col items-center px-6 py-3 backdrop-blur-md",
      "border border-white/10 bg-black/40 shadow-2xl",
      "w-fit min-w-[300px] transition-all duration-500 ease-in-out",
      headerShapeClass
    )}>
      <div className="flex items-center justify-between w-full gap-x-8">
        <div className="flex items-center text-white">
          <Sparkles className="w-5 h-5 text-yellow-200/80" />
        </div>

        <div className="hidden sm:flex items-center space-x-8">
          {navLinks.map((link) => (
            <AnimatedNavLink key={link.label} href={link.href}>{link.label}</AnimatedNavLink>
          ))}
        </div>

        <button className="sm:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={cn(
        "sm:hidden w-full overflow-hidden transition-all duration-300",
        isOpen ? "max-h-64 opacity-100 pt-6" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col items-center space-y-4 pb-4 text-sm">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-gray-400 hover:text-white" 
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}