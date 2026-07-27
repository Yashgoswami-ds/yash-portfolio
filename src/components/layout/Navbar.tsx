import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { useState } from "react";


const Navbar = () => {


  const [open,setOpen] = useState(false);

  const {theme,setTheme}=useTheme();

  const currentTheme = theme ?? "dark";



  const navItems = [
    {
      label:"Home",
      path:"/home"
    },
    {
      label:"About",
      path:"/about"
    },
    {
      label:"Skills",
      path:"/skills"
    },
    {
      label:"Projects",
      path:"/projects"
    },
    {
      label:"Experience",
      path:"/experience"
    },
    {
      label:"Contact",
      path:"/contact"
    }
  ];



return (

<motion.nav

initial={{
y:-100
}}

animate={{
y:0
}}

transition={{
duration:.5
}}

className="
fixed
top-0
left-0
z-50
w-full

border-b
border-[rgb(var(--border)/0.15)]

bg-[rgb(var(--background)/0.75)]

backdrop-blur-xl

"

>


<div

className="
mx-auto
flex
max-w-7xl
items-center
justify-between

px-6
py-4

"

>



{/* Logo */}


<Link

to="/home"

className="
text-2xl
font-black

text-[rgb(var(--foreground))]

"

>

Yash

<span className="text-blue-500">
.
</span>


</Link>









{/* Desktop Menu */}


<div

className="
hidden
items-center
gap-8

md:flex

"

>


{

navItems.map((item)=>(


<Link

key={item.label}

to={item.path}

className="
text-sm
font-medium

text-[rgb(var(--foreground)/0.7)]

transition

hover:text-blue-500

"

>

{item.label}


</Link>


))

}






<button

onClick={()=>setTheme(
currentTheme==="dark"
?
"light"
:
"dark"
)}

className="
rounded-full

border

border-[rgb(var(--border)/0.2)]

p-2

text-[rgb(var(--foreground))]

transition

hover:border-blue-500

hover:text-blue-500

"

>


{

currentTheme==="dark"

?

<Sun size={18}/>

:

<Moon size={18}/>

}


</button>





</div>









{/* Mobile Button */}


<button

onClick={()=>setOpen(!open)}

className="
text-[rgb(var(--foreground))]

md:hidden

"

>

{

open

?

<X size={26}/>

:

<Menu size={26}/>

}


</button>




</div>









{/* Mobile Menu */}



{

open && (


<motion.div


initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

className="
flex
flex-col

gap-5

border-t

border-[rgb(var(--border)/0.15)]

bg-[rgb(var(--background))]

px-6

py-6

md:hidden

"

>


{

navItems.map((item)=>(


<Link

key={item.label}

to={item.path}

onClick={()=>setOpen(false)}

className="
text-sm
font-medium

text-[rgb(var(--foreground)/0.75)]

transition

hover:text-blue-500

"

>

{item.label}


</Link>


))

}





<button

onClick={()=>setTheme(
currentTheme==="dark"
?
"light"
:
"dark"
)}

className="
flex
w-fit
items-center
gap-2

rounded-full

border

border-[rgb(var(--border)/0.2)]

px-4
py-2

text-[rgb(var(--foreground))]

"

>

{

currentTheme==="dark"

?

<>

<Sun size={18}/>
Light

</>

:

<>

<Moon size={18}/>
Dark

</>

}


</button>





</motion.div>


)

}



</motion.nav>


)

}


export default Navbar;