// components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computational Science',
      institution: 'Laurentian University',
      period: 'May,2024 - Apr,2026',
      location: 'Sudbury, ON, Canada',
      achievements: ['GPA: 9.00/10', 'Relevant Courses: Intro to Computational Science, Machine Learning, Computer Forensics'],
    },
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'SRKR Engineering College',
      period: 'Aug,2017 - May,2021',
      location: 'Bhimabharam, Andhra Pradesh, India',
      achievements: ['GPA: 8.1/10', 'Relevant Courses: Data Structures and Algorithms, Database Management Systems, Web Development, Software Engineering'],
    },
  ];

//   const certifications = [
//     { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2022' },
//     { name: 'Professional Scrum Master', issuer: 'Scrum.org', year: '2021' },
//     { name: 'Google IT Support Professional', issuer: 'Google', year: '2020' },
//   ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Academic Background</h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex items-start gap-4"
                >
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <FiAward className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;