import { 
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";


function ProjectCard({ project, index }) {


  return (

    <div

      className="
        grid
        md:grid-cols-2
        gap-12
        items-center
      "

    >


      {/* Image */}

      <div

        className={`
          rounded-3xl
          overflow-hidden
          border
          border-gray-200
          bg-gray-100
          ${index % 2 !== 0 ? "md:order-2" : ""}
        `}

      >

        <img

          src={project.image}

          alt={project.title}

          className="
            w-full
            h-105
            object-cover
            group-hover:scale-105
            transition
            duration-500
          "

        />

      </div>




      {/* Content */}

      <div

        className="
          space-y-6
        "

      >


        <h3

          className="
            text-3xl
            md:text-4xl
            font-bold
            text-gray-900
          "

        >

          {project.title}

        </h3>




        <p

          className="
            text-lg
            text-gray-600
            leading-relaxed
          "

        >

          {project.description}

        </p>




        {/* Features */}

        <div>

          <h4
            className="
              font-semibold
              text-gray-900
              mb-3
            "
          >
            Key Features
          </h4>


          <ul
            className="
              space-y-2
              text-gray-600
            "
          >

            {
              project.features.map((feature)=>(
                
                <li
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <span
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-gray-800
                    "
                  />

                  {feature}

                </li>

              ))
            }

          </ul>


        </div>





        {/* Technologies */}

        <div

          className="
            flex
            flex-wrap
            gap-3
          "

        >

          {
            project.technologies.map((tech)=>(

              <span

                key={tech}

                className="
                  px-4
                  py-2
                  rounded-full
                  bg-gray-100
                  text-sm
                  text-gray-700
                "

              >

                {tech}

              </span>

            ))
          }


        </div>




        {/* Links */}

        <div

          className="
            flex
            gap-4
            pt-3
          "

        >

          <a

            href={project.demo}

            target="_blank"

            rel="noreferrer"

            className="
              inline-flex
              items-center
              gap-2
              bg-black
              text-white
              px-6
              py-3
              rounded-xl
              font-medium
              hover:bg-gray-800
              transition
            "

          >

            Live Demo

            <FaExternalLinkAlt size={14}/>

          </a>




          <a

            href={project.github}

            target="_blank"

            rel="noreferrer"

            className="
              inline-flex
              items-center
              gap-2
              border
              border-gray-300
              px-6
              py-3
              rounded-xl
              font-medium
              hover:bg-gray-100
              transition
            "

          >

            GitHub

            <FaGithub size={17}/>

          </a>


        </div>


      </div>


    </div>

  );

}


export default ProjectCard;