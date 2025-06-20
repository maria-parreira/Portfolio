import React from "react";
import { useInView } from "react-intersection-observer";
import { educationList } from "../data/education";
import EducationCard from "../components/education/EducationCard";

const Education: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      id="Education"
      className={`py-40 transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 hover:scale-105 hover:text-pink-400 transition-transform">
          My Journey
        </h2>

        <div ref={ref} className="flex flex-col items-center space-y-8">
          {educationList.map((edu, index) => (
            <EducationCard key={index} edu={edu} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
