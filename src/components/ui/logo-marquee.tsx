"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { 
    name: "Youtube", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Youtube.svg",
    href: "https://www.youtube.com/@vialestia" // Kendi linklerini buraya ekle
  },
  { 
    name: "GitHub", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    href: "https://github.com/vialestia" 
  },
  { 
    name: "Discord", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Discord_logo_white.svg",
    href: "https://discord.gg/Tskejq8Qn" 
  },
  { 
    name: "X", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
    href: "https://x.com/vialestia" 
  },
];

export function LogoMarquee() {
  return (
    <div className="relative flex w-full overflow-hidden py-6">
      <div className="absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-black to-transparent pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...LOGOS, ...LOGOS].map((logo, idx) => (
          <a
            key={idx}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-12 flex items-center gap-3 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer group"
          >
            <img 
              src={logo.icon} 
              alt={logo.name} 
              className="h-6 w-auto brightness-200 group-hover:scale-110 transition-transform" 
            />
            <span className="text-xl font-semibold tracking-tight text-white/80 group-hover:text-white">
              {logo.name}
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}