import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portrait from "./assets/images/portrait-optimized.webp";
import PortraitFallback from "./assets/images/portrait-fallback.jpg";
import Tech from "./components/Tech";
import Projects from "./components/Projects";

function App() {
  const heroData = {
    title: "Alexander Melander",
    description:
      "Hi, I'm a web developer from Sweden passionate about building awesome projects.",
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
          className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 "
        >
          <Hero {...heroData} />
        </section>

        {/*tech stack section */}
        <section id="tech">
          <Tech />
        </section>

        {/* projects section */}
        <section id="projects" className="min-h-[80vh] bg-gray-900">
          <Projects />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
