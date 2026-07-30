import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Contact() {


  return (

    <section
      id="contact"
      className="
        py-32
        bg-white
      "
    >

      <div
        className="
          max-w-4xl
          mx-auto
          px-6
          text-center
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
            Contact
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

            Let's build something together

          </h2>



          <p

            className="
              mt-6
              text-xl
              text-gray-600
              leading-relaxed
            "

          >

            I am open to software development and
            IT opportunities where I can contribute,
            learn, and build practical solutions.

          </p>




          <div

            className="
              mt-10
              flex
              justify-center
              flex-wrap
              gap-5
            "

          >


            <a

              href="mailto:roshan13ghimire@gmail.com"

              className="
                flex
                items-center
                gap-3
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

              <FaEnvelope />

              Email

            </a>




            <a

              href="https://linkedin.com/in/roshan13ghimire/"

              target="_blank"

              rel="noreferrer"

              className="
                flex
                items-center
                gap-3
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

              <FaLinkedin />

              LinkedIn

            </a>




            <a

              href="https://github.com/roshan13ghimire"

              target="_blank"

              rel="noreferrer"

              className="
                flex
                items-center
                gap-3
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

              <FaGithub />

              GitHub

            </a>


          </div>


        </motion.div>


      </div>


    </section>

  );

}


export default Contact;