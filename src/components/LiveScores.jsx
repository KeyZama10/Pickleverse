import React from 'react';
import { motion } from 'framer-motion';

const ticker = Array(20).fill(null).map((_, i) => (
  <span key={i} className="flex items-center gap-4 flex-shrink-0">
    <span
      style={{ fontFamily: "'Tanker', sans-serif" }}
      className="font-tanker text-2xl uppercase tracking-widest text-black"
    >
      LIVE SCORES
    </span>
    <span className="text-2xl">🏓</span>
  </span>
));

const LiveScores = () => {
  return (
    <section id="live-scores" className="relative w-full min-h-screen bg-[#E2F1FB] overflow-hidden">

      {/* ── Moving Ticker Banner ── */}
      <div className="w-full bg-brand-yellow border-t-4 border-b-4 border-black py-3 overflow-hidden relative">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {/* Duplicate for seamless loop */}
          {ticker}
          {ticker}
        </motion.div>
      </div>

      {/* ── Page Title ── */}
      <div className="flex flex-col items-center justify-center pt-24 pb-12 text-center">
        <h2
          style={{ fontFamily: "'Tanker', sans-serif" }}
          className="font-tanker text-[80px] md:text-[96px] leading-none text-white text-stroke-black text-shadow-hard uppercase"
        >
          LIVE SCORES
        </h2>
        <p className="font-inter font-semibold text-black/50 text-lg mt-4 uppercase tracking-widest">
          Real-time match scores coming soon
        </p>
      </div>

      {/* ── Empty Placeholder Content ── */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <div className="w-full h-80 border-4 border-dashed border-black/20 rounded-3xl flex items-center justify-center bg-white/40 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-6xl mb-4">🏓</div>
            <p className="font-inter font-bold text-black/40 text-xl uppercase tracking-wider">
              Score board loading...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveScores;
