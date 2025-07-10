// src/sections/About.tsx

import AboutGallery from "../components/about/AboutGallery";
import AboutText from "../components/about/AboutText";

const About: React.FC = () => {
  return (
    <section id="Aboutme" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Who am I?
        </h2>
        {/* Sempre coluna, sem flex-row */}
        <div className="flex flex-col items-center justify-center space-y-8">
          <AboutGallery />
          <AboutText />
        </div>
      </div>
    </section>
  );
};

export default About;
