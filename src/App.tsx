import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Footer from "./sections/Footer";
import Introduction from "./sections/Introduction";
import "./index.css";
import bgImage from "./assets/bgimage.png";

const App: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <main className="container mx-auto p-4 bg-white bg-opacity-80">
        <Introduction />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default App;
