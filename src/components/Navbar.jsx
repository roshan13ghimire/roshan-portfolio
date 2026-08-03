// components/Navbar.jsx - Royal Purple + Gold
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollY = window.scrollY + 100;
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollY) {
          current = section;
        }
      }
      setActiveSection(current);
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm'
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
      } border-b border-gray-200/50 dark:border-gray-700/50`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white group">
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-600 to-amber-400 bg-clip-text text-transparent">
                RG
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
           
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? 'text-purple-600 dark:text-purple-400'
                        : 'text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-amber-400"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun className="w-5 h-5 text-amber-400" /> : <FiMoon className="w-5 h-5 text-gray-600" />}
            </motion.button>
          </div>

          <div className="flex items-center md:hidden space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun className="w-5 h-5 text-amber-400" /> : <FiMoon className="w-5 h-5 text-gray-600" />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-gray-200 dark:border-gray-700">
                <ul className="flex flex-col space-y-2 text-sm font-medium">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block px-3 py-2 rounded-md transition-colors ${
                          activeSection === item.href.substring(1)
                            ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                            : 'text-gray-600 hover:bg-purple-50 dark:text-gray-300 dark:hover:bg-purple-900/20'
                        }`}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;