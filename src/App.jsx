import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portrait from "./assets/images/portrait.jpg";

function App() {
  const heroData = {
    title: "Alexander Melander",
    description:
      "Hi, I'm a web developer passionate about building awesome projects.",
    Portrait,
  };

  return (
    <>
      <section className="bg-gray-800 h-screen">
        <Navbar />

        <Hero {...heroData} />
      </section>

      <Footer />
    </>
  );
}

export default App;
