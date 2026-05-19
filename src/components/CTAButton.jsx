import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -5, boxShadow: '8px 8px 0px black' }}
      whileTap={{ scale: 0.95, y: 2, boxShadow: '0px 0px 0px black' }}
      className="bg-brand-yellow font-tanker text-xl md:text-2xl tracking-normal uppercase px-3 py-3 md:px-5 md:py-4 rounded-xl border-4 border-black box-shadow-hard flex items-center justify-center transition-shadow z-20 mt-0"
    >
      EXPLORE PICKLEVERSE
    </motion.button>
  );
};

export default CTAButton;
