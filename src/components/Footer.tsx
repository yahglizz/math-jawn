import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { motion } from 'motion/react';
import { Mail, ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';

const VIDEO_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(VIDEO_URL);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = VIDEO_URL;
      }
    }
  }, []);

  useEffect(() => {
    if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            duration: 30,
            ease: "none",
            repeat: -1
        });
    }
  }, []);

  return (
    <footer className="relative bg-bg pt-24 pb-12 overflow-hidden">
      {/* Background Video (Flipped) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] scale-125"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden border-y border-white/5 py-10 mb-24 bg-white/5 backdrop-blur-sm grayscale opacity-30">
            <div ref={marqueeRef} className="flex whitespace-nowrap gap-16 text-7xl md:text-9xl font-display uppercase italic tracking-[0.05em] text-white">
                {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="flex items-center gap-16">
                        MATH WISE PERSPECTIVE <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#89AACC] to-[#4E85BF] self-center" />
                    </span>
                ))}
            </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1240px] mx-auto px-6 text-center mb-32">
            <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] mb-6 inline-block">Direct Inquiry</span>
            <h2 className="text-6xl md:text-9xl font-display italic leading-none mb-12 tracking-tighter">
                Ready to <span className="bg-gradient-to-r from-[#89AACC] to-[#4E85BF] bg-clip-text text-transparent">solve</span> it?
            </h2>
            
            <a 
                href="mailto:solve@mathwise.com"
                className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full overflow-hidden"
            >
                <div className="absolute inset-0 p-[1px] opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 rounded-full bg-white" />
                </div>
                <div className="relative flex items-center gap-3 bg-[#141414] text-white rounded-full px-12 py-4 text-xs font-bold uppercase tracking-widest transition-all group-hover:bg-white group-hover:text-black">
                    <Mail className="w-4 h-4" /> solve@mathwise.com
                </div>
            </a>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1240px] mx-auto px-10 pt-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5">
            <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                 <span className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">Server: North_Ops-01 // Operational</span>
            </div>

            <div className="flex items-center gap-10 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                <a href="#" className="hover:text-white transition-colors">TWITTER</a>
                <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                <a href="#" className="hover:text-white transition-colors">GITHUB</a>
                <a href="#" className="hover:text-white transition-colors">SYSTEM STATUS</a>
            </div>

            <div className="text-[10px] text-white/20 tracking-[0.3em] uppercase font-bold">
                © 2026 Math Wise Lab.
            </div>
        </div>
      </div>
    </footer>
  );
}
