import React from "react";
import { experiences } from "../data/experience";
import ExperienceCard from "../components/Journey/ExperienceCard";

const Experience: React.FC = () => {
  return (
    <section id="Experience" className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
