// components/Footer.jsx
import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2026 Roshan Ghimire. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/roshan13ghimire" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FiGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/roshan13ghimire/" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:roshan13ghimire@gmail.com" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FiMail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FiHeart className="w-4 h-4 text-red-500" /> in Canada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;