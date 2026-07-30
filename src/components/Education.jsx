import { motion } from "framer-motion";
import education from "../data/education";


function Education() {


  return (

    <section
      id="education"
      className="
        py-32
        bg-white
      "
    >

      <div
        className="
          max-w-5xl
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

          transition={{
            duration:0.6
          }}

        >

          <p
            className="
              text-blue-600
              font-medium
              text-lg
            "
          >
            Education
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
            Academic Background
          </h2>


        </motion.div>




        <div
          className="
            mt-16
            grid
            md:grid-cols-2
            gap-8
          "
        >

          {
            education.map((item)=>(

              <motion.div

                key={item.degree}

                initial={{
                  opacity:0,
                  y:20
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
                }}

                className="
                  border
                  border-gray-200
                  rounded-3xl
                  p-8
                  hover:shadow-lg
                  transition
                "

              >


                <p
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  {item.period}
                </p>



                <h3
                  className="
                    mt-4
                    text-xl
                    font-semibold
                    text-gray-900
                  "
                >
                  {item.degree}
                </h3>



                <p
                  className="
                    mt-3
                    text-gray-700
                    font-medium
                  "
                >
                  {item.institution}
                </p>



                <p
                  className="
                    text-gray-600
                    mt-1
                  "
                >
                  {item.location}
                </p>



                <p
                  className="
                    mt-5
                    text-gray-600
                    leading-relaxed
                  "
                >
                  {item.focus}
                </p>


              </motion.div>

            ))
          }


        </div>


      </div>


    </section>

  );

}


export default Education;