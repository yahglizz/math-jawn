import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const WORDS = ["Solve", "Visualize", "Learn", "Excel"];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const duration = 2700;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 900);

    return () => {
      clearInterval(timer);
      clearInterval(wordInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12 overflow-hidden"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Math Wise — Collection '26
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {WORDS[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-end">
          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
            {String(Math.floor(count)).padStart(3, "0")}
          </div>
        </div>
        
        <div className="h-[3px] bg-stroke/50 w-full relative overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: count / 100 }}
            style={{ transformOrigin: 'left' }}
            className="absolute inset-0 accent-gradient shadow-[0_0_8px_rgba(137,170,204,0.35)]"
          />
        </div>
      </div>
    </motion.div>
  );
}
