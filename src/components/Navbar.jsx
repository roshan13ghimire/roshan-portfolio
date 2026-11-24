
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateNavigation = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("main section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 120) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateNavigation();

    window.addEventListener("scroll", updateNavigation, {
      passive: true,
    });

    window.addEventListener("resize", updateNavigation);

    return () => {
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[#DCE1D8] bg-[#F7F7F2]/95 shadow-sm backdrop-blur-xl"
          : "border-[#E5E8E0] bg-[#F7F7F2]"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6 lg:px-8"
      >
        {/* Brand */}
        <a
          href="#top"
          onClick={closeMenu}
          aria-label="Roshan Ghimire home"
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#26352A] text-sm font-semibold tracking-tight text-white transition-colors group-hover:bg-[#3D5140]">
            RG
          </div>

          <div>
            <p className="text-[14px] font-semibold tracking-tight text-[#20251F]">
              Roshan Ghimire
            </p>

            <p className="mt-0.5 text-[11px] text-[#666D63]">
              Software Developer
            </p>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const isActive =
              activeSection === link.href.substring(1);

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-2 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "text-[#26352A]"
                    : "text-[#666D63] hover:text-[#26352A]"
                }`}
              >
                {link.label}

                {isActive && (
                  <motion.span
                    layoutId="active-navigation"
                    transition={{
                      duration: reduceMotion ? 0 : 0.2,
                    }}
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-[#55705A]"
                  />
                )}
              </a>
            );
          })}

          {/* Contact button */}
          <a
            href="#contact"
            className="group ml-2 inline-flex items-center gap-2 rounded-lg border border-[#AAB8A6] px-4 py-2.5 text-[13px] font-medium text-[#26352A] transition-colors hover:border-[#26352A] hover:bg-[#26352A] hover:text-white"
          >
            Let's talk

            <FiArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D7DDD3] text-[#26352A] transition-colors hover:bg-[#E9EDE5] md:hidden"
        >
          {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{
              height: reduceMotion ? "auto" : 0,
              opacity: reduceMotion ? 1 : 0,
            }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{
              height: reduceMotion ? "auto" : 0,
              opacity: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-[#DCE1D8] bg-[#F7F7F2] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "bg-[#E9EDE5] text-[#26352A]"
                      : "text-[#555E52] hover:bg-[#E9EDE5]"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-between rounded-lg bg-[#26352A] px-4 py-3 text-sm font-medium text-white"
              >
                Let's talk
                <FiArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
