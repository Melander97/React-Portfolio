import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portrait from "./assets/images/portrait.jpg";
import Tech from "./components/Tech";

function App() {
  const heroData = {
    title: "Alexander Melander",
    description:
      "Hi, I'm a web developer passionate about building awesome projects.",
    Portrait,
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
      </main>

      <Footer id="contact" />
    </>
  );
}

export default App;
