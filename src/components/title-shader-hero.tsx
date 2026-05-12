"use client";

import { ShaderAnimation } from "@/components/ui/shader-animation";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { motion } from "framer-motion";
import { ArrowRight, Play, Globe, Video, Terminal } from "lucide-react";

export function TitleShaderHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Arka Plan Shader */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </div>

      <div className="relative z-10 w-full max-w-screen-xl px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="flex flex-col items-center tracking-tighter">
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-6xl font-bold text-transparent sm:text-8xl md:text-9xl leading-[0.9]">
              Vialestia
            </span>
            <span className="mt-4 bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-500 bg-clip-text text-xl font-medium tracking-[0.3em] text-transparent sm:text-3xl md:text-4xl uppercase opacity-90">
              Software Engineer
            </span>
          </h1>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-[#00000] text-white rounded-full font-bold text-sm transition-transform hover:scale-105">
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              Buy me a Coffee
            </a>
            
            <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-[#00000] text-white rounded-full font-bold text-sm transition-transform hover:scale-105">
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              Support
            </a>

            <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-[#00000] text-white rounded-full font-bold text-sm transition-transform hover:scale-105">
              <Video size={18} />
              Self Intro
            </a>
          </div>

  
<div className="mt-12 flex items-center justify-center">
  <a 
    href="#contact"
    className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-zinc-900 border border-white/10 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-zinc-800 active:scale-95"
  >
    <span>Mesaj Yolla</span>
    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
  </a>
</div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col items-center">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} className="mb-8">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-zinc-800 p-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
          </div>
        </motion.div>
        <LogoMarquee />
      </div>
    </section>
  );
}