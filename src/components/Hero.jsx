
import profilePhoto from "../assets/profile.jpg";
import resumePDF from "../assets/Roshan_Ghimire_Resume.pdf";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-white px-6 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_260px] lg:gap-20">
          <div className="max-w-xl">
            <p className="mb-4 text-[13px] text-neutral-500">
              Software Developer · Sudbury, Ontario
            </p>

            <h1 className="text-[38px] font-semibold leading-tight tracking-tight text-neutral-900 sm:text-[42px]">
              Roshan Ghimire
            </h1>

            <p className="mt-5 text-[17px] leading-7 text-neutral-800">
              I build web applications with Python,
              Django, PostgreSQL, and React.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-neutral-600">
              I'm a software developer with over two years
              of professional experience, primarily working
              on backend APIs, databases, and web applications.
              I enjoy building software that makes everyday
              work easier.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                className="border-b border-neutral-900 pb-1 text-sm font-medium text-neutral-900 hover:border-neutral-500"
              >
                View my work ↗
              </a>

              <a
                href={resumePDF}
                download="Roshan_Ghimire_Resume.pdf"
                className="border-b border-neutral-300 pb-1 text-sm text-neutral-600 hover:text-neutral-900"
              >
                Download resume ↗
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-6 text-[13px] text-neutral-500">
              <a
                href="https://github.com/roshan13ghimire"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/roshan13ghimire/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900"
              >
                LinkedIn
              </a>

              <a
                href="mailto:roshan13ghimire@gmail.com"
                className="hover:text-neutral-900"
              >
                Email
              </a>
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <img
              src={profilePhoto}
              alt="Roshan Ghimire"
              fetchPriority="high"
              className="aspect-[4/5] w-full max-w-[240px] rounded-sm object-cover object-[center_10%] md:max-w-[260px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
