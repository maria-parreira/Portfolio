import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Journey from "./sections/Journey";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Resume from "./sections/Contacts";
import Footer from "./sections/Footer";
import "./index.css";

const App: React.FC = () => {
  return (
    <div
      className="font-bold font-serif bg-cover bg-center bg-no-repeat bg-fixed bg-rose-200"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <main className="font-bold font-serif container mx-auto p-4 bg-white bg-opacity-50">
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default App;
