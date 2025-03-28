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
      <section className="bg-linear-to-b from-gray-800 via-blue-800 to-gray-900 min-h-screen">
        <Hero {...heroData} />

        <Tech />
      </section>
      <Footer />
    </>
  );
}

export default App;
