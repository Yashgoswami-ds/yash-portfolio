import { motion } from "framer-motion";
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
      px-6
      pt-24
      "
    >



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
        h-[55vh]
        w-auto
        -translate-x-1/2
        object-contain

        sm:h-[65vh]

        lg:left-0
        lg:h-[85vh]
        lg:translate-x-0

        opacity-70
        dark:opacity-100
        "

      />





      <div
        className="
        absolute
        right-20
        top-32
        h-[400px]
        w-[400px]
        rounded-full
        bg-blue-500/20
        blur-[150px]
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
        justify-end
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







          <h1

          className="
          mt-6
          text-5xl
          font-black
          leading-[1.05]
          tracking-tight
          text-[rgb(var(--foreground))]

          md:text-7xl
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
              text-3xl
              md:text-5xl
              text-[rgb(var(--foreground))]
              "
            >

              with Java & AI

            </span>


          </h1>







          <p

          className="
          mt-7
          ml-auto
          max-w-xl
          text-lg
          leading-relaxed
          text-[rgb(var(--muted))]
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
              className="
              transition
              group-hover:translate-x-1
              "
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









         {/* Social Links + Resume */}

<div

className="
mt-8
flex
justify-center
gap-4

lg:justify-end
"

>


{/* Github */}

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





{/* LinkedIn */}

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







{/* Resume Button */}

<button

className="
flex
items-center
gap-2

rounded-full

border

border-black/20

px-5

text-[rgb(var(--foreground))]

transition

hover:-translate-y-1

hover:border-blue-500


dark:border-white/20

"

>

<Download size={18}/>

Resume

</button>



</div>








          <div

          className="
          mt-12
          flex
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