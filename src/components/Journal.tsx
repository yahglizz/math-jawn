import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';

const ENTRIES = [
  {
    title: "The Beauty of Prime Numbers",
    date: "May 12, 2026",
    time: "5 min read",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=200"
  },
  {
    title: "Visualizing Four-Dimensional Space",
    date: "May 08, 2026",
    time: "8 min read",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=200"
  },
  {
    title: "AI in Mathematical Research",
    date: "May 01, 2026",
    time: "10 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9759?auto=format&fit=crop&q=80&w=200"
  },
  {
    title: "History of the Golden Ratio",
    date: "Apr 25, 2026",
    time: "6 min read",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Journal() {
  return (
    <section className="bg-bg py-24 px-6 md:px-10 lg:px-16" id="journal">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-text-primary leading-tight">
            Recent <span className="italic text-text-primary/70">thoughts</span> & discoveries
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-6 p-4 rounded-[40px] sm:rounded-full bg-[#141414]/40 hover:bg-white/5 backdrop-blur-md border border-white/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="hidden sm:block w-12 h-12 rounded-full overflow-hidden shrink-0">
                <img src={entry.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4">
                <h3 className="text-lg md:text-xl font-medium text-text-primary group-hover:text-text-primary/100 transition-colors">
                  {entry.title}
                </h3>
                
                <div className="flex items-center gap-4 text-xs text-muted ml-auto sm:mr-4">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {entry.time}</span>
                  <span className="w-1 h-1 rounded-full bg-stroke" />
                  <span>{entry.date}</span>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:accent-gradient group-hover:border-transparent transition-all sm:mr-2">
                <ArrowRight className="w-5 h-5 text-muted group-hover:text-bg transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
            <button className="text-xs text-muted uppercase tracking-[0.2em] border-b border-stroke pb-1 hover:text-text-primary hover:border-text-primary transition-all">
                View all entries
            </button>
        </div>
      </div>
    </section>
  );
}
