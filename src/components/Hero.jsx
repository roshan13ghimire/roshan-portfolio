
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import profilePhoto from "../assets/profile.jpg";
import resumePDF from "../assets/Roshan_Ghimire_Resume.pdf";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/roshan13ghimire",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/roshan13ghimire/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:roshan13ghimire@gmail.com",
    icon: HiOutlineMail,
  },
];

const highlights = [
  {
    value: "2+",
    label: "Years of professional experience",
  },
  {
    value: "M.Sc.",
    label: "Computational Science",
  },
  {
    value: "Full-stack",
    label: "Backend & frontend development",
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#F7F7F2] px-6 pb-10 pt-14 sm:pt-20 lg:px-8 lg:pt-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Main hero */}
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_300px] lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">

          {/* Introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCE3D8] bg-[#EEF2EB] px-3 py-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-[#52815D]" />

              <span className="text-xs font-medium text-[#48634A]">
                Open to opportunities in Canada
              </span>
            </motion.div>

            {/* Name */}
            <motion.p
              variants={itemVariants}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#666D63]"
            >
              Hi, I'm Roshan Ghimire
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-[40px] font-semibold leading-[1.12] tracking-[-0.045em] text-[#20251F] sm:text-[48px] lg:text-[54px]"
            >
              Software Engineer.
              <span className="mt-2 block text-[24px] leading-snug tracking-tight text-[#55705A] sm:text-[30px] lg:text-[34px]">
                Backend focused. Full-stack capable.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lg text-[16px] leading-8 text-[#62685F]"
            >
              I'm a software developer with over two years
              of professional experience, specializing in
              backend systems, REST APIs, and full-stack
              web applications.
            </motion.p>

            {/* Technologies */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-wrap items-center gap-3 text-[13px] font-medium text-[#555E52]"
            >
              {["Python", "Django", "React", "PostgreSQL"].map(
                (tech, index) => (
                  <div
                    key={tech}
                    className="flex items-center gap-3"
                  >
                    {index !== 0 && (
                      <span className="h-1 w-1 rounded-full bg-[#9BA396]" />
                    )}

                    <span>{tech}</span>
                  </div>
                )
              )}
            </motion.div>

            {/* Primary actions */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#26352A] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#3D5140]"
              >
                Explore my work

                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={resumePDF}
                download="Roshan_Ghimire_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D0D5CC] px-5 py-3 text-sm font-medium text-[#30392E] transition-colors duration-200 hover:border-[#74846F] hover:bg-[#E9EDE5]"
              >
                <FiDownload size={16} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isExternal =
                  !social.href.startsWith("mailto:");

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={
                      isExternal
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 text-[13px] text-[#666D63] transition-colors hover:text-[#26352A]"
                  >
                    <Icon size={17} />
                    {social.label}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Profile photograph */}
          <motion.div
            initial={{
              opacity: reduceMotion ? 1 : 0,
              y: reduceMotion ? 0 : 18,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.15,
            }}
            className="mx-auto w-full max-w-[340px]"
          >
            <div className="relative">

              {/* Decorative offset frame */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-[#C8D1C3]"
              />

              {/* Photo */}
              <div className="relative overflow-hidden rounded-2xl bg-[#E4E8DF]">
                <img
                  src={profilePhoto}
                  alt="Roshan Ghimire, Software Developer"
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover object-[center_10%]"
                />
              </div>
            </div>

            {/* Photo caption */}
            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#626C5F]">
                Sudbury, Ontario
              </span>

              <span className="text-[11px] text-[#666D63]">
                Canada
              </span>
            </div>
          </motion.div>
        </div>

        {/* Professional highlights */}
        <div className="mt-14 grid gap-6 border-t border-[#D9DED5] pt-8 sm:grid-cols-3 lg:mt-20">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="sm:border-l sm:border-[#D9DED5] sm:pl-6 first:sm:border-l-0 first:sm:pl-0"
            >
              <p className="text-2xl font-semibold tracking-tight text-[#303D30]">
                {item.value}
              </p>

              <p className="mt-1 text-[13px] leading-6 text-[#666D63]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
