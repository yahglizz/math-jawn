import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import gsap from 'gsap';

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_3BM2PUxG8RiOCOVf1PSDAa5PjtI/hf_20260508_201753_61adb9a6-1efb-4fdc-92f8-636abe53119b.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    
    gsap.fromTo(".name-reveal", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1, ease: "power3.out" }
    );
    
    gsap.fromTo(".blur-in", 
      { opacity: 0, scale: 0.95, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, delay: 0.3, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-start text-left px-6 md:px-20 lg:px-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-3xl">
        <motion.div 
          className="text-[10px] text-white/40 uppercase tracking-[0.4em] mb-6 border border-white/10 rounded-full px-4 py-1 inline-block blur-in"
        >
          Curriculum '26 / AI Powered
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display italic leading-[0.9] tracking-tighter mb-6 text-text-primary name-reveal">
          Master numbers with <br/>
          <span className="bg-gradient-to-r from-[#89AACC] to-[#4E85BF] bg-clip-text text-transparent">elegant</span> precision.
        </h1>

        <p className="text-white/50 text-sm md:text-base max-w-md mb-10 leading-relaxed blur-in">
          Designing the future of mathematical learning. Simplify complex equations and visualize data with our high-fidelity intuitive engine.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 blur-in">
          <button className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-white/5">
            Start Learning Now
          </button>
          
          <button className="w-full sm:w-auto px-6 py-3 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors hover:scale-105 active:scale-95">
            View Curriculum
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 sm:left-auto sm:right-20 -translate-x-1/2 sm:translate-x-0 flex flex-col items-center gap-4">
        <span className="text-[10px] text-muted uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
