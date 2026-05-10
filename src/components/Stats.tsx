import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const STATS = [
  { value: "1M+", label: "Problems Solved Hourly", detail: "Powered by advanced computational math models." },
  { value: "99%", label: "Student Success Rate", detail: "Consistent improvement measured across all grades." },
  { value: "24/7", label: "Tutor Availability", detail: "Instant assistance from AI math specialists." }
];

export default function Stats() {
  return (
    <section className="bg-bg py-24 px-6 md:px-10 lg:px-16 relative">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#141414]/60 border border-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between h-56 transition-all hover:bg-white/5 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">{stat.label}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
              </div>
              
              <div className="text-5xl md:text-6xl font-display italic transition-transform group-hover:-translate-y-1">
                {stat.value}
              </div>

              <div className="flex flex-col gap-3">
                <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                  <div className={cn(
                    "h-full accent-gradient transition-all duration-1000",
                    index === 0 ? "w-[99%]" : index === 1 ? "w-[95%]" : "w-[100%]"
                  )} />
                </div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
