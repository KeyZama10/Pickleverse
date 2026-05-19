import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Sponsors', href: '#sponsors' },
    { name: 'Live Scores', href: '#' },
    { name: 'Events Map', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <>
      {/* Full-width scroll background */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="navbar-bg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full z-40 bg-[#fff6ed] border-b-4 border-black shadow-md"
            style={{ height: 110 }}
          />
        )}
      </AnimatePresence>

      <nav className="fixed top-2 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 flex items-center justify-between">
      {/* Left Logo */}
      <div className="w-[72px] md:w-24 z-10 ml-6">
        <img src="/logo.png" alt="Pickleverse" className="w-full h-auto drop-shadow-md" />
      </div>

      {/* Center Navigation Pill */}
      <div className="hidden lg:flex bg-white border-2 border-black rounded-xl box-shadow-hard w-fit overflow-hidden">
        <ul className="flex items-stretch font-inter font-normal text-[15px] tracking-wide whitespace-nowrap">
          {navLinks.map((link, idx) => (
            <React.Fragment key={idx}>
              <li className="flex">
                <a href={link.href} className="flex items-center px-5 py-5 hover:bg-[#fff6ed] transition-colors duration-200">
                  {link.name}
                </a>
              </li>
              {idx < navLinks.length - 1 && (
                <div className="w-[1px] bg-black/30 self-stretch"></div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* Right CTA Button */}
      <motion.a
        href="https://chat.whatsapp.com/E4aOKBdpDwa5SeabszxJdg"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95, y: 2, boxShadow: '0px 0px 0px black' }}
        className="hidden md:flex bg-brand-yellow font-tanker text-xl tracking-wider px-6 py-3 rounded-xl border-2 border-black box-shadow-hard items-center justify-center transition-shadow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
          <path d="M12.03 2.05A10.05 10.05 0 002 12c0 1.76.45 3.4 1.25 4.86L2 22l5.3-1.2A10.03 10.03 0 0012 22.05c5.54 0 10.04-4.5 10.04-10.05S17.57 2.05 12.03 2.05zM12 20.25a8.23 8.23 0 01-4.2-1.15l-.3-.18-3.1.72.7-3.04-.2-.33A8.2 8.2 0 013.79 12c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.25-8.24 8.25zm4.55-5.9c-.25-.13-1.48-.73-1.7-.81-.23-.08-.4-.13-.57.12-.17.25-.65.81-.8 1-.15.19-.3.2-.55.08-.25-.12-1.06-.39-2.02-1.25-.75-.66-1.26-1.48-1.4-1.72-.15-.25-.01-.38.11-.5.11-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.33-.02-.45-.06-.13-.57-1.39-.78-1.9-.2-.5-.42-.44-.57-.45H8.38c-.23 0-.57.08-.88.42-.3.33-1.17 1.14-1.17 2.78 0 1.63 1.2 3.2 1.36 3.42.17.21 2.33 3.56 5.65 4.99.79.34 1.4.55 1.88.7.8.25 1.52.22 2.1.13.64-.1 1.48-.6 1.68-1.18.2-.58.2-.1.15-.22-.05-.12-.22-.2-.47-.32z" />
        </svg>
        PICKLEVERSE
      </motion.a>
      
      {/* Mobile Menu Icon (Placeholder) */}
      <div className="lg:hidden bg-brand-cream border-2 border-black p-2 rounded-lg box-shadow-hard cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
