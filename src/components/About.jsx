// components/About.jsx - Updated with bullet points
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiCode, FiUsers } from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: FiCode, value: '2+', label: 'Years Experience' },
    { icon: FiBriefcase, value: '5', label: 'Projects Delivered' },

  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-amber-500 dark:from-purple-400 dark:to-amber-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="lg:col-span-3 space-y-6"
          >
            {/* Professional Bullet Points */}
            <div className="space-y-3">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-lg mt-0.5">•</span>
                  <span className="text-base sm:text-lg">
                    <strong className="text-gray-900 dark:text-white">Software Engineer</strong> with 2+ years experience in React, Django, and PostgreSQL
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-lg mt-0.5">•</span>
                  <span className="text-base sm:text-lg">
                    Built and deployed <strong className="text-gray-900 dark:text-white">5+ production applications</strong> serving thousands of users
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-lg mt-0.5">•</span>
                  <span className="text-base sm:text-lg">
                    Passionate about <strong className="text-gray-900 dark:text-white">clean, maintainable code</strong> and exceptional user experiences
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-lg mt-0.5">•</span>
                  <span className="text-base sm:text-lg">
                    <strong className="text-gray-900 dark:text-white">Seeking opportunities</strong> in Canada — open to remote, hybrid, and on-site roles
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
                What I enjoy building:
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-amber-500 dark:from-purple-400 dark:to-amber-400 rounded-full"></span>
                  Web applications with great UX
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-amber-500 dark:from-purple-400 dark:to-amber-400 rounded-full"></span>
                  RESTful APIs and integrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-amber-500 dark:from-purple-400 dark:to-amber-400 rounded-full"></span>
                  Performance optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-amber-500 dark:from-purple-400 dark:to-amber-400 rounded-full"></span>
                  Clean, maintainable code
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <stat.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📍 Location</h4>
              <p className="text-gray-700 dark:text-gray-300">Currently based in Canada</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Open to remote and on-site roles</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;