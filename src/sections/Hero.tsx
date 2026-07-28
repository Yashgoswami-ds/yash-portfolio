import { motion } from "framer-motion";
import resumePDF from "../assets/Yash_Goswami_Resume.pdf";

import {
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import heroImage from "../assets/panther.png";


const Hero = () => {


  const skills = [
    "Java",
    "Spring Boot",
    "REST APIs",
  ];


  return (

    <section
      id="home"
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[rgb(var(--background))]
      px-4
      sm:px-6
      pt-24
      "
    >


      {/* Hero Image */}

      <motion.img

        src={heroImage}

        alt="Panther"

        initial={{
          opacity:0,
          x:-80
        }}

        animate={{
          opacity:1,
          x:0
        }}

        transition={{
          duration:1
        }}

        className="
        absolute
        bottom-0
        left-1/2
        h-[35vh]
        w-auto
        -translate-x-1/2
        object-contain

        sm:h-[50vh]
        md:h-[60vh]

        lg:left-0
        lg:h-[85vh]
        lg:translate-x-0

        opacity-40
        dark:opacity-100
        "

      />




      {/* Background Glow */}

      <div
        className="
        absolute
        right-0
        top-20
        h-[250px]
        w-[250px]
        rounded-full
        bg-blue-500/20
        blur-[120px]

        sm:h-[350px]
        sm:w-[350px]

        lg:right-20
        lg:top-32
        lg:h-[400px]
        lg:w-[400px]
        "
      />




      <div
        className="
        relative
        mx-auto
        flex
        min-h-screen
        max-w-7xl
        items-center
        justify-center

        lg:justify-end
        "
      >



      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:.8
        }}

        className="
        relative
        z-10
        max-w-3xl
        text-center
        lg:text-right
        "

      >




      {/* Badge */}

      <div
        className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-blue-500/30
        bg-blue-500/10
        px-4
        py-2
        text-sm
        text-blue-500
        "
      >

        <Sparkles size={16}/>

        Backend Engineer • Java • AI

      </div>





      {/* Heading */}

      <h1

      className="
      mt-6
      text-4xl
      sm:text-5xl
      md:text-6xl
      lg:text-7xl
      font-black
      leading-tight
      tracking-tight
      text-[rgb(var(--foreground))]
      "

      >

        Building


        <span
          className="
          block
          bg-gradient-to-r
          from-blue-500
          via-cyan-400
          to-purple-500
          bg-clip-text
          text-transparent
          animate-pulse
          "
        >

          Scalable Systems

        </span>



        <span
          className="
          block
          text-2xl
          sm:text-3xl
          md:text-5xl
          text-[rgb(var(--foreground))]
          "
        >

          with Java & AI

        </span>


      </h1>






      {/* Description */}

      <p

      className="
      mt-7
      mx-auto
      max-w-xl
      text-base
      sm:text-lg
      leading-relaxed
      text-[rgb(var(--muted))]
      lg:ml-auto
      "

      >

        I design and build backend solutions
        that are reliable, scalable and
        production ready.


        <span className="block mt-2">

          Exploring Java, Spring Boot,
          distributed systems and AI-powered applications.

        </span>

      </p>






      {/* Buttons */}

      <div
        className="
        mt-10
        flex
        flex-wrap
        justify-center
        gap-4
        lg:justify-end
        "
      >


        <a
          href="#projects"

          className="
          group
          flex
          items-center
          gap-2
          rounded-full
          bg-blue-500
          px-8
          py-3.5
          font-medium
          text-white
          shadow-lg
          shadow-blue-500/30
          transition
          hover:-translate-y-1
          hover:bg-blue-600
          "
        >

          Explore Work

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />

        </a>





        <a
          href="#contact"

          className="
          rounded-full
          border
          border-black/20
          px-8
          py-3.5
          text-[rgb(var(--foreground))]
          transition
          hover:border-blue-500
          dark:border-white/20
          "
        >

          Contact Me

        </a>


      </div>







      {/* Social + Resume */}

      <div

      className="
      mt-8
      flex
      flex-wrap
      justify-center
      gap-3

      lg:justify-end
      "

      >


      <a

      href="https://github.com/Yashgoswami-ds"

      target="_blank"

      rel="noopener noreferrer"

      className="
      rounded-full
      border
      border-black/20
      p-3
      text-[rgb(var(--muted))]
      transition
      hover:-translate-y-1
      hover:border-blue-500
      hover:text-blue-500
      dark:border-white/20
      "

      >

      <FaGithub size={20}/>

      </a>




      <a

      href="https://in.linkedin.com/in/yash-goswami-99374a278"

      target="_blank"

      rel="noopener noreferrer"

      className="
      rounded-full
      border
      border-black/20
      p-3
      text-[rgb(var(--muted))]
      transition
      hover:-translate-y-1
      hover:border-blue-500
      hover:text-blue-500
      dark:border-white/20
      "

      >

      <FaLinkedin size={20}/>

      </a>




      <a

      href={resumePDF}

      download="Yash_Goswami_Resume.pdf"

      className="
      flex
      items-center
      gap-2
      rounded-full
      border
      border-black/20
      px-5
      py-3
      text-[rgb(var(--foreground))]
      transition
      hover:-translate-y-1
      hover:border-blue-500
      hover:text-blue-500
      dark:border-white/20
      "

      >

      <Download size={18}/>

      Resume

      </a>


      </div>








      {/* Skills */}

      <div

      className="
      mt-10
      flex
      flex-wrap
      justify-center
      gap-3
      lg:justify-end
      "

      >

      {
        skills.map((skill)=>(

          <span

          key={skill}

          className="
          rounded-full
          border
          border-blue-500/20
          bg-blue-500/5
          px-5
          py-2
          text-sm
          text-[rgb(var(--muted))]
          transition
          hover:border-blue-500
          hover:text-blue-500
          "

          >

          {skill}

          </span>

        ))
      }


      </div>





      </motion.div>


      </div>


    </section>

  );

};


export default Hero;