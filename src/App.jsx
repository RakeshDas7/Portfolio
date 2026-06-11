import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Journey from "./components/Journey/Journey";
import Stats from "./components/Stats/Stats";
import Reveal from "./components/Reveal/Reveal";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="background">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Journey />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />
    </>
  );
}

export default App;
