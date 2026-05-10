import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const FEATURES = [
  {
    title: "Graphing Reality",
    description: "Interactive 3D mathematical visualizations.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-7",
    color: "bg-blue-500/20"
  },
  {
    title: "Quantum Calculus",
    description: "Advanced derivative analysis tools.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd48a5dac?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-5",
    color: "bg-purple-500/20"
  },
  {
    title: "Geometric Proofs",
    description: "Visual proofs for complex theorems.",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-5",
    color: "bg-emerald-500/20"
  },
  {
    title: "Logic Architect",
    description: "Building mathematical foundations from scratch.",
    image: "https://images.unsplash.com/photo-1596495573822-337a4419b225?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-7",
    color: "bg-amber-500/20"
  }
];

export default function Features() {
  return (
    <section className="bg-bg py-24 px-6 md:px-10 lg:px-16" id="features">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Core Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary leading-tight">
              Master the art of <span className="italic">problem solving</span>
            </h2>
            <p className="text-muted mt-6 text-lg max-w-lg">
              Explore our suite of advanced mathematical tools designed to make learning intuitive and impactful.
            </p>
          </div>
          
          <button className="hidden md:flex items-center gap-2 rounded-full px-6 py-3 border border-stroke hover:border-text-primary/30 transition-all">
            View All Features <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={cn(
                "group relative bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-[32px] overflow-hidden aspect-[4/3] md:aspect-auto md:h-[480px]",
                feature.colSpan
              )}
            >
              <img 
                src={feature.image} 
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-40 group-hover:opacity-60 group-hover:scale-105"
              />
              <div className="absolute inset-0 halftone opacity-10 pointer-events-none" style={{ backgroundSize: '8px 8px' }} />
              
              {/* Hover Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                 <div className="bg-white text-black rounded-full px-8 py-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest shadow-2xl">
                    View Project — <span className="font-display italic normal-case text-base tracking-normal">{feature.title}</span>
                 </div>
              </div>

              {/* Static Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end z-10">
                <div>
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-2 block">Interactive Tool</span>
                  <h3 className="text-3xl font-display italic text-text-primary">{feature.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-xl group-hover:bg-white text-white group-hover:text-black transition-all">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
