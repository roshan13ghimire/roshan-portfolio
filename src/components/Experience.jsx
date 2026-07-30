import { motion } from "framer-motion";
import experiences from "../data/experience";


function Experience() {


  return (

    <section
      id="experience"
      className="
        py-32
        bg-gray-50
      "
    >

      <div
        className="
          max-w-5xl
          mx-auto
          px-6
        "
      >


        {/* Section Header */}

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
            Professional Experience
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
            My Career Journey
          </h2>


          <p
            className="
              mt-5
              text-xl
              text-gray-600
              max-w-2xl
              leading-relaxed
            "
          >
            Experience building software solutions,
            teaching computer science, and helping
            others learn technology.
          </p>


        </motion.div>




        {/* Timeline */}

        <div
          className="
            mt-16
            relative
            border-l
            border-gray-200
            ml-3
            space-y-14
          "
        >


          {
            experiences.map((item, index)=>(

              <motion.div

                key={item.role}

                initial={{
                  opacity:0,
                  x:-20
                }}

                whileInView={{
                  opacity:1,
                  x:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  duration:0.5,
                  delay:index * 0.1
                }}

                className="
                  relative
                  pl-10
                "

              >


                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    -left-2.25
                    top-2
                    w-4
                    h-4
                    rounded-full
                    bg-black
                    border-4
                    border-gray-50
                  "
                />



                <p
                  className="
                    text-sm
                    font-medium
                    text-gray-500
                  "
                >
                  {item.period}
                </p>



                <h3
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    text-gray-900
                  "
                >
                  {item.role}
                </h3>



                <p
                  className="
                    mt-1
                    text-gray-700
                    font-medium
                  "
                >
                  {item.company}
                </p>



                <p
                  className="
                    mt-4
                    text-gray-600
                    leading-relaxed
                    max-w-3xl
                  "
                >
                  {item.description}
                </p>




                {/* Highlights */}

                <ul
                  className="
                    mt-5
                    space-y-3
                    text-gray-600
                  "
                >

                  {
                    item.highlights.map((point)=>(

                      <li
                        key={point}
                        className="
                          flex
                          items-start
                          gap-3
                        "
                      >

                        <span
                          className="
                            mt-2
                            w-1.5
                            h-1.5
                            rounded-full
                            bg-gray-900
                            shrink-0
                          "
                        />

                        <span>
                          {point}
                        </span>

                      </li>

                    ))
                  }

                </ul>



              </motion.div>

            ))
          }


        </div>


      </div>


    </section>

  );

}


export default Experience;