import { motion } from "framer-motion";
import skills from "../data/skills";


function Skills() {


  return (

    <section
      id="skills"
      className="
        py-32
        bg-gray-50
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
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

        >

          <p
            className="
              text-blue-600
              text-lg
              font-medium
            "
          >
            Technical Skills
          </p>


          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
              text-gray-900
            "
          >
            Technologies I Work With
          </h2>


        </motion.div>




        <div

          className="
            mt-16
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "

        >


          {
            skills.map((skill)=>(

              <div

                key={skill.category}

                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-3xl
                  p-8
                "

              >


                <h3

                  className="
                    text-xl
                    font-semibold
                    text-gray-900
                  "

                >

                  {skill.category}

                </h3>



                <div

                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-3
                  "

                >

                  {
                    skill.items.map((item)=>(

                      <span

                        key={item}

                        className="
                          px-4
                          py-2
                          rounded-full
                          bg-gray-100
                          text-sm
                          text-gray-700
                        "

                      >

                        {item}

                      </span>

                    ))
                  }


                </div>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

}


export default Skills;