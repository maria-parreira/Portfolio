// src/components/About/AboutText.tsx

import React from "react";
import { useInView } from "react-intersection-observer";

const AboutText: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <div
      ref={ref}
      className={`w-full md:w-[100%] mt-8 md:mt-0 text-center md:text-left transform transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      } px-4`}
    >
      <p className="text-base md:text-lg text-center text-gray-700 leading-relaxed mb-4">
        I’m Maria Parreira, a software developer based in Porto with roots in
        Évora, Portugal. My journey into development is grounded in curiosity,
        problem-solving, and a love for building meaningful digital experiences.
      </p>
      <p className="text-base md:text-lg text-center text-gray-700 leading-relaxed">
        Whether I’m working with Java, React, or Kubernetes, I always focus on
        clean code, collaboration, and continuous learning. When I’m not coding,
        I enjoy painting, walking by the ocean, and spending time with my dogs.
      </p>
    </div>
  );
};

export default AboutText;
