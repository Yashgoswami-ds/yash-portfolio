import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  GitBranch,
  Brain,
  Rocket,
} from "lucide-react";


const journey = [

  {
    year:"2023",
    title:"Started B.Tech CSE",
    desc:"Started my Computer Science journey exploring programming fundamentals, software engineering and problem solving.",
    icon:GraduationCap,
  },

  {
    year:"2025",
    title:"Backend Engineering",
    desc:"Built scalable backend systems using Java, Spring Boot, REST APIs, databases and cloud technologies.",
    icon:Code2,
  },

  {
    year:"2026",
    title:"Open Source Contribution",
    desc:"Started contributing to Apache Fineract and learned real-world open source development workflows.",
    icon:GitBranch,
  },

  {
    year:"2026",
    title:"AI + Full Stack Development",
    desc:"Building AI-powered applications combining machine learning, backend systems and modern frontend.",
    icon:Brain,
  },

  {
    year:"Future",
    title:"Building Impactful Products",
    desc:"Continuously improving system design, distributed systems and creating scalable software solutions.",
    icon:Rocket,
  },

];



const Journey =()=>{


return (

<section

id="journey"

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

className="text-center"

>


<p

className="
text-sm
uppercase
tracking-[0.45em]
text-blue-500
"

>
Journey
</p>




<h2

className="
mt-5

text-5xl

font-black

text-[rgb(var(--foreground))]

"

>

The path behind

<span

className="
block
text-blue-500
"

>

what I build

</span>


</h2>



<p

className="
mx-auto
mt-5
max-w-xl

text-lg

text-[rgb(var(--muted))]

"

>

A timeline of learning, engineering and
continuous growth.

</p>



</motion.div>








<div

className="
relative
mt-24

"

>





{/* Curved Road */}

<svg

className="
absolute

left-1/2

top-0

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

stroke="url(#journeyGradient)"

strokeWidth="4"

strokeDasharray="8 12"

/>



<defs>

<linearGradient id="journeyGradient">

<stop stopColor="#3b82f6"/>

<stop offset="1" stopColor="#06b6d4"/>

</linearGradient>

</defs>


</svg>








{
journey.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div

key={item.year}

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

<Icon size={24}/>

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

`

}

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


hover:shadow-[0_20px_60px_rgba(59,130,246,.12)]

"

>





<div

className="
flex
items-center
justify-between
"

>


<div

className="
flex
h-11
w-11

items-center
justify-center

rounded-xl

bg-blue-500/10

text-blue-500

"

>

<Icon size={22}/>

</div>




<span

className="
rounded-full

border

border-blue-500/20

px-3

py-1

text-xs

font-semibold

text-blue-500

"

>

{item.year}

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

{item.title}

</h3>







<p

className="
mt-4

leading-relaxed

text-[rgb(var(--muted))]

"

>

{item.desc}

</p>





</motion.div>



</div>






</motion.div>


)

})

}





</div>













</div>



</section>

)


}


export default Journey;