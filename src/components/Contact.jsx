
export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-neutral-200 bg-stone-50 px-6 py-14 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Contact
          </h2>

          <div className="max-w-2xl">
            <p className="text-[15px] leading-7 text-neutral-600">
              I'm open to software development opportunities
              across Canada. If you're interested in my work
              or would like to discuss an opportunity,
              feel free to get in touch.
            </p>

            <a
              href="mailto:roshan13ghimire@gmail.com"
              className="mt-6 inline-block break-all border-b border-neutral-900 pb-1 text-[15px] font-medium text-neutral-900"
            >
              roshan13ghimire@gmail.com ↗
            </a>

            <div className="mt-8 flex flex-wrap gap-6 text-[14px] text-neutral-600">
              <a
                href="https://github.com/roshan13ghimire"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/roshan13ghimire/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900"
              >
                LinkedIn ↗
              </a>

              <a
                href="#top"
                className="hover:text-neutral-900"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
