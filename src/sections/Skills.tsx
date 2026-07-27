import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Cloud,
  Brain,
} from "lucide-react";


const skillGroups = [
  {
    title: "Backend Engineering",
    icon: Server,
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Kafka",
    ],
  },

  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
  },

  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      "AWS",
      "Docker",
      "CI/CD",
      "Linux",
    ],
  },

  {
    title: "AI Engineering",
    icon: Brain,
    skills: [
      "Python",
      "Machine Learning",
      "NLP",
      "LLMs",
    ],
  },
];



const Skills = () => {

return (

<section

id="skills"

className="
relative
overflow-hidden
bg-[rgb(var(--background))]
px-6
py-32
"

>


<div

className="
absolute
right-0
top-20
h-[400px]
w-[400px]
rounded-full
bg-blue-500/10
blur-[160px]
"

/>



<div

className="
mx-auto
max-w-6xl
"

>


<div

className="
grid
gap-16
lg:grid-cols-2
"

>



{/* LEFT */}

<motion.div

initial={{
opacity:0,
x:-30
}}

whileInView={{
opacity:1,
x:0
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
Skills
</p>



<h2

className="
mt-5
text-5xl
font-black
leading-tight
text-[rgb(var(--foreground))]
"

>

Building

<span

className="
block
bg-gradient-to-r
from-blue-500
to-cyan-400
bg-clip-text
text-transparent
"

>

Modern Systems

</span>

</h2>



<p

className="
mt-6
max-w-md
text-lg
leading-relaxed
text-[rgb(var(--muted))]
"

>

I focus on creating scalable backend
systems, clean interfaces and intelligent
software solutions.

</p>




<div

className="
mt-10
border-l
border-blue-500/40
pl-6
"

>

<p

className="
text-sm
text-[rgb(var(--muted))]
"

>
Current Focus
</p>


<h3

className="
mt-2
text-xl
font-semibold
text-[rgb(var(--foreground))]
"

>
Java • Spring Boot • Distributed Systems
</h3>


</div>



</motion.div>









{/* RIGHT */}

<div

className="
space-y-5
"

>


{
skillGroups.map((group,index)=>{


const Icon = group.icon;


return (

<motion.div

key={group.title}

initial={{
opacity:0,
x:30
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
delay:index*0.1
}}

viewport={{
once:true
}}

className="
group
border-b
border-[rgb(var(--border)/0.15)]
pb-6
transition
"

>


<div

className="
flex
items-center
gap-4
"

>


<div

className="
rounded-xl
bg-blue-500/10
p-3
text-blue-500
transition
group-hover:scale-110
"

>

<Icon size={22}/>

</div>



<h3

className="
text-xl
font-semibold
text-[rgb(var(--foreground))]
"

>

{group.title}

</h3>


</div>






<div

className="
mt-5
flex
flex-wrap
gap-3
"

>


{
group.skills.map((skill)=>(


<span

key={skill}

className="
relative
overflow-hidden
rounded-full
border
border-[rgb(var(--border)/0.15)]
bg-[rgb(var(--surface)/0.5)]
px-4
py-2
text-sm
text-[rgb(var(--muted))]

transition-all
duration-300

hover:border-blue-500
hover:text-blue-500
hover:shadow-lg
hover:shadow-blue-500/20

"

>

{skill}

</span>


))
}


</div>



</motion.div>


)

})
}



</div>



</div>


</div>


</section>

);

};


export default Skills;