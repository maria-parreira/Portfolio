// src/sections/About.tsx

import AboutGallery from "../components/about/AboutGallery";
import AboutText from "../assets/projects/AboutText";

const About: React.FC = () => {
  return (
    <section id="Aboutme" className="py-210">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-xl font-bold mb-6 text-gray-800 text-center">
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
