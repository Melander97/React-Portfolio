import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <section className="bg-gray-800 h-screen">
        <Navbar />
        <div>
          <h1 className="text-4xl text-yellow-300 font-semibold pt-8 ">
            Alexander Melander
          </h1>
        </div>
      </section>
    </>
  );
}

export default App;
