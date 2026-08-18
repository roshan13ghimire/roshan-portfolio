// components/Hero.jsx

import React from "react";
import {
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { motion } from "framer-motion";

import profilePhoto from "../assets/profile.jpg";
import resumePDF from "../assets/Roshan_Ghimire_Resume.pdf";


const Hero = () => {

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };


  const staggerContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };


  return (

    <section
      id="home"
      className="min-h-screen flex items-center bg-white dark:bg-gray-950 py-20 transition-colors duration-300"
    >

      <div className="container mx-auto px-6 lg:px-8">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">


          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >

            {/* Availability */}

            <motion.p
              variants={fadeInUp}
              className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-5"
            >
              Open to opportunities in Canada
            </motion.p>


            {/* Name */}

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-gray-900 dark:text-white">
                Roshan Ghimire
              </span>
            </motion.h1>


            {/* Role */}

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300"
            >
              Software Engineer | Full-Stack Developer
            </motion.p>


            {/* Description */}

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Software Engineer focused on building reliable web applications
              using React, Python, Django, Flask, and PostgreSQL. I enjoy
              designing APIs, working with databases, and turning business
              requirements into practical software solutions.
            </motion.p>


            {/* =====================================
                BUTTONS
            ===================================== */}

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >

              {/* Resume */}

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  bg-gray-900
                  hover:bg-gray-800
                  dark:bg-white
                  dark:hover:bg-gray-200
                  text-white
                  dark:text-gray-900
                  font-medium
                  rounded-lg
                  transition-colors
                "
              >
                <FiDownload className="w-5 h-5" />

                Download Resume
              </motion.a>


              {/* Contact */}

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  border
                  border-gray-300
                  dark:border-gray-700
                  hover:border-gray-900
                  dark:hover:border-gray-400
                  text-gray-700
                  dark:text-gray-300
                  hover:text-gray-900
                  dark:hover:text-white
                  font-medium
                  rounded-lg
                  transition-colors
                "
              >
                <FiMail className="w-5 h-5" />

                Get in Touch
              </motion.a>

            </motion.div>


            {/* =====================================
                SOCIAL LINKS
            ===================================== */}

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex items-center justify-center lg:justify-start gap-5"
            >

              {/* GitHub */}

              <motion.a
                whileHover={{ y: -2 }}
                href="https://github.com/roshan13ghimire"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-500
                  hover:text-gray-900
                  dark:text-gray-500
                  dark:hover:text-white
                  transition-colors
                "
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>


              {/* LinkedIn */}

              <motion.a
                whileHover={{ y: -2 }}
                href="https://www.linkedin.com/in/roshan13ghimire/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-500
                  hover:text-gray-900
                  dark:text-gray-500
                  dark:hover:text-white
                  transition-colors
                "
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>


              {/* Email */}

              <motion.a
                whileHover={{ y: -2 }}
                href="mailto:roshan13ghimire@gmail.com"
                className="
                  text-gray-500
                  hover:text-gray-900
                  dark:text-gray-500
                  dark:hover:text-white
                  transition-colors
                "
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </motion.a>

            </motion.div>

          </motion.div>



          {/* =====================================
              PROFILE PHOTO
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="flex-1 flex justify-center lg:justify-end"
          >

            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">

              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="
                  rounded-2xl
                  overflow-hidden
                  border
                  border-gray-200
                  dark:border-gray-800
                  bg-gray-100
                  dark:bg-gray-900
                  h-96
                  transition-colors
                  duration-300
                "
                style={{
                  backgroundImage: `url(${profilePhoto})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center 10%",
                  backgroundRepeat: "no-repeat",
                }}
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );

};


export default Hero;