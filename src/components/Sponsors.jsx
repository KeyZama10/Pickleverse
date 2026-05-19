import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const sponsors = [
  {
    id: 0,
    card: '/sponsors/FlexPod Card.png',
    category: 'OFFICIAL RECOVERY PARTNER',
    title: 'FLEXPOD',
    tagline: 'Recovery. Redefined.',
    quote: '"Train harder. Recover faster. Perform better."',
    description:
      'FlexPod delivers elite-grade recovery solutions engineered for competitive athletes. Trusted by professionals who refuse to settle for average performance.',
    cta: 'DISCOVER FLEXPOD',
    socials: ['Instagram', 'Website', 'LinkedIn'],
  },
  {
    id: 1,
    card: '/sponsors/Grpyr Card.png',
    category: 'OFFICIAL TECH PARTNER',
    title: 'GRPYR',
    tagline: 'Grip. Power. Precision.',
    quote: '"Where engineering meets the court."',
    description:
      'Grpyr combines cutting-edge material science with sport-specific design to create performance gear built for the modern pickleball athlete.',
    cta: 'EXPLORE GRPYR',
    socials: ['Instagram', 'Website', 'Twitter'],
  },
  {
    id: 2,
    card: '/sponsors/KheloMore Card.png',
    category: 'OFFICIAL COMMUNITY PARTNER',
    title: 'KHELOMORE',
    tagline: 'Play More. Live More.',
    quote: '"Sport is a language everyone speaks."',
    description:
      'KheloMore is building the largest sports community in South Asia—connecting athletes, fans and tournaments through one seamless platform.',
    cta: 'JOIN KHELOMORE',
    socials: ['Instagram', 'App Store', 'Website'],
  },
  {
    id: 3,
    card: '/sponsors/Munchilious Card.png',
    category: 'OFFICIAL SNACK PARTNER',
    title: 'MUNCHILIOUS',
    tagline: 'Fuel the Game.',
    quote: '"Because champions snack differently."',
    description:
      'Munchilious crafts high-performance snacks packed with real ingredients, built to power you through every match and every moment.',
    cta: 'TASTE MUNCHILIOUS',
    socials: ['Instagram', 'Website', 'YouTube'],
  },
  {
    id: 4,
    card: '/sponsors/Pizza Maveriks Card.png',
    category: 'OFFICIAL FOOD PARTNER',
    title: 'PIZZA MAVERICKS',
    tagline: 'Bold. Unapologetic. Delicious.',
    quote: '"Every slice is a statement."',
    description:
      'Pizza Mavericks brings maverick energy to every box—artisan recipes, premium toppings and the kind of flavor that belongs courtside.',
    cta: 'ORDER NOW',
    socials: ['Instagram', 'Zomato', 'Website'],
  },
  {
    id: 5,
    card: '/sponsors/Protien Vault Card.png',
    category: 'OFFICIAL NUTRITION PARTNER',
    title: 'PROTEIN VAULT',
    tagline: 'Build. Sustain. Dominate.',
    quote: '"Your gains, our science."',
    description:
      'Protein Vault formulates premium supplements designed specifically for high-intensity court sports—clean nutrition, maximum performance.',
    cta: 'UNLOCK THE VAULT',
    socials: ['Instagram', 'Website', 'LinkedIn'],
  },
  {
    id: 6,
    card: '/sponsors/V3SM Card.png',
    category: 'OFFICIAL MEDIA PARTNER',
    title: 'V3SM',
    tagline: 'Capture Every Rally.',
    quote: '"Where every moment becomes iconic."',
    description:
      'V3SM produces world-class sports media—broadcast coverage, highlight reels and content that puts the PickleVerse in the spotlight.',
    cta: 'WATCH V3SM',
    socials: ['Instagram', 'YouTube', 'Website'],
  },
  {
    id: 7,
    card: '/sponsors/YAIT Card.png',
    category: 'OFFICIAL TRAINING PARTNER',
    title: 'YAIT',
    tagline: 'You Are In Training.',
    quote: '"Every rep brings you closer."',
    description:
      'YAIT designs smart training programs and tools for competitive players at every level—turning potential into podium performances.',
    cta: 'START TRAINING',
    socials: ['Instagram', 'App Store', 'Website'],
  },
];

const Sponsors = () => {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + sponsors.length) % sponsors.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % sponsors.length);
  };

  const nextIdx = (current + 1) % sponsors.length;
  const sponsor = sponsors[current];

  const cardVariants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.85 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.85, transition: { duration: 0.4, ease: 'easeIn' } }),
  };

  const infoVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 } },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.3 } }),
  };

  return (
    <section
      ref={containerRef}
      id="sponsors"
      className="relative w-full bg-[#fff6ed] z-30 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Court Line Separator */}
      <div className="absolute top-0 left-0 w-full h-[32px] -translate-y-full z-40 bg-[#2563EB] border-t-8 border-b-8 border-white shadow-md" />

      {/* ── Floating Pickleballs ── */}
      <motion.div style={{ y: y1 }} className="absolute -bottom-28 -left-20 z-10 pointer-events-none">
        <motion.img
          src="/Floaters.png" alt=""
          animate={{ y: [0, -28, 0], rotate: [-25, -18, -25] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="w-56 md:w-[300px] object-contain"
        />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute top-10 -right-14 md:-right-20 z-10 pointer-events-none">
        <motion.img
          src="/Floaters.png" alt=""
          animate={{ y: [0, 22, 0], rotate: [18, 24, 18] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="w-40 md:w-60 object-contain"
        />
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute top-28 left-[12%] z-10 pointer-events-none">
        <motion.img
          src="/Floaters.png" alt=""
          animate={{ y: [0, -12, 0], rotate: [10, 5, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
          className="w-20 md:w-28 object-contain blur-[3px] opacity-60"
        />
      </motion.div>

      {/* ── Section Header ── */}
      <div className="relative z-20 pt-20 pb-10 text-center">
        <h2
          style={{ fontFamily: "'Tanker', sans-serif" }}
          className="font-tanker text-[80px] md:text-[96px] leading-none text-white text-stroke-black text-shadow-hard uppercase"
        >
          OUR SPONSORS
        </h2>
      </div>

      {/* ── Carousel Stage ── */}
      <div className="relative z-20 flex items-center justify-center px-6 pb-24 gap-6 max-w-[1100px] mx-auto">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="flex-shrink-0 w-14 h-14 rounded-2xl border-4 border-black bg-white box-shadow-hard flex items-center justify-center hover:bg-[#fff6ed] transition-colors duration-200 z-30"
          aria-label="Previous sponsor"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* ── Bret's-Style Layout: Overflowing Image + Info Card ── */}
        <div className="flex-1 relative min-w-0" style={{ minHeight: 480 }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={sponsor.id}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex items-center"
            >
              {/* Info Card — offset to the right to make room for overflowing image */}
              <div
                className="absolute right-0 bg-white border-4 border-black rounded-3xl flex flex-col justify-between p-8 md:p-10"
                style={{ boxShadow: '6px 6px 0px #000', left: 310, top: 0, bottom: 0 }}
              >
                <div>
                  <p className="font-inter font-bold text-xs tracking-[0.2em] text-[#2563EB] uppercase mb-2">
                    {sponsor.category}
                  </p>
                  <h3
                    style={{ fontFamily: "'Tanker', sans-serif" }}
                    className="font-tanker text-5xl md:text-6xl uppercase leading-none text-black mb-1"
                  >
                    {sponsor.title}
                  </h3>
                  <p className="font-inter font-semibold text-base text-black/60 mb-5 italic">
                    {sponsor.tagline}
                  </p>
                  <div className="w-full h-[3px] bg-black rounded-full mb-5" />
                  <p className="font-inter text-sm text-black/50 italic mb-4 leading-relaxed">
                    {sponsor.quote}
                  </p>
                  <p className="font-inter text-sm text-black/80 leading-relaxed mb-6">
                    {sponsor.description}
                  </p>
                  <div className="flex items-center flex-wrap gap-2 mb-6">
                    {sponsor.socials.map((s) => (
                      <span
                        key={s}
                        className="font-inter text-xs font-bold border-2 border-black rounded-lg px-3 py-1 bg-[#fff6ed] hover:bg-brand-yellow transition-colors cursor-pointer"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -3, boxShadow: '6px 6px 0px black' }}
                  whileTap={{ scale: 0.97, y: 1, boxShadow: '2px 2px 0px black' }}
                  style={{ boxShadow: '4px 4px 0px black', fontFamily: "'Tanker', sans-serif" }}
                  className="w-full bg-brand-yellow border-4 border-black rounded-xl py-3 font-tanker text-xl tracking-wide uppercase transition-shadow"
                >
                  {sponsor.cta}
                </motion.button>
              </div>

              {/* Sponsor Image — overflows outside the card, floats in front */}
              <motion.div
                className="absolute z-20 flex items-center justify-center pointer-events-none"
                style={{ left: 0, width: 300, top: -60, bottom: -60 }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.img
                  src={sponsor.card}
                  alt={sponsor.title}
                  whileHover={{ scale: 1.04, rotate: -2 }}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{ pointerEvents: 'auto' }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="flex-shrink-0 w-14 h-14 rounded-2xl border-4 border-black bg-white box-shadow-hard flex items-center justify-center hover:bg-[#fff6ed] transition-colors duration-200 z-30"
          aria-label="Next sponsor"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="relative z-20 flex justify-center gap-2 pb-16">
        {sponsors.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`w-3 h-3 rounded-full border-2 border-black transition-all duration-300 ${i === current ? 'bg-black scale-125' : 'bg-white'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;

