// src/sections/About.tsx

import AboutGallery from "../components/about/AboutGallery";
import AboutText from "../components/about/AboutText";

const About: React.FC = () => {
  return (
    <section id="Aboutme" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <AboutGallery />
        </div>
        <AboutText />
      </div>
    </section>
  );
};

export default About;
