import { motion } from "framer-motion";
import {
  Briefcase,
  GitBranch,
} from "lucide-react";


const experiences = [

  {
    icon: Briefcase,
    role: "Software Development Intern",
    company: "CodSoft",
    duration: "Jan 2026 - Feb 2026",
    desc:
      "Worked on Java and React based applications, debugging issues, developing features and improving application workflows through collaborative development.",
    stack:[
      "Java",
      "React",
      "REST APIs",
      "Git",
    ],
  },


  {
    icon: Briefcase,
    role: "AI Development Intern",
    company: "Bharat Intern",
    duration: "Apr 2026 - May 2026",
    desc:
      "Worked on GPT-2 fine tuning using PyTorch and Hugging Face Transformers. Built preprocessing pipelines, tokenization workflows and evaluated AI generated responses.",
    stack:[
      "Python",
      "PyTorch",
      "Transformers",
      "NLP",
    ],
  },


 {
  icon: GitBranch,
  role: "Open Source Contributor",
  company: "Apache Software Foundation",
  duration: "2025 - Present",
  desc:
    "Contributing to Apache Solr and Apache Fineract by resolving backend issues, fixing production bugs, writing SolrCloud integration tests, improving SQL query handling and collaborating with maintainers through code reviews and CI workflows.",
  stack: [
    "Java",
    "Apache Solr",
    "Apache Fineract",
    "JUnit",
    "SQL",
    "Git",
  ],
},

];



const Experience = () => {


return (

<section

id="experience"

className="
relative
overflow-hidden
bg-[rgb(var(--background))]
px-6
py-32
"

>


{/* Background */}

<div

className="
absolute
right-0
top-20
h-[450px]
w-[450px]
rounded-full
bg-blue-500/10
blur-[160px]
"

/>


<div

className="
absolute
left-0
bottom-20
h-[350px]
w-[350px]
rounded-full
bg-purple-500/10
blur-[140px]
"

/>





<div

className="
relative
mx-auto
max-w-6xl
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

>

<p

className="
text-sm
uppercase
tracking-[0.45em]
text-blue-500
"

>
Experience
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
  My{" "}
  <span className="text-blue-500">
    Journey
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

Professional experiences where I worked on
backend systems, AI applications and open source.

</p>


</motion.div>







{/* Timeline */}

<div

className="
relative
mt-20
"

>


{/* Center Line */}

<div

className="
absolute
left-1/2
top-0
hidden
h-full
w-[2px]
-translate-x-1/2
bg-gradient-to-b
from-blue-500/60
via-blue-500/20
to-transparent
md:block
"

/>





{
experiences.map((item,index)=>{


const Icon=item.icon;


return (


<motion.div

key={item.company}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.6,
delay:index*.15
}}

viewport={{
once:true
}}

className="
relative
mb-20
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
h-5
w-5
-translate-x-1/2
rounded-full
border-4
border-[rgb(var(--background))]
bg-blue-500
shadow-[0_0_30px_rgba(59,130,246,.8)]
md:block
"

/>







{/* Card */}

<div

className={`

w-full

md:w-[48%]


${
index % 2 === 0

?

"md:mr-auto"

:

"md:ml-auto"

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

border-white/10

bg-white/5

dark:bg-white/[0.04]

p-8

backdrop-blur-2xl


transition-all

duration-500


hover:border-blue-500/40

hover:bg-blue-500/5

hover:shadow-[0_20px_60px_rgba(59,130,246,.15)]

"

>





<div

className="
flex
items-start
justify-between
gap-4
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
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-blue-500/10
text-blue-500
transition
duration-300
group-hover:scale-110
"

>

<Icon size={26}/>

</div>



<div>

<h3

className="
text-xl
font-bold
text-[rgb(var(--foreground))]
"

>

{item.role}

</h3>


<p

className="
mt-1
text-blue-500
"

>

{item.company}

</p>


</div>


</div>





<span

className="
rounded-full
border
border-blue-500/20
bg-blue-500/10
px-3
py-1
text-xs
font-medium
text-blue-500
"

>

{item.duration}

</span>


</div>






<p

className="
mt-6
leading-relaxed
text-[rgb(var(--muted))]
"

>

{item.desc}

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
item.stack.map(skill=>(


<span

key={skill}

className="
rounded-full
border
border-white/10
bg-white/5
px-3
py-1.5
text-xs
text-[rgb(var(--muted))]
transition

hover:border-blue-500/40
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






</motion.div>


)


})

}



</div>



</div>



</section>

)

}


export default Experience;