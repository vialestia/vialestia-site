"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, LineChart, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Menü", icon: Home, href: "#" },
  { label: "İş", icon: LineChart, href: "#work" },
  { label: "Kariyer", icon: User, href: "#career" },
  { label: "İletişim", icon: MessageCircle, href: "#contact" },
];

export function BottomNavBar({ className, defaultIndex = 0, stickyBottom = false }: any) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const index = navItems.findIndex((item) => item.href === `#${id}`);
          
          if (window.scrollY < 200) {
            setActiveIndex(0);
          } else if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const targetIds = ["work", "career", "contact"];
    targetIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY < 200) setActiveIndex(0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className={cn(
        "flex h-[56px] w-fit items-center justify-center space-x-1 rounded-full border border-zinc-200/70 bg-white/70 p-2 shadow-xl backdrop-blur dark:border-white/10 dark:bg-black/30",
        stickyBottom && "fixed inset-x-0 bottom-4 z-50 mx-auto",
        className
      )}
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        return (
          <motion.a
            key={item.label}
            whileTap={{ scale: 0.95 }}
            href={item.href}
            className={cn(
              "relative flex h-10 items-center justify-center rounded-full px-4 transition-all duration-300",
              isActive
                ? "bg-black/5 text-zinc-950 dark:bg-white/10 dark:text-white"
                : "bg-transparent text-zinc-600 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10",
              "focus:outline-none"
            )}
            onClick={() => setActiveIndex(idx)}
            aria-label={item.label}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? "auto" : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "8px" : "0px",
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 32 },
                opacity: { duration: 0.2 },
              }}
              className="flex items-center overflow-hidden"
            >
              <span className="select-none whitespace-nowrap text-xs font-bold uppercase tracking-wider">
                {item.label}
              </span>
            </motion.div>
          </motion.a>
        );
      })}
    </motion.nav>
  );
}

export default BottomNavBar;