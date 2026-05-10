import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from '@/src/components/LoadingScreen';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Features from '@/src/components/Features';
import Journal from '@/src/components/Journal';
import Explorations from '@/src/components/Explorations';
import Stats from '@/src/components/Stats';
import Footer from '@/src/components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Journal />
      <Explorations />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <div className="relative overflow-hidden">
          {/* Ambient Background Glows */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-blue-900/20 to-transparent blur-[120px] pointer-events-none z-0" />
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none z-0" />
          
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<Features />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/explorations" element={<Explorations />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
