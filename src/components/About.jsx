
export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-neutral-200 bg-stone-50 px-6 py-14 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            About Me
          </h2>

          <div className="max-w-2xl">
            <div className="space-y-4 text-[15px] leading-7 text-neutral-600">
              <p>
                My professional background is mainly in
                backend development. At TechAlias, I worked
                with Django, REST APIs, PostgreSQL, and
                inventory management applications.
              </p>

              <p>
                Alongside software development, I've worked
                as a computer science lecturer, teaching
                programming and database concepts. I also
                build personal projects to explore new
                technologies and improve my development skills.
              </p>
            </div>

            <div className="mt-8 grid gap-5 border-t border-neutral-200 pt-6 sm:grid-cols-2">
              <div>
                <p className="text-[13px] font-medium text-neutral-900">
                  Location
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Sudbury, Ontario, Canada
                </p>
              </div>

              <div>
                <p className="text-[13px] font-medium text-neutral-900">
                  Currently
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Open to software development opportunities
                  across Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
