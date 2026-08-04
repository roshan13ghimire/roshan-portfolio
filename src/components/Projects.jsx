// components/Projects.jsx - Updated with new colors
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Onboarding from '../assets/onboarding.png';
import UrlShortener from '../assets/url.png';

const Projects = () => {
  const projects = [
 
    {
      title: 'Employee Onboarding Portal',
      description: 'Streamlined employee onboarding platform with automated workflows, document management, and role-based access control for HR teams. Reduced new hire setup time by 60%.',
      image: Onboarding,
      tech: ['React', 'Django', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/roshan13ghimire/Employee-Onboarding',
      live: 'https://employee-onboarding-gamma.vercel.app/',
    },
   {
  title: 'URL Shortener Web App',
  description: 'Full-stack URL shortening platform with secure user authentication, personalized link management, and real-time analytics tracking.',
  image: UrlShortener, 
  tech: ['React', 'Flask', 'PostgreSQL', 'bcrypt'],
  github: 'https://github.com/roshan13ghimire/URLShortener_with_Authentication_System',
  live: 'https://url-shortener-with-authentication-s.vercel.app/',
},
    {
  title: 'Telegram Stock Scraping Bot',
  description: 'Automated Telegram bot for real-time stock market data retrieval using web scraping. Delivers instant share price updates, market trends, and company insights on demand.',
  image: Onboarding,
  tech: ['Python', 'BeautifulSoup', 'Requests', 'Flask'],
  github: 'https://github.com/roshan13ghimire/Telegram-Bot-for-Share',
  live: '#',
},
{
  title: 'Football Live Results Scraper',
  description: 'Automated web scraping tool for real-time football match results, league standings, and team statistics from live sports websites.',
  image: Onboarding,
  tech: ['Python', 'BeautifulSoup', 'Requests', 'Flask'],
  github: 'https://github.com/roshan13ghimire/Web-Scraping-Projects/tree/main/FootballTable',
  live: '#',
},
   {
  title: 'Ghimire Store POS System',
  description: 'Comprehensive point-of-sale system for retail stores featuring inventory management, sales tracking, customer management, and real-time reporting.',
  image: Onboarding,
  tech: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS'],
  github: 'https://github.com/roshan13ghimire/ghimire-retail-pos',
  live: '#',
  status: 'In Development'
},
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Some of my recent work demonstrating my skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
  />
</div>
<div className="p-6">
  <div className="flex items-start justify-between gap-4 mb-2">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
      {project.title}
    </h3>
    {project.status && (
      <span className="flex-shrink-0 px-3 py-1 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full border border-amber-200 dark:border-amber-800">
        {project.status}
      </span>
    )}
  </div>
<p className="text-base text-gray-700 dark:text-gray-300 mb-4">
  {project.description}
</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-purple-600 dark:hover:border-purple-400 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors shadow-sm"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;