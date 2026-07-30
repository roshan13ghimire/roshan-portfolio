import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";


function Projects() {

  return (

    <section
      id="projects"
      className="
        py-32
        bg-white
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >


        <motion.div

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.6
          }}

        >

          <p
            className="
              text-blue-600
              font-medium
              text-lg
            "
          >
            Featured Projects
          </p>


          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
              tracking-tight
              text-gray-900
            "
          >
            Real-world applications
          </h2>


          <p
            className="
              mt-5
              max-w-2xl
              text-xl
              text-gray-600
              leading-relaxed
            "
          >
            Projects focused on solving practical
            business problems using modern web technologies.
          </p>


        </motion.div>



        <div
          className="
            mt-20
            flex
            flex-col
            gap-20
          "
        >

          {
            projects.map((project, index) => (

              <ProjectCard

                key={project.title}

                project={project}

                index={index}

              />

            ))
          }


        </div>


      </div>


    </section>

  );

}


export default Projects;