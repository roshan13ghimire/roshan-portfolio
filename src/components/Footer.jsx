function Footer() {


  return (

    <footer

      className="
        border-t
        border-gray-200
        py-8
        bg-white
      "

    >

      <div

        className="
          max-w-7xl
          mx-auto
          px-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          text-sm
          text-gray-500
        "

      >

        <p>
          © {new Date().getFullYear()} Roshan Ghimire.
          All rights reserved.
        </p>


        <p>
          Built with React and Tailwind CSS.
        </p>


      </div>


    </footer>

  );

}


export default Footer;