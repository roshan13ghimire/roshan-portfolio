import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import profile from "../assets/roshan-profile.jpg";


function Hero() {


  return (

    <section
      className="
        min-h-screen
        flex
        items-center
        bg-white
        pt-32
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          gap-20
          items-center
        "
      >


        {/* LEFT SIDE */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

        >


          <p
            className="
              text-sm
              uppercase
              tracking-widest
              text-gray-500
              font-medium
            "
          >
            Full-Stack Developer
          </p>



          <h1

            className="
              mt-6
              text-6xl
              md:text-7xl
              font-bold
              tracking-tight
              leading-none
              text-gray-900
            "

          >

            Roshan
            <br />

            Ghimire

          </h1>



          <p

            className="
              mt-8
              text-xl
              text-gray-600
              max-w-xl
              leading-relaxed
            "

          >

            I build practical business applications
            using React, Django, and PostgreSQL.

            Turning real-world problems into reliable
            software solutions.

          </p>




          <div

            className="
              mt-10
              flex
              gap-4
              flex-wrap
            "

          >

            <a

              href="#projects"

              className="
                flex
                items-center
                gap-3
                bg-black
                text-white
                px-7
                py-4
                rounded-xl
                font-medium
              "

            >

              View Projects

              <FaArrowRight />

            </a>



            <a

              href="/resume.pdf"

              className="
                border
                border-gray-300
                px-7
                py-4
                rounded-xl
                font-medium
                hover:bg-gray-100
                transition
              "

            >

              Resume

            </a>


          </div>




          <div

            className="
              mt-10
              flex
              flex-wrap
              gap-3
            "

          >

            {
              [
                "React",
                "Django",
                "PostgreSQL",
                "Python"
              ].map((tech)=>(

                <span

                  key={tech}

                  className="
                    px-4
                    py-2
                    border
                    border-gray-200
                    rounded-full
                    text-sm
                    text-gray-700
                  "

                >

                  {tech}

                </span>

              ))
            }


          </div>


        </motion.div>





        {/* RIGHT SIDE */}

        <motion.div

          initial={{
            opacity:0,
            scale:0.95
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:0.7
          }}

          className="
            relative
            flex
            justify-center
          "

        >


          {/* Floating Tech Tags */}

          <div
            className="
              absolute
              top-10
              left-0
              bg-white
              border
              border-gray-200
              rounded-xl
              px-4
              py-3
              shadow-sm
              text-sm
            "
          >
            React.js
          </div>



          <div
            className="
              absolute
              bottom-24
              right-0
              bg-white
              border
              border-gray-200
              rounded-xl
              px-4
              py-3
              shadow-sm
              text-sm
            "
          >
            Django REST
          </div>




          {/* Photo */}

          <div

            className="
              relative
            "

          >

            <div

              className="
                absolute
                inset-0
                rounded-3xl
                bg-gray-100
                translate-x-4
                translate-y-4
              "

            />


            <img

              src={profile}

              alt="Roshan Ghimire"

              className="
                relative
                w-80
                h-107.5
                object-cover
                rounded-3xl
                border
                border-gray-200
              "

            />

          </div>





          {/* Currently Building Card */}

          <div

            className="
              absolute
              -bottom-10
              -left-10
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-5
              shadow-lg
              w-72
            "

          >

            <p
              className="
                text-xs
                uppercase
                tracking-wide
                text-gray-500
              "
            >
              Currently Building
            </p>


            <h3
              className="
                mt-3
                font-semibold
                text-gray-900
              "
            >
              Employee Onboarding Portal
            </h3>


            <p
              className="
                mt-2
                text-sm
                text-gray-600
              "
            >
              HR workflow system using React,
              Django & PostgreSQL.
            </p>


          </div>



        </motion.div>


      </div>


    </section>

  );

}


export default Hero;