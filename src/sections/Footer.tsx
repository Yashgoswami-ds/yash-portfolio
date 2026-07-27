import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import {
  ArrowUp,
} from "lucide-react";


const Footer = () => {


  const links = [
    {
      name:"Home",
      href:"#home"
    },
    {
      name:"About",
      href:"#about"
    },
    {
      name:"Projects",
      href:"#projects"
    },
    {
      name:"Experience",
      href:"#experience"
    },
    {
      name:"Contact",
      href:"#contact"
    },
  ];


return (


<footer

className="
relative
overflow-hidden

border-t
border-[rgb(var(--border)/0.15)]

bg-[rgb(var(--background))]

px-6
py-12

"


>


{/* Glow */}

<div

className="
absolute
bottom-0
left-1/2

h-[300px]
w-[300px]

-translate-x-1/2

rounded-full

bg-blue-500/10

blur-[120px]

"

/>





<div

className="
relative
mx-auto
max-w-7xl

"

>


<div

className="
grid

gap-10

md:grid-cols-3

items-center

"

>



{/* Logo */}

<motion.div

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<h2

className="
text-3xl
font-black

text-[rgb(var(--foreground))]

"

>

Yash

<span className="text-blue-500">
.
</span>


</h2>



<p

className="
mt-2

text-sm

text-[rgb(var(--muted))]

"

>

Backend Engineer • Java • AI

</p>


</motion.div>







{/* Links */}

<div

className="
flex

flex-wrap

justify-center

gap-6

text-sm

"

>


{
links.map((link)=>(


<a

key={link.name}

href={link.href}

className="
text-[rgb(var(--muted))]

transition

hover:text-blue-500

hover:-translate-y-1

"

>

{link.name}

</a>


))
}


</div>









{/* Social */}

<div

className="
flex

justify-center

md:justify-end

gap-4

"

>



<a

href="https://github.com/Yashgoswami-ds"

target="_blank"

rel="noreferrer"

className="
flex

h-11
w-11

items-center
justify-center

rounded-full

border

border-[rgb(var(--border)/0.2)]

bg-[rgb(var(--surface)/0.5)]

text-[rgb(var(--foreground))]

backdrop-blur-xl

transition

hover:-translate-y-1

hover:border-blue-500

hover:text-blue-500

"

>

<FaGithub size={21}/>

</a>






<a
href="https://in.linkedin.com/in/yash-goswami-99374a278"
target="_blank"

rel="noreferrer"

className="
flex

h-11
w-11

items-center
justify-center

rounded-full

border

border-[rgb(var(--border)/0.2)]

bg-[rgb(var(--surface)/0.5)]

text-[rgb(var(--foreground))]

backdrop-blur-xl

transition

hover:-translate-y-1

hover:border-blue-500

hover:text-blue-500

"

>

<FaLinkedin size={21}/>

</a>



</div>



</div>







{/* Bottom */}

<div

className="
mt-10

flex

flex-col

items-center

justify-between

gap-4

border-t

border-[rgb(var(--border)/0.15)]

pt-6

text-sm

text-[rgb(var(--muted))]

md:flex-row

"

>


<p>

© {new Date().getFullYear()} Yash Goswami. All rights reserved.

</p>



<a

href="#home"

className="
group

flex

items-center

gap-2

transition

hover:text-blue-500

"

>

Back to top

<ArrowUp

size={16}

className="
transition

group-hover:-translate-y-1

"

/>


</a>



</div>



</div>


</footer>


)

}


export default Footer;