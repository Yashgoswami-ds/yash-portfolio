import { motion } from "framer-motion";
import {
  Trophy,
  Code2,
  Users,
  GitBranch,
  Sparkles,
} from "lucide-react";


const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Runner-up",
    desc: "Led teams across national and college-level hackathons, building innovative AI/ML based solutions.",
  },

  {
    icon: Users,
    title: "Smart India Hackathon",
    desc: "Developing a Real-Time Public Transport Tracking System focused on improving transportation solutions.",
  },

  {
    icon: Code2,
    title: "300+ DSA Problems",
    desc: "Solved algorithmic problems across LeetCode and GeeksforGeeks with strong problem solving skills.",
  },

  {
    icon: GitBranch,
    title: "Open Source Contributor",
    desc: "Contributing to real-world open source projects and exploring large scale engineering practices.",
  },
];



const Achievements = () => {


return (

<section

id="achievements"

className="
relative
overflow-hidden
bg-[rgb(var(--background))]
px-6
py-28
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

bg-blue-500/20

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





<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

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

Achievements

</div>






<h2

className="
mt-6

text-5xl

font-black

leading-tight

text-[rgb(var(--foreground))]

md:text-7xl

"

>

Milestones

<span

className="
block

bg-gradient-to-r

from-blue-500

via-cyan-400

to-purple-500

bg-clip-text

text-transparent

"

>

& Achievements

</span>


</h2>






<p

className="
mt-6

max-w-2xl

text-lg

leading-relaxed

text-[rgb(var(--muted))]

"

>

A journey of learning, competitions and
building impactful technology solutions.

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

bg-blue-500/30

md:block

"

/>





<div

className="
space-y-16

"

>


{
achievements.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div


key={item.title}


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index*0.15
}}


viewport={{
once:true
}}



className="
relative

md:flex

md:items-center

"

>


{/* Dot */}

<div

className="
absolute

left-1/2

top-10

hidden

h-5

w-5

-translate-x-1/2

rounded-full

border-4

border-[rgb(var(--background))]

bg-blue-500

shadow-[0_0_25px_#3b82f6]

md:block

"

/>





{/* LEFT */}

<div

className={`
w-full

md:w-1/2

${
index%2===0
?
"md:pr-12"
:
"md:ml-auto md:pl-12"
}

`}

>


<div

className="
group

rounded-[30px]

border

border-[rgb(var(--border)/0.2)]

bg-[rgb(var(--surface)/0.45)]

p-8

backdrop-blur-xl

transition

hover:-translate-y-2

hover:border-blue-500/50

hover:shadow-[0_25px_70px_rgba(59,130,246,.18)]

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
rounded-2xl

bg-blue-500/10

p-4

text-blue-500

transition

group-hover:scale-110

"

>

<Icon size={28}/>

</div>





<h3

className="
text-2xl

font-bold

text-[rgb(var(--foreground))]

"

>

{item.title}

</h3>



</div>







<p

className="
mt-5

leading-relaxed

text-[rgb(var(--muted))]

"

>

{item.desc}

</p>





</div>



</div>





</motion.div>

)

})

}



</div>


</div>



</div>


</section>


)

}


export default Achievements;