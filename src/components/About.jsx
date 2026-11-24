
import { motion, useReducedMotion } from "framer-motion";
import {
  FiServer,
  FiDatabase,
  FiLayers,
  FiShield,
  FiMapPin,
  FiGlobe,
  FiArrowUpRight,
} from "react-icons/fi";

const focusAreas = [
  {
    icon: FiServer,
    title: "Backend Engineering",
    description:
      "Building reliable REST APIs, authentication systems, and business logic.",
  },
  {
    icon: FiDatabase,
    title: "Database Design",
    description:
      "Designing structured data models with a focus on integrity and reliable transactions.",
  },
  {
    icon: FiLayers,
    title: "Full-stack Development",
    description:
      "Connecting responsive frontend interfaces with well-structured backend systems.",
  },
  {
    icon: FiShield,
    title: "Software Quality",
    description:
      "Writing maintainable code with attention to testing, security, and error handling.",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="border-y border-[#E2E6DF] bg-[#F7F7F2] px-6 py-16 sm:py-20 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">

          {/* Professional introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h2
              variants={itemVariants}
              className="max-w-lg text-[34px] font-semibold leading-[1.15] tracking-[-0.045em] text-[#20251F] sm:text-[36px]"
            >
              About Me
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="mt-6 max-w-xl space-y-5 text-[15px] leading-8 text-[#62685F]"
            >
              <p>
                At TechAlias, I worked on database-driven web applications,
                REST APIs, and inventory management systems. I focus on
                reliable business logic, data integrity, and maintainable code.
              </p>
              <p>
                My background also includes teaching programming and databases,
                and a Master's degree in Computational Science from Laurentian
                University. I continue to build practical full-stack applications.
              </p>
            </motion.div>

            {/* Location and availability */}
            <motion.div
              variants={itemVariants}
              className="mt-8 space-y-4 border-t border-[#DCE1D8] pt-6"
            >
              <div className="flex items-center gap-3 text-[13px] text-[#555E52]">
                <FiMapPin
                  size={17}
                  aria-hidden="true"
                  className="shrink-0 text-[#55705A]"
                />

                <span>
                  Based in Sudbury, Ontario, Canada
                </span>
              </div>

              <div className="flex items-center gap-3 text-[13px] text-[#555E52]">
                <FiGlobe
                  size={17}
                  aria-hidden="true"
                  className="shrink-0 text-[#55705A]"
                />

                <span>
                  Open to relocation and remote opportunities
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-7"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#48634A] underline-offset-4 hover:underline"
              >
                Get in touch

                <FiArrowUpRight
                  size={17}
                  className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Engineering focus areas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#55705A]">
                Engineering approach
              </p>

              <h3 className="mt-3 text-[24px] font-semibold tracking-tight text-[#20251F]">
                Engineering Focus
              </h3>
            </motion.div>

            <div className="divide-y divide-[#DCE1D8] border-y border-[#DCE1D8]">
              {focusAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <motion.article
                    key={area.title}
                    variants={itemVariants}
                    className="group flex items-start gap-4 py-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#DCE3D8] bg-[#E9EEE5] text-[#55705A] transition-colors group-hover:bg-[#26352A] group-hover:text-white">
                      <Icon
                        size={22}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h4 className="text-[16px] font-semibold tracking-tight text-[#303D30]">
                        {area.title}
                      </h4>

                      <p className="mt-2 text-[14px] leading-7 text-[#666D63]">
                        {area.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
