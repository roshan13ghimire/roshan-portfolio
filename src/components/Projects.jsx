
import Onboarding from "../assets/onboarding.png";
import UrlShortener from "../assets/url.png";

const featuredProjects = [
  {
    title: "Employee Onboarding Portal",
    description:
      "A full-stack application for managing employee onboarding. Built with Django REST Framework and React, with JWT authentication, role-based access control, and PostgreSQL for data storage.",
    image: Onboarding,
    tech: ["React", "Django REST Framework", "PostgreSQL", "JWT"],
    github:
      "https://github.com/roshan13ghimire/Employee-Onboarding",
    live:
      "https://employee-onboarding-gamma.vercel.app/",
  },
  {
    title: "URL Shortener",
    description:
      "A web application for creating and managing shortened URLs. Users can generate links without an account or sign in to save links, manage them, and track clicks.",
    image: UrlShortener,
    tech: ["React", "Flask", "REST API", "Authentication"],
    github:
      "https://github.com/roshan13ghimire/URLShortener_with_Authentication_System",
    live:
      "https://url-shortener-with-authentication-s.vercel.app/",
  },
];

const otherProjects = [
  {
    title: "Ghimire Retail POS",
    description:
      "A retail point-of-sale system in development, focused on inventory, billing, and sales management.",
    tech: "Django · PostgreSQL · React",
    github:
      "https://github.com/roshan13ghimire/ghimire-retail-pos",
    status: "In development",
  },
  {
    title: "Telegram Stock Scraping Bot",
    description:
      "A Telegram bot that retrieves share market information using Python and web scraping.",
    tech: "Python · BeautifulSoup · Requests",
    github:
      "https://github.com/roshan13ghimire/Telegram-Bot-for-Share",
  },
  {
    title: "Football Results Scraper",
    description:
      "A Python web scraping tool for collecting football match results and league standings.",
    tech: "Python · BeautifulSoup · Requests",
    github:
      "https://github.com/roshan13ghimire/Web-Scraping-Projects/tree/main/FootballTable",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-white px-6 py-14 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-9">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-[26px]">
            Selected Work
          </h2>

          <p className="mt-3 max-w-xl text-[15px] leading-7 text-neutral-600">
            Applications and tools I've built using Python,
            Django, React, and other web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="grid items-center gap-7 py-9 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-12"
            >

              {/* Project Screenshot */}
              <div className="overflow-hidden rounded-md border border-neutral-200 bg-neutral-50">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="aspect-video w-full object-contain"
                />
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-xl text-[15px] leading-7 text-neutral-600">
                  {project.description}
                </p>

                <p className="mt-4 text-[13px] leading-6 text-neutral-500">
                  {project.tech.join(" · ")}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-800 underline-offset-4 hover:underline"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-800 underline-offset-4 hover:underline"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-12">

          <h3 className="mb-4 text-lg font-semibold text-neutral-900">
            Other Projects
          </h3>

          <div className="divide-y divide-neutral-200 border-t border-neutral-200">

            {otherProjects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-[15px] font-semibold text-neutral-900">
                      {project.title}
                    </h4>

                    {project.status && (
                      <span className="text-xs text-neutral-500">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {project.description}
                  </p>

                  <p className="mt-2 text-xs text-neutral-500">
                    {project.tech}
                  </p>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm font-medium text-neutral-700 underline-offset-4 hover:underline"
                >
                  GitHub ↗
                </a>
              </article>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
