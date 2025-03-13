import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <section className="bg-gray-800 h-screen">
        <Navbar />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-yellow-300 font-extrabold pt-8 text-center">
            Alexander Melander
          </h1>
          <h2 className="pt-2 text-center text-white max-w-[500px] text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            iste vel asperiores inventore sit omnis?
          </h2>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
