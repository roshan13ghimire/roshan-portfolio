
const skillCategories = [
  {
    name: "Languages",
    skills: "Python, JavaScript, SQL, C++",
  },
  {
    name: "Frontend",
    skills: "React, HTML, CSS, Tailwind CSS",
  },
  {
    name: "Backend",
    skills: "Django, Django REST Framework, Flask, REST APIs",
  },
  {
    name: "Databases",
    skills: "PostgreSQL, MySQL, Supabase",
  },
  {
    name: "Tools & Testing",
    skills: "Git, GitHub, Docker, Postman, Pytest, GitHub Actions",
  },
  {
    name: "Deployment",
    skills: "Vercel, Render",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-neutral-200 bg-white px-6 py-14 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-neutral-900">
          Technical Skills
        </h2>

        <div className="grid gap-x-12 gap-y-0 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="border-t border-neutral-200 py-5"
            >
              <h3 className="text-[14px] font-medium text-neutral-900">
                {category.name}
              </h3>

              <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                {category.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
