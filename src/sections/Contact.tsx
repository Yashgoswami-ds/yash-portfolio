import { motion } from "framer-motion";

import {
  ArrowRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import { useState } from "react";

import { sendContactMessage } from "../services/contactService";

import contactBg from "../assets/contact.png";


const Contact = () => {


const [formData,setFormData] = useState({

name:"",
email:"",
message:""

});



const handleChange = (
e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};




const handleSubmit = async(
e:React.FormEvent
)=>{

e.preventDefault();


try{


await sendContactMessage(formData);


alert("Message sent successfully");


setFormData({

name:"",
email:"",
message:""

});


}

catch(error){

console.log(error);

alert("Failed to send message");

}


};




return (


<section

id="contact"

className="
relative
min-h-screen
overflow-hidden
bg-[rgb(var(--background))]
px-6
pt-24
pb-32
"

>



<motion.img

src={contactBg}

alt="contact"

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

opacity-60

dark:opacity-80

pointer-events-none

"

/>





<div

className="
absolute
inset-0

bg-gradient-to-r

from-[rgb(var(--background))/0.70]

via-[rgb(var(--background))/0.40]

to-transparent

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
z-10

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

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
w-full

max-w-3xl

text-center

lg:text-right

"

>




<p

className="
text-sm

uppercase

tracking-[0.45em]

text-blue-500

"

>

Contact

</p>





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

Let's Build


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

Something Great

</span>


</h2>





<p

className="
mt-6

ml-auto

max-w-xl

text-lg

leading-relaxed

text-[rgb(var(--muted))]

"

>

Open for software engineering opportunities,
backend projects and AI based collaborations.

</p>





<div

className="
mt-10

flex

justify-center

gap-8

lg:justify-end

"

>


<a

href="https://github.com/Yashgoswami-ds"

target="_blank"

rel="noreferrer"

className="
flex

h-12

w-12

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

<FaGithub size={22}/>

</a>




<a

href="https://in.linkedin.com/in/yash-goswami-99374a278"
target="_blank"

rel="noreferrer"

className="
flex

h-12

w-12

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

<FaLinkedin size={22}/>

</a>


</div>
{/* FORM */}


<motion.form

onSubmit={handleSubmit}

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
mt-15
max-w-md
ml-auto
rounded-[28px]
border
border-[rgb(var(--border)/0.2)]
bg-[rgb(var(--surface)/0.55)]
p-6
text-left
backdrop-blur-2xl
shadow-[0_25px_60px_rgba(0,0,0,.25)]
"

>


<h3 className="text-3xl font-bold text-blue-500">
  Send{" "}
  <span className="text-[rgb(var(--foreground))]">
    Message
  </span>
</h3>




<p

className="
mt-2

 text-blue-500

"

>

Let's discuss your next idea.

</p>







<div

className="
mt-8

space-y-5

"

>





<input

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Your Name"

className="
w-full

rounded-2xl

border

border-[rgb(var(--border)/0.2)]

bg-[rgb(var(--background)/0.65)]

px-5

py-4

text-[rgb(var(--foreground))]

placeholder:text-[rgb(var(--muted))]

outline-none

transition

focus:border-blue-500

focus:ring-2

focus:ring-blue-500/20

"

/>








<input

name="email"

value={formData.email}

onChange={handleChange}

type="email"

placeholder="Email Address"

className="
w-full

rounded-2xl

border

border-[rgb(var(--border)/0.2)]

bg-[rgb(var(--background)/0.65)]

px-5

py-4

text-[rgb(var(--foreground))]

placeholder:text-[rgb(var(--muted))]

outline-none

transition

focus:border-blue-500

focus:ring-2

focus:ring-blue-500/20

"

/>










<textarea

name="message"

value={formData.message}

onChange={handleChange}

rows={5}

placeholder="Your Message"

className="
w-full

resize-none

rounded-2xl

border

border-[rgb(var(--border)/0.2)]

bg-[rgb(var(--background)/0.65)]

px-5

py-4

text-[rgb(var(--foreground))]

placeholder:text-[rgb(var(--muted))]

outline-none

transition

focus:border-blue-500

focus:ring-2

focus:ring-blue-500/20

"

/>









<button

type="submit"

className="
group

flex

w-full

items-center

justify-center

gap-3

rounded-2xl

bg-gradient-to-r

from-blue-600

to-cyan-500

py-4

font-semibold

text-white

transition

hover:-translate-y-1

hover:shadow-[0_0_40px_rgba(59,130,246,.45)]

"

>


Send Message



<ArrowRight

size={18}

className="
transition

group-hover:translate-x-1

"

/>


</button>








</div>






</motion.form>







</motion.div>






</div>




</section>


)

}


export default Contact;