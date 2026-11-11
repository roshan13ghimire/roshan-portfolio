
const education = [
  {
    degree: "Master of Science in Computational Science",
    institution: "Laurentian University",
    period: "May 2024 – Apr 2026",
    location: "Sudbury, Ontario, Canada",
    gpa: "9.00 / 10",
    coursework:
      "Computational Science, Machine Learning, Computer Forensics",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "SRKR Engineering College",
    period: "Aug 2017 – May 2021",
    location: "Andhra Pradesh, India",
    gpa: "8.1 / 10",
    coursework:
      "Data Structures and Algorithms, Database Management, Web Development, Software Engineering",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-neutral-200 bg-white px-6 py-14 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-neutral-900">
          Education
        </h2>

        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {education.map((edu) => (
            <article
              key={edu.institution}
              className="grid gap-3 py-7 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10"
            >
              <p className="text-[13px] text-neutral-500">
                {edu.period}
              </p>

              <div>
                <h3 className="text-[17px] font-semibold leading-6 text-neutral-900">
                  {edu.degree}
                </h3>

                <p className="mt-2 text-sm font-medium text-neutral-700">
                  {edu.institution}
                </p>

                <p className="mt-1 text-[13px] text-neutral-500">
                  {edu.location}
                </p>

                <p className="mt-3 text-[14px] text-neutral-600">
                  GPA: {edu.gpa}
                </p>

                <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                  <span className="font-medium text-neutral-700">
                    Coursework:
                  </span>{" "}
                  {edu.coursework}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
