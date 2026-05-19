import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingElement = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 400]);

  return (
    <motion.div
      style={{ y: yParallax }}
      className="relative w-full max-w-4xl px-4 z-10 pointer-events-none flex justify-center mt-6 mb-8"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full sm:w-[90%] md:w-full max-w-[450px] drop-shadow-2xl"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <img
            src="/Floating Element.png"
            alt="Floating Pickleball Elements"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingElement;
