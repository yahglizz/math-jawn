import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EXPLORATIONS = [
  { id: 1, title: "Fractal Growth", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400" },
  { id: 2, title: "Vector Fields", img: "https://images.unsplash.com/photo-1633167606207-d840b5070c2f?auto=format&fit=crop&q=80&w=400" },
  { id: 3, title: "Prime Spiral", img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=400" },
  { id: 4, title: "Neural Math", img: "https://images.unsplash.com/photo-1614741487339-735e9c97ad02?auto=format&fit=crop&q=80&w=400" },
  { id: 5, title: "Riemann Surface", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" },
  { id: 6, title: "Euler's Identity", img: "https://images.unsplash.com/photo-1509228468518-180dd48a5dac?auto=format&fit=crop&q=80&w=400" },
];

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for columns
      gsap.to(leftColRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(rightColRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-bg py-24 overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center pointer-events-none z-10 text-center px-4">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="bg-[#141414]/60 backdrop-blur-xl p-10 rounded-[48px] border border-white/5 shadow-2xl"
        >
          <span className="text-[10px] text-white/30 uppercase tracking-[0.4em] mb-4 block font-bold">Visual Sandbox</span>
          <h2 className="text-5xl md:text-7xl font-display italic text-text-primary mb-4 leading-none">
            Visual <span className="bg-gradient-to-r from-[#89AACC] to-[#4E85BF] bg-clip-text text-transparent">playground</span>
          </h2>
          <p className="text-white/40 max-w-sm mx-auto mb-8 pointer-events-auto leading-relaxed text-sm">
            Interactive experiments pushing the boundaries of math and aesthetics.
          </p>
          <button className="pointer-events-auto group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/10 pb-1 hover:border-white transition-all">
            Join the community <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      <div className="container max-w-[1240px] mx-auto px-6 relative z-0 mt-[-20vh]">
        <div className="grid grid-cols-2 gap-8 md:gap-24 items-start">
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col gap-12 pt-48">
            {EXPLORATIONS.filter((_, i) => i % 2 === 0).map((item) => (
              <div key={item.id} className="relative group aspect-square rounded-[32px] overflow-hidden border border-stroke bg-surface rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <span className="font-display italic text-xl">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="flex flex-col gap-12">
            {EXPLORATIONS.filter((_, i) => i % 2 !== 0).map((item) => (
              <div key={item.id} className="relative group aspect-square rounded-[32px] overflow-hidden border border-stroke bg-surface rotate-[4deg] hover:rotate-0 transition-transform duration-500">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <span className="font-display italic text-xl">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
