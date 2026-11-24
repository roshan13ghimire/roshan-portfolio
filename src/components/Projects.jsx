
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiCheck,
  FiCode,
  FiTerminal,
} from "react-icons/fi";

import POS from "../assets/pos.png";
import Onboarding from "../assets/onboarding.png";
import UrlShortener from "../assets/url.png";

const featuredProjects = [
  {
    number: "01",
    category: "Retail Management",
    title: "Ghimire Retail POS",
    description:
      "A full-stack point-of-sale application designed to manage retail inventory, sales, checkout transactions, refunds, and daily business reporting.",
    highlights: [
      "Atomic checkout and inventory transactions",
      "Role-based access for administrators, managers, and cashiers",
      "Refund processing, stock tracking, and sales reporting",
    ],
    image: POS,
    tech: [
      "Python",
      "Django REST Framework",
      "React",
      "PostgreSQL",
      "JWT",
    ],
    github:
      "https://github.com/roshan13ghimire/ghimire-retail-pos",
    live:
      "https://ghimire-retail-pos.onrender.com/",
  },
  {
    number: "02",
    category: "Business Automation",
    title: "Employee Onboarding Portal",
    description:
      "A full-stack employee management application that simplifies onboarding workflows through secure authentication, role-based permissions, and centralized employee information.",
    highlights: [
      "JWT authentication and protected API endpoints",
      "Role-based access for HR, administrators, and employees",
      "REST API integration with a React frontend",
    ],
    image: Onboarding,
    tech: [
      "Python",
      "Django REST Framework",
      "React",
      "PostgreSQL",
      "JWT",
    ],
    github:
      "https://github.com/roshan13ghimire/Employee-Onboarding",
    live:
      "https://employee-onboarding-gamma.vercel.app/",
  },
  {
    number: "03",
    category: "Web Application",
    title: "URL Shortener",
    description:
      "A web application for creating, managing, and tracking shortened URLs. Users can generate links instantly or create an account to manage their personal links.",
    highlights: [
      "Authenticated and anonymous URL shortening",
      "Personal link management and click tracking",
      "Database-backed REST API",
    ],
    image: UrlShortener,
    tech: [
      "Python",
      "Flask",
      "React",
      "PostgreSQL",
      "REST API",
    ],
    github:
      "https://github.com/roshan13ghimire/URLShortener_with_Authentication_System",
    live:
      "https://url-shortener-with-authentication-s.vercel.app/",
  },
];

const otherProjects = [
  {
    title: "Telegram Stock Scraping Bot",
    description:
      "A Telegram bot that retrieves share market information using Python and web scraping.",
    tech: ["Python", "BeautifulSoup", "Requests"],
    github:
      "https://github.com/roshan13ghimire/Telegram-Bot-for-Share",
    icon: FiTerminal,
  },
  {
    title: "Football Results Scraper",
    description:
      "A Python web scraping tool for collecting football match results and league standings.",
    tech: ["Python", "BeautifulSoup", "Requests"],
    github:
      "https://github.com/roshan13ghimire/Web-Scraping-Projects/tree/main/FootballTable",
    icon: FiCode,
  },
];

function TechnologyTags({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-md border border-[#E0E5DC] bg-[#F3F5F0] px-2.5 py-1 text-[11px] font-medium text-[#566651]"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}

function FeaturedProject({ project, index }) {
  const reduceMotion = useReducedMotion();
  const reversed = index % 2 !== 0;

  return (
    <motion.article
      initial={{
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : 20,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        ease: "easeOut",
      }}
      className="grid items-center gap-8 border-b border-[#E2E6DF] py-12 lg:grid-cols-2 lg:gap-14 lg:py-12"
    >
      {/* Project screenshot */}
      <div
        className={`min-w-0 ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} live demo`}
          className="group relative block overflow-hidden rounded-xl border border-[#DEE4D9] bg-[#EEF1EB] p-3 sm:p-5"
        >
          {/* Browser frame */}
          <div className="overflow-hidden rounded-lg border border-[#DDE2D8] bg-white shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-[#E5E8E1] bg-[#F8F9F6] px-3 py-2.5">
              <div
                aria-hidden="true"
                className="flex gap-1.5"
              >
                <span className="h-2 w-2 rounded-full bg-[#C8D0C3]" />
                <span className="h-2 w-2 rounded-full bg-[#C8D0C3]" />
                <span className="h-2 w-2 rounded-full bg-[#C8D0C3]" />
              </div>

              <span className="truncate text-[9px] font-medium uppercase tracking-widest text-[#788174]">
                Application Preview
              </span>
            </div>

            <div className="overflow-hidden bg-white">
              <img
                src={project.image}
                alt={`${project.title} application interface`}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Preview indicator */}
          <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#26352A] text-white shadow-sm transition-transform duration-200 motion-safe:group-hover:-translate-y-1 sm:bottom-7 sm:right-7">
            <FiArrowUpRight size={18} />
          </div>
        </a>
      </div>

      {/* Project information */}
      <div className="min-w-0">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#55705A]">
          {project.number} / {project.category}
        </p>

        <h3 className="text-[25px] font-semibold leading-tight tracking-[-0.035em] text-[#20251F] sm:text-[29px]">
          {project.title}
        </h3>

        <p className="mt-4 text-[14px] leading-7 text-[#62685F] sm:text-[15px]">
          {project.description}
        </p>

        {/* Engineering highlights */}
        <div className="mt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#3D4D3B]">
            Technical highlights
          </p>

          <ul className="space-y-2.5">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-[13px] leading-6 text-[#555E52]"
              >
                <FiCheck
                  aria-hidden="true"
                  size={16}
                  className="mt-1 shrink-0 text-[#55705A]"
                />

                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-5">
          <TechnologyTags technologies={project.tech} />
        </div>

        {/* Project actions */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-lg bg-[#26352A] px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#3D5140]"
          >
            Live Demo

            <FiArrowUpRight
              size={16}
              className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
            />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#D4DBCF] px-4 py-2.5 text-[13px] font-medium text-[#303D30] transition-colors hover:border-[#83957E] hover:bg-[#F3F5F0]"
          >
            <FiGithub size={16} />
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function OtherProject({ project }) {
  const reduceMotion = useReducedMotion();
  const Icon = project.icon;

  return (
    <motion.article
      initial={{
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : 12,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.4,
      }}
      className="group flex h-full flex-col rounded-xl border border-[#E0E5DC] bg-[#FAFBF8] p-6 transition-all duration-300 hover:border-[#B2C1AB] hover:shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E9EEE5] text-[#55705A]">
          <Icon size={21} />
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source code`}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#666D63] transition-colors hover:bg-[#E9EEE5] hover:text-[#26352A]"
        >
          <FiGithub size={19} />
        </a>
      </div>

      <h4 className="mt-5 text-[17px] font-semibold tracking-tight text-[#20251F]">
        {project.title}
      </h4>

      <p className="mt-3 flex-1 text-[13px] leading-7 text-[#666D63]">
        {project.description}
      </p>

      <div className="mt-5">
        <TechnologyTags technologies={project.tech} />
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 self-start text-[13px] font-medium text-[#48634A] underline-offset-4 hover:underline"
      >
        View repository
        <FiArrowUpRight size={15} />
      </a>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-16 sm:py-20 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="border-b border-[#E2E6DF] pb-8">
          

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-[34px] font-semibold leading-tight tracking-[-0.045em] text-[#20251F] sm:text-[36px]">
                Selected Projects
              </h2>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#666D63]">
                A collection of applications and tools I've
                built, with a focus on practical business
                workflows, backend engineering, and full-stack
                development.
              </p>
            </div>

            <a
              href="https://github.com/roshan13ghimire"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start text-[13px] font-medium text-[#55705A] underline-offset-4 hover:underline sm:self-end"
            >
              <FiGithub size={16} />
              View all on GitHub
              <FiArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Featured projects */}
        <div>
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Additional projects */}
        <div className="mt-14 lg:mt-20">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#55705A]">
            More on GitHub
          </p>

          <h3 className="text-[24px] font-semibold tracking-tight text-[#20251F] sm:text-[28px]">
            Other Projects
          </h3>

          <p className="mt-3 max-w-lg text-[14px] leading-7 text-[#666D63]">
            Smaller tools and experiments involving Python,
            automation, and data extraction.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {otherProjects.map((project) => (
              <OtherProject
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
