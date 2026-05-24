import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portrait from "./assets/images/portrait-optimized.webp";
import PortraitFallback from "./assets/images/portrait-fallback.jpg";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const heroData = {
    title: "Alexander",
    titleTwo: "Melander",
    description:
      "Hi, I'm Alex Melander — a full-stack dev from Sweden. I build React frontends, headless WordPress sites, and experiment with bots and trading scripts on the side.",
    Portrait,
    PortraitFallback,
  };

  return (
    <>
      <Navbar />
      <main>
        {/* hero section */}
        <section
          id="home"
          className=" bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 "
        >
          <Hero {...heroData} />
        </section>

        {/* about section */}
        <section id="about">
          <About />
        </section>

        {/*tech stack section */}
        <section id="tech">
          <Tech />
        </section>

        {/* projects section */}
        <section id="projects" className="min-h-[80vh] bg-gray-900">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
