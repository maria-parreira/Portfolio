// src/sections/About.tsx

import AboutGallery from "../components/about/AboutGallery";
import AboutText from "../components/about/AboutText";

const About: React.FC = () => {
  return (
    <section id="Aboutme" className="py-20 font-serif">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
          About me
        </h2>
        {/* Linha separadora */}
        <div className="w-24 h-1 bg-stone-200 mx-auto mb-12 rounded-full" />

        <div className="flex flex-col items-center justify-center space-y-8">
          <AboutGallery />
          <AboutText />
        </div>
      </div>
    </section>
  );
};

export default About;
