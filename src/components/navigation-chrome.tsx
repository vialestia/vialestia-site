"use client";

import React from "react";
import BottomNavBar from "@/components/ui/bottom-nav-bar";
import { Header } from "@/components/ui/navbar";
import { cn } from "@/lib/utils";

export function NavigationChrome() {
  const [showTop, setShowTop] = React.useState(true);
  const [showBottom, setShowBottom] = React.useState(false);

  React.useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const threshold = 150; 
      
      setShowTop(y < threshold);
      setShowBottom(y >= threshold);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-[100] flex justify-center pt-2 transition-all duration-300 ease-out",
          showTop 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        <Header />
      </div>

      <div
        className={cn(
          "fixed inset-x-0 bottom-6 z-[100] flex justify-center transition-all duration-300 ease-out",
          showBottom 
            ? "translate-y-0 opacity-100 scale-100" 
            : "translate-y-10 opacity-0 scale-95 pointer-events-none"
        )}
      >
        <BottomNavBar stickyBottom={false} className="shadow-2xl" />
      </div>
    </>
  );
}