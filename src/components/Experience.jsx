
import { motion, useReducedMotion } from "framer-motion";
import {
  FiBriefcase,
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const experiences = [
  {
    title: "Software Engineer",
    company: "TechAlias Solution Pvt. Ltd.",
    location: "Nepal",
    period: "Jan 2022 – Mar 2024",
    category: "Software Engineering",
    icon: FiBriefcase,
    featured: true,
    details: [
      "Developed and maintained full-stack web applications using Python, Django, Django REST Framework, and PostgreSQL.",
      "Built REST APIs for inventory management and other business workflows, replacing manual processes with database-backed solutions.",
      "Designed relational database models, worked with SQL queries, and integrated backend services with frontend interfaces.",
      "Collaborated with developers on debugging, code reviews, feature development, and application maintenance.",
    ],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "REST APIs",
      "Git",
    ],
  },
  {
    title: "Lecturer – Computer Applications",
    company: "School of Environmental Science and Management",
    location: "Nepal",
    period: "Jan 2023 – Mar 2024",
    category: "Teaching & Mentoring",
    icon: FiBookOpen,
    featured: false,
    details: [
      "Taught programming, web development, and database management to undergraduate students.",
      "Prepared coding assignments and practical laboratory exercises.",
      "Mentored students through application development and database-related projects.",
    ],
    technologies: [
      "Programming",
      "Web Development",
      "Databases",
      "Mentoring",
    ],
  },
  {
    title: "Lecturer – Computer Engineering",
    company: "Acme Engineering College",
    location: "Nepal",
    period: "Sep 2022 – Mar 2024",
    category: "Teaching & Mentoring",
    icon: FiBookOpen,
    featured: false,
    details: [
      "Delivered lectures on programming fundamentals, web development, and database systems.",
      "Developed practical assignments, laboratory exercises, and project activities.",
      "Provided debugging assistance and constructive code feedback to students.",
    ],
    technologies: [
      "Programming Fundamentals",
      "Database Systems",
      "Debugging",
      "Code Review",
    ],
  },
];

function ExperienceCard({ experience }) {
  const reduceMotion = useReducedMotion();
  const Icon = experience.icon;

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
      className="relative pl-14 sm:pl-20"
    >
      {/* Timeline icon */}
      <div
        className={`absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-xl border-4 border-white sm:h-12 sm:w-12 ${
          experience.featured
            ? "bg-[#26352A] text-white"
            : "bg-[#E9EEE5] text-[#55705A]"
        }`}
      >
        <Icon size={20} aria-hidden="true" />
      </div>

      {/* Experience card */}
      <div
        className={`rounded-xl border p-5 transition-colors duration-300 sm:p-6 ${
          experience.featured
            ? "border-[#D9E1D4] bg-[#F7F7F2]"
            : "border-[#E2E6DF] bg-white hover:border-[#B8C5B2]"
        }`}
      >
        {/* Role category */}
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#55705A]">
          {experience.category}
        </p>

        {/* Position and company */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h3
              className={`font-semibold leading-tight tracking-[-0.025em] text-[#20251F] ${
                experience.featured
                  ? "text-[24px] sm:text-[28px]"
                  : "text-[20px] sm:text-[23px]"
              }`}
            >
              {experience.title}
            </h3>

            <p className="mt-2 text-[14px] font-medium leading-6 text-[#55705A] sm:text-[15px]">
              {experience.company}
            </p>
          </div>

          {/* Date and location */}
          <div className="shrink-0 space-y-2 lg:text-right">
            <div className="flex items-center gap-2 text-[12px] text-[#666D63] lg:justify-end">
              <FiCalendar
                size={14}
                aria-hidden="true"
                className="shrink-0 text-[#55705A]"
              />

              <span>{experience.period}</span>
            </div>

            <div className="flex items-center gap-2 text-[12px] text-[#666D63] lg:justify-end">
              <FiMapPin
                size={14}
                aria-hidden="true"
                className="shrink-0 text-[#55705A]"
              />

              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mt-6 border-t border-[#DEE4D9] pt-5">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-[#48634A]">
            Key responsibilities
          </p>

          <ul className="space-y-3">
            {(experience.featured ? experience.details : experience.details.slice(0, 2)).map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-3 text-[14px] leading-7 text-[#62685F]"
              >
                <FiArrowRight
                  size={15}
                  aria-hidden="true"
                  className="mt-1.5 shrink-0 text-[#55705A]"
                />

                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies and expertise */}
        <div className={experience.featured ? "mt-5 flex flex-wrap gap-2" : "hidden"}>
          {(experience.featured ? experience.technologies : []).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-[#DCE3D8] bg-[#EEF2EB] px-2.5 py-1.5 text-[11px] font-medium text-[#48634A]"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="border-t border-[#E2E6DF] bg-white px-6 py-16 sm:py-20 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{
            opacity: reduceMotion ? 1 : 0,
            y: reduceMotion ? 0 : 15,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
          }}
        >
          

          <h2 className="text-[34px] font-semibold leading-tight tracking-[-0.045em] text-[#20251F] sm:text-[36px]">
            Professional Experience
          </h2>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#666D63]">
            Experience across software engineering and
            computer science education, combining practical
            application development with technical
            communication and mentoring.
          </p>
        </motion.div>

        {/* Career timeline */}
        <div className="relative mt-10 space-y-7 sm:mt-12 sm:space-y-8">

          {/* Vertical timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[19px] top-5 w-px bg-[#D9E1D4] sm:left-[23px]"
          />

          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.title}`}
              experience={experience}
            />
          ))}

        </div>
      </div>
    </section>
  );
}
