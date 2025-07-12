// src/sections/Journey.tsx

import React from "react";
import { useInView } from "react-intersection-observer";
import { educationList } from "../data/education";
import { experiences } from "../data/experience";
import EducationCard from "../components/education/EducationCard";
import ExperienceCard from "../components/experience/ExperienceCard";

const Journey: React.FC = () => {
  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="Journey" className="py-20 font-serif">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
          My Journey
        </h2>
        {/* Linha separadora */}
        <div className="w-25 h-0.5 bg-rose-200 mx-auto mb-12 rounded-full" />
        {/* Experiência */}
        <div
          ref={experienceRef}
          className={`flex flex-col items-center space-y-12 mt-12 transition-opacity duration-1000 ${
            experienceInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              experience={exp}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
        {/* Educação */}
        <div
          ref={educationRef}
          className={`flex flex-col items-center space-y-12 mt-12 transition-opacity duration-1000 ${
            educationInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {educationList.map((edu, index) => (
            <EducationCard key={index} edu={edu} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
