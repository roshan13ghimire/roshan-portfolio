
import { motion, useReducedMotion } from "framer-motion";

import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiTool,
  FiCloud,
  FiGlobe,
} from "react-icons/fi";

import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiPytest,
  SiGithubactions,
  SiVercel,
  SiRender,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";
const skillCategories = [
  {
    name: "Languages",
    icon: FiCode,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#B59B00",
      },
      { name: "SQL", icon: FiDatabase, color: "#55705A" },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "#00599C",
      },
    ],
  },
  {
    name: "Frontend",
    icon: FiLayout,
    skills: [
      { name: "React", icon: SiReact, color: "#149ECA" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#0891B2",
      },
    ],
  },
  {
    name: "Backend",
    icon: FiServer,
    skills: [
      { name: "Django", icon: SiDjango, color: "#092E20" },
      {
        name: "Django REST Framework",
        icon: FiServer,
        color: "#55705A",
      },
      { name: "Flask", icon: SiFlask, color: "#303D30" },
      {
        name: "REST APIs",
        icon: FiGlobe,
        color: "#55705A",
      },
    ],
  },
  {
    name: "Databases",
    icon: FiDatabase,
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "#249D70",
      },
    ],
  },
  {
    name: "Tools & Testing",
    icon: FiTool,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#24292F" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#E85D28",
      },
      { name: "Pytest", icon: SiPytest, color: "#2786B5" },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        color: "#2088FF",
      },
    ],
  },
  {
    name: "Deployment",
    icon: FiCloud,
    skills: [
      { name: "Vercel", icon: SiVercel, color: "#20251F" },
      { name: "Render", icon: SiRender, color: "#20251F" },
    ],
  },
];

function SkillCategory({ category }) {
  const CategoryIcon = category.icon;

  return (
    <article className="h-full border-t border-[#E0E5DC] py-5">
      {/* Category heading */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#DCE3D8] bg-[#E9EEE5] text-[#55705A]">
          <CategoryIcon size={19} aria-hidden="true" />
        </div>

        <h3 className="text-[16px] font-semibold tracking-tight text-[#20251F]">
          {category.name}
        </h3>
      </div>

      {/* Technologies */}
      <div className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => {
          const SkillIcon = skill.icon;

          return (
            <div
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-md bg-[#F3F5F0] px-2.5 py-1.5 text-[12px] font-medium text-[#555E52] transition-colors hover:border-[#AAB8A6]"
            >
              <SkillIcon
                size={15}
                aria-hidden="true"
                className="shrink-0"
                style={{ color: skill.color }}
              />

              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default function Skills() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="bg-white px-6 py-16 sm:py-20 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{
            opacity: reduceMotion ? 1 : 0,
            y: reduceMotion ? 0 : 12,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
          }}
        >
          

          <h2 className="text-[34px] font-semibold leading-tight tracking-[-0.045em] text-[#20251F] sm:text-[36px]">
            Technical Skills
          </h2>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#666D63]">
            Technologies I use to design, build, test,
            and deploy software applications, with a
            primary focus on backend and full-stack
            development.
          </p>
        </motion.div>

        {/* Complete technical stack */}
        <div className="mt-8">
          

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
              >
                <SkillCategory category={category} />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
