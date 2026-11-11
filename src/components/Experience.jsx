
const experiences = [
  {
    title: "Software Engineer",
    company: "TechAlias Solution Pvt. Ltd.",
    location: "Nepal",
    period: "Jan 2022 – Mar 2024",
    details: [
      "Developed and maintained web applications using Python, Django, Django REST Framework, and PostgreSQL.",
      "Built REST APIs for inventory management and other application features, replacing manual workflows with database-backed processes.",
      "Designed relational database models, worked with SQL queries, and integrated backend services with frontend interfaces.",
      "Collaborated with developers on debugging, code reviews, and feature development.",
    ],
  },
  {
    title: "Lecturer – Computer Applications",
    company: "School of Environmental Science and Management",
    location: "Nepal",
    period: "Jan 2023 – Mar 2024",
    details: [
      "Taught programming, web development, and database management to undergraduate students.",
      "Prepared coding assignments and practical lab exercises.",
      "Guided students through application development and database-related projects.",
    ],
  },
  {
    title: "Lecturer – Computer Engineering",
    company: "Acme Engineering College",
    location: "Nepal",
    period: "Sep 2022 – Mar 2024",
    details: [
      "Delivered lectures on programming fundamentals, web development, and database systems.",
      "Developed practical assignments, laboratory exercises, and project activities.",
      "Provided debugging assistance and code feedback to students.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-neutral-200 bg-white px-6 py-14 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-neutral-900">
          Experience
        </h2>

        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.title}`}
              className="grid gap-3 py-7 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10"
            >
              <div>
                <p className="text-[13px] text-neutral-500">
                  {exp.period}
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  {exp.location}
                </p>
              </div>

              <div className="max-w-3xl">
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  {exp.title}
                </h3>

                <p className="mt-1 text-sm text-neutral-600">
                  {exp.company}
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-neutral-400">
                  {exp.details.map((detail) => (
                    <li
                      key={detail}
                      className="pl-1 text-[14px] leading-6 text-neutral-600"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
