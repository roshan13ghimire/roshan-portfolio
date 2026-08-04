// components/Hero.jsx - Royal Purple + Gold
import React from 'react';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile.jpg';
import resumePDF from '../assets/Roshan_Ghimire_Resume.pdf';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-50 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-50 dark:bg-amber-900/10 rounded-full blur-3xl -z-10 opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        
<motion.div
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
  className="flex-1 text-center lg:text-left"
>
  <motion.div 
    variants={fadeInUp} 
    className="inline-block px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium mb-6 border border-purple-200 dark:border-purple-800"
  >
    ✦ Open to opportunities in Canada
  </motion.div>

  <motion.h1 
    variants={fadeInUp} 
    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
  >
    Hi, I'm <br className="sm:hidden" />
    <span className="relative inline-block">
      <span className="bg-gradient-to-r from-purple-600 to-amber-500 dark:from-purple-400 dark:to-amber-400 bg-clip-text text-transparent">
        Roshan Ghimire
      </span>
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-amber-500 dark:from-purple-400 dark:to-amber-400 rounded-full"
      />
    </span>
  </motion.h1>

  <motion.p 
    variants={fadeInUp} 
    className="mt-3 text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium"
  >
    Software Engineer | Full-Stack Developer | AI Engineer
  </motion.p>

  <motion.p 
    variants={fadeInUp} 
    className="mt-5 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl lg:mx-0 mx-auto leading-relaxed text-left md:text-justify"
  >
    Full-stack developer with expertise in React, Django, and cloud deployment. 
    Passionate about building maintainable, high-performance applications that 
    solve real business problems and deliver measurable results.
  </motion.p>

  <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      href={resumePDF} target="_blank"
      download
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 dark:from-purple-500 dark:to-amber-500 dark:hover:from-purple-600 dark:hover:to-amber-600 text-white font-medium rounded-lg transition-all shadow-lg shadow-purple-200 dark:shadow-purple-900/30"
    >
      <FiDownload className="w-5 h-5" />
      Download Resume
    </motion.a>
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      href="#contact"
      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-300 hover:border-purple-600 dark:border-purple-500/50 dark:hover:border-purple-400 text-gray-700 hover:text-purple-700 dark:text-gray-300 dark:hover:text-white font-medium rounded-lg transition-all hover:bg-purple-50 dark:hover:bg-purple-900/20"
    >
      <FiMail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      Get in Touch
    </motion.a>
  </motion.div>

  <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center lg:justify-start gap-6">
    <motion.a
      whileHover={{ y: -3 }}
      href="https://github.com/roshan13ghimire"
      className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
      aria-label="GitHub"
    >
      <FiGithub className="w-6 h-6" />
    </motion.a>
    <motion.a
      whileHover={{ y: -3 }}
      href="https://www.linkedin.com/in/roshan13ghimire/"
      className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
      aria-label="LinkedIn"
    >
      <FiLinkedin className="w-6 h-6" />
    </motion.a>
<motion.a
    whileHover={{ y: -3 }}
    href="mailto:roshan13ghimire@gmail.com"
    className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
    aria-label="Email"
  >
    <FiMail className="w-6 h-6" />
  </motion.a>
  </motion.div>
</motion.div>

          {/* Photo with gold accent */}
         <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.3 }}
  className="flex-1 flex justify-center lg:justify-end"
>
  <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
    {/* Photo container with clean presentation */}
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
  className="rounded-2xl overflow-hidden border-2 border-gray-700 bg-gray-800 relative h-96"
  style={{
    backgroundImage: `url(${profilePhoto})`,
    backgroundSize: "cover",
    backgroundPosition: "center 10%",
    backgroundRepeat: "no-repeat",
  }}
>
        {/* ONLY subtle gold shimmer - no dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent animate-shimmer"></div>
        
        {/* Gold accent border - cleaner and thinner */}
        <div className="absolute inset-0 border border-amber-400/20 rounded-2xl"></div>
      </motion.div>
    </div>

    {/* Decorative elements - adjusted for cleaner look */}
    <motion.div
      initial={{ x: -20, y: 20, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-2xl -z-10"
    />
    <motion.div
      initial={{ x: 20, y: -20, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-purple-500/15 to-amber-500/15 rounded-full -z-10"
    />
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;