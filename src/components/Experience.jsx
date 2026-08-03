// components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
{
  title: 'Software Engineer',
  company: 'TechAlias Solution Pvt. Ltd.',
  period: 'Jan,2022 - March,2024',
  location: 'Nepal',
  description: [
    'Developed and enhanced full-stack web applications using Python, Django, Django REST Framework, and PostgreSQL',
    'Designed and implemented RESTful APIs to support application features and improve communication between frontend and backend systems',
    'Created database models, optimized queries, and managed backend logic to support reliable application performance',
    'Debugged application issues, tested new features, and implemented fixes to improve software stability and user experience',
    'Collaborated with developers and stakeholders to understand requirements and deliver practical software solutions',
    'Used Git for version control and followed structured development workflows to maintain clean and organized code',
  ],
},
   {
  title: 'Lecturer - Computer Applications',
  company: 'School of Environmental Science and Management',
  period: 'Jan 2023 - March 2024',
  location: 'Nepal',
  description: [
    'Taught programming, web development, and database management concepts to undergraduate computer application students',
    'Designed practical coursework, coding assignments, and lab exercises to strengthen software development skills',
    'Guided students in developing academic projects involving application design, programming, and database integration',
    'Provided technical feedback, debugging guidance, and support to help students improve coding and problem-solving abilities',
    'Explained software engineering concepts including programming logic, database design, and application development practices',
    'Collaborated with faculty members on curriculum improvements and technology-focused academic activities',
  ],
},
{
  title: 'Lecturer - Computer Engineering',
  company: 'Acme Engineering College',
  period: 'Sept 2022 - March 2024',
  location: 'Nepal',
  description: [
    'Taught computer engineering courses including programming fundamentals, web development, and database concepts',
    'Developed hands-on labs, assignments, and practical exercises focused on software development skills',
    'Guided students in designing and building academic projects using programming and database technologies',
    'Explained software development concepts including algorithms, data structures, and application design principles',
    'Provided technical guidance, debugging support, and code feedback to help students improve problem-solving skills',
    'Managed classroom technology and supported students in using development tools and programming environments',
  ],
},

  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-blue-200 dark:border-blue-800"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 ml-4">
                <div className="flex flex-wrap items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.location}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;