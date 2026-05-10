import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Journal", path: "/journal" },
    { name: "Explorations", path: "/explorations" }
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className={cn(
          "inline-flex items-center rounded-full backdrop-blur-xl border border-white/10 bg-[#141414]/80 px-3 py-2 gap-4 transition-all duration-300",
          isScrolled && "shadow-2xl shadow-black/50 border-white/20"
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 pl-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#89AACC] to-[#4E85BF] p-[1px] transition-transform duration-500 group-hover:rotate-180">
            <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
              <span className="text-[10px] font-display italic font-bold">MW</span>
            </div>
          </div>
          <span className="text-[10px] font-semibold tracking-widest uppercase hidden sm:block">MathWise</span>
        </Link>

        <div className="w-px h-5 bg-white/10" />

        {/* Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full transition-all duration-300 font-medium",
                location.pathname === item.path 
                  ? "bg-white/10 text-white" 
                  : "text-white/50 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="w-px h-5 bg-white/10" />

        {/* Action Button */}
        <button className="text-[10px] bg-white text-black px-4 py-1.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1 hover:scale-105 transition-transform active:scale-95">
          Try Free <ArrowUpRight className="w-2.5 h-2.5" strokeWidth={3} />
        </button>
      </div>
    </nav>
  );
}
