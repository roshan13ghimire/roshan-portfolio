import { motion } from "framer-motion";


function Navbar() {

  const navLinks = [
    {
      name: "Projects",
      href: "#projects"
    },
    {
      name: "Experience",
      href: "#experience"
    },
    {
      name: "Skills",
      href: "#skills"
    },
    {
      name: "Contact",
      href: "#contact"
    }
  ];


  return (

    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}

      className="
        fixed
        top-0
        left-0
        w-full
        bg-white/90
        backdrop-blur
        border-b
        border-gray-100
        z-50
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-24
          flex
          items-center
          justify-between
        "
      >


        {/* Logo */}

        <a
          href="/"
          className="
            text-2xl
            font-semibold
            tracking-tight
            text-gray-900
          "
        >
          Roshan Ghimire
        </a>



        {/* Links */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-10
          "
        >

          {
            navLinks.map((link)=>(
              <a
                key={link.name}
                href={link.href}

                className="
                  text-base
                  text-gray-600
                  hover:text-black
                  transition
                "
              >
                {link.name}
              </a>
            ))
          }



          <a
            href="#resume"

            className="
              bg-black
              text-white
              px-6
              py-3
              rounded-xl
              text-base
              font-medium
              hover:bg-gray-800
              transition
            "
          >
            Resume
          </a>


        </div>


      </div>

    </motion.nav>

  );
}


export default Navbar;