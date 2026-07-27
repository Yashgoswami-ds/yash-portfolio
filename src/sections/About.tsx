import { motion } from "framer-motion";


const tech = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "AWS",
  "AI/ML",
  "System Design",
];


const About = () => {
  return (
    <section
      id="about"
      className="
      relative
      overflow-hidden
      bg-[rgb(var(--background))]
      px-6
      py-24
      transition-colors
      duration-500
      "
    >

      <div
        className="
        absolute
        left-1/2
        top-20
        h-[300px]
        w-[300px]
        -translate-x-1/2
        rounded-full
        bg-blue-600/10
        blur-[120px]
        animate-pulse
        "
      />


      <div
        className="
        relative
        mx-auto
        max-w-5xl
        "
      >


        <motion.div
          initial={{
            opacity:0,
            y:20
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.6,
            ease:"easeOut"
          }}

          viewport={{
            once:true
          }}
        >

          <p
            className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-blue-500
            "
          >
            About
          </p>


          <h2
            className="
            mt-5
            max-w-3xl
            text-4xl
            font-semibold
            leading-tight
            text-[rgb(var(--foreground))]
            md:text-5xl
            "
          >
            Building software with

            <span className="text-[rgb(var(--muted))]">
              {" "}purpose and precision.
            </span>

          </h2>


        </motion.div>





        <motion.div
          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7,
            delay:0.2,
            ease:"easeOut"
          }}

          viewport={{
            once:true
          }}

          className="
          mt-10
          max-w-3xl
          "
        >

          <p
            className="
            text-lg
            leading-relaxed
            text-[rgb(var(--muted))]
            "
          >
            I'm Yash Goswami, a Computer Science Engineering
            student focused on backend engineering, scalable
            systems and intelligent applications.
          </p>


          <p
            className="
            mt-5
            text-lg
            leading-relaxed
            text-[rgb(var(--muted))]
            "
          >
            I build with Java, Spring Boot, React and modern
            cloud technologies while exploring distributed
            systems, AI and open-source development.
          </p>


        </motion.div>





        <motion.div
          initial={{
            opacity:0
          }}

          whileInView={{
            opacity:1
          }}

          transition={{
            duration:0.6,
            delay:0.4
          }}

          viewport={{
            once:true
          }}

          className="
          mt-10
          flex
          flex-wrap
          gap-3
          "
        >

          {
            tech.map((item,index)=>(

              <motion.span

                key={item}

                initial={{
                  opacity:0,
                  y:15
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  delay:index*0.08
                }}

                viewport={{
                  once:true
                }}

                className="
                rounded-full
                border
                border-[rgb(var(--border)/0.12)]
                bg-[rgb(var(--surface)/0.78)]
                px-4
                py-2
                text-sm
                text-[rgb(var(--foreground)/0.78)]

                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:border-blue-500
                hover:bg-blue-500/10
                hover:text-blue-500
                hover:shadow-lg
                hover:shadow-blue-500/20
                "

              >
                {item}

              </motion.span>

            ))
          }


        </motion.div>





        <motion.div
          initial={{
            opacity:0,
            y:20
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.6,
            delay:0.5
          }}

          viewport={{
            once:true
          }}

          className="
          mt-14
          flex
          items-center
          gap-4
          "
        >

          <div
            className="
            h-px
            w-16
            bg-blue-500
            "
          />


          <p
            className="
            text-sm
            text-[rgb(var(--muted))]
            "
          >
            Currently exploring scalable systems,
            AI engineering & open source.
          </p>


        </motion.div>


      </div>


    </section>
  );
};


export default About;