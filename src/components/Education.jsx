
import { motion, useReducedMotion } from "framer-motion";

import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiAward,
  FiArrowUpRight,
  FiDatabase,
  FiCode,
  FiTerminal,
} from "react-icons/fi";

import {
  SiDocker,
} from "react-icons/si";

const education = [
  {
    level: "Master's Degree",
    degree: "Master of Science in Computational Science",
    institution: "Laurentian University",
    period: "May 2024 – Apr 2026",
    location: "Sudbury, Ontario, Canada",
    gpa: "9.00",
    featured: true,
    coursework: [
      "Computational Science",
      "Machine Learning",
      "Computer Forensics",
    ],
  },
  {
    level: "Bachelor's Degree",
    degree:
      "Bachelor of Technology in Computer Science and Engineering",
    institution: "SRKR Engineering College",
    period: "Aug 2017 – May 2021",
    location: "Andhra Pradesh, India",
    gpa: "8.1",
    featured: false,
    coursework: [
      "Data Structures and Algorithms",
      "Database Management",
      "Web Development",
      "Software Engineering",
    ],
  },
];

const certifications = [
  {
    title: "Relational Databases",
    issuer: "freeCodeCamp",
    category: "Database Development",
    icon: FiDatabase,
    description:
      "Relational databases, PostgreSQL, SQL, Bash scripting, and Git.",
    link: "",
  },
  {
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM / Cognitive Class",
    category: "Containerization",
    icon: SiDocker,
    description:
      "Docker containers, images, and containerized application workflows.",
    link: "",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    category: "Programming",
    icon: FiCode,
    description:
      "Python programming fundamentals and core language concepts.",
    link: "",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    category: "Problem Solving",
    icon: FiTerminal,
    description:
      "Fundamental algorithms, data structures, and computational problem solving.",
    link: "",
  },
];

function SectionHeading({ label, title, description }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : 15,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        ease: "easeOut",
      }}
    >
      {label && <p className="mb-3 text-xs font-semibold text-[#55705A]">{label}</p>}

      <h2 className="text-[34px] font-semibold leading-tight tracking-[-0.045em] text-[#20251F] sm:text-[36px]">
        {title}
      </h2>

      <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#666D63]">
        {description}
      </p>
    </motion.div>
  );
}

function EducationCard({ edu }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : 18,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        ease: "easeOut",
      }}
      className={`flex h-full flex-col rounded-xl border p-5 transition-colors duration-300 sm:p-6 ${
        edu.featured
          ? "border-[#C9D5C4] bg-white"
          : "border-[#E0E5DC] bg-[#FAFBF8]"
      }`}
    >
      {/* Degree type */}
      <div className="flex items-center justify-between gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
            edu.featured
              ? "bg-[#26352A] text-white"
              : "bg-[#E9EEE5] text-[#55705A]"
          }`}
        >
          <FiBookOpen size={22} aria-hidden="true" />
        </div>

        <span className="text-right text-[10px] font-semibold uppercase tracking-[0.13em] text-[#55705A]">
          {edu.level}
        </span>
      </div>

      {/* Academic qualification */}
      <h3 className="mt-6 text-[21px] font-semibold leading-snug tracking-[-0.025em] text-[#20251F] sm:text-[23px]">
        {edu.degree}
      </h3>

      <p className="mt-3 text-[15px] font-medium text-[#55705A]">
        {edu.institution}
      </p>

      {/* Academic period and location */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-2.5 text-[13px] text-[#666D63]">
          <FiCalendar
            size={15}
            aria-hidden="true"
            className="shrink-0 text-[#55705A]"
          />

          <span>{edu.period}</span>
        </div>

        <div className="flex items-center gap-2.5 text-[13px] text-[#666D63]">
          <FiMapPin
            size={15}
            aria-hidden="true"
            className="shrink-0 text-[#55705A]"
          />

          <span>{edu.location}</span>
        </div>
      </div>

      {/* Academic performance */}
      <div className="mt-5 border-y border-[#E0E5DC] py-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#55705A]">
          Academic performance
        </p>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-[24px] font-semibold leading-none tracking-[-0.05em] text-[#26352A]">
            {edu.gpa}
          </span>

          <span className="text-sm text-[#666D63]">
            / 10 GPA
          </span>
        </div>
      </div>

      {/* Coursework */}
      <div className="mt-6">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[#55705A]">
          Relevant coursework
        </p>

        <div className="flex flex-wrap gap-2">
          {edu.coursework.map((course) => (
            <span
              key={course}
              className="rounded-md border border-[#E0E5DC] bg-[#F3F5F0] px-3 py-1.5 text-[11px] font-medium leading-5 text-[#566651]"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function CertificationCard({ certification }) {
  const reduceMotion = useReducedMotion();
  const Icon = certification.icon;

  return (
    <motion.article
      initial={{
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : 15,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
      }}
      className="group flex h-full flex-col rounded-xl border border-[#E0E5DC] bg-white p-6 transition-all duration-300 hover:border-[#AAB8A6] hover:shadow-sm"
    >
      {/* Credential icon */}
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E9EEE5] text-[#55705A]">
          <Icon size={22} aria-hidden="true" />
        </div>

        <FiAward
          size={19}
          aria-hidden="true"
          className="text-[#7D9277]"
        />
      </div>

      {/* Credential category */}
      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#55705A]">
        {certification.category}
      </p>

      {/* Credential title */}
      <h4 className="mt-2 text-[17px] font-semibold leading-snug tracking-tight text-[#20251F]">
        {certification.title}
      </h4>

      <p className="mt-2 text-[13px] font-medium text-[#55705A]">
        {certification.issuer}
      </p>

      <p className="mt-3 flex-1 text-[13px] leading-7 text-[#666D63]">
        {certification.description}
      </p>

      {/* Verification link */}
      {certification.link && (
        <a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 self-start text-[13px] font-medium text-[#48634A] underline-offset-4 hover:underline"
        >
          View credential

          <FiArrowUpRight size={15} aria-hidden="true" />
        </a>
      )}
    </motion.article>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="border-y border-[#E2E6DF] bg-[#F7F7F2] px-6 py-16 sm:py-20 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Education heading */}
        <SectionHeading
          label=""
          title="Education &amp; Certifications"
          description="My academic background in computer science and computational science, complemented by continued professional development."
        />

        {/* Academic qualifications */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {education.map((edu) => (
            <EducationCard
              key={edu.institution}
              edu={edu}
            />
          ))}
        </div>

        {/* Certifications section */}
        <div
          id="certifications"
          className="mt-16 border-t border-[#DCE1D8] pt-12 lg:mt-14 lg:pt-10"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#55705A]">
            Continuous learning
          </p>

          <h3 className="text-[28px] font-semibold tracking-[-0.035em] text-[#20251F] sm:text-[32px]">
            Professional Certifications
          </h3>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#666D63]">
            Credentials earned through practical learning
            in programming, relational databases,
            containerization, and problem solving.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {certifications.map((certification) => (
              <CertificationCard
                key={certification.title}
                certification={certification}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
