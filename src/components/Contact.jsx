
import { motion, useReducedMotion } from "framer-motion";
import {
  FiMail,
  FiArrowUpRight,
  FiDownload,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import resumePDF from "../assets/Roshan_Ghimire_Resume.pdf";

const contactLinks = [
  {
    title: "Email",
    value: "roshan13ghimire@gmail.com",
    href: "mailto:roshan13ghimire@gmail.com",
    icon: FiMail,
    external: false,
  },
  {
    title: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/roshan13ghimire/",
    icon: FiLinkedin,
    external: true,
  },
  {
    title: "GitHub",
    value: "Explore my repositories",
    href: "https://github.com/roshan13ghimire",
    icon: FiGithub,
    external: true,
  },
];

export default function Contact() {
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
        duration: reduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#26352A] px-6 py-16 text-white sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">

          {/* Contact introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.p
              variants={itemVariants}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B6C8B0]"
            >
              06 / Get in touch
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="max-w-xl text-[36px] font-semibold leading-[1.15] tracking-[-0.045em] text-[#F7F7F2] sm:text-[44px] lg:text-[48px]"
            >
              Let's build something
              <span className="block text-[#B6C8B0]">
                together.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lg text-[15px] leading-8 text-[#C5D0C1]"
            >
              I'm currently open to software development
              opportunities across Canada. If you're
              interested in my work or would like to
              discuss a role, project, or collaboration,
              feel free to reach out.
            </motion.p>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#50634D] bg-[#303F32] px-3 py-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-[#A8CA9D]" />

              <span className="text-[12px] font-medium text-[#D1DFCB]">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Primary actions */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="mailto:roshan13ghimire@gmail.com"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#F7F7F2] px-5 py-3.5 text-sm font-semibold text-[#26352A] transition-colors hover:bg-[#DCE6D7]"
              >
                <FiMail size={17} aria-hidden="true" />

                Get in touch

                <FiArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={resumePDF}
                download="Roshan_Ghimire_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#82947E] px-5 py-3.5 text-sm font-medium text-[#F7F7F2] transition-colors hover:border-[#B6C8B0] hover:bg-[#3D5140]"
              >
                <FiDownload size={17} aria-hidden="true" />
                Download resume
              </a>
            </motion.div>
          </motion.div>

          {/* Contact information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.p
              variants={itemVariants}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B6C8B0]"
            >
              Contact information
            </motion.p>

            <div className="divide-y divide-[#50634D] border-y border-[#50634D]">
              {contactLinks.map((contact) => {
                const Icon = contact.icon;

                return (
                  <motion.a
                    key={contact.title}
                    variants={itemVariants}
                    href={contact.href}
                    target={
                      contact.external ? "_blank" : undefined
                    }
                    rel={
                      contact.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 py-5"
                  >
                    {/* Contact icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#50634D] bg-[#303F32] text-[#B6C8B0] transition-colors group-hover:bg-[#F7F7F2] group-hover:text-[#26352A]">
                      <Icon size={20} aria-hidden="true" />
                    </div>

                    {/* Contact details */}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[#F7F7F2]">
                        {contact.title}
                      </p>

                      <p className="mt-1 break-words text-[12px] leading-5 text-[#C5D0C1]">
                        {contact.value}
                      </p>
                    </div>

                    <FiArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-[#B6C8B0] transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex items-start gap-3"
            >
              <FiMapPin
                size={19}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-[#B6C8B0]"
              />

              <div>
                <p className="text-[13px] font-medium text-[#F7F7F2]">
                  Sudbury, Ontario, Canada
                </p>

                <p className="mt-1 text-[12px] leading-6 text-[#B6C8B0]">
                  Open to remote opportunities and relocation.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
