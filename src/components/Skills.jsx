// components/Skills.jsx - Updated with new colors
import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiHtml5, SiTailwindcss,
  SiPython, SiDjango, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiPostman,
  SiVercel, SiSupabase
} from 'react-icons/si';
import { FaCss3Alt, FaCloud } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Django', icon: SiDjango, color: '#092E20' },
        { name: 'Django REST', icon: SiDjango, color: '#092E20' },
      ]
    },
    {
      name: 'Database',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      ]
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      ]
    },
    {
      name: 'Deployment',
      skills: [
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
        { name: 'Render', icon: FaCloud, color: '#46E3B7' },
        { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Technologies and tools I work with to build modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                  >
                    <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;