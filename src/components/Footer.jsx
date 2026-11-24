
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/roshan13ghimire",
    icon: FiGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/roshan13ghimire/",
    icon: FiLinkedin,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:roshan13ghimire@gmail.com",
    icon: FiMail,
    external: false,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#435443] bg-[#202D23] px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

          {/* Brand and copyright */}
          <div className="flex items-center gap-3">
            <a
              href="#top"
              aria-label="Return to homepage"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#61755D] text-sm font-semibold text-[#F7F7F2] transition-colors hover:bg-[#3D5140]"
            >
              RG
            </a>

            <div>
              <p className="text-[13px] font-semibold text-[#F7F7F2]">
                Roshan Ghimire
              </p>

              <p className="mt-1 text-[11px] leading-5 text-[#B6C8B0]">
                © {currentYear}. All rights reserved.
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={
                    social.external ? "_blank" : undefined
                  }
                  rel={
                    social.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#435443] text-[#B6C8B0] transition-colors hover:border-[#82947E] hover:bg-[#3D5140] hover:text-white"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              );
            })}
          </div>

          {/* Back to top */}
          <a
            href="#top"
            className="group inline-flex items-center gap-2 self-start text-[12px] font-medium text-[#B6C8B0] transition-colors hover:text-white sm:self-center"
          >
            Back to top

            <FiArrowUp
              size={16}
              aria-hidden="true"
              className="transition-transform motion-safe:group-hover:-translate-y-1"
            />
          </a>

        </div>
      </div>
    </footer>
  );
}
