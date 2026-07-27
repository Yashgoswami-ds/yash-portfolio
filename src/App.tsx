import MainLayout from "./components/layout/MainLayout";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Journey from "./sections/Journey";
import Achievements from "./sections/Achievements";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId =
      location.pathname === "/" || location.pathname === "/home"
        ? "home"
        : location.pathname.slice(1);

    const target = document.getElementById(sectionId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
};


function App() {

  return (

    <MainLayout>
      <ScrollToSection />
<Hero />
<About />
<Skills />
<Journey />
<Projects />
<Experience />
<Achievements />
<Contact />
<Footer />
    </MainLayout>

  );
}


export default App;