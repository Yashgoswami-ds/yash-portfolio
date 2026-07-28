import { motion } from "framer-motion";
import {
  Code2,
} from "lucide-react";


const projects = [

  {
    no:"01",
    title:"Campus Notification System",
    type:"Backend Engineering",
    desc:
    "Scalable notification platform built with Spring Boot, Kafka and Redis supporting asynchronous event processing, authentication and distributed workflows.",
    tech:[
      "Spring Boot",
      "Apache Kafka",
      "Redis",
      "MySQL",
      "JWT",
      "Docker",
    ],
  },


  {
    no:"02",
    title:"VisualNest",
    type:"Full Stack Application",
    desc:
    "Production-ready photography platform with secure authentication, admin dashboard and cloud based media management.",
    tech:[
      "React",
      "TypeScript",
      "Spring Boot",
      "MongoDB",
      "Supabase",
    ],
  },


  {
    no:"03",
    title:"AI Knowledge Assistant",
    type:"AI / NLP System",
    desc:
    "Semantic search based AI assistant that retrieves knowledge from documents using embeddings and intelligent ranking.",
    tech:[
      "Python",
      "Flask",
      "NLP",
      "Vector Search",
      "Embeddings",
    ],
  },


  {
    no:"04",
    title:"Fraud Detection System",
    type:"Machine Learning",
    desc:
    "End-to-end machine learning pipeline for detecting fraudulent transactions with model evaluation and API deployment.",
    tech:[
      "Python",
      "Scikit-learn",
      "FastAPI",
      "Streamlit",
    ],
  },

];



const Projects = () => {


return (

<section

id="projects"

className="
relative
overflow-hidden
bg-[rgb(var(--background))]
px-6
py-32
"

>



{/* Glow */}

<div

className="
absolute
left-1/2
top-20

h-[450px]
w-[450px]

-translate-x-1/2

rounded-full

bg-blue-500/10

blur-[150px]

"

/>





<div

className="
relative
mx-auto
max-w-6xl

"

>





{/* Heading */}

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
text-sm
uppercase
tracking-[0.45em]
text-blue-500
"

>
Projects
</p>




<h2

className="
mt-5
text-5xl
font-black

text-[rgb(var(--foreground))]

"

>
<>
  Things{" "}
  <span className="text-blue-500">
    I Built
  </span>
</>
</h2>






<p

className="
mt-5
max-w-xl

text-lg

text-[rgb(var(--muted))]

"

>

A collection of systems and applications
built while exploring backend engineering,
AI and scalable software architecture.

</p>



</motion.div>









{/* Road */}

<div

className="
relative
mt-20

"

>



<svg

className="
absolute

left-1/2

top-12

hidden

h-full

w-44

-translate-x-1/2

md:block

"

viewBox="0 0 100 1000"

fill="none"

>



<path

d="
M50 0

C10 170 90 260 50 420

C10 600 90 760 50 1000

"

stroke="currentColor"

strokeWidth="2"

className="
text-blue-500/30
"

/>





<path

d="
M50 0

C10 170 90 260 50 420

C10 600 90 760 50 1000

"

stroke="url(#gradient)"

strokeWidth="4"

strokeDasharray="8 12"

/>



<defs>

<linearGradient id="gradient">

<stop stopColor="#3b82f6"/>

<stop offset="1" stopColor="#06b6d4"/>

</linearGradient>


</defs>


</svg>









{
projects.map((project,index)=>(


<motion.div

key={project.title}

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.15,
duration:.6
}}

viewport={{
once:true
}}

className="
relative
mb-28

flex
items-center

"

>





{/* Node */}

<div

className="
absolute

left-1/2

hidden

h-16

w-16

-translate-x-1/2

items-center

justify-center

rounded-full

border

border-blue-500/30

bg-[rgb(var(--surface))]

text-blue-500

shadow-[0_0_35px_rgba(59,130,246,.45)]

md:flex

"

>

<Code2 size={24}/>

</div>









{/* Card */}

<div

className={`

w-full

md:w-[46%]


${
index%2===0

?

"md:mr-auto md:pr-14"

:

"md:ml-auto md:pl-14"

}


`}

>



<motion.div

whileHover={{
y:-8
}}

className="

group

rounded-3xl

border

border-[rgb(var(--border)/0.12)]

bg-[rgb(var(--surface)/0.75)]

p-8

backdrop-blur-xl


transition-all

duration-500


hover:border-blue-500/40

hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]

"

>








<div

className="
flex
items-center
justify-between

"

>


<span

className="
flex

h-10
w-10

items-center
justify-center

rounded-full

border

border-blue-500/20

bg-blue-500/10

text-sm

font-bold

text-blue-500

"

>

{project.no}

</span>






<span

className="
rounded-full

border

border-blue-500/20

px-3

py-1

text-xs

text-blue-500

"

>

{project.type}

</span>



</div>








<h3

className="
mt-6

text-2xl

font-bold

text-[rgb(var(--foreground))]

"

>

{project.title}

</h3>







<p

className="
mt-4

leading-relaxed

text-[rgb(var(--muted))]

"

>

{project.desc}

</p>







<div

className="
mt-6

flex

flex-wrap

gap-2

"

>


{
project.tech.map((item)=>(


<span

key={item}

className="
rounded-full

border

border-[rgb(var(--border)/0.15)]

bg-[rgb(var(--background)/0.4)]

px-3

py-1.5

text-xs

text-[rgb(var(--muted))]


transition


hover:border-blue-500

hover:text-blue-500

"

>

{item}

</span>


))

}



</div>






</motion.div>


</div>






</motion.div>


))

}




</div>




</div>



</section>

);

};


export default Projects;