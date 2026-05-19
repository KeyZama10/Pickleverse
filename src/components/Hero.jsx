import React from 'react';
import CTAButton from './CTAButton';
import FloatingElement from './FloatingElement';
import ZigZagDivider from './ZigZagDivider';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden flex flex-col items-center justify-center pt-24 pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Background.png"
          alt="Sky Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-6xl w-full mt-10">
        <motion.h1
          style={{ fontFamily: "'Tanker', sans-serif" }}
          className="font-tanker text-[128px] leading-[128px] text-white text-stroke-black text-shadow-hard uppercase pt-12 mb-4"
        >
          PICKLEVERSE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-inter text-[16px] text-[#171717] leading-[26px] max-w-[550px] mb-2 text-center -mt-4"
        >
          Real-time scores, tournament rankings, qualification scenarios and the ultimate pickleball community experience.
        </motion.p>

        <FloatingElement />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
          className="relative z-50 -mt-16 sm:-mt-24"
        >
          <CTAButton />
        </motion.div>
      </div>

      <ZigZagDivider />
    </section>
  );
};

export default Hero;
