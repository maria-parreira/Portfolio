// src/components/About/AboutText.tsx
import React from "react";
import { useInView } from "react-intersection-observer";

const AboutText: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <div
      ref={ref}
      className={`mt-8 md:mt-16 text-center md:text-left transform transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      } max-w-4xl mx-auto`}
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 transition-transform transform hover:scale-105 hover:text-blue-300">
        Who am I?
      </h2>
      <p className="text-sm text-justify text-gray-700 mb-4">
        I’m Maria Parreira, a software developer based in Porto with roots in
        Évora, Portugal...
      </p>
      {/* Resto do texto igual */}
    </div>
  );
};

export default AboutText;
